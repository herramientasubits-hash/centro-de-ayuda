#!/usr/bin/env node
/**
 * Regenera las capturas de `screenshots.json` contra la aplicación corriendo
 * con datos de prueba (`VITE_USE_MOCKS=true`). Cada receta dice a qué ruta ir,
 * en qué estado dejar la pantalla, a qué tamaño y en qué tema tomarla, y qué
 * recortar o resaltar.
 *
 *   npm run shots                       todas
 *   npm run shots -- acceso-y-cuenta    solo las claves que empiecen así
 *   HELP_APP_URL=http://localhost:5195 npm run shots
 *
 * Los estados están abajo, en `STATES`. Añadir una captura de una pantalla
 * nueva es añadir su estado aquí y su receta al manifiesto.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "@playwright/test";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const APP_URL = (process.env.HELP_APP_URL ?? "http://localhost:5197").replace(/\/+$/, "");
const LOCALE = "es";
const filter = process.argv.slice(2).filter((arg) => !arg.startsWith("-"));

const VIEWPORTS = { desktop: { width: 1280, height: 800 }, mobile: { width: 390, height: 844 } };
const CLIP_PADDING = 24;

/** Cuenta de prueba del backend simulado (ver e2e/helpers.ts en la app). */
const DEMO = { phone: "3001234567", code: "246810", wrongCode: "000000" };

async function typeOtp(page, code) {
  await page.getByLabel(/carácter 1 de 6/i).fill(code[0]);
  for (const digit of code.slice(1)) await page.keyboard.type(digit);
}

async function goToCodeStep(page) {
  await page.goto(`${APP_URL}/login`);
  await page.getByTestId("login-phone").fill(DEMO.phone);
  await page.getByTestId("login-submit").click();
  await page.getByLabel(/carácter 1 de 6/i).waitFor();
}

async function failCode(page) {
  await typeOtp(page, DEMO.wrongCode);
  await page.getByRole("alert").waitFor();
}

async function login(page) {
  await goToCodeStep(page);
  await typeOtp(page, DEMO.code);
  await page.waitForURL(/\/dashboard/);
  await page.getByRole("main").waitFor();
}

/** Cada estado deja la pantalla lista para la captura. */
const STATES = {
  "login-phone": async (page) => {
    await page.goto(`${APP_URL}/login`);
    await page.getByTestId("login-phone").waitFor();
  },
  "login-code": async (page) => {
    await goToCodeStep(page);
  },
  "login-code-error": async (page) => {
    await goToCodeStep(page);
    await failCode(page);
  },
  "login-locked": async (page) => {
    await goToCodeStep(page);
    for (let attempt = 0; attempt < 4; attempt += 1) {
      await failCode(page).catch(() => {});
      if (await page.getByText("Bloqueamos el acceso por seguridad").isVisible().catch(() => false)) break;
    }
    await page.getByText("Bloqueamos el acceso por seguridad").waitFor();
  },
  "login-recovery": async (page) => {
    await page.goto(`${APP_URL}/login`);
    await page.getByRole("button", { name: "¿Olvidaste tu número?" }).click();
    await page.getByTestId("recovery-email").waitFor();
  },
  "login-recovery-done": async (page) => {
    await STATES["login-recovery"](page);
    await page.getByTestId("recovery-email").fill("dueno@mibarberia.co");
    await page.getByTestId("recovery-send").click();
    await page.getByText("Revisa tu correo").waitFor();
  },
  "login-signup": async (page) => {
    await page.goto(`${APP_URL}/login`);
    await page.getByTestId("login-signup").click();
    await page.getByTestId("signup-form").waitFor();
  },
  "login-signup-done": async (page) => {
    await STATES["login-signup"](page);
    await page.locator("#signup-first-name").fill("Camila");
    await page.locator("#signup-last-name").fill("Rojas");
    await page.locator("#signup-company").fill("Barbería La 70");
    await page.locator("#signup-email").fill("camila@la70.co");
    await page.locator("#signup-phone").fill(DEMO.phone);
    await page.locator("#signup-barbers").fill("4");
    await page.locator("#signup-country").click();
    await page.getByRole("option", { name: "Colombia" }).click();
    await page.getByTestId("signup-submit").click();
    await page.getByText("Recibimos tu registro").waitFor();
  },
  "login-ticket": async (page) => {
    await STATES["login-locked"](page);
    await page.getByTestId("locked-ticket").click();
    await page.getByText("Contáctanos").waitFor();
  },
  "app-account-menu": async (page) => {
    await login(page);
    await page.getByTestId("shell-avatar").click();
    await page.getByTestId("shell-logout").waitFor();
  },
};

async function highlight(page, selector) {
  await page.addStyleTag({
    content: `[data-help-highlight]{outline:3px solid #0C5BEF !important;outline-offset:4px;border-radius:10px;box-shadow:0 0 0 6px rgba(12,91,239,.18)!important}`,
  });
  const count = await page.locator(selector).count();
  if (count === 0) throw new Error(`no encontré nada que resaltar con «${selector}»`);
  for (let index = 0; index < count; index += 1) await page.locator(selector).nth(index).evaluate((el) => el.setAttribute("data-help-highlight", ""));
}

async function shoot(browser, key, recipe, theme) {
  const viewport = VIEWPORTS[recipe.viewport ?? "desktop"];
  const context = await browser.newContext({ viewport, locale: "es-CO", colorScheme: theme, deviceScaleFactor: 2, reducedMotion: "reduce" });
  const page = await context.newPage();
  try {
    await page.addInitScript((mode) => {
      // El tema lo manda la app; para la captura forzamos el modo pedido.
      window.localStorage.setItem("thema.theme", JSON.stringify({ mode }));
    }, theme);
    const state = STATES[recipe.state];
    if (!state) throw new Error(`estado desconocido «${recipe.state}»`);
    await state(page);
    await page.waitForTimeout(400);
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
      await page.screenshot({ path: target, clip, fullPage: true });
    } else {
      await page.screenshot({ path: target, fullPage: false });
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

const browser = await chromium.launch();
let failures = 0;
for (const [key, recipe] of entries) {
  if (recipe.source && recipe.source !== "app") {
    console.log(`· ${key}: fuente «${recipe.source}», se toma a mano`);
    continue;
  }
  const themes = recipe.theme === "both" ? ["light", "dark"] : [recipe.theme ?? "light"];
  for (const theme of themes) {
    try {
      await shoot(browser, key, recipe, theme);
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
