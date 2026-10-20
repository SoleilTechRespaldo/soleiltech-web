# Registro de decisiones

> Decisiones técnicas y de alcance, en orden cronológico inverso.
> Las decisiones mayores se confirman en las puertas de control (G1–G5);
> las menores se registran aquí para que sean auditables.

## 2026-10-20 — Pulido visual, ocultar "infraestructura en terreno" y CSP solo en producción

**Estado:** Aceptada (en código; sin desplegar).

**1. Pulido visual "alto impacto"** (el usuario eligió esta opción sobre otras dos).
Se elevó el sitio **dentro de la identidad de marca** (sin cambiar paleta, logo ni
estructura). Primitivas nuevas en `globals.css` (detalle en `03-DISENO.md` → "Pulido
visual"): **aura ambiental** uniforme y fija en toda la página; **sombras cálidas** +
elevación al hover (`.card-elevated` / `.shadow-card`); **tiles de ícono**
(`.icon-tile`, `.icon-tile-primary`); **CTA "amanecer"** con degradado (`.cta-sunrise`,
**atenuado en oscuro** a pedido del usuario); y **micro-animaciones** (`.animate-rise`,
`.reveal` scroll-driven con fallback, `.sun-glow`, animaciones "acorde a cada servicio"
en `/servicios` y `.anim-float` en `/proyectos`). Todo respeta **WCAG** (contraste
verificado) y **`prefers-reduced-motion`**. Propagado a todas las páginas. Lint 0 + build
estático en verde.

**2. Ocultar "infraestructura en terreno"** (redes/cámaras + infraestructura TI): a
pedido del usuario, **ocultar hasta iniciar de verdad esa línea de trabajo**. NO se
borró: los dos servicios quedan **parqueados** en `site-config.ts` → `futureServices`
(nadie los importa → no se renderizan) y el badge del hero quedó **comentado**. Se quitó
toda mención en copy (home, servicios, nosotros, términos). **Para reactivarlo:** mover
`futureServices` → `services` y descomentar el badge (pedir *"mostrar infraestructura"*).

**3. CSP solo en producción (fix de dev).** La CSP sin `'unsafe-eval'` que sirve
`next.config.ts` rompía en **`next dev`** el Fast Refresh y la **hidratación** de Next
(síntoma: el botón de tema y el logo se quedaban en su estado inicial — logo cobre en
modo oscuro). Se cambió a aplicar `headers()` **solo cuando `NODE_ENV !== 'development'`**.
Producción intacta: la CSP la sirve Cloudflare vía `public/_headers` (y `headers()` para
un eventual `next start`).

## 2026-10-10 — ADR: Hosting en Cloudflare Pages (export estático) + un solo dominio

**Estado:** Aceptada (ejecutada en código; despliegue pendiente de la puerta G5).

**Contexto:** el sitio es una landing **estática** (sin SSR ni API; el formulario
usa Web3Forms del lado del cliente). La skill `crear-proyecto` actualizada fija
"Cloudflare primero" como hosting, y la cartera de SoleilTech converge en **una
sola cuenta Cloudflare** bajo **un solo dominio**.

**Decisión:**
1. **Hosting = Cloudflare Pages** con **export estático** (`output: export` → `out/`),
   en vez de Vercel. Sin adaptador (OpenNext/next-on-pages): el sitio no usa features
   dinámicas de Next.
2. **Headers de seguridad en `public/_headers`** (Cloudflare los aplica) + copia en
   `next.config.ts` (`headers()`) para probar en local. Se añadió **CSP** sin nonces.
3. **Un solo dominio de marca** `soleiltech.cl`; los productos van como
   **subrutas/subdominios** (ej. `/lumenstock`, ya en el repo), no un dominio por
   producto. DNS en Cloudflare (nameservers de NIC Chile → Cloudflare).

**Opciones consideradas:**

| Opción | Complejidad | Costo | Encaje con el stack |
|---|---|---|---|
| **Cloudflare Pages estático** (elegida) | Baja | Free | Alto (cartera en Cloudflare) |
| Next completo en Cloudflare (OpenNext / next-on-pages) | Media-alta | Free | Alto, pero innecesario sin SSR |
| Vercel (Next nativo) | Baja | Free (Hobby) | Menor (la preferencia es Cloudflare) |

**Trade-offs / consecuencias:** se pierden la optimización de imágenes en runtime y
el middleware de Next — que este sitio **no usa** (las imágenes son assets; sin
middleware). A cambio: CDN global, free-tier, un panel único para toda la cartera, y
se evita el gotcha de deploy por REST de Vercel. Si a futuro el sitio necesita SSR o
backend, se revisa migrar al adaptador OpenNext (Workers).

**Acciones hechas:** CSP + `public/_headers`; runbook `06-PRODUCCION.md` pasado a
Cloudflare. **Pendiente (G5):** crear la cuenta Cloudflare, conectar el repo, desplegar.

## 2026-10-10 — Dependencias al día: Next 16.2.10 → 16.4.0

`npm audit` reportaba vulnerabilidades (sharp/libvips/libheif/librsvg, source-map-js).
Se subió **Next a 16.4.0** (+ `eslint-config-next`) y se corrió `npm audit fix`.
Resultado: **producción con 0 vulnerabilidades**; quedan 5 "high" **solo en el chain
de eslint (dev)** —`braces`/`micromatch`/`fast-glob`, no se despliegan—, aceptadas por
ahora (su fix forzaría un cambio mayor del toolchain de lint). Build y lint en verde.

## 2026-07-07 — Build/dev con Webpack (Smart App Control bloquea Turbopack)

**Contexto:** Windows Smart App Control (activo/enforzado en el PC de Nicolás,
Windows 11 Pro build 26200) empezó a bloquear el binario nativo sin firmar de
Next (`next-swc.win32-x64-msvc.node`), lo que rompe Turbopack — el compilador
por defecto de `next build` y `next dev` en Next 16. Diagnóstico confirmado por
registro: `HKLM\...\CI\Policy\VerifiedAndReputablePolicyState = 1`.

**Decisión:** cambiar los scripts a `next dev --webpack` / `next build --webpack`
(usan las bindings WASM, sí permitidas). El usuario **optó por NO desactivar
Smart App Control** porque es una acción irreversible (una vez apagado no se
puede reactivar sin reinstalar Windows) y reduce la seguridad de todo el equipo.

**Implicancias:**
- Builds/dev locales un poco más lentos; sin impacto funcional.
- **No afecta producción**: Vercel compila en Linux con Turbopack normal. Si en
  el futuro se corrige SAC o se compila en otra máquina, se puede volver a
  Turbopack quitando `--webpack`.
- El export estático del ZIP demo (`scripts/crear-entregable.ps1` → `npm run
  build`) hereda el cambio automáticamente.

## 2026-07-07 — Fase 16: optimización medida con Lighthouse (A11y 94 → 100)

Medición sobre build de producción (`next start`), Chrome headless.

| Página | Antes | Después |
|---|---|---|
| Inicio | Perf 97 · A11y 94 · BP 100 · SEO 100 | Perf 96 · A11y **100** · BP 100 · SEO 100 |
| Contacto | (sin medir) | Perf 96 · A11y **100** · BP 100 · SEO 100 |
| Servicios | (sin medir) | Perf 97 · A11y **100** · BP 100 · SEO 100 |

Correcciones aplicadas (todas por contraste WCAG 4.5:1 u orden de encabezados):

- `--primary` claro `#C56A14` → **`#A85808`** (blanco sobre primario 3.85→5.17;
  primario sobre fondos 4.19→4.69+). **El logo NO cambia** — sus degradados
  van incrustados en los SVG con los colores de marca originales.
- `--muted-foreground` claro `#8A6A45` → **`#6F5335`** (3.98→5.69 sobre
  surface-muted).
- `--secondary-foreground` blanco → **azul noche `#0B1437`** (texto sobre el
  cian del botón WhatsApp: 3.48→4.79). Aplica en ambos temas.
- Nuevo token `--badge-foreground` (`#7A3D08` claro / oro oscuro) para el
  texto de la pill "Futuramente" sobre su tinte (2.65→5.62). Primero se
  intentó una clase arbitraria de Tailwind que no ganó la cascada; el token
  del design system es la solución robusta.
- `.coming-soon-block` ya no usa `opacity: 0.6` (rompía el contraste de todo
  su contenido, ratios 1.83–2.22); el atenuado queda por borde punteado y
  colores muted.
- Inicio: tarjetas de propuestas de valor `h3` → `h2` (orden secuencial de
  encabezados) y quitado `opacity-90` del párrafo sobre fondo primario.
- `manifest.ts`: `theme_color` actualizado al primario nuevo.
- Perf 96–97: LCP 2,6 s bajo throttling simulado 4G es el piso del hero con
  tipografía display; CLS 0.001 y TBT 50 ms excelentes. Sin acción.

## 2026-07-07 — Marca v3.1: palabra centrada con el sol + sol de 5 rayos en el hero

- **Lockups**: por decisión del usuario, "SoleilTech" ya no comparte base con
  el horizonte del sol; el texto quedó centrado verticalmente con el sol
  (baseline y=104 → y=84; centro común y=64). Actualizados los 6 SVG y los
  6 PNG (regenerados a 1940×440 transparentes con Chrome headless) en
  `public/brand/` y en la carpeta maestra `SoleilTech-Brand-v3` (nota v3.1
  en su LEEME). Iconos/favicons sin cambios (no llevan texto). Originales
  intactos en `SoleilTech-Brand-v3.zip`.
- **Ilustración del hero**: el sol pasó de 3 a 5 rayos — se agregaron los
  dos laterales bajos con la geometría angular del logo (~20°), manteniendo
  el estilo de trazo de la ilustración.

## 2026-07-07 — Reposicionamiento de textos (decisiones del usuario)

- **De pymes a empresas de todos los tamaños**: se eliminó "pymes" de todo
  el sitio (tagline/título, hero del inicio, tarjeta de Nosotros —ahora
  "Cercanía con cada cliente"— y metadatos). Nosotros abre con el texto
  dictado por el usuario: "empresas grandes y pequeñas en todo el
  territorio nacional".
- **"Próximamente" → "Futuramente"** en todo el sitio para el trabajo en
  terreno: el usuario desconoce cuándo podrá ofrecerlo y no quiere
  comprometer plazos.
- **Alcance geográfico en las etiquetas del hero**: Software = "Trabajos
  nacionales"; Infraestructura en terreno = "Región de Valparaíso". Se
  eliminó el rótulo "CHILE · TRABAJOS NACIONALES" (redundante; el dominio
  .cl ya sitúa el sitio).
- Contacto: cobertura reescrita a "Trabajamos con empresas chilenas".

## 2026-07-06 — Previews descartadas y centrado móvil en todo el sitio

- El usuario revisó las 2 propuestas de diseño alternativas (`/preview/
  amanecer-scroll` y `/preview/consola-amanecer`) con capturas: **no le
  gustaron** → eliminadas del código (recuperables en el historial de Git).
  Se retiró también el `disallow: /preview/` de `robots.ts`, ya innecesario.
- A pedido del usuario, en pantallas móviles el texto de portada y los
  encabezados de página (Inicio, Servicios, Proyectos, Nosotros, Contacto)
  van **centrados**; en escritorio se mantiene la alineación izquierda.
  El contenido de tarjetas y listas sigue a la izquierda por legibilidad.

## 2026-07-06 — Entregable demo portable (exportación estática)

Para revisar el sitio en otro PC sin hosting ni instalaciones, se agregó:

- `next.config.ts`: `output: "export"` + `images.unoptimized` **solo** cuando
  `BUILD_STATIC=true` — el build normal para hosting no cambia.
- `robots.ts` / `sitemap.ts` / `manifest.ts`: `export const dynamic =
  "force-static"` (exigido por Next 16 para exportar; eran estáticos igual).
- `scripts/crear-entregable.ps1` + `scripts/demo-launcher/`: genera
  `entregables/SoleilTech-demo-<fecha>.zip` (~1 MB) con el sitio exportado y
  `VER-SITIO.bat` (servidor HttpListener de PowerShell puro, solo localhost,
  sin dependencias en el PC receptor). Probado: rutas, assets y 404 OK.
- Nota: la Access Key de Web3Forms queda embebida en el JS del export
  (es pública por diseño `NEXT_PUBLIC_*`); el formulario del demo envía
  correos reales.

## 2026-07-06 — Logo más grande y navegación completa desde `lg`

A pedido del usuario, el logo pasó de 32 px a 40 px (44 px en ≥1024 px).
Al verificarlo se detectó que el header **ya desbordaba** entre 768–1000 px
(5 enlaces + toggle + CTA nunca cupieron con el menú de escritorio): se movió
el breakpoint de la navegación completa de `md` a `lg`, de modo que tablets
usan el menú hamburguesa. Verificado en 1280 / 800 / 375 px.

## 2026-07-06 — Nuevo correo receptor de solicitudes

`siteConfig.email` cambia de `nicolas.jls9720@gmail.com` a
**`nicolasjerez.soleiltech@gmail.com`** (Gmail dedicado al negocio, decisión
del usuario). Implicancias:

- La cuenta de **Web3Forms debe crearse con el correo nuevo** — la Access Key
  queda ligada a la casilla que recibe las solicitudes.
- Plan futuro confirmado: migrar a un correo con dominio propio
  (p. ej. `contacto@soleiltech.cl`) cuando se compre el dominio (backlog v2).

## 2026-07-05 — Adopción de la metodología sobre proyecto existente

**Contexto:** la carpeta contenía un sitio Next.js 16 completo (todas las
páginas de venta, marca integrada) pero sin Git, sin `docs/` ni `CHECKLIST.md`.

**Auditoría de marca:** los assets de `public/brand/` y los favicons de la
raíz se compararon por hash MD5 contra el paquete original
`D:\Nicolas\Trabajo\Empresa\SoleilTech-Brand-v3` → **28/28 archivos idénticos
+ 5/5 favicons idénticos**. La marca v3 está completa; no hubo que reintegrarla.

**Decisiones del usuario (puertas G1/G2, vía cuestionario):**

| Tema | Decisión |
|---|---|
| Alcance | **Consolidar el sitio existente como v1** (no rehacer, no ampliar aún). Funciones nuevas → v2. |
| Dominio `soleiltech.cl` | **No comprado.** Se mantiene como URL canónica objetivo; compra en NIC Chile queda como tarea pre-lanzamiento. |
| Respaldo/deploy | **Solo Git local** por ahora. GitHub privado y Vercel quedan como tareas pendientes con comandos listos en el checklist. |
| Formulario | **Configurar Web3Forms ahora**: el usuario crea la cuenta y entrega la Access Key; se configura en `.env.local` (y en el hosting cuando exista). |

## 2026-07-05 — Decisiones técnicas menores (entre puertas)

1. **`robots.ts`: `disallow: "/preview/"`** — las páginas de `/preview` son
   propuestas de diseño internas ("no forman parte del sitio final"); no deben
   indexarse. Se conservan en el código hasta que el usuario decida
   integrarlas o eliminarlas (tarea en checklist).
2. **`.gitignore`: se agregó `!.env.example`** — el patrón original `.env*`
   también ignoraba `.env.example`, que debe versionarse porque documenta las
   variables requeridas.
3. **Primario claro `#C56A14` (no `#E89A30`)** — `LEEME.txt` del paquete v3
   define dorado-naranja `#C56A14`; el swatch del `manual-de-marca.html` dice
   `#E89A30`. Se mantiene `#C56A14` (fuente canónica y mejor contraste AA
   sobre fondos claros). Si la marca evoluciona, actualizar tokens en
   `globals.css` y este registro.
4. **Fases 10, 11 y 13 marcadas N/A** — sitio estático sin base de datos ni
   backend propio (adaptación oficial de la metodología para "sitio estático /
   landing"). La Fase 14 se reduce a la integración del formulario.
5. **Identidad Git local** — no había `user.name`/`user.email` globales; se
   configuró identidad a nivel de repositorio (Nicolás + Gmail actual del
   negocio). Ajustable con `git config user.name/user.email`.

## Pendientes que requieren decisión futura del usuario

- Destino de `/preview` (integrar alguna propuesta o eliminarlas antes del deploy).
- Confirmar número de WhatsApp del negocio (`+56 9 6508 5810` en `site-config.ts`).
- Correo corporativo con dominio propio (hoy: Gmail del negocio,
  `nicolasjerez.soleiltech@gmail.com`).
- Autorizar GitHub + Vercel (puerta G5 antes de cualquier deploy).
