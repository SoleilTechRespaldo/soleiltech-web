# Registro de decisiones

> Decisiones técnicas y de alcance, en orden cronológico inverso.
> Las decisiones mayores se confirman en las puertas de control (G1–G5);
> las menores se registran aquí para que sean auditables.

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
- Correo corporativo con dominio propio (hoy: Gmail personal).
- Autorizar GitHub + Vercel (puerta G5 antes de cualquier deploy).
