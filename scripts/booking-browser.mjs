#!/usr/bin/env node
/**
 * Abre una ventana de Chromium en la página de reserva y la deja abierta con
 * control remoto en el puerto 9333, para manejarla paso a paso con
 * `scripts/booking-step.mjs`. TÚ escribes el celular en la ventana; el guion
 * no escribe ni guarda nada. Ciérrala (o Ctrl-C aquí) al terminar.
 *
 *   node scripts/booking-browser.mjs "https://fd.barberlytics.com/book/…"
 */
import { chromium } from "@playwright/test";

const url = process.argv[2];
if (!url) {
  console.error("Falta la URL de reserva.");
  process.exit(1);
}
const browser = await chromium.launch({ headless: false, args: ["--remote-debugging-port=9333"] });
const context = await browser.newContext({ viewport: { width: 1280, height: 900 }, deviceScaleFactor: 2, locale: "es-CO" });
const page = await context.newPage();
await page.goto(url, { waitUntil: "networkidle" });
console.log("Ventana abierta con control remoto en :9333. Escribe tu celular y toca Continuar; el resto se maneja con booking-step.mjs.");
await new Promise((resolve) => browser.on("disconnected", resolve));
console.log("Ventana cerrada.");
