import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { ComingSoonBadge } from "@/components/coming-soon-badge";
import { services } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Desarrollo de software, apps móviles y sitios web en Chile. Infraestructura técnica en terreno, próximamente.",
};

export default function ServiciosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="max-w-2xl text-center sm:text-left">
        <h1 className="font-display text-3xl sm:text-4xl">
          Servicios
        </h1>
        <p className="mt-4 text-muted-foreground">
          Hoy desarrollamos software, apps y sitios web. La infraestructura
          técnica en terreno está marcada como próximamente. Cada proyecto
          parte con una conversación para entender tu requerimiento real
          antes de proponer una solución.
        </p>
      </div>

      <div className="mt-14 flex flex-col gap-16">
        {services.map((service, i) => (
          <div
            key={service.slug}
            id={service.slug}
            className={`scroll-mt-24 grid gap-8 border-t border-border pt-10 md:grid-cols-[auto_1fr] md:items-start ${
              service.comingSoon ? "coming-soon-block" : ""
            }`}
          >
            <span className="text-sm font-semibold text-muted-foreground">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="font-display text-2xl">{service.title}</h2>
                {service.comingSoon && <ComingSoonBadge service={service.title} />}
              </div>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                {service.description}
              </p>
              <ul className="mt-5 flex flex-col gap-2">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-sm">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        service.comingSoon ? "text-muted-foreground" : "text-primary"
                      }`}
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-center gap-4 rounded-3xl border border-border bg-surface px-8 py-12 text-center">
        <h2 className="font-display text-xl sm:text-2xl">
          ¿No estás seguro qué servicio necesitas?
        </h2>
        <p className="max-w-lg text-sm text-muted-foreground">
          Cuéntanos tu problema u objetivo y te damos una recomendación
          profesional, sin costo por la conversación inicial.
        </p>
        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Solicitar cotización <ArrowRight className="h-4 w-4" />
          </Link>
          <WhatsAppButton />
        </div>
      </div>
    </div>
  );
}
