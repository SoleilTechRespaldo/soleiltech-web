# CHECKLIST — SoleilTech (sitio web corporativo)

> Fuente única de verdad del avance del proyecto. Se actualiza al completar
> cada tarea, no al final. Metodología: Checklist Maestro SDLC (19 fases).

- **Proyecto:** SoleilTech — sitio web de ventas
- **Descripción:** Sitio corporativo para captar clientes de software a medida, apps móviles y sitios web; servicios presenciales (redes, cámaras, infraestructura TI) anunciados como "próximamente".
- **Stack:** Next.js 16.2.10 + React 19.2.4 + TypeScript 5.9.3 + Tailwind 4.3.2 (detalle en [docs/02-STACK.md](docs/02-STACK.md))
- **Inicio:** 2026-07-05 (adopción de metodología sobre sitio ya construido) · **Última actualización:** 2026-07-07
- **Fase actual:** 17 — Preparación para producción

Estados: ☐ pendiente · 🔄 en desarrollo · ✅ terminado · ➖ no aplica

## Próximos pasos inmediatos

1. ✅ ~~Crear cuenta Web3Forms y configurar Access Key~~ (2026-07-06, en `.env.local`; ligada a `nicolasjerez.soleiltech@gmail.com`)
2. ✅ ~~Probar el formulario de punta a punta~~ (2026-07-06: envío real OK + **correo confirmado por el usuario** — llega a la pestaña Promociones; creó la etiqueta "SoleilTech Solicitudes" para marcarlas al tiro).
3. ✅ ~~Pruebas de la Fase 15~~ (2026-07-07: modo oscuro verificado en las 8 páginas, formulario con datos imperfectos bloqueado correctamente, 404 propia OK, consola limpia, lint limpio, responsive verificado en 375/800/1280).
4. ☐ **Usuario:** comprar dominio `soleiltech.cl` en https://www.nic.cl (~$10.000 CLP/año) — lo hará el **próximo mes** (agosto 2026, con el pago).
5. ☐ Repo privado en GitHub + Vercel — **en cuenta GitHub de la empresa**, cuando estén: decisión de previews + dominio comprado + correo corporativo Gmail.
6. ☐ Reemplazar estado vacío de `/proyectos` — usuario está perfeccionando los proyectos antes de publicarlos.
7. ✅ ~~Decidir destino de las páginas `/preview`~~ (2026-07-06: mostradas al usuario, no le gustaron → **eliminadas**; recuperables desde el historial de Git).
8. ✅ ~~Confirmar número de WhatsApp~~ (2026-07-06: `+56 9 6508 5810` es el personal y es correcto **por ahora**; comprará un chip de empresa → cambiar en `site-config.ts` cuando llegue).

## Estado de fases

| # | Fase | Estado | Fecha |
|---|---|---|---|
| 1 | Levantamiento de requerimientos | ✅ | 2026-07-05 |
| 2 | Definición tecnológica | ✅ | 2026-07-05 |
| 3 | Diseño visual (design system) | ✅ | 2026-07-05 |
| 4 | Arquitectura del proyecto | ✅ | 2026-07-05 |
| 5 | Crear el proyecto local (Git incluido) | ✅ | 2026-07-05 |
| 6 | Repositorio privado en GitHub | ☐ | postergado por decisión del usuario |
| 7 | Documentación inicial | ✅ | 2026-07-05 |
| 8 | Checklist general | ✅ | 2026-07-05 |
| 9 | Diseño UX/UI (mockups) | ✅ | adoptado — sitio ya construido; propuestas `/preview` descartadas 2026-07-06 |
| 10 | Diseño de base de datos | ➖ | sin BD en v1 |
| 11 | Desarrollo backend | ➖ | sin backend propio en v1 |
| 12 | Desarrollo frontend | ✅ | adoptado — todas las pantallas construidas |
| 13 | Integración | ➖ | sin backend que integrar (adaptación "sitio estático") |
| 14 | Integraciones externas | ✅ | 2026-07-06 — Web3Forms configurado y probado (envío real exitoso) |
| 15 | Pruebas | ✅ | 2026-07-07 |
| 16 | Optimización | ✅ | 2026-07-07 — Lighthouse: A11y 94→100, Perf 96-97, BP 100, SEO 100 |
| 17 | Preparación para producción | 🔄 | 2026-07-07 — headers ✅, runbook + rollback + monitoreo documentados (docs/06); resta activar dominio/HTTPS/monitor al desplegar |
| 18 | Despliegue | ☐ | |
| 19 | Mantenimiento | ☐ | inicia con el lanzamiento |

