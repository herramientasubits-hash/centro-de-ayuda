#!/usr/bin/env node
/**
 * Graba el flujo de reserva online que ve el cliente.
 *
 * Abre una ventana de Chromium en la página pública de reserva. TÚ escribes tu
 * celular y avanzas por los pasos; el guion no escribe nada. Cada vez que la
 * pantalla cambia, guarda su texto en `casos/booking-flow.md` y una captura
 * enmascarada en `assets/es/calendario/reservas-online-como-las-ve-tu-cliente/`.
 * Ciérrala tú cuando termines (o antes de confirmar, si no quieres crear la cita).
 *
 *   node scripts/booking-walk.mjs "https://fd.barberlytics.com/book/…"
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "@playwright/test";
import { applyMask, loadMaskConfig } from "./lib/mask.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const url = process.argv[2];
if (!url) {
  console.error("Falta la URL de reserva.");
  process.exit(1);
}
const OUT_DIR = path.join(ROOT, "assets", "es", "calendario", "reservas-online-como-las-ve-tu-cliente");
const NOTES = path.join(ROOT, "casos", "booking-flow.md");
fs.mkdirSync(OUT_DIR, { recursive: true });
const mask = loadMaskConfig() ?? { replace: {}, blur: [] };
const PHONE = /\+?\d[\d\s().-]{7,}\d/g;

const browser = await chromium.launch({ headless: false });
const context = await browser.newContext({ viewport: { width: 1280, height: 900 }, deviceScaleFactor: 2, locale: "es-CO" });
const page = await context.newPage();
await page.goto(url, { waitUntil: "networkidle" });
console.log("Ventana abierta. Escribe tu celular y avanza; cada pantalla nueva se graba sola. Cierra la ventana al terminar.");

const notes = [`# Flujo de reserva online (grabado ${new Date().toISOString().slice(0, 10)})\n`];
let last = "";
let step = 0;
const snapshot = async () => {
  const text = await page.evaluate(() => document.body.innerText).catch(() => null);
  if (text === null || text.trim() === last.trim()) return;
  last = text;
  step += 1;
  await applyMask(page, mask, ["img"]);
  const file = path.join(OUT_DIR, `flujo-${String(step).padStart(2, "0")}.png`);
  await page.screenshot({ path: file }).catch(() => {});
  const clean = text.replace(PHONE, "+57 300 000 0000").replace(/\n{2,}/g, "\n");
  notes.push(`## Pantalla ${step}\n\n\`\`\`\n${clean.trim()}\n\`\`\`\n`);
  fs.writeFileSync(NOTES, notes.join("\n"));
  console.log(`✓ pantalla ${step} → ${path.relative(ROOT, file)}`);
};

try {
  while (!page.isClosed()) {
    await snapshot();
    await page.waitForTimeout(1200);
  }
} catch {
  /* la ventana se cerró */
} finally {
  fs.writeFileSync(NOTES, notes.join("\n"));
  await browser.close().catch(() => {});
  console.log(`✓ ${step} pantallas grabadas en ${path.relative(ROOT, NOTES)}`);
}
