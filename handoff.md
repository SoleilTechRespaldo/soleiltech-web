# Handoff — SoleilTech (sitio web)

> Se actualiza **antes de terminar cada sesión**. Para retomar: lee esto + CHECKLIST.md.
> Si el proyecto se trabaja con dos IAs, cada bloque lleva su `IA:` y la nota
> "Para la otra IA" (protocolo en la skill crear-proyecto → references/colaboracion-ia.md).

## 1. Objetivos
- **Objetivo del proyecto:** sitio corporativo de ventas de SoleilTech (software a
  medida, apps móviles, sitios web para pymes chilenas; redes/cámaras/infra TI como
  "próximamente"). Captar clientes vía formulario de contacto.
- **Objetivo de la etapa/sprint actual:** cerrar la **Fase 17** y desplegar (Fase 18).

## 2. Estado por sesión (la más reciente arriba)

### Sesión 2026-10-20 — Pulido visual + ocultar infraestructura + fix CSP dev · IA: Claude (Clau)
- **Estado al terminar:** **pulido estético "alto impacto"** aplicado y **propagado a
  TODAS las páginas** (aura ambiental uniforme y fija, sombras + elevación, tiles de
  ícono, CTA con degradado "amanecer" —atenuado en oscuro—, y micro-animaciones con
  `prefers-reduced-motion`; animaciones "acorde a cada servicio" en `/servicios` y
  `.anim-float` en `/proyectos`). **Lint 0** y **build estático en verde**. Primitivas en
  `docs/03-DISENO.md` → "Pulido visual"; ADR en `docs/DECISIONES.md` (2026-10-20).
- **Contenido:** se **ocultó** todo lo de "infraestructura en terreno" (redes/cámaras +
  infra TI) hasta iniciar esa línea; **parqueado y restaurable** en `site-config.ts`
  (`futureServices` + badge comentado). Copy limpiado en home/servicios/nosotros/términos.
- **Fix:** la CSP rompía el **Fast Refresh/hidratación en `next dev`** (el botón de tema y
  el logo no montaban) → la CSP ahora aplica **solo en producción**. Producción intacta.
- **Correo `@soleiltech.cl`:** quedó **100% operativo** en Zoho (MX+SPF+DKIM+DMARC;
  casilla `nicolas.jerez@` + alias `contacto@`) — detalle en la memoria del proyecto.
- **Para la otra IA (Cody):** revisar el pulido (contraste y layout en todas las páginas)
  y el fix de CSP dev. **Respaldo en la nube (2026-10-24):** el repo quedó en **GitHub
  privado** `SoleilTechRespaldo/soleiltech-web` (`origin/main`) — es respaldo, **NO** está
  publicado en internet. **Pendiente del usuario:** el **despliegue a Cloudflare Pages
  (G5)**, que es el paso que recién lo haría público.

### Sesión 2026-10-10 — Auditoría + actualización al estándar de la skill (Cloudflare, CSP, deps) · IA: Claude (Clau)
- **Estado al terminar:** auditoría completa (seguridad / diseño / código) contra la
  skill actualizada. **Aplicado y verificado:** (1) **Next 16.2.10→16.4.0** → `npm audit`
  de **producción = 0 vulnerabilidades** (quedan 5 high **solo dev**, chain de eslint);
  (2) **CSP** sin nonces añadida en `public/_headers` (Cloudflare) + `next.config.ts`
  (local), probada sobre `next start` sin violaciones en consola y sin romper el render;
  (3) **hosting = Cloudflare Pages (export estático)**, runbook `06-PRODUCCION.md` migrado
  de Vercel. Lint + build (normal y `BUILD_STATIC` export con `out/_headers`) en verde.
  **No desplegado** (G5 pendiente).
- **Decisiones (ADR en `docs/DECISIONES.md`, 2026-10-10):** Cloudflare Pages estático; un
  solo dominio (`soleiltech.cl` + subrutas, p. ej. `/lumenstock`); dependencias al día.
- **Cómo desplegar:** `docs/06-PRODUCCION.md` (build `BUILD_STATIC=true npm run build`,
  output `out`, Cloudflare Pages). Verificar deploy real con `curl -I` (headers + CSP).
