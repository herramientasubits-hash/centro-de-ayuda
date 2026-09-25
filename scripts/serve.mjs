#!/usr/bin/env node
/** Sirve `dist/` con CORS abierto, para que la app en local lea el contenido. */
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const DIST = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "dist");
const PORT = Number(process.env.PORT ?? 8787);
const TYPES = { ".json": "application/json", ".md": "text/markdown; charset=utf-8", ".txt": "text/plain; charset=utf-8", ".png": "image/png", ".jpg": "image/jpeg", ".svg": "image/svg+xml", ".webp": "image/webp" };

http
  .createServer((req, res) => {
    const url = new URL(req.url ?? "/", "http://localhost");
    const file = path.normalize(path.join(DIST, decodeURIComponent(url.pathname)));
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Cache-Control", "no-store");
    if (!file.startsWith(DIST) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
      res.writeHead(404);
      res.end("not found");
      return;
    }
    res.setHeader("Content-Type", TYPES[path.extname(file)] ?? "application/octet-stream");
    fs.createReadStream(file).pipe(res);
  })
  .listen(PORT, () => console.log(`Centro de ayuda en http://localhost:${PORT} (dist/)`));
