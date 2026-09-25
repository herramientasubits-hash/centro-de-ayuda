#!/usr/bin/env node
/**
 * Convierte `content/<idioma>/**.md` en lo que consumen la app y la IA:
 *
 *   dist/index.json                     secciones, artículos, mapa pantalla → artículos
 *   dist/search.json                    índice de búsqueda (texto plano por artículo)
 *   dist/articles/<seccion>/<id>.md     el cuerpo sin frontmatter
 *   dist/assets/**                      las capturas
 *   dist/llms.txt · dist/llms-full.txt  la base para un agente
 *
 * `--check` valida sin escribir. Cualquier error de contenido (frontmatter
 * incompleto, imagen que no existe, `related` roto) hace fallar el comando.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";
import { extractH1, extractHeadings, extractImages, extractInternalLinks, readingMinutes, toPlainText } from "./lib/markdown.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CONTENT = path.join(ROOT, "content");
const ASSETS = path.join(ROOT, "assets");
const DIST = path.join(ROOT, "dist");
const LOCALE = "es";
const SITE_URL = process.env.HELP_SITE_URL ?? "https://herramientasubits-hash.github.io/centro-de-ayuda";
const APP_URL = process.env.HELP_APP_PUBLIC_URL ?? "https://app.barberlytics.com/ayuda";

const REQUIRED = ["id", "title", "description", "section", "order", "roles", "screens", "keywords", "status", "updated"];
const STATUSES = new Set(["draft", "review", "published"]);
const ROLES = new Set(["owner", "admin", "recepcion", "barbero", "todos"]);

const checkOnly = process.argv.includes("--check");
const errors = [];
const warnings = [];

function fail(file, message) {
  errors.push(`${file}: ${message}`);
}
function warn(file, message) {
  warnings.push(`${file}: ${message}`);
}

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

const localeDir = path.join(CONTENT, LOCALE);
const sections = JSON.parse(fs.readFileSync(path.join(localeDir, "_sections.json"), "utf8")).sort((a, b) => a.order - b.order);
const sectionIds = new Set(sections.map((section) => section.id));

const files = walk(localeDir).filter((file) => file.endsWith(".md") && !path.basename(file).startsWith("_"));
const articles = [];

for (const file of files) {
  const rel = path.relative(localeDir, file).replace(/\\/g, "/");
  const expectedId = rel.replace(/\.md$/, "");
  const { data, content } = matter(fs.readFileSync(file, "utf8"));

  for (const key of REQUIRED) if (data[key] === undefined || data[key] === "") fail(rel, `falta \`${key}\` en el frontmatter`);
  if (data.id && data.id !== expectedId) fail(rel, `el id «${data.id}» no coincide con la ruta «${expectedId}»`);
  if (data.section && !sectionIds.has(data.section)) fail(rel, `la sección «${data.section}» no está en _sections.json`);
  if (data.section && !expectedId.startsWith(`${data.section}/`)) fail(rel, `el archivo no está en la carpeta de su sección «${data.section}»`);
  if (data.status && !STATUSES.has(data.status)) fail(rel, `status «${data.status}» no es draft, review ni published`);
  for (const role of data.roles ?? []) if (!ROLES.has(role)) fail(rel, `rol desconocido «${role}»`);
  if (!Array.isArray(data.screens)) fail(rel, "`screens` tiene que ser una lista (puede estar vacía)");
  if (!Array.isArray(data.keywords) || data.keywords.length < 3) warn(rel, "menos de 3 keywords: costará encontrarlo");

  const h1 = extractH1(content);
  if (!h1) fail(rel, "el cuerpo no empieza con un `# Título`");
  else if (h1 !== data.title) warn(rel, `el H1 «${h1}» no coincide con title «${data.title}»`);
  if (!/\*\*En resumen:\*\*/.test(content)) warn(rel, "no tiene el bloque **En resumen:**");

  for (const image of extractImages(content)) {
    if (!image.src.startsWith("/assets/")) fail(rel, `la imagen «${image.src}» tiene que empezar por /assets/`);
    else if (!fs.existsSync(path.join(ROOT, image.src))) fail(rel, `la imagen «${image.src}» no existe (¿falta npm run shots?)`);
    if (!image.alt.trim()) warn(rel, `la imagen «${image.src}» no tiene texto alternativo`);
  }

  const plain = toPlainText(content);
  articles.push({
    file: rel,
    body: content,
    plain,
    meta: {
      id: expectedId,
      title: data.title,
      description: data.description,
      section: data.section,
      order: Number(data.order ?? 0),
      roles: data.roles ?? ["todos"],
      screens: data.screens ?? [],
      keywords: data.keywords ?? [],
      related: data.related ?? [],
      status: data.status ?? "draft",
      updated: String(data.updated ?? ""),
      headings: extractHeadings(content),
      readingMinutes: readingMinutes(plain),
      path: `articles/${expectedId}.md`,
    },
    links: extractInternalLinks(content),
  });
}