- **Para la otra IA (Cody):** revisión cruzada de la **CSP** (que no rompa ninguna página
  ni el POST del formulario a Web3Forms) y del runbook Cloudflare. Tarea del usuario: crear
  cuenta Cloudflare con **2FA** + repo GitHub de la empresa.

### Sesión 2026-10-09 — Dominio comprado + estado del sitio · IA: Claude (Clau)
- **Estado al terminar:** sitio **terminado y optimizado** (Fases 1–16 ✅; Fase 17 con
  headers de seguridad + runbook listos; falta desplegar, F18). Último commit `78fdd5e`
  (2026-10-07). **Sin cambios de código del sitio** en este tramo: solo docs y el dominio.
- **Empresa (en paralelo):** SpA «Servicios Informáticos SoleilTech SpA» — borrador de
  escritura en revisión con la contadora (pendientes: objeto con cámaras/redes, capital,
  comodato del domicilio). **Dominio `soleiltech.cl` COMPRADO en NIC Chile el 2026-10-07**
  (titular persona natural; sin DNS aún → irá en Cloudflare). Detalle en la memoria del proyecto.
- **Para la otra IA:** nada que revisar en código. La decisión de hosting sigue abierta (§5).

### Sesión 2026-10-01 — Retrofit: handoff estándar + puente IA   ·   IA: Claude
- **Estado al terminar:** Next.js 16.2.10 + React 19.2.4 + TS 5.9.3 + Tailwind 4.3.2.
  Fases 1–16 ✅; **Fase 17 (producción) en curso**; F18 (despliegue) pendiente. Sitio
  completo y probado (Lighthouse: A11y 100, Perf 96–97, BP 100, SEO 100). Formulario de
  contacto con **Web3Forms** probado de punta a punta. Sin BD ni backend propio en v1
  (adaptación "sitio estático"). Último commit: 2026-09-27. CHECKLIST.md es la fuente
  de verdad; detalle en `docs/01..06` y `docs/DECISIONES.md`.
- **Cómo correr/retomar:** ver `README.md` (Next.js App Router; `npm run dev`). Access
  Key de Web3Forms en `.env.local` (fuera del repo). Config del sitio en `site-config.ts`.
- **Para la otra IA (ChatGPT):** sin cambios de código en esta sesión; se montó el
  handoff estándar y el puente. Te toca: (1) revisar el copy de las páginas y el SEO
  antes del lanzamiento, (2) preparar textos de `/terminos` y `/privacidad` para cuando
  esté el RUT, (3) proponer contenido para el estado vacío de `/proyectos`.

## 3. Archivos y cambios
- **Documentación:** `docs/01-REQUERIMIENTOS`, `02-STACK`, `03-DISENO`, `04-ARQUITECTURA`,
  `06-PRODUCCION`, `DECISIONES.md`; `CHECKLIST.md` (estado vivo). Config: `site-config.ts`.
- **Tocados en la última sesión:**
  - `handoff.md` — creado (este archivo), punto de entrada estándar de continuidad.

## 4. Intentos (documentados)
- ✅ **Funcionó:** Web3Forms (envío real OK, correo confirmado). Modo oscuro en 8
  páginas, 404 propia, responsive 375/800/1280, consola/lint limpios (Fase 15).
- ❌ **Descartado:** páginas `/preview` propuestas 2026-07-06 → no gustaron, eliminadas
  (recuperables desde Git). No repetir esa dirección de diseño.

## 5. Próximos pasos
- [x] ✅ **Dominio `soleiltech.cl` COMPRADO** en NIC Chile (2026-10-07). Falta configurar DNS (Cloudflare) al desplegar.
- [ ] Repo privado en GitHub (cuenta de la empresa) — Fase 6, postergada.
- [x] **Hosting decidido: Cloudflare Pages** (export estático) — ADR en
      `docs/DECISIONES.md` (2026-10-10); runbook en `docs/06-PRODUCCION.md`.
- [ ] **Despliegue (F18):** crear cuenta Cloudflare + repo GitHub empresa → conectar y
      desplegar (pendiente de autorización G5).
- [ ] Al tener RUT: mostrar razón social + RUT en footer, `/terminos` y `/privacidad`.
- [ ] Reemplazar el estado vacío de `/proyectos` cuando haya proyectos publicables.
- **Decisiones pendientes del usuario:** autorización de deploy (G5) y su fecha. (Hosting
  ya decidido: Cloudflare Pages.)
