# CHECKLIST — SoleilTech (sitio web corporativo)

> Fuente única de verdad del avance del proyecto. Se actualiza al completar
> cada tarea, no al final. Metodología: Checklist Maestro SDLC (19 fases).

- **Proyecto:** SoleilTech — sitio web de ventas
- **Descripción:** Sitio corporativo para captar clientes de software a medida, apps móviles y sitios web; servicios presenciales (redes, cámaras, infraestructura TI) anunciados como "próximamente".
- **Stack:** Next.js 16.2.10 + React 19.2.4 + TypeScript 5.9.3 + Tailwind 4.3.2 (detalle en [docs/02-STACK.md](docs/02-STACK.md))
- **Inicio:** 2026-07-05 (adopción de metodología sobre sitio ya construido) · **Última actualización:** 2026-07-06
- **Fase actual:** 15 — Pruebas

Estados: ☐ pendiente · 🔄 en desarrollo · ✅ terminado · ➖ no aplica

## Próximos pasos inmediatos

1. ✅ ~~Crear cuenta Web3Forms y configurar Access Key~~ (2026-07-06, en `.env.local`; ligada a `nicolasjerez.soleiltech@gmail.com`)
2. ✅ ~~Probar el formulario de punta a punta~~ (2026-07-06: envío real OK + **correo confirmado por el usuario** — llega a la pestaña Promociones; creó la etiqueta "SoleilTech Solicitudes" para marcarlas al tiro).
3. 🔄 Pruebas de la Fase 15 (flujos, responsive real, datos imperfectos). Avance 2026-07-06: hero y encabezados centrados en móvil a pedido del usuario.
4. ☐ **Usuario:** comprar dominio `soleiltech.cl` en https://www.nic.cl (~$10.000 CLP/año) — lo hará el **próximo mes** (agosto 2026, con el pago).
5. ☐ Repo privado en GitHub + Vercel — **en cuenta GitHub de la empresa**, cuando estén: decisión de previews + dominio comprado + correo corporativo Gmail.
6. ☐ Reemplazar estado vacío de `/proyectos` — usuario está perfeccionando los proyectos antes de publicarlos.
7. ☐ Decidir destino de las páginas `/preview` (previews mostradas al usuario 2026-07-06, decisión en curso).
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
| 9 | Diseño UX/UI (mockups) | ✅ | adoptado — sitio ya construido; 2 propuestas extra en `/preview` |
| 10 | Diseño de base de datos | ➖ | sin BD en v1 |
| 11 | Desarrollo backend | ➖ | sin backend propio en v1 |
| 12 | Desarrollo frontend | ✅ | adoptado — todas las pantallas construidas |
| 13 | Integración | ➖ | sin backend que integrar (adaptación "sitio estático") |
| 14 | Integraciones externas | ✅ | 2026-07-06 — Web3Forms configurado y probado (envío real exitoso) |
| 15 | Pruebas | ☐ | |
| 16 | Optimización | ☐ | |
| 17 | Preparación para producción | ☐ | |
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
- [x] Móvil: hero y encabezados de sección centrados (2026-07-06, pedido del usuario)
- [x] Accesibilidad básica (skip-link, labels, foco, contraste de paleta)
- [x] Tema oscuro
- [ ] Decidir destino de `/preview` (propuestas internas, hoy excluidas de robots)

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
- [ ] Headers de seguridad (revisar en F17; Vercel trae valores razonables)
- ➖ Hash de contraseñas, JWT/sesiones, roles, IDOR, SQLi — sin auth ni BD en v1
- ➖ Rate limiting — lo gestiona Web3Forms en su endpoint

## Infraestructura

- [x] Variables de entorno (`.env.example` documentado)
- [ ] Repositorio remoto privado en GitHub (comandos listos abajo)
- [ ] Deploy en Vercel (pendiente de autorización — puerta G5)
- [ ] Dominio `soleiltech.cl` comprado (NIC Chile) y configurado
- [ ] SSL/HTTPS (automático con Vercel al desplegar)
- [ ] Monitoreo básico (uptime + errores) — definir en F17
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
- [ ] Pruebas manuales documentadas (F15): flujos, datos imperfectos (tildes, ñ, textos largos, doble click), responsive real
- [x] Prueba real del formulario con la Access Key (2026-07-06: POST 200 + pantalla de éxito, con tildes/eñes en el mensaje)
- [ ] Lighthouse / Core Web Vitals (F16)
- ➖ Pruebas unitarias/integración — sin lógica de negocio propia en v1; reevaluar en v2

## Documentación

- [x] README completo (instalación, configuración, scripts, estructura)
- [x] docs/01-REQUERIMIENTOS.md
- [x] docs/02-STACK.md
- [x] docs/03-DISENO.md
- [x] docs/04-ARQUITECTURA.md
- ➖ docs/05-BASE-DE-DATOS.md — sin BD en v1
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