### Fases omitidas y por qué

- **F10, F11, F13** — sitio estático sin base de datos ni backend propio
  (adaptación oficial de la metodología para "sitio estático / landing").
  La v2 (cotizador, panel, etc.) las reactivará como mini-ciclo completo.

### Puertas de control

- [x] **G1** Requerimientos y alcance confirmados: consolidar sitio existente como v1 (2026-07-05)
- [x] **G2** Stack aprobado al consolidar (2026-07-05)
- [x] **G3** "Mockups" = sitio construido, aprobado al consolidar; BD no aplica (2026-07-05)
- [x] **G4** Única integración externa (Web3Forms) autorizada por el usuario (2026-07-05)
- [ ] **G5** Autorizado el despliegue a producción — **pendiente** (usuario decidió: solo Git local por ahora)

---

## Frontend (pantallas reales)

- [x] Design system aplicado (tokens en `globals.css`, tema claro/oscuro)
- [x] Layout general: Header + navegación + Footer + botón WhatsApp flotante
- [x] Pantalla: Inicio (`/`)
- [x] Pantalla: Servicios (`/servicios`) — 3 activos + 2 "próximamente"
- [x] Pantalla: Proyectos (`/proyectos`) — estado vacío honesto
- [ ] Contenido real del portafolio en `/proyectos`
- [x] Pantalla: Nosotros (`/nosotros`)
- [x] Pantalla: Contacto (`/contacto`) — formulario con estados carga/éxito/error + fallback WhatsApp
- [x] Pantallas legales: Privacidad y Términos
- [x] Página 404 propia
- [x] Validaciones de formulario (required, email, tel)
- [x] Estados de carga / error / vacío donde aplica
- [x] Responsive (verificación formal pendiente en F15)
- [x] Móvil: hero y encabezados centrados en todas las páginas (2026-07-06, pedido del usuario)
- [x] Accesibilidad básica (skip-link, labels, foco, contraste de paleta)
- [x] Tema oscuro
- [x] `/preview` eliminadas — propuestas descartadas por el usuario (2026-07-06; en historial Git)

## Backend

➖ **No aplica en v1** — sin backend propio. El formulario usa Web3Forms
(servicio externo). Reactivar esta sección en la v2.

## Base de datos

➖ **No aplica en v1** — sin datos persistentes propios.

## Seguridad (adaptada a sitio estático)

- [x] Secretos solo en variables de entorno (`.env*` ignorado; `NEXT_PUBLIC_WEB3FORMS_KEY` es pública por diseño del servicio)
- [x] `.env.example` documentado y versionado (sin valores reales)
- [x] XSS: sin renderizado de contenido de usuario; React escapa por defecto
- [x] Formulario declara uso de datos y enlaza a `/privacidad`
- [x] Headers de seguridad (2026-07-07: nosniff, X-Frame-Options DENY, Referrer-Policy, Permissions-Policy, HSTS — en `next.config.ts`, verificados sobre `next start`)
- ➖ Hash de contraseñas, JWT/sesiones, roles, IDOR, SQLi — sin auth ni BD en v1
- ➖ Rate limiting — lo gestiona Web3Forms en su endpoint

## Infraestructura

