import type { NextConfig } from "next";

// BUILD_STATIC=true produce una exportación 100% estática en `out/`
// (entregable demo portable). El build normal para hosting no cambia.
const isStaticExport = process.env.BUILD_STATIC === "true";

const nextConfig: NextConfig = {
  ...(isStaticExport && {
    output: "export" as const,
    images: { unoptimized: true },
  }),
};

export default nextConfig;
