#!/usr/bin/env node
/**
 * Regenera las capturas de `screenshots.json`.
 *
 *   source: "produccion"  → https://dash.barberlytics.com. Con `"public": true`
 *                            son pantallas de antes de entrar (login, recuperar
 *                            número, contacto): no piden sesión ni enmascarado.
 *                            Sin `public`, usan la sesión de `npm run shots:login`
 *                            y salen con los datos enmascarados.
 *   source: "app"         → la app de Thema en local (HELP_APP_URL).
 *
 *   npm run shots:login                 (una vez: inicias sesión tú)
 *   npm run shots                       todas
 *   npm run shots -- acceso-y-cuenta    solo las claves que empiecen así
 *
 * Las capturas de producción se niegan a salir si falta `.mask.local.json`
 * (ver `.mask.example.json`): en producción hay personas reales.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "@playwright/test";
import { applyMask, loadMaskConfig } from "./lib/mask.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const APP_URL = (process.env.HELP_APP_URL ?? "http://localhost:5197").replace(/\/+$/, "");
const PROD_URL = (process.env.HELP_PROD_URL ?? "https://dash.barberlytics.com").replace(/\/+$/, "");
const AUTH_FILE = path.join(ROOT, ".auth", "prod.json");
const LOCALE = "es";
const args = process.argv.slice(2);
const noMask = args.includes("--no-mask");
const filter = args.filter((arg) => !arg.startsWith("-"));

const VIEWPORTS = { desktop: { width: 1280, height: 800 }, mobile: { width: 390, height: 844 } };
const CLIP_PADDING = 16;

/** Los tres botones desplegables de la cabecera de producción, en orden. */
const headerToggle = (page, index) => page.locator(".actions-dashboard > div.dropdown").nth(index).locator("button.dropdown-toggle");

async function prodPage(page, recipe) {
  await page.goto(`${PROD_URL}${recipe.route}`);
  await page.locator(".actions-dashboard").waitFor();
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(1200);
}

/**
 * Pantalla pública de producción con pasos opcionales (`steps` en la receta):
 *   { "click": "selector" } · { "clickText": "Texto del botón" }
 *   { "fill": ["selector", "valor"] } · { "wait": 500 }
 * Solo se escribe texto de ejemplo que falla la validación del navegador;
 * nunca un celular, un código ni un correo reales.
 */
async function publicPage(page, recipe) {
  await page.goto(`${PROD_URL}${recipe.route}`, { waitUntil: "networkidle" });
  await page.locator(".section-login").waitFor();
  await page.waitForTimeout(900);
  for (const step of recipe.steps ?? []) {
    if (step.click) await page.locator(step.click).first().click();
    else if (step.clickText) await page.getByText(step.clickText, { exact: true }).first().click();
    else if (step.fill) await page.locator(step.fill[0]).first().fill(step.fill[1]);
    await page.waitForTimeout(step.wait ?? 500);
  }
}

/** Cada estado deja la pantalla lista para la captura. */
const STATES = {
  "pub-page": publicPage,
  "app-page": async (page, recipe) => {
    await page.goto(`${APP_URL}${recipe.route}`);
    await page.getByRole("main").waitFor();
  },
  "prod-page": prodPage,
  "prod-branch-menu": async (page, recipe) => {
    await prodPage(page, recipe);
    await headerToggle(page, 0).click();
    await page.locator(".dropdown-menu.show").waitFor();
  },
  "prod-language-menu": async (page, recipe) => {
    await prodPage(page, recipe);
    await headerToggle(page, 1).click();
    await page.locator(".dropdown-menu.show").waitFor();
  },
  "prod-account-menu": async (page, recipe) => {
    await prodPage(page, recipe);
    await headerToggle(page, 2).click();
    await page.locator(".dropdown-menu.show").waitFor();
  },
  "prod-notifications": async (page, recipe) => {
    await prodPage(page, recipe);
    await page.locator(".actions-dashboard > .MuiBadge-root").nth(1).click();
    await page.getByText("Notificaciones", { exact: true }).first().waitFor();
    await page.waitForTimeout(800);
  },
};

