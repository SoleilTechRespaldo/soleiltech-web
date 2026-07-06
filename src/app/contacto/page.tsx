import type { Metadata } from "next";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Solicita una cotización o cuéntanos tu requerimiento. Te respondemos por correo o WhatsApp.",
};

export default function ContactoPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <div className="max-w-2xl">
        <h1 className="font-display text-3xl sm:text-4xl">
          Contacto
        </h1>
        <p className="mt-4 text-muted-foreground">
          Cuéntanos qué necesitas y coordinamos una reunión virtual o
          presencial para definir el alcance del proyecto.
        </p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
        <div className="flex flex-col gap-6">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Correo
            </h2>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-3 flex items-center gap-2 text-base font-medium hover:text-primary"
            >
              <Mail className="h-5 w-5 text-primary" />
              {siteConfig.email}
            </a>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              WhatsApp
            </h2>
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center gap-2 text-base font-medium hover:text-primary"
            >
              <MessageCircle className="h-5 w-5 text-primary" />
              {siteConfig.whatsappDisplay}
            </a>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Cobertura
            </h2>
            <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              Trabajamos con empresas en todo Chile. Reuniones virtuales o
              presenciales según la disponibilidad de ambas partes, para
              levantar requerimientos, firmar acuerdos y coordinar entregas.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
