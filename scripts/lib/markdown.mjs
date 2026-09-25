/**
 * Utilidades de Markdown sin dependencias: encabezados, texto plano, enlaces
 * e imágenes. La app usa el mismo `slugify` para que los anclas coincidan.
 */

/** «¿Qué revisar primero?» → «que-revisar-primero». Igual que en la app. */
export function slugify(text) {
  return text
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/[\s-]+/g, "-");
}

/** Los `##` y `###` del cuerpo, en orden, con su ancla. */
export function extractHeadings(body) {
  const headings = [];
  const seen = new Map();
  for (const line of stripCodeBlocks(body).split("\n")) {
    const match = /^(#{2,3})\s+(.+?)\s*#*\s*$/.exec(line);
    if (!match) continue;
    const text = inlineToText(match[2]);
    let id = slugify(text);
    const count = seen.get(id) ?? 0;
    seen.set(id, count + 1);
    if (count > 0) id = `${id}-${count}`;
    headings.push({ id, text, level: match[1].length });
  }
  return headings;
}

/** El primer `# Título` del cuerpo, si lo hay. */
export function extractH1(body) {
  const match = /^#\s+(.+?)\s*$/m.exec(stripCodeBlocks(body));
  return match ? inlineToText(match[1]) : null;
}

/** Texto plano para el índice de búsqueda y para `llms-full.txt`. */
export function toPlainText(body) {
  return stripCodeBlocks(body)
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/^\s*>\s*\[!\w+\]\s*$/gm, "")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/^\s*[-*+]\s+/gm, "")
    .replace(/^\s*\d+\.\s+/gm, "")
    .replace(/^\s*>\s?/gm, "")
    .replace(/^\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?\s*$/gm, "")
    .replace(/\|/g, " ")
    .split("\n")
    .map((line) => inlineToText(line))
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function inlineToText(text) {
  return text
    .replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, id, label) => label ?? id)
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[*_`~]+/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** Todas las imágenes `![alt](src)` del cuerpo. */
export function extractImages(body) {
  return [...stripCodeBlocks(body).matchAll(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g)].map((m) => ({ alt: m[1], src: m[2] }));
}

/** Enlaces internos: `[[seccion/articulo]]` y `[texto](/ayuda/seccion/articulo)`. */
export function extractInternalLinks(body) {
  const clean = stripCodeBlocks(body);
  const wiki = [...clean.matchAll(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g)].map((m) => m[1].trim());
  const paths = [...clean.matchAll(/\]\(\/ayuda\/([^)#\s]+)(?:#[^)]*)?\)/g)].map((m) => m[1].replace(/\/$/, ""));
  return [...wiki, ...paths];
}

function stripCodeBlocks(body) {
  return body.replace(/```[\s\S]*?```/g, "");
}

/** Minutos de lectura a 180 palabras por minuto, mínimo 1. */
export function readingMinutes(plain) {
  const words = plain.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 180));
}

/** Las preguntas frecuentes: líneas en negrita que terminan en «?». */
export function extractQuestions(body) {
  return [...stripCodeBlocks(body).matchAll(/^\*\*(.+?\?)\*\*\s*$/gm)].map((m) => inlineToText(m[1]));
}
