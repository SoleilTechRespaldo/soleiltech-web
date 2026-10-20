export const siteConfig = {
  name: "SoleilTech",
  tagline: "Desarrollo de software a medida para empresas chilenas",
  description:
    "Software a medida, apps móviles y sitios web para empresas en Chile, con recomendación profesional en cada proyecto.",
  url: "https://soleiltech.cl",
  email: "nicolasjerez.soleiltech@gmail.com",
  whatsapp: "56965085810",
  get whatsappLink() {
    return `https://wa.me/${this.whatsapp}`;
  },
  whatsappDisplay: "+56 9 6508 5810",
  locale: "es-CL",
  currency: "CLP",
};

export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  bullets: string[];
  comingSoon?: boolean;
};

export type HeroBadge = {
  label: string;
  scope?: string;
  comingSoon?: boolean;
};

export const heroBadges: HeroBadge[] = [
  { label: "Software · apps · web", scope: "Trabajos nacionales" },
  // OCULTO — Badge de "infraestructura en terreno". Parqueado hasta iniciar esa
  // línea de trabajo (va junto con `futureServices`, más abajo). Para mostrarlo
  // de nuevo, descomentar este objeto:
  // {
  //   label: "Infraestructura en terreno",
  //   scope: "Región de Valparaíso",
  //   comingSoon: true,
  // },
];

export const services: Service[] = [
  {
    slug: "desarrollo-software",
    title: "Desarrollo de software a medida",
    short: "Sistemas y herramientas hechas para tu operación.",
    description:
      "Construimos software a medida para automatizar procesos, gestionar inventario, ventas u operaciones internas, adaptado a cómo trabaja realmente tu empresa.",
    bullets: [
      "Levantamiento de requerimientos junto a ti",
      "Sistemas internos, dashboards y automatizaciones",
      "Integración con herramientas que ya usas",
    ],
  },
  {
    slug: "apps-moviles",
    title: "Aplicaciones móviles",
    short: "Apps Android/iOS para tu negocio o tus clientes.",
    description:
      "Diseñamos y desarrollamos apps móviles funcionales, con foco en una experiencia simple para tus usuarios y mantenibles en el tiempo.",
    bullets: [
      "Apps nativas o multiplataforma según el proyecto",
      "Diseño según tu logo e identidad de marca",
      "Publicación acompañada en las tiendas de apps",
    ],
  },
  {
    slug: "sitios-y-tiendas-web",
    title: "Sitios y tiendas web",
    short: "Presencia web profesional, rápida y clara.",
    description:
      "Sitios corporativos, landing pages y tiendas online pensadas para convertir visitas en contactos o ventas reales.",
    bullets: [
      "Diseño responsive, con tema claro y oscuro si aplica",
      "Formularios de contacto y solicitud conectados a tu correo",
      "Bases para SEO desde el primer día",
    ],
  },
];

// OCULTO — Servicios de infraestructura en terreno (redes/cámaras e
// infraestructura TI). Parqueados hasta que de verdad se inicie esa línea de
// trabajo. NO se renderizan en ninguna página: nadie importa `futureServices`.
// Para MOSTRARLOS de nuevo: mover estos objetos al arreglo `services` de arriba
// y descomentar el badge en `heroBadges`.
export const futureServices: Service[] = [
  {
    slug: "redes-y-camaras",
    title: "Instalación de redes y cámaras",
    short: "Cableado, WiFi y videovigilancia bien hechos.",
    description:
      "Instalación y configuración de redes de datos, WiFi y sistemas de cámaras de seguridad para oficinas, locales y bodegas.",
    bullets: [
      "Cableado estructurado y puntos de red",
      "Configuración de WiFi y equipos de red",
      "Cámaras de seguridad con acceso remoto",
    ],
    comingSoon: true,
  },
  {
    slug: "infraestructura-ti",
    title: "Infraestructura informática",
    short: "Servidores, equipos y soporte técnico ordenado.",
    description:
      "Diseño e implementación de infraestructura TI: servidores, respaldo de datos, equipos de trabajo y soporte técnico continuo.",
    bullets: [
      "Instalación y configuración de servidores",
      "Políticas de respaldo y seguridad básica",
      "Soporte técnico y mantención",
    ],
    comingSoon: true,
  },
];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  short: string;
  href: string;
  statusLabel: string;
};

// Productos/desarrollos propios de SoleilTech. La tarjeta en /proyectos enlaza a
// la página propia de cada uno (href).
export const projects: Project[] = [
  {
    slug: "lumenstock",
    name: "LumenStock",
    tagline: "Inventario · Ventas",
    short:
      "Punto de venta e inventario para el comercio chileno: ventas, stock, boleta, cobro con QR de Mercado Pago y dashboards. Funciona sin internet.",
    href: "/lumenstock",
    statusLabel: "En desarrollo",
  },
];
