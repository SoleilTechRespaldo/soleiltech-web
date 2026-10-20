import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Cctv,
  Check,
  Code2,
  Globe,
  Server,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { ComingSoonBadge } from "@/components/coming-soon-badge";
import { services } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Desarrollo de software, apps móviles y sitios web para empresas en Chile, con recomendación profesional en cada proyecto.",
};

const serviceIcons: Record<string, LucideIcon> = {
  "desarrollo-software": Code2,
  "apps-moviles": Smartphone,
  "sitios-y-tiendas-web": Globe,
  "redes-y-camaras": Cctv,
  "infraestructura-ti": Server,
};

// Micro-animación "acorde" a cada servicio (keyframes en globals.css).
const serviceAnim: Record<string, string> = {
  "desarrollo-software": "anim-code", // cursor que parpadea
  "apps-moviles": "anim-mobile", // leve rebote, como una notificación
  "sitios-y-tiendas-web": "anim-web", // giro lento del globo
};

export default function ServiciosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="max-w-2xl text-center sm:text-left">
        <h1 className="font-display text-3xl sm:text-4xl">
          Servicios
        </h1>
        <p className="mt-4 text-muted-foreground">
          Desarrollamos software, apps y sitios web. Cada proyecto parte con una
          conversación para entender tu requerimiento real antes de proponer una
          solución.
        </p>
      </div>

      <div className="mt-14 flex flex-col gap-16">
        {services.map((service) => {
          const Icon = serviceIcons[service.slug] ?? Code2;
          return (
          <div
            key={service.slug}
            id={service.slug}
            className={`reveal scroll-mt-24 border-t border-border pt-10 ${
              service.comingSoon ? "coming-soon-block" : ""
            }`}
          >
            <div>
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                    service.comingSoon ? "bg-surface-muted" : "bg-primary/10"
                  }`}
                >
                  <Icon
                    className={`h-5 w-5 ${
                      service.comingSoon
                        ? "text-muted-foreground"
                        : `text-primary ${serviceAnim[service.slug] ?? ""}`
                    }`}
                  />
                </span>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h2 className="font-display text-2xl">{service.title}</h2>
                  {service.comingSoon && <ComingSoonBadge service={service.title} />}
                </div>
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
          );
        })}
      </div>

      <div className="reveal shadow-card mt-16 flex flex-col items-center gap-4 rounded-3xl border border-border bg-surface px-8 py-12 text-center">
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
