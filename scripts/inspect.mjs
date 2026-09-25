#!/usr/bin/env node
/**
 * Imprime el HTML de un selector en producción, con la sesión guardada:
 *   node scripts/inspect.mjs /ruta ".selector" [--click "Texto"]... [--hover ".sel"] [--text]
 * Sirve para escribir recetas de captura sin adivinar selectores. Con `--text`
 * imprime el texto visible en vez del HTML.
 */
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "@playwright/test";
import { chooseBranch } from "./lib/prod.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PROD_URL = (process.env.HELP_PROD_URL ?? "https://dash.barberlytics.com").replace(/\/+$/, "");
const args = process.argv.slice(2);
const positional = args.filter((arg, i) => !arg.startsWith("--") && args[i - 1] !== "--click" && args[i - 1] !== "--hover");
const [route = "/", selector = "body"] = positional;
const clicks = args.filter((arg, i) => args[i - 1] === "--click");
const hovers = args.filter((arg, i) => args[i - 1] === "--hover");
const asText = args.includes("--text");

const browser = await chromium.launch();
try {
  const context = await browser.newContext({ storageState: path.join(ROOT, ".auth", "prod.json"), viewport: { width: 1280, height: 800 }, locale: "es-CO" });
  const page = await context.newPage();
  await page.goto(`${PROD_URL}${route}`);
  // El calendario consulta sin parar: si la red no se calma en 8 s, seguimos.
  await page.waitForLoadState("networkidle", { timeout: 8000 }).catch(() => {});
  await page.waitForTimeout(1500);
  await chooseBranch(page);
  // --click "Texto" pulsa por texto visible; --click "sel:.css" por selector; "sel:.css*5" lo repite 5 veces.
  for (const text of clicks) {
    const [, selector, times] = text.match(/^sel:(.+?)(?:\*(\d+))?$/) ?? [];
    for (let i = 0; i < Number(times ?? 1); i += 1) {
      if (selector) await page.locator(selector).first().click();
      else await page.getByText(text, { exact: true }).locator("visible=true").first().click();
      await page.waitForTimeout(900);
    }
  }
  for (const hover of hovers) {
    await page.locator(hover).first().hover();
    await page.waitForTimeout(900);
  }
  const target = page.locator(selector).first();
  const out = asText
    ? await target.innerText().catch((error) => `ERR ${error.message}`)
    : await target.evaluate((el) => el.outerHTML).catch((error) => `ERR ${error.message}`);
  console.log(asText ? out : out.replace(/<svg[\s\S]*?<\/svg>/g, "<svg/>").replace(/></g, ">\n<").slice(0, 8000));
} finally {
  await browser.close();
}
