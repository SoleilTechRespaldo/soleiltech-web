# 06 — Preparación para producción (runbook)

> Fase 17 de la metodología. Escrito el 2026-07-07; **actualizado el 2026-10-10**
> para desplegar en **Cloudflare Pages** (export estático) en vez de Vercel
> (ver ADR en `docs/DECISIONES.md`, 2026-10-10). Deja el despliegue como un
> trámite guiado para cuando haya autorización (puerta G5).

## 1. Requisitos previos al despliegue

| Requisito | Estado | Responsable |
|---|---|---|
| Dominio `soleiltech.cl` | ✅ comprado 2026-10-07 (NIC Chile) | Nicolás |
| Correo corporativo (para la cuenta GitHub/Cloudflare de la empresa) | ☐ pendiente (Zoho, al tener el dominio) | Nicolás |
| Repo privado en GitHub de la empresa (Fase 6) | ☐ pendiente | Claude + Nicolás |
| Cuenta Cloudflare (bajo el Gmail del negocio) con 2FA | ☐ pendiente | Nicolás |
| Autorización explícita de despliegue (**puerta G5**) | ☐ pendiente | Nicolás |

## 2. Cómo se construye y publica (Cloudflare Pages + export estático)

El sitio se publica como **estático** (sin SSR ni runtime): `output: export` genera
`out/` y Cloudflare Pages sirve esos archivos desde su CDN global.

- **Build command** (Cloudflare compila en Linux): `BUILD_STATIC=true npm run build`
- **Output directory:** `out`
- **Variable de entorno** (Cloudflare Pages → Project → Settings → Variables and
  Secrets, entorno Production): `NEXT_PUBLIC_WEB3FORMS_KEY` = la Access Key que
  está en `.env.local`. Sin ella, el formulario degrada al fallback de WhatsApp.

> `--webpack` por Smart App Control en Windows local; Cloudflare compila en Linux,
> pero el flag no molesta. (Ver `docs/DECISIONES.md`.)

## 3. Headers de seguridad ✅ (listos, CSP incluida 2026-10-10)

- En **Cloudflare Pages** los sirve `public/_headers` (Next lo copia a `out/_headers`).
- En build normal / `next start` los aplica `next.config.ts` (`headers()`), para
  poder probarlos localmente. **Ambos se mantienen en sincronía.**

Headers aplicados a `/*`:

- `Content-Security-Policy` — CSP sin nonces (apta para estático): `default-src
  'self'`, estilos/scripts `'unsafe-inline'` (Next/Tailwind/next-themes), `img-src
  'self' data:`, `connect-src`/`form-action` self + `https://api.web3forms.com`,
  `frame-ancestors 'none'`, `object-src 'none'`, `base-uri 'self'`.
- `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`,
  `Referrer-Policy: strict-origin-when-cross-origin`,
  `Permissions-Policy: camera=(), microphone=(), geolocation=()`,
  `Strict-Transport-Security: max-age=63072000; includeSubDomains`.

Verificado el 2026-10-10 sobre `next start` (headers presentes, sin violaciones de
CSP en consola, el sitio renderiza completo).

## 4. Despliegue paso a paso (cuando se autorice)

1. **GitHub** (Fase 6): repo privado en la cuenta de la empresa y push de `main`.
2. **Cloudflare Pages**: Create project → Connect to Git → elegir el repo →
   framework preset **None** (export estático) → Build command `BUILD_STATIC=true
   npm run build`, Output `out` → agregar `NEXT_PUBLIC_WEB3FORMS_KEY` → Deploy.
3. **Smoke tests** en la URL `*.pages.dev` (sección 7).
4. **Dominio** (`soleiltech.cl` ya comprado en NIC Chile):
   a. Añadir el sitio a **Cloudflare** (DNS) y cambiar en **NIC Chile** los
      nameservers a los 2 que entregue Cloudflare (propagación ~4 h para `.cl`).
   b. En el proyecto de Pages → Custom domains → agregar `soleiltech.cl` y
      `www.soleiltech.cl`; como el DNS ya está en Cloudflare, crea los registros solo.
5. **HTTPS**: automático — Cloudflare emite el certificado al validar el dominio.
6. Verificar `siteConfig.url` = `https://soleiltech.cl` (ya está así).
7. Etiquetar `git tag v1.0.0` + crear `CHANGELOG.md` (Fase 18).

## 5. Monitoreo y alertas (activar el día del deploy)

- **Uptime**: cuenta gratis en https://uptimerobot.com → monitor HTTP(s) a
  `https://soleiltech.cl` cada 5 min → alerta al correo del negocio.
- **Analytics**: **Cloudflare Web Analytics** (gratis, sin cookies) desde el panel.
- **Logs/deploys**: Cloudflare Pages → el proyecto → Deployments (historial y logs
  de build).
- **Formulario**: dashboard de Web3Forms (mismo login del correo del negocio) si se
  sospecha que no llegan solicitudes; recordar la etiqueta "SoleilTech Solicitudes".

## 6. Plan de rollback

El sitio es estático y sin base de datos: **un rollback nunca pierde datos**.

- **Opción rápida (recomendada)**: Cloudflare Pages → Deployments → el deployment
  anterior → **Rollback to this deployment**. Efecto inmediato (Pages conserva todo
  el historial).
- **Opción por código**: `git revert <commit>` + push — Cloudflare redeploya solo.
- Si el problema es del dominio/DNS: la URL `*.pages.dev` sigue funcionando como
  respaldo para diagnosticar.

## 7. Smoke tests post-deploy (checklist del día del lanzamiento)

- [ ] La home carga en `https://soleiltech.cl` con candado (HTTPS válido).
- [ ] Tema claro/oscuro alterna y persiste al navegar.
- [ ] Formulario de contacto: **un envío real de prueba** llega a
      `nicolasjerez.soleiltech@gmail.com` (etiqueta SoleilTech Solicitudes).
- [ ] Botón de WhatsApp abre el chat con el número correcto.
- [ ] Rutas de LumenStock (`/lumenstock`, `/lumenstock/comprar`) cargan.
- [ ] Ruta inexistente muestra la 404 propia.
- [ ] `https://soleiltech.cl/robots.txt` y `/sitemap.xml` responden con el dominio real.
- [ ] Headers de seguridad presentes (`curl -I`): CSP + los otros 5.
- [ ] Favicon visible; compartir la URL por WhatsApp se ve correcto.
- [ ] Lighthouse rápido sobre la URL real (esperado: A11y/BP/SEO 100).
- [ ] Monitor de UptimeRobot activo y alerta de prueba recibida.