async function highlight(page, selector) {
  await page.addStyleTag({
    content: `[data-help-highlight]{outline:3px solid #0C5BEF !important;outline-offset:3px;border-radius:8px;box-shadow:0 0 0 6px rgba(12,91,239,.18)!important}`,
  });
  const locator = page.locator(selector);
  if ((await locator.count()) === 0) throw new Error(`no encontré nada que resaltar con «${selector}»`);
  await locator.first().evaluate((el) => el.setAttribute("data-help-highlight", ""));
}

async function shoot(browser, key, recipe, theme, mask) {
  const isProd = recipe.source === "produccion" && !recipe.public;
  const viewport = VIEWPORTS[recipe.viewport ?? "desktop"];
  const context = await browser.newContext({
    viewport,
    locale: "es-CO",
    colorScheme: theme,
    deviceScaleFactor: 2,
    reducedMotion: "reduce",
    ...(isProd ? { storageState: AUTH_FILE } : {}),
  });
  const page = await context.newPage();
  try {
    if (!isProd) {
      await page.addInitScript((mode) => window.localStorage.setItem("thema-theme", JSON.stringify({ mode })), theme);
    }
    const state = STATES[recipe.state];
    if (!state) throw new Error(`estado desconocido «${recipe.state}»`);
    await state(page, recipe);
    if (isProd && mask) await applyMask(page, mask, recipe.blur);
    if (recipe.highlight) await highlight(page, recipe.highlight);
    const suffix = recipe.theme === "both" && theme === "dark" ? "-oscuro" : "";
    const target = path.join(ROOT, "assets", LOCALE, `${key}${suffix}.png`);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    if (recipe.clip) {
      const box = await page.locator(recipe.clip).first().boundingBox();
      if (!box) throw new Error(`no encontré «${recipe.clip}» para recortar`);
      const clip = {
        x: Math.max(0, box.x - CLIP_PADDING),
        y: Math.max(0, box.y - CLIP_PADDING),
        width: Math.min(viewport.width, box.width + CLIP_PADDING * 2),
        height: box.height + CLIP_PADDING * 2,
      };
      await page.screenshot({ path: target, clip });
    } else {
      await page.screenshot({ path: target });
    }
    console.log(`✓ ${path.relative(ROOT, target)}`);
  } finally {
    await context.close();
  }
}

const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, "screenshots.json"), "utf8"));
const entries = Object.entries(manifest).filter(([key]) => key !== "$comment" && (!filter.length || filter.some((prefix) => key.startsWith(prefix))));
if (!entries.length) {
  console.error("Ninguna receta coincide.");
  process.exit(1);
}

const needsProd = entries.some(([, recipe]) => recipe.source === "produccion" && !recipe.public);
let mask = null;
if (needsProd) {
  if (!fs.existsSync(AUTH_FILE)) {
    console.error("Falta la sesión de producción. Corre primero: npm run shots:login");
    process.exit(1);
  }
  mask = noMask ? null : loadMaskConfig();
  if (!mask && !noMask) {
    console.error("Falta .mask.local.json (ver .mask.example.json). En producción hay datos de personas reales: sin enmascarado no se toman capturas. Para saltarlo a propósito: --no-mask");
    process.exit(1);
  }
}

const browser = await chromium.launch();
let failures = 0;
for (const [key, recipe] of entries) {
  const themes = recipe.theme === "both" ? ["light", "dark"] : [recipe.theme ?? "light"];
  for (const theme of themes) {
    try {
      await shoot(browser, key, recipe, theme, mask);
    } catch (error) {
      failures += 1;
      console.error(`✖ ${key} (${theme}): ${error.message.split("\n")[0]}`);
    }
  }
}
await browser.close();
if (failures) {
  console.error(`\n${failures} captura(s) fallaron.`);
  process.exit(1);
}