- [x] Variables de entorno (`.env.example` documentado)
- [ ] Repositorio remoto privado en GitHub (comandos listos abajo)
- [ ] Deploy en Vercel (pendiente de autorización — puerta G5)
- [ ] Dominio `soleiltech.cl` comprado (NIC Chile) y configurado
- [ ] SSL/HTTPS (automático con Vercel al desplegar)
- [ ] Monitoreo básico (uptime + errores) — **plan definido** en [docs/06-PRODUCCION.md](docs/06-PRODUCCION.md) (UptimeRobot + logs de Vercel); se activa el día del deploy
- ➖ Backups de BD — sin BD; el respaldo del código es Git (remoto pendiente)
- ➖ Docker/CI — innecesario para este alcance

### Comandos listos para la Fase 6 (cuando se autorice)

```bash
# con GitHub CLI autenticado (gh auth login):
gh repo create soleiltech-web --private --source=. --push
git checkout -b develop && git push -u origin develop
```

## Calidad

- [x] Linter configurado y sin errores (`npm run lint`)
- [x] Build de producción compila sin errores (`npm run build`)
- [x] Pruebas manuales documentadas (F15, 2026-07-07): tema oscuro en las 8 páginas (fondo `#0B1437` y logo oro verificados) · formulario: vacío bloqueado, correo inválido bloqueado con mensaje, texto largo con tildes/ñ/emoji/`<script>` sin romper layout, botón deshabilitado durante envío · 404 propia renderiza · consola del navegador sin errores ni warnings · responsive 375/800/1280
- [x] Prueba real del formulario con la Access Key (2026-07-06: POST 200 + pantalla de éxito, con tildes/eñes en el mensaje)
- [x] Lighthouse / Core Web Vitals (F16, 2026-07-07): inicio/contacto/servicios = A11y **100**, BP **100**, SEO **100**, Perf 96–97 (LCP 2,6 s simulado con throttling 4G — piso del hero con fuente display; CLS 0.001, TBT 50 ms)
- ➖ Pruebas unitarias/integración — sin lógica de negocio propia en v1; reevaluar en v2

## Documentación

- [x] README completo (instalación, configuración, scripts, estructura)
- [x] docs/01-REQUERIMIENTOS.md
- [x] docs/02-STACK.md
- [x] docs/03-DISENO.md
- [x] docs/04-ARQUITECTURA.md
- ➖ docs/05-BASE-DE-DATOS.md — sin BD en v1
- [x] docs/06-PRODUCCION.md — runbook de despliegue, monitoreo, rollback y smoke tests (2026-07-07)
- [x] docs/DECISIONES.md al día
- [ ] CHANGELOG.md (desde el primer release/deploy)
- ➖ Documentación de API — sin API propia

---

## Mantenimiento (vivo desde el lanzamiento)

### Errores encontrados

| Fecha | Descripción | Gravedad | Estado |
|---|---|---|---|
| | | | |

### Mejoras futuras / nuevas funcionalidades (backlog v2)

| Prioridad | Descripción | Estado |
|---|---|---|
| Alta | Portafolio real en `/proyectos` | ☐ |
| Alta | Correo corporativo con dominio propio | ☐ |
| Alta | WhatsApp de empresa (chip nuevo) → actualizar `site-config.ts` | ☐ |
| Media | Analytics (Vercel Analytics o similar) | ☐ |
| Media | Cotizador en línea | ☐ |
| Media | Correo transaccional al cliente (Resend/Postmark) | ☐ |
| Baja | Blog / contenidos SEO | ☐ |
| Baja | CMS o panel para editar contenido sin código | ☐ |
| Baja | Portal de clientes (seguimiento de proyectos) | ☐ |

### Incidencias de producción

| Fecha | Qué pasó | Causa | Corrección | Prevención |
|---|---|---|---|---|
| | | | | |

### Historial de versiones

| Versión | Fecha | Cambios principales |
|---|---|---|
| (v1.0.0 al desplegar) | | |
