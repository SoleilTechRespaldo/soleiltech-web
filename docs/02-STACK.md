# 02 — Stack tecnológico

> Stack **adoptado**: el sitio ya estaba construido con estas tecnologías y el
> usuario aprobó consolidarlo como v1 (puerta G2, 2026-07-05). Versiones
> exactas tomadas de `package-lock.json` en esa fecha.

## Stack confirmado

| Capa | Tecnología | Versión exacta |
|---|---|---|
| Framework web | Next.js (App Router) | 16.2.10 |
| UI | React / React DOM | 19.2.4 |
| Lenguaje | TypeScript | 5.9.3 |
| Estilos | Tailwind CSS (v4, vía PostCSS) | 4.3.2 (`@tailwindcss/postcss` 4.3.2) |
| Tema claro/oscuro | next-themes | 0.4.6 |
| Iconos | lucide-react | 1.23.0 |
| Linting | ESLint + eslint-config-next | 9.39.4 / 16.2.10 |
| Runtime local | Node.js | 24.18.0 |
| Gestor de paquetes | npm (con `package-lock.json`) | — |
| Fuentes | Google Fonts vía `next/font`: Manrope (sans) + Calistoga (display) | — |

⚠️ **Nota de `AGENTS.md`**: esta versión de Next.js tiene cambios que pueden
diferir de lo conocido. Antes de escribir código nuevo, consultar
`node_modules/next/dist/docs/` y los tipos instalados (p. ej.
`node_modules/next/dist/lib/metadata/types/`).

## Por qué este stack

- **Next.js + React**: el sitio v1 es estático (SSG), pero deja el camino
  abierto para la v2 (cotizador, panel, APIs) sin cambiar de framework.
- **Tailwind v4**: tokens del design system como variables CSS en
  `globals.css` (`@theme inline`), coherentes con el modo oscuro de next-themes.
- **Alternativa considerada**: Astro habría sido óptimo para un sitio 100%
  estático, pero se descartó porque la v2 prevé funcionalidades interactivas
  y no conviene introducir un segundo framework.

## Servicios externos

| Servicio | Uso | Costo | Cuenta / clave |
|---|---|---|---|
| [Web3Forms](https://web3forms.com) | Envío del formulario de contacto al correo de la empresa | Gratis (250 envíos/mes) | `NEXT_PUBLIC_WEB3FORMS_KEY` (clave pública por diseño; se crea con el correo receptor) |
| WhatsApp (deep links `wa.me`) | Canal de contacto directo y fallback del formulario | Gratis | No requiere |
| Cloudflare Pages (decidido 2026-10-10) | Hosting estático + HTTPS + CDN global | Gratis | Decidido (ADR en DECISIONES.md); deploy pendiente G5 |
| NIC Chile (previsto) | Dominio `soleiltech.cl` | ~$10.000 CLP/año | Pendiente de compra |

**Límite conocido de Web3Forms**: solo notifica al dueño de la cuenta; no
envía confirmación automática al cliente. Si se necesita correo transaccional,
la v2 debe sumar Resend/Postmark con dominio propio.

## Variables de entorno

| Variable | Descripción | Dónde obtenerla |
|---|---|---|
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Access Key pública de Web3Forms para el formulario de `/contacto`. Si falta, el formulario degrada al fallback de WhatsApp. | Crear cuenta gratis en web3forms.com con el correo receptor |

Local: copiar `.env.example` a `.env.local` y completar. Producción: variables
del hosting (Cloudflare Pages → Settings → Variables and Secrets).

## Comandos

| Comando | Qué hace |
|---|---|
| `npm install` | Instala dependencias |
| `npm run dev` | Servidor de desarrollo en http://localhost:3000 |
| `npm run build` | Build de producción (valida tipos y rutas) |
| `npm start` | Sirve el build de producción |
| `npm run lint` | ESLint |
