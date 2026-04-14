<div align="center">
  <img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# L.E.S. Landing Page

Landing page de **L.E.S. (Limpiador Elevador Sanitario)** desarrollada con React + TypeScript.

## Tecnologías utilizadas

- **React 19**
- **TypeScript**
- **Vite 6**
- **Tailwind CSS 4** (vía `@tailwindcss/vite`)
- **Framer Motion** (animaciones)
- **Lucide React** (iconografía)
- **Sonner** (toasts/notificaciones)

> Nota: este proyecto es una SPA frontend. No se usa backend en la implementación actual.

## Requisitos

- **Node.js 20+** (recomendado)
- **npm 10+** (recomendado)

## Instalación y ejecución local

1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Levantar entorno de desarrollo:
   ```bash
   npm run dev
   ```
3. Abrir en navegador:
   - `http://localhost:3000`

## Scripts disponibles

- `npm run dev`: inicia Vite en `0.0.0.0:3000`.
- `npm run build`: genera build de producción en `dist/`.
- `npm run preview`: previsualiza el build de producción.
- `npm run lint`: chequeo de tipos con TypeScript (`tsc --noEmit`).
- `npm run clean`: elimina `dist/`.

## Estructura principal

- `src/App.tsx`: composición principal de la landing.
- `src/index.css`: estilos globales + tokens de diseño con Tailwind.
- `src/main.tsx`: punto de entrada de React.
- `vite.config.ts`: configuración de Vite y plugins.
