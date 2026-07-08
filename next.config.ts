import type { NextConfig } from "next";

// BUILD_STATIC=true produce una exportación 100% estática en `out/`
// (entregable demo portable). El build normal para hosting no cambia.
const isStaticExport = process.env.BUILD_STATIC === "true";

const nextConfig: NextConfig = {
  ...(isStaticExport && {
    output: "export" as const,
    images: { unoptimized: true },
  }),
  // Headers de seguridad (F17). No aplican al export estático (no soportado);
  // en el demo local no hay exposición y en Vercel sí se sirven.
  ...(!isStaticExport && {
    async headers() {
      return [
        {
          source: "/:path*",
          headers: [
            { key: "X-Content-Type-Options", value: "nosniff" },
            { key: "X-Frame-Options", value: "DENY" },
            { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
            {
              key: "Permissions-Policy",
              value: "camera=(), microphone=(), geolocation=()",
            },
            {
              key: "Strict-Transport-Security",
              value: "max-age=63072000; includeSubDomains",
            },
          ],
        },
      ];
    },
  }),
};

export default nextConfig;
