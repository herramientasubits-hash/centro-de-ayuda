#!/usr/bin/env node
/**
 * Aplica los subgrupos de `scripts/lib/groups.json`:
 *  - en cada artículo escribe `group: "…"` y renumera `order` (10, 20…) en el orden del archivo;
 *  - en `content/es/_sections.json` escribe `groups: [...]` con el orden de los subgrupos.
 * Se corre a mano cuando cambia la agrupación: `npm run groups`.
 * Un artículo nuevo que no esté en groups.json hace fallar `npm run check` si su sección tiene subgrupos.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CONTENT = path.join(ROOT, "content", "es");
const groups = JSON.parse(fs.readFileSync(path.join(ROOT, "scripts", "lib", "groups.json"), "utf8"));
delete groups.$comment;

const setField = (text, key, value) => {
  const line = `${key}: ${value}`;
  const pattern = new RegExp(`^${key}: .*$`, "m");
  if (pattern.test(text)) return text.replace(pattern, line);
  // Si no existe, va justo después de `order:`.
  return text.replace(/^(order: .*)$/m, `$1\n${line}`);
};

let touched = 0;
for (const [section, byGroup] of Object.entries(groups)) {
  let order = 0;
  for (const [group, slugs] of Object.entries(byGroup)) {
    for (const slug of slugs) {
      const file = path.join(CONTENT, section, `${slug}.md`);
      if (!fs.existsSync(file)) throw new Error(`groups.json nombra ${section}/${slug}, que no existe`);
      order += 10;
      const before = fs.readFileSync(file, "utf8");
      const after = setField(setField(before, "order", order), "group", JSON.stringify(group));
      if (after !== before) {
        fs.writeFileSync(file, after);
        touched += 1;
      }
    }
  }
}

const sectionsFile = path.join(CONTENT, "_sections.json");
const sections = JSON.parse(fs.readFileSync(sectionsFile, "utf8")).map((section) => {
  const { groups: _old, ...rest } = section;
  return groups[section.id] ? { ...rest, groups: Object.keys(groups[section.id]) } : rest;
});
fs.writeFileSync(sectionsFile, `${JSON.stringify(sections, null, 2)}\n`);
console.log(`✓ ${touched} artículos actualizados; ${Object.keys(groups).length} secciones con subgrupos.`);
