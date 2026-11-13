# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Proyecto

Sitio personal de Jorgelina Alvarez ("Astrolina"), meteoróloga y astrofotógrafa argentina: biografía, salidas/expediciones, talleres, comunidad ("La Tribu"), divulgación, libros y fotos. Más adelante va a necesitar un backend para que ella cargue su propio contenido; por ahora es un front estático y se mantiene simple a propósito. El contenido del sitio y la comunicación con el dueño del repo son en español (rioplatense).

- Requisitos y tareas: Jira, proyecto **AS** en `palazzisoft.atlassian.net` (accesible vía el MCP `atlassian`). Los commits llevan la clave del issue (`AS-2: ...`).
- Diseño base: prototipo en **AS-2** (imagen adjunta; el MCP no descarga adjuntos). El diseño puede cambiar con el tiempo.

## Comandos

```bash
npm run dev       # dev server en http://localhost:5173
npm run build     # tsc -b (type-check) + vite build -> dist/
npm run lint      # eslint
npm run preview   # sirve dist/
```

No hay tests todavía. Verificar cambios visuales levantando el sitio y comparando con el prototipo.

Node local es 18.19: por eso Vite está en 6.x (Vite 7 requiere Node 20.19+). No subir de major sin actualizar Node.

## Arquitectura

Vite + React 19 + TypeScript, SPA con `react-router-dom` v6 (la v7+ pide Node 20+). Cada solapa del menú es una página propia.

- `src/site.ts`: `NAV_ITEMS` (solapas y rutas) y `pageTitle()`. Es la fuente única del menú y de las rutas.
- `src/App.tsx`: arma el router a partir de `NAV_ITEMS`. Las rutas que no están en `PAGES` muestran `ComingSoonPage`; para construir una solapa nueva, crear la página en `src/pages/` y sumarla a `PAGES`.
- `src/components/Layout.tsx`: header + `<Outlet />` + `ScrollRestoration`.
- `src/pages/`: una página por ruta. `Page.module.css` tiene los estilos compartidos (contenedor, etiqueta dorada, título) para que todas las páginas internas se vean iguales. Cada página fija su `<title>` con `pageTitle()` (React 19 lo sube al `<head>`).
- `src/index.css`: tokens de diseño en `:root` (`--color-night`, `--color-gold`, `--color-star`, `--color-muted`, ...), fondo nocturno con gradientes, campo de estrellas (`body::before`, posiciones del prototipo) y la clase global `.viewfinder` (esquinas de visor del prototipo). Cambios de paleta van acá.
- Estilos por componente con CSS Modules (`*.module.css`); sin librería de UI ni Tailwind.
- Hosting: al ser SPA con `BrowserRouter`, el host tiene que servir `index.html` para cualquier ruta (en dev/preview Vite ya lo hace).
- Tipografía Newsreader desde Google Fonts (`index.html`).

## Material de referencia (`docs/`)

Documentos que aporta el dueño del proyecto (contenido real de Jorgelina). Está en `.gitignore` a propósito: el repo es público y estos archivos tienen datos personales y comerciales. Las imágenes que se usen en el sitio se copian a `src/assets/`. Leerlos a demanda, no hace falta cargarlos siempre:

- `1º EXPEDICIÓN OCTUBRE EN alto jague (1).pdf`: expedición a Alto Jague; al final incluye su presentación personal ("Hola, soy Jorgelina Alvarez...").
- `Alto_Jague_Guia_del_Cielo.pdf`, `Guia-Fotografica-Alto-Jague-la-Tribu.pdf`: guías de las salidas.
- `alto jague folleto`: imagen JPEG (sin extensión) del folleto.
