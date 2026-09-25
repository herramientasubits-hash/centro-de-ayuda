#!/usr/bin/env node
/**
 * Un paso sobre la ventana abierta por `booking-browser.mjs` (control remoto :9333):
 *   node scripts/booking-step.mjs [--click "Texto" | --click "sel:.css"]... [--shot nombre] [--html "selector"]
 * Imprime el texto visible de la página tras las acciones. `--shot` guarda una
 * captura enmascarada en assets/es/agendamiento-online/como-reserva-tu-cliente/.
 */
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "@playwright/test";
import { applyMask, loadMaskConfig } from "./lib/mask.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT_DIR = path.join(ROOT, "assets", "es", "agendamiento-online", "como-reserva-tu-cliente");
const args = process.argv.slice(2);
const clicks = args.filter((arg, i) => args[i - 1] === "--click");
const shot = args[args.indexOf("--shot") + 1];
const html = args.includes("--html") ? args[args.indexOf("--html") + 1] : null;
const mask = loadMaskConfig() ?? { replace: {}, blur: [] };
const PHONE = /\+?\d[\d\s().-]{7,}\d/g;

const browser = await chromium.connectOverCDP("http://localhost:9333");
try {
  const page = browser.contexts()[0].pages()[0];
  for (const text of clicks) {
    const [, selector] = text.match(/^sel:(.+)$/) ?? [];
    if (selector) await page.locator(selector).first().click();
    else await page.getByText(text, { exact: true }).locator("visible=true").first().click();
    await page.waitForTimeout(1200);
  }
  if (args.includes("--shot")) {
    await applyMask(page, mask, ["img"]);
    await page.screenshot({ path: path.join(OUT_DIR, `${shot}.png`) });
    console.log(`✓ captura ${shot}.png`);
  }
  if (html) {
    console.log((await page.locator(html).first().evaluate((el) => el.outerHTML)).replace(/></g, ">\n<").slice(0, 6000));
  } else {
    const text = await page.evaluate(() => document.body.innerText);
    console.log(text.replace(PHONE, "+57 300 000 0000").replace(/\n{2,}/g, "\n").trim());
  }
} finally {
  await browser.close().catch(() => {});
}