const ids = new Set(articles.map((article) => article.meta.id));
for (const article of articles) {
  for (const related of article.meta.related) if (!ids.has(related)) fail(article.file, `related «${related}» no existe`);
  for (const link of article.links) if (!ids.has(link)) fail(article.file, `enlace interno a «${link}» que no existe`);
}

const manifestPath = path.join(ROOT, "screenshots.json");
const manifest = fs.existsSync(manifestPath) ? JSON.parse(fs.readFileSync(manifestPath, "utf8")) : {};
for (const article of articles) {
  for (const image of extractImages(article.body)) {
    const key = image.src.replace(/^\/assets\/[a-z]{2}\//, "").replace(/\.png$/, "");
    if (!manifest[key]) warn(article.file, `la captura «${key}» no tiene receta en screenshots.json`);
  }
}

for (const message of warnings) console.warn(`⚠ ${message}`);
for (const message of errors) console.error(`✖ ${message}`);
if (errors.length) {
  console.error(`\n${errors.length} error(es) de contenido.`);
  process.exit(1);
}

articles.sort((a, b) => a.meta.section.localeCompare(b.meta.section) || a.meta.order - b.meta.order || a.meta.title.localeCompare(b.meta.title, "es"));

const screens = {};
for (const article of articles) {
  for (const screen of article.meta.screens) (screens[screen] ??= []).push(article.meta.id);
}

const index = {
  locale: LOCALE,
  generatedAt: new Date().toISOString(),
  siteUrl: SITE_URL,
  sections: sections.map((section) => ({
    ...section,
    articles: articles.filter((article) => article.meta.section === section.id).map((article) => article.meta.id),
  })),
  articles: Object.fromEntries(articles.map((article) => [article.meta.id, article.meta])),
  screens,
};

const search = articles.map((article) => ({
  id: article.meta.id,
  title: article.meta.title,
  description: article.meta.description,
  section: article.meta.section,
  keywords: article.meta.keywords,
  headings: article.meta.headings.map((heading) => heading.text),
  roles: article.meta.roles,
  status: article.meta.status,
  text: article.plain.slice(0, 6000),
}));

const sectionTitle = (id) => sections.find((section) => section.id === id)?.title ?? id;
const llms = [
  "# Centro de ayuda de Barberlytics",
  "",
  "> Barberlytics es la plataforma con la que los dueños de barberías manejan citas, clientes, equipo, nómina y precios, y entienden la salud de su negocio. Esta es la ayuda para quien la usa: en español, sin lenguaje técnico.",
  "",
  ...sections
    .filter((section) => index.sections.find((item) => item.id === section.id).articles.length)
    .flatMap((section) => [
      `## ${section.title}`,
      "",
      ...articles
        .filter((article) => article.meta.section === section.id)
        .map((article) => `- [${article.meta.title}](${SITE_URL}/articles/${article.meta.id}.md): ${article.meta.description}`),
      "",
    ]),
].join("\n");

const llmsFull = [
  "# Centro de ayuda de Barberlytics — texto completo",
  "",
  `Generado ${index.generatedAt}. Cada artículo lleva su sección, para quién es, en qué pantallas aplica y su URL en la app.`,
  "",
  ...articles.flatMap((article) => [
    "---",
    "",
    `# ${article.meta.title}`,
    "",
    `- Sección: ${sectionTitle(article.meta.section)}`,
    `- Para: ${article.meta.roles.join(", ")}`,
    `- Pantallas: ${article.meta.screens.join(", ") || "—"}`,
    `- URL: ${APP_URL}/${article.meta.id}`,
    `- Estado: ${article.meta.status} · actualizado ${article.meta.updated}`,
    "",
    article.plain,
    "",
  ]),
].join("\n");

if (checkOnly) {
  console.log(`✓ ${articles.length} artículos en ${index.sections.filter((section) => section.articles.length).length} secciones. Sin errores.`);
  process.exit(0);
}

fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(DIST, { recursive: true });
fs.writeFileSync(path.join(DIST, "index.json"), JSON.stringify(index, null, 2));
fs.writeFileSync(path.join(DIST, "search.json"), JSON.stringify(search));
fs.writeFileSync(path.join(DIST, "llms.txt"), llms);
fs.writeFileSync(path.join(DIST, "llms-full.txt"), llmsFull);
fs.writeFileSync(path.join(DIST, ".nojekyll"), "");
for (const article of articles) {
  const target = path.join(DIST, article.meta.path);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, article.body.trimStart());
}
if (fs.existsSync(ASSETS)) fs.cpSync(ASSETS, path.join(DIST, "assets"), { recursive: true });

console.log(`✓ dist/ con ${articles.length} artículos, ${Object.keys(screens).length} pantallas con ayuda contextual.`);
