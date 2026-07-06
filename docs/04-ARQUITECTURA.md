# 04 — Arquitectura del proyecto

> Estructura oficial de Next.js 16 App Router con `src/`. No se inventó
> estructura propia; se respeta la del framework.

## Árbol de carpetas

```
2. soleiltech/
├── CHECKLIST.md              ← estado vivo del proyecto (metodología SDLC)
├── README.md
├── AGENTS.md / CLAUDE.md     ← instrucciones para agentes IA
├── .env.example              ← variables documentadas (SÍ se versiona)
├── .env.local                ← valores reales locales (NO se versiona)
├── docs/                     ← documentación de la metodología (01–04, DECISIONES)
├── public/
│   ├── brand/                ← paquete de marca v3 (svg/ y png/, 28 archivos)
│   ├── favicon.ico, favicon-16x16/32x32, apple-touch-icon, icon-512
├── src/
│   ├── app/                  ← RUTAS (App Router): carpeta = ruta
│   │   ├── layout.tsx        ← layout raíz: fuentes, metadata, Header/Footer, ThemeProvider
│   │   ├── page.tsx          ← / (inicio)
│   │   ├── globals.css       ← design system (tokens claro/oscuro, @theme de Tailwind v4)
│   │   ├── servicios/ proyectos/ nosotros/ contacto/ privacidad/ terminos/
│   │   │   └── page.tsx      ← una página por carpeta
│   │   ├── preview/          ← propuestas de diseño internas (excluidas de robots)
│   │   ├── not-found.tsx     ← 404
│   │   ├── robots.ts         ← robots.txt generado (disallow /preview/)
│   │   ├── sitemap.ts        ← sitemap.xml generado
│   │   └── manifest.ts       ← manifest PWA básico
│   ├── components/           ← componentes reutilizables (archivo kebab-case,
│   │                            export PascalCase; "use client" solo si hay interactividad)
│   └── lib/
│       └── site-config.ts    ← ÚNICA FUENTE de textos/datos del negocio:
│                                nombre, correo, WhatsApp, navegación, servicios
└── package.json
```

## Patrón arquitectónico

**Sitio estático (SSG) sin backend propio.**

- Server Components por defecto; `"use client"` únicamente donde hay estado o
  eventos: `contact-form`, `theme-provider`, `theme-toggle`, `whatsapp-button`
  (según necesidad).
- No hay API routes, base de datos ni autenticación en v1.
- Todo contenido de negocio (textos, servicios, contacto) vive en
  `src/lib/site-config.ts` — para cambiar contenido no se tocan componentes.

## Flujo de la única "transacción" del sitio

```
Visitante → página estática pre-renderizada
         → completa ContactForm ("use client")
         → POST https://api.web3forms.com/submit (clave pública NEXT_PUBLIC_WEB3FORMS_KEY)
         → éxito: pantalla de confirmación
         → fallo o clave ausente: caja de error con enlace directo a WhatsApp
```

## Convenciones

| Ámbito | Convención | Ejemplo |
|---|---|---|
| Archivos de componentes | kebab-case | `contact-form.tsx` |
| Componentes exportados | PascalCase | `ContactForm` |
| Rutas públicas | español (público chileno) | `/servicios`, `/nosotros` |
| Código, identificadores, commits | inglés | `siteConfig`, `feat: ...` |
| Textos de UI | español de Chile | — |
| Commits | Conventional Commits | `feat:`, `fix:`, `docs:`, `chore:` |
| Imports internos | alias `@/` → `src/` | `@/lib/site-config` |

## ¿Dónde pongo X?

| Necesito agregar... | Va en... |
|---|---|
| Una página nueva | `src/app/<ruta>/page.tsx` (+ agregarla a `sitemap.ts` y a `navLinks` si corresponde) |
| Un componente reutilizable | `src/components/<nombre>.tsx` |
| Textos, servicios, datos de contacto | `src/lib/site-config.ts` |
| Imágenes / assets públicos | `public/` (marca en `public/brand/`) |
| Estilos globales o tokens | `src/app/globals.css` |
| Variables de entorno | `.env.local` + documentar en `.env.example` y `docs/02-STACK.md` |
| Decisiones técnicas | `docs/DECISIONES.md` |
