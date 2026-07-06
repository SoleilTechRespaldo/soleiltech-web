# 01 — Requerimientos

> Documento generado al adoptar la metodología sobre un proyecto ya construido
> (2026-07-05). Registra los requerimientos que el sitio v1 debe cumplir y los
> confirmados con el usuario en la puerta G1.

## Objetivo

Sitio web corporativo y de ventas de **SoleilTech**, empresa chilena que
entrega soluciones informáticas: desarrollo de software a medida, aplicaciones
móviles y sitios/tiendas web. A futuro sumará servicios presenciales de
instalación (redes, cámaras de seguridad, infraestructura TI).

El sitio debe:

1. Presentar los servicios con claridad y generar confianza profesional.
2. Convertir visitas en contactos (leads) por formulario o WhatsApp.
3. Mostrar los servicios futuros como "próximamente" sin venderlos aún.

## Problema que resuelve

SoleilTech necesita presencia web profesional para captar clientes pyme.
Sin sitio, la venta depende solo del boca a boca y no hay dónde derivar a un
interesado para que conozca los servicios y deje su solicitud.

## Público objetivo

Pymes chilenas (comercios, oficinas, bodegas, servicios) que necesitan
software, apps, sitios web o infraestructura TI, sin equipo técnico propio.
Idioma: español de Chile (`es-CL`). Moneda de referencia: CLP.

## Actores

| Actor | Descripción |
|---|---|
| Visitante / cliente potencial | Único actor. Navega, lee servicios y envía una solicitud de contacto. |

No hay usuarios registrados, roles ni administradores en v1: el contenido se
edita en el código (`src/lib/site-config.ts`) y se publica con un deploy.

## Requerimientos funcionales

### Imprescindibles (todos implementados en v1)

| # | Funcionalidad | Estado |
|---|---|---|
| RF-01 | Página de inicio con propuesta de valor, servicios destacados y llamados a la acción | ✅ |
| RF-02 | Página de servicios: 3 activos (software, apps móviles, sitios/tiendas web) + 2 "próximamente" (redes y cámaras, infraestructura TI) | ✅ |
| RF-03 | Formulario de contacto que envía la solicitud al correo de la empresa (Web3Forms) con selección de servicio | ✅ (falta Access Key) |
| RF-04 | Respaldo ante fallo del formulario: derivar a WhatsApp para no perder la venta | ✅ |
| RF-05 | Botón flotante de WhatsApp en todo el sitio | ✅ |
| RF-06 | Página "Nosotros" (quiénes somos, cómo trabajamos) | ✅ |
| RF-07 | Página de proyectos/portafolio | ✅ (estado vacío honesto; contenido real pendiente) |
| RF-08 | Páginas legales: privacidad y términos | ✅ |
| RF-09 | Tema claro/oscuro con la paleta de marca | ✅ |
| RF-10 | Página 404 propia | ✅ |
| RF-11 | SEO técnico: metadata, Open Graph, sitemap, robots, manifest | ✅ |

### Importantes (pendientes para lanzar)

| # | Tarea | Notas |
|---|---|---|
| RI-01 | Configurar Access Key de Web3Forms | Usuario crea la cuenta; decisión G1 2026-07-05 |
| RI-02 | Comprar dominio `soleiltech.cl` (NIC Chile) | Decisión G1: pendiente de compra |
| RI-03 | Reemplazar estado vacío de `/proyectos` con proyectos reales | Cuando existan casos |
| RI-04 | Respaldo remoto (GitHub privado) y deploy (Vercel) | Usuario decidió postergar: solo Git local por ahora |
| RI-05 | Correo corporativo (hoy recibe en Gmail personal) | Requiere dominio propio |

### Deseables (v2 — fuera de alcance de v1)

- Cotizador en línea / calculadora de presupuesto.
- Blog o contenidos SEO.
- Panel de administración o CMS para editar contenido sin tocar código.
- Correo transaccional con confirmación automática al cliente (Resend/Postmark + dominio).
- Analytics (Vercel Analytics o similar).
- Portal de clientes (seguimiento de proyectos).

## Requerimientos no funcionales

| Categoría | Requerimiento |
|---|---|
| Rendimiento | Sitio estático pre-renderizado, sin base de datos ni backend propio; carga rápida en móvil |
| Responsive | Móvil, tablet y escritorio |
| Accesibilidad | Básica: skip-link, labels en formularios, foco visible, contraste de la paleta |
| SEO | Metadata por página, sitemap.xml, robots.txt (con `/preview/` excluido), Open Graph |
| Seguridad | Sin datos sensibles almacenados; secretos solo en variables de entorno; formulario declara uso de datos y enlaza a privacidad |
| Privacidad | Los datos del formulario se usan solo para responder la solicitud |
| Disponibilidad | La del hosting (Vercel previsto); sin SLA propio en v1 |

## Fuera de alcance (v1)

- Backend propio, base de datos, autenticación de usuarios.
- Pagos en línea.
- Blog, CMS, multi-idioma.
- Venta activa de los servicios presenciales (solo se anuncian como "próximamente").

## Restricciones

- Presupuesto mínimo: hosting gratuito previsto (Vercel hobby), formulario gratuito (Web3Forms).
- Equipo de una persona (Nicolás).
- Dominio `.cl` aún no comprado; el sitio usa `https://soleiltech.cl` como URL canónica objetivo.
