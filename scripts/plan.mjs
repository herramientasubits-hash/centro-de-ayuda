#!/usr/bin/env node
/**
 * Genera PLAN.md: el inventario de `plan/plan.json` cruzado con lo que ya está
 * escrito en `content/es`. Valida que el inventario no tenga ids repetidos ni
 * secciones que no existan y avisa de artículos escritos que no están en el plan.
 *
 *   npm run plan            escribe PLAN.md
 *   npm run plan -- --check solo valida
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const plan = JSON.parse(fs.readFileSync(path.join(ROOT, "plan", "plan.json"), "utf8"));
const sections = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "es", "_sections.json"), "utf8")).sort((a, b) => a.order - b.order);
const intro = fs.readFileSync(path.join(ROOT, "plan", "intro.md"), "utf8");
const checkOnly = process.argv.includes("--check");

const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]));
const written = new Map();
for (const file of walk(path.join(ROOT, "content", "es")).filter((f) => f.endsWith(".md") && !path.basename(f).startsWith("_"))) {
  const { data } = matter(fs.readFileSync(file, "utf8"));
  written.set(data.id, data.status ?? "draft");
}

const errors = [];
const sectionIds = new Set(sections.map((s) => s.id));
const seen = new Set();
for (const item of plan.articulos) {
  if (seen.has(item.id)) errors.push(`id repetido en el plan: ${item.id}`);
  seen.add(item.id);
  if (!sectionIds.has(item.section)) errors.push(`${item.id}: la sección «${item.section}» no está en _sections.json`);
  if (!item.id.startsWith(`${item.section}/`)) errors.push(`${item.id}: no empieza por su sección`);
  if (!plan.tipos[item.type]) errors.push(`${item.id}: tipo desconocido «${item.type}»`);
  for (const need of item.needs) if (!plan.necesita[need]) errors.push(`${item.id}: necesidad desconocida «${need}»`);
}
const orphans = [...written.keys()].filter((id) => !seen.has(id));
if (errors.length) {
  for (const message of errors) console.error(`✖ ${message}`);
  process.exit(1);
}
for (const id of orphans) console.warn(`⚠ escrito pero fuera del plan: ${id}`);

const state = (id) => written.get(id) ?? "pendiente";
const ICON = { pendiente: "○", draft: "◐", review: "◑", published: "●" };
const total = plan.articulos.length;
const count = (predicate) => plan.articulos.filter(predicate).length;
const done = (item) => written.has(item.id);
const pct = (n, d) => (d ? `${Math.round((n / d) * 100)} %` : "—");

const lines = [];
lines.push(`# Plan de documentación de Barberlytics`, "", `> Generado el ${new Date().toISOString().slice(0, 10)} con \`npm run plan\`. **No se edita a mano.**`, "");
lines.push(intro.replace(/^# .*\n+/, "").replace(/^Este archivo se \*\*genera\*\*[\s\S]*?\n\n/m, ""), "");

lines.push("## Estado", "");
lines.push(`**${total} artículos planeados · ${written.size} escritos (${pct(written.size, total)})**`, "");
lines.push("| Estado | Artículos |", "|---|---|");
for (const status of ["pendiente", "draft", "review", "published"]) {
  const n = plan.articulos.filter((item) => state(item.id) === status).length;
  lines.push(`| ${ICON[status]} ${status === "draft" ? "borrador" : status === "review" ? "en revisión" : status === "published" ? "publicado" : "pendiente"} | ${n} |`);
}
lines.push("", "### Por sección", "", "| Sección | Planeados | Escritos | P1 pendientes |", "|---|---|---|---|");
for (const section of sections) {
  const items = plan.articulos.filter((item) => item.section === section.id);
  lines.push(`| ${section.title} | ${items.length} | ${items.filter(done).length} | ${items.filter((i) => i.priority === "P1" && !done(i)).length} |`);
}

lines.push("", "### Por lo que hace falta para escribirlos", "", "| Necesita | Qué implica | Artículos pendientes | De ellos P1 |", "|---|---|---|---|");
for (const [code, label] of Object.entries(plan.necesita)) {
  const items = plan.articulos.filter((item) => item.needs.includes(code) && !done(item));
  lines.push(`| **${code}** | ${label} | ${items.length} | ${items.filter((i) => i.priority === "P1").length} |`);
}
const readable = plan.articulos.filter((item) => !done(item) && item.needs.every((n) => n === "L" || n === "P"));
lines.push("", `**Se pueden escribir ya, solo leyendo producción:** ${readable.length} artículos (${readable.filter((i) => i.priority === "P1").length} de prioridad P1).`);

lines.push("", "## Reglas por confirmar con el equipo (D)", "", "Cada línea es un artículo cuya regla la pantalla no explica. Se agrupan para llevarlas juntas a producto.", "");
for (const section of sections) {
  const items = plan.articulos.filter((item) => item.needs.includes("D") && item.section === section.id && !done(item));
  if (!items.length) continue;
  lines.push(`**${section.title}**`, "", ...items.map((item) => `- ${item.title}`), "");
}
lines.push("", "## Inventario por sección", "", "Leyenda: ○ pendiente · ◐ borrador · ◑ en revisión · ● publicado. **T:** C concepto · G guía · R referencia · P problema. **Necesita:** ver arriba.", "");
for (const section of sections) {
  const items = plan.articulos.filter((item) => item.section === section.id);
  if (!items.length) continue;
  lines.push(`### ${section.title}`, "", `_${section.description}_`, "", "| | Artículo | T | Prio. | Necesita | Pantallas |", "|---|---|---|---|---|---|");
  for (const item of items) {
    lines.push(`| ${ICON[state(item.id)]} | ${item.title} | ${item.type} | ${item.priority} | ${item.needs.join(" ")} | ${item.screens.map((s) => `\`${s}\``).join(" ")} |`);
  }
  lines.push("");
}

if (checkOnly) {
  console.log(`✓ plan válido: ${total} artículos, ${written.size} escritos.`);
  process.exit(0);
}
fs.writeFileSync(path.join(ROOT, "PLAN.md"), lines.join("\n"));
console.log(`✓ PLAN.md: ${total} planeados, ${written.size} escritos, ${readable.length} se pueden escribir ya.`);
