# 06 — Preparación para producción (runbook)

> Fase 17 de la metodología. Escrito el 2026-07-07: todo lo que no depende
> del dominio quedó listo; este documento deja el despliegue como un trámite
> guiado para cuando existan dominio y autorización (puerta G5).

## 1. Requisitos previos al despliegue

| Requisito | Estado | Responsable |
|---|---|---|
| Dominio `soleiltech.cl` comprado en https://www.nic.cl | ☐ pendiente (agosto 2026) | Nicolás |
| Correo corporativo de Gmail (para la cuenta GitHub de la empresa) | ☐ pendiente | Nicolás |
| Repo privado en GitHub de la empresa (Fase 6, comandos en CHECKLIST) | ☐ pendiente | Claude + Nicolás |
| Autorización explícita de despliegue (**puerta G5**) | ☐ pendiente | Nicolás |

## 2. Variables de entorno de producción

| Variable | Valor | Dónde se configura |
|---|---|---|
| `NEXT_PUBLIC_WEB3FORMS_KEY` | la Access Key ya en uso en `.env.local` | Vercel → Project → Settings → Environment Variables (Production) |

Sin esta variable el formulario degrada al fallback de WhatsApp (la venta no
se pierde, pero configúrala igual antes de lanzar).

## 3. Headers de seguridad ✅ (listos, 2026-07-07)

Definidos en `next.config.ts` y verificados sobre `next start`:

- `X-Content-Type-Options: nosniff` — impide adivinar tipos MIME.
- `X-Frame-Options: DENY` — nadie puede embeber el sitio en un iframe.
- `Referrer-Policy: strict-origin-when-cross-origin`.
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`.
- `Strict-Transport-Security: max-age=63072000; includeSubDomains` — fuerza
  HTTPS en visitas futuras.

No aplican al demo estático local (`BUILD_STATIC`), solo al hosting real.

## 4. Despliegue paso a paso (cuando se autorice)

1. **GitHub** (Fase 6): repo privado en la cuenta de la empresa y push de
   `main` (comandos listos en `CHECKLIST.md`).
2. **Vercel**: Add New Project → importar el repo → framework autodetectado
   (Next.js) → agregar `NEXT_PUBLIC_WEB3FORMS_KEY` → Deploy.
3. **Smoke tests** en la URL `*.vercel.app` (sección 7).
4. **Dominio**: Vercel → Project → Settings → Domains → agregar
   `soleiltech.cl` y `www.soleiltech.cl`. En NIC Chile, configurar los DNS
   que Vercel indique (registro `A 216.198.51.1` + `CNAME www →
   cname.vercel-dns.com`, o delegar nameservers a Vercel — usar lo que
   muestre el panel, puede variar). Propagación: minutos a horas.
5. **HTTPS**: automático — Vercel emite el certificado al validar el dominio.
6. Verificar `siteConfig.url` = `https://soleiltech.cl` (ya está así).
7. Etiquetar `git tag v1.0.0` + crear `CHANGELOG.md` (Fase 18).

## 5. Monitoreo y alertas (activar el día del deploy)

- **Uptime**: cuenta gratis en https://uptimerobot.com → monitor HTTP(s) a
  `https://soleiltech.cl` cada 5 min → alerta al correo del negocio. Gratis
  hasta 50 monitores.
- **Errores y logs**: panel de Vercel → Project → Logs (runtime y build).
  Para un sitio estático sin backend propio, los errores posibles son de
  build o del navegador.
- **Formulario**: revisar el dashboard de Web3Forms (mismo login del correo
  del negocio) si se sospecha que no llegan solicitudes; recordar la
  etiqueta "SoleilTech Solicitudes" en Gmail.
- (Opcional, v2) Vercel Analytics para métricas de visitas sin cookies.

## 6. Plan de rollback

El sitio es estático y sin base de datos: **un rollback nunca pierde datos**.

- **Opción rápida (recomendada)**: Vercel → Deployments → deployment anterior
  → ⋯ → *Promote to Production*. Efecto inmediato.
- **Opción por código**: `git revert <commit>` + push — Vercel redeploya solo.
- Si el problema es del dominio/DNS: los deployments `*.vercel.app` siguen
  funcionando como respaldo para diagnosticar.

## 7. Smoke tests post-deploy (checklist del día del lanzamiento)

- [ ] La home carga en `https://soleiltech.cl` con candado (HTTPS válido).
- [ ] Tema claro/oscuro alterna y persiste al navegar.
- [ ] Formulario de contacto: **un envío real de prueba** llega a
      `nicolasjerez.soleiltech@gmail.com` (etiqueta SoleilTech Solicitudes).
- [ ] Botón de WhatsApp abre el chat con el número correcto.
- [ ] Ruta inexistente muestra la 404 propia.
- [ ] `https://soleiltech.cl/robots.txt` y `/sitemap.xml` responden con el
      dominio real.
- [ ] Favicon visible en la pestaña; compartir la URL por WhatsApp se ve
      correcto.
- [ ] Lighthouse rápido sobre la URL real (esperado: A11y/BP/SEO 100).
- [ ] Monitor de UptimeRobot activo y alerta de prueba recibida.
