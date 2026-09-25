# Centro de ayuda de Barberlytics

El contenido del centro de ayuda de [Barberlytics](https://barberlytics.com): artículos en
Markdown puro que leen dos cosas a la vez, la pantalla de ayuda de la aplicación (`/ayuda`,
construida con el sistema de diseño Thema) y la IA que responde preguntas con esta base.

Aquí **solo vive el contenido**. La interfaz que lo muestra vive en el repo de la aplicación
(`Barberlytics-development/DesignSystem`, carpeta `src/help/`) y lee lo que este repo publica.

## Cómo está organizado

```
content/es/                 ← un idioma por carpeta; inglés después con la misma estructura
  _sections.json            ← las secciones, en orden, con título y descripción
  <seccion>/<articulo>.md   ← un artículo = un archivo con frontmatter
assets/es/<seccion>/<articulo>/<captura>.png
screenshots.json            ← la receta de cada captura: ruta, estado, viewport, tema
casos/<pantalla>.md         ← el mapa de casos de uso de cada pantalla, antes de redactar
STYLE.md                    ← cómo se escribe aquí
scripts/build.mjs           ← md → dist/ (index.json, search.json, artículos, llms.txt)
scripts/screenshots.mjs     ← regenera las capturas con Playwright contra la app
```

## Comandos

```bash
npm ci
npm run check      # valida frontmatter, enlaces, imágenes y relacionados; no escribe nada
npm run build      # genera dist/
npm run serve      # sirve dist/ en http://localhost:8787 con CORS, para probar la app en local
npm run shots      # regenera las capturas (necesita la app corriendo; ver abajo)
```

### Probar en local con la aplicación

1. En este repo: `npm run build && npm run serve`.
2. En el repo de la app: `VITE_HELP_BASE_URL=http://localhost:8787 npm run dev` y abre `/ayuda`.

### Regenerar capturas

Las capturas salen de la aplicación con datos de prueba, así que son iguales en cualquier
máquina y se pueden regenerar cuando cambie el diseño:

```bash
# en el repo de la app
VITE_USE_MOCKS=true npm run dev -- --port 5197
# aquí
npm run shots                      # todas
npm run shots -- acceso-y-cuenta   # solo una sección
HELP_APP_URL=http://localhost:5195 npm run shots
```

Cada entrada de `screenshots.json` dice qué pantalla, en qué estado, a qué tamaño y en qué
tema se toma. Los estados (`login-code`, `login-locked`…) están en `scripts/screenshots.mjs`.

## Publicación

Cada push a `main` construye `dist/` y lo publica en GitHub Pages. La aplicación lee de ahí:

- `index.json` — secciones, artículos y sus metadatos, mapa pantalla → artículos
- `search.json` — el índice de búsqueda
- `articles/<seccion>/<articulo>.md` — el cuerpo de cada artículo
- `assets/…` — las capturas
- `llms.txt` y `llms-full.txt` — la base completa para un agente de IA

## Escribir un artículo

Lee `STYLE.md`. En corto: un archivo por pregunta que alguien se hace, frontmatter completo,
lenguaje de barbería y no de software, y cada botón nombrado tal cual aparece en pantalla.
