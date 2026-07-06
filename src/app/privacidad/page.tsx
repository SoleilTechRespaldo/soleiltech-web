import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacidad",
  description: "Política de privacidad de SoleilTech.",
};

export default function PrivacidadPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h1 className="text-3xl font-extrabold tracking-tight">Política de privacidad</h1>
      <div className="mt-8 flex flex-col gap-6 text-sm leading-relaxed text-muted-foreground">
        <p>
          Esta página describe cómo {siteConfig.name} trata la información
          que entregas a través del formulario de contacto de este sitio.
        </p>
        <p>
          <strong className="text-foreground">Qué recopilamos:</strong>{" "}
          nombre, correo electrónico, teléfono y la descripción del
          requerimiento que ingreses voluntariamente en el formulario de
          contacto.
        </p>
        <p>
          <strong className="text-foreground">Para qué se usa:</strong>{" "}
          únicamente para responder tu solicitud y coordinar una eventual
          propuesta de trabajo. No compartimos esta información con
          terceros ni la usamos con fines distintos.
        </p>
        <p>
          <strong className="text-foreground">Dónde se envía:</strong> el
          formulario envía tu solicitud directamente al correo de{" "}
          {siteConfig.name}. Si prefieres, puedes contactarnos por WhatsApp
          o correo directamente.
        </p>
        <p>
          <strong className="text-foreground">Tus derechos:</strong> puedes
          solicitar la eliminación de tus datos escribiendo a{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">
            {siteConfig.email}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
