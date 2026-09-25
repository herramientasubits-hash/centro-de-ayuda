/**
 * Enmascarado de datos reales para las capturas de producción.
 *
 * La cuenta de prueba de producción trae nombres, correos y teléfonos de
 * personas de verdad. Antes de cada captura, `applyMask` recorre el texto de la
 * página y cambia:
 *   - todo correo por `correo@ejemplo.com`;
 *   - todo teléfono por `+57 300 000 0000`;
 *   - lo que diga `.mask.local.json` (`replace`): nombres de personas y de la
 *     barbería → nombres de ejemplo. Ese archivo NO se sube al repo.
 * Además difumina los selectores que la receta pida en `blur`.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
export const MASK_FILE = path.join(ROOT, ".mask.local.json");

export function loadMaskConfig() {
  if (!fs.existsSync(MASK_FILE)) return null;
  const config = JSON.parse(fs.readFileSync(MASK_FILE, "utf8"));
  return { replace: config.replace ?? {}, blur: config.blur ?? [] };
}

/** Corre dentro de la página; se vuelve a aplicar cuando el DOM cambia. */
function browserMask({ replace, blur }) {
  const EMAIL = /[\w.+-]+@[\w-]+\.[\w.-]+/g;
  const PHONE = /\+?\d[\d\s*().-]{7,}\d/g;
  const entries = Object.entries(replace).sort((a, b) => b[0].length - a[0].length);
  const cleanText = (value) => {
    let out = value.replace(EMAIL, "correo@ejemplo.com").replace(PHONE, (match) => (/\d{4,}|\*{3,}/.test(match) ? "+57 300 000 0000" : match));
    for (const [from, to] of entries) out = out.split(from).join(to).split(from.toLowerCase()).join(to);
    return out;
  };
  const walk = () => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    for (let node = walker.nextNode(); node; node = walker.nextNode()) {
      const next = cleanText(node.nodeValue ?? "");
      if (next !== node.nodeValue) node.nodeValue = next;
    }
    for (const input of document.querySelectorAll("input, textarea")) {
      const next = cleanText(input.value ?? "");
      if (next !== input.value) input.value = next;
    }
    for (const selector of blur) for (const el of document.querySelectorAll(selector)) el.style.filter = "blur(6px)";
  };
  walk();
  new MutationObserver(walk).observe(document.body, { childList: true, subtree: true, characterData: true });
}

export async function applyMask(page, config, extraBlur = []) {
  await page.evaluate(browserMask, { replace: config.replace, blur: [...config.blur, ...extraBlur] });
  await page.waitForTimeout(200);
}
