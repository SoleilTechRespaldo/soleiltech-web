# 03 — Diseño visual (design system)

> Basado en el **paquete de marca SoleilTech v3.0** (29/06/2026), fuente:
> `D:\Nicolas\Trabajo\Empresa\SoleilTech-Brand-v3` (`LEEME.txt` +
> `manual-de-marca.html`). Los assets están integrados en `public/brand/`
> (verificados idénticos por hash MD5 el 2026-07-05).

## Paleta de marca (v3)

| Color | Hex | Uso |
|---|---|---|
| Azul noche | `#0B1437` | Fondo del modo oscuro; fondos de marca |
| Dorado-naranja | `#C56A14` | **Primario en modo claro** (sol, "Soleil") |
| Oro brillante | `#DDB24E` | **Primario en modo oscuro** |
| Cian eléctrico | `#0E8FE0` | **Secundario** en ambos modos ("Tech", enlaces de acento) |
| Plata | `#AEB6BE` | Versión monocromática del logo sobre oscuro |
| Grafito | `#2E3338` | Versión monocromática del logo sobre claro |
| Negro | `#141414` | 1 tinta / impresión |
| Gris claro | `#F4F6F8` | Fondos neutros (usado en `manifest` como background) |

> Discrepancia documentada: `manual-de-marca.html` muestra el swatch
> dorado-naranja como `#E89A30`, pero `LEEME.txt` (fuente canónica v3) define
> `#C56A14`. El sitio usa `#C56A14`, que además da mejor contraste sobre
> fondos claros. Ver `docs/DECISIONES.md`.

## Tokens del sitio (`src/app/globals.css`)

| Token | Claro | Oscuro |
|---|---|---|
| `--background` | `#FBF3E7` (crema cálido) | `#0B1437` (azul noche) |
| `--foreground` | `#3A2406` | `#E6ECF7` |
| `--surface` | `#ffffff` | `#121C44` |
| `--surface-muted` | `#F4E4D0` | `#16204a` |
| `--border` | `#E8D5B8` | `#22305f` |
| `--primary` | `#C56A14` | `#DDB24E` |
| `--primary-foreground` | `#ffffff` | `#0B1437` |
| `--secondary` | `#0E8FE0` | `#0E8FE0` |
| `--secondary-foreground` | `#ffffff` | `#ffffff` |
| `--muted-foreground` | `#8A6A45` | `#9FB0C8` |

Los tokens se exponen a Tailwind v4 con `@theme inline`
(`bg-primary`, `text-muted-foreground`, etc.). El modo oscuro se activa con la
clase `.dark` (gestionada por next-themes, `defaultTheme="light"`, respeta
preferencia del sistema).

Detalle distintivo: textura de ruido SVG sobre el fondo
(`body::before`, opacidad 0.035, blend multiply).

## Tipografía

| Rol | Fuente | Notas |
|---|---|---|
| Cuerpo / UI (`--font-sans`) | **Manrope** (variable) | Cargada con `next/font/google` |
| Display / títulos (`--font-display`) | **Calistoga** (peso 400) | Titulares y hero |
| Marca (logo) | Arial Black itálica en los SVG | Fuente recomendada de marca: Clash Display Extrabold itálica (no se usa en la web) |

## Espaciados, radios y estados

- **Espaciado**: escala de Tailwind (múltiplos de 4 px). Contenedores típicos
  `max-w-*` centrados con `px-6`.
- **Radios**: `rounded-xl` / `rounded-2xl` en tarjetas y alertas;
  `rounded-full` en botones y badges; inputs `.input` con `0.75rem`.
- **Estados**:
  - Hover: `hover:opacity-90` (botones), `hover:border-primary` (tarjetas).
  - Focus: borde `--primary` en inputs; skip-link visible al enfocar.
  - Disabled: `opacity-60` + `cursor-not-allowed`.
  - Error: caja con borde `secondary/40` + mensaje y acción alternativa (WhatsApp).
  - Próximamente: `.coming-soon-block` (opacidad 0.6, borde discontinuo) + `ComingSoonBadge`.
- **Selección de texto**: fondo primario, texto sobre primario.

## Iconografía

`lucide-react` (set único en todo el sitio).

## Uso correcto del logo (del manual v3)

| Archivo (en `public/brand/`) | Cuándo usarlo |
|---|---|
| `soleiltech-color-claro` | Fondos claros (logo principal del sitio en modo claro) |
| `soleiltech-color-oscuro` | Fondos oscuros (modo oscuro) |
| `soleiltech-plata` | Monocromo sobre negro/oscuro |
| `soleiltech-grafito` | Monocromo sobre claro |
| `soleiltech-blanco-plano` / `soleiltech-negro-plano` | 1 tinta: impresión, grabado |
| `favicon-sol` / `favicon-sol-oscuro` | Sol suelto para usos mínimos (claro/oscuro) |
| `icon-claro` / `icon-oscuro` / `icon-bn` / `icon-grafito` | App icons cuadrados |

Favicons activos del sitio (raíz de `public/`): `favicon.ico`,
`favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`,
`icon-512.png` — familia "sol color" del paquete v3. El paquete completo con
todas las resoluciones vive en `D:\Nicolas\Trabajo\Empresa\SoleilTech-Brand-v3\favicon\`.

## Componentes del sitio

| Componente | Rol |
|---|---|
| `Header` / `Footer` | Layout global con navegación (`navLinks` de site-config) |
| `Logo` | Lockup de marca según tema |
| `ThemeProvider` / `ThemeToggle` | Modo claro/oscuro |
| `WhatsAppButton` | Botón flotante global |
| `ContactForm` | Formulario de `/contacto` (estados idle/sending/success/error) |
| `ComingSoonBadge` | Marca servicios futuros |
| `HeroIllustration` | Ilustración del hero |
