import type { NextConfig } from "next";

// BUILD_STATIC=true produce una exportación 100% estática en `out/` para
// Cloudflare Pages (y para el demo portable). En ese modo Next NO aplica
// headers() — los headers de seguridad los sirve Cloudflare vía `public/_headers`.
const isStaticExport = process.env.BUILD_STATIC === "true";

// CSP sin nonces, apta para estático/SSG (ver references/lecciones-aprendidas →
// Web de ventas). Permite: self; estilos/scripts inline (Next/Tailwind/next-themes);
// imágenes data: (ruido de fondo); y el POST del formulario a Web3Forms.
// MANTENER EN SINCRONÍA con `public/_headers` (ese es el que rige en Cloudflare).
const CSP = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "img-src 'self' data:",
  "font-src 'self'",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' 'unsafe-inline'",
  "connect-src 'self' https://api.web3forms.com",
  "form-action 'self' https://api.web3forms.com",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: CSP },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains",
  },
];

const nextConfig: NextConfig = {
  ...(isStaticExport && {
    output: "export" as const,
    images: { unoptimized: true },
  }),
  // En build normal (`next start` / Vercel) Next aplica estos headers. En el
  // export para Cloudflare no corren → se replican en `public/_headers`.
  ...(!isStaticExport && {
    async headers() {
      return [{ source: "/:path*", headers: securityHeaders }];
    },
  }),
};

export default nextConfig;
