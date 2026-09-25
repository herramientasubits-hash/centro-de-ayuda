#!/usr/bin/env node
/**
 * Guarda tu sesión de producción para poder tomar capturas.
 *
 * Abre una ventana de Chromium en https://dash.barberlytics.com/authenticate.
 * TÚ inicias sesión en esa ventana (celular y código); este script nunca ve ni
 * escribe tus credenciales. Cuando llegas al panel, guarda las cookies en
 * `.auth/prod.json` (ignorado por git) y se cierra.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "@playwright/test";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PROD_URL = (process.env.HELP_PROD_URL ?? "https://dash.barberlytics.com").replace(/\/+$/, "");
const AUTH_FILE = path.join(ROOT, ".auth", "prod.json");

const browser = await chromium.launch({ headless: false });
const context = await browser.newContext({ viewport: { width: 1280, height: 800 }, locale: "es-CO" });
const page = await context.newPage();
await page.goto(`${PROD_URL}/authenticate`);
console.log("Inicia sesión en la ventana que se abrió. Tienes 5 minutos.");
await page.waitForURL((url) => !url.pathname.startsWith("/authenticate"), { timeout: 5 * 60_000 });
await page.waitForLoadState("networkidle");
fs.mkdirSync(path.dirname(AUTH_FILE), { recursive: true });
await context.storageState({ path: AUTH_FILE });
await browser.close();
console.log(`✓ Sesión guardada en ${path.relative(ROOT, AUTH_FILE)}. Ya puedes correr npm run shots.`);
