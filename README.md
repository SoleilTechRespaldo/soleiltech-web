# SoleilTech — sitio web

Sitio de ventas de SoleilTech: desarrollo de software a medida, apps móviles y
sitios web para pymes chilenas; instalación de redes/cámaras/infraestructura
TI anunciada como "próximamente".

**Stack:** Next.js 16.2.10 (App Router) · React 19.2.4 · TypeScript 5.9.3 ·
Tailwind CSS 4.3.2 · next-themes (tema claro/oscuro) · lucide-react.

## Estado y metodología

El proyecto sigue la metodología **Checklist Maestro SDLC (19 fases)**:

- **[CHECKLIST.md](CHECKLIST.md)** — estado vivo del proyecto y próximos pasos. Empieza por aquí.
- [docs/01-REQUERIMIENTOS.md](docs/01-REQUERIMIENTOS.md) — alcance, actores, qué queda fuera de v1
- [docs/02-STACK.md](docs/02-STACK.md) — stack con versiones exactas y servicios externos
- [docs/03-DISENO.md](docs/03-DISENO.md) — design system y uso de la marca v3
- [docs/04-ARQUITECTURA.md](docs/04-ARQUITECTURA.md) — estructura, convenciones, "¿dónde pongo X?"
- [docs/DECISIONES.md](docs/DECISIONES.md) — registro de decisiones

> ⚠️ Nota para agentes IA (ver `AGENTS.md`): esta versión de Next.js puede
> diferir de lo conocido — leer `node_modules/next/dist/docs/` antes de
> escribir código.

## Requisitos

- Node.js 20+ (desarrollado con Node 24)
- npm

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción (valida tipos y rutas) |
| `npm start` | Sirve el build |
| `npm run lint` | ESLint |

## Configuración (variables de entorno)

| Variable | Descripción |
|---|---|
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Access Key de [Web3Forms](https://web3forms.com) para el formulario de `/contacto`. Sin ella, el formulario degrada a un aviso con enlace directo a WhatsApp. |

Local: copia `.env.example` a `.env.local` y completa el valor. En el hosting
(Vercel): Project Settings → Environment Variables.

### Formulario de contacto (obligatorio antes de lanzar)

1. Crea una cuenta gratis en https://web3forms.com **con el correo que debe
   recibir las solicitudes** (hoy: `nicolasjerez.soleiltech@gmail.com`, definido en
   `src/lib/site-config.ts`).
2. Copia el "Access Key" y pégalo en `.env.local`.
3. Al desplegar, agrega la misma variable en el hosting.

**Límite conocido:** Web3Forms solo notifica a la casilla del dueño; no envía
confirmación automática al cliente. Si se necesita correo transaccional,
sumar Resend/Postmark con dominio propio (backlog v2 en el checklist).

Si el formulario falla o falta la key, el sitio muestra un botón para abrir
WhatsApp directamente — la venta no se pierde por un problema técnico.

## Contenido a completar antes de lanzar

Lista completa y al día en **[CHECKLIST.md → Próximos pasos](CHECKLIST.md)**. Resumen:

- Access Key de Web3Forms (ver arriba).
- **Dominio propio:** comprar `soleiltech.cl` en [NIC Chile](https://www.nic.cl) y
  actualizar DNS; `siteConfig.url` ya apunta a ese dominio.
- **`/proyectos`:** reemplazar el estado vacío por proyectos reales.
- **`/preview`:** propuestas de diseño internas (excluidas de robots.txt) —
  decidir si se integran o se eliminan.
- **Datos de contacto:** todo se edita en `src/lib/site-config.ts` (correo,
  WhatsApp, textos, servicios) — el sitio completo lee de ahí.

## Entregable demo portable

Para generar un zip liviano (~1 MB) que permite ver el sitio completo en
cualquier PC con Windows sin instalar nada:

```powershell
powershell -File scripts\crear-entregable.ps1
```

Produce `entregables/SoleilTech-demo-<fecha>.zip` con la exportación estática
(`BUILD_STATIC=true`) + un lanzador de doble clic (`VER-SITIO.bat`) que sirve
el sitio en `http://localhost:8765` usando solo PowerShell. Instrucciones para
el receptor en el `LEEME.txt` incluido. La carpeta `entregables/` no se versiona.

## Marca

Los assets del logo (SVG/PNG, temas claro/oscuro, favicons) viven en
`public/brand/` y `public/favicon*`, tomados del **paquete de marca v3.0**
(`D:\Nicolas\Trabajo\Empresa\SoleilTech-Brand-v3`, incluye
`manual-de-marca.html` y `LEEME.txt` con la paleta y reglas de uso).
Guía de uso en [docs/03-DISENO.md](docs/03-DISENO.md).

## Control de versiones

Repositorio Git local (rama `main`). El repositorio remoto privado en GitHub
y el deploy en Vercel están **pendientes de autorización** — los comandos
exactos están en [CHECKLIST.md](CHECKLIST.md) (sección Infraestructura).

## Deploy en Vercel (cuando se autorice — puerta G5)

1. Conecta el repositorio a un proyecto de Vercel.
2. Agrega la variable `NEXT_PUBLIC_WEB3FORMS_KEY`.
3. Deploy — sin configuración adicional (sin base de datos ni backend propio
   en esta primera versión).

El runbook completo del lanzamiento (dominio NIC Chile, DNS, monitoreo,
plan de rollback y smoke tests) está en
[docs/06-PRODUCCION.md](docs/06-PRODUCCION.md).
