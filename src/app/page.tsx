import Link from "next/link";
import { ArrowRight, Code2, Network, ShieldCheck } from "lucide-react";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { ComingSoonBadge } from "@/components/coming-soon-badge";
import { HeroIllustration } from "@/components/hero-illustration";
import { services, heroBadges } from "@/lib/site-config";

const valueProps = [
  {
    icon: Code2,
    title: "Trabajo a medida",
    text: "Cada proyecto se levanta según tus requerimientos reales, no una plantilla genérica.",
  },
  {
    icon: ShieldCheck,
    title: "Recomendación profesional",
    text: "Te decimos qué conviene técnicamente, no solo lo que pides — con opciones claras.",
  },
  {
    icon: Network,
    title: "Pensado para crecer contigo",
    text: "Partimos por lo que tu negocio necesita hoy y sumamos capacidades a medida que creces, sin rehacer todo.",
  },
];

export default function Home() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 md:items-center md:py-28">
          <div className="text-center md:text-left">
            <div className="animate-rise flex flex-wrap justify-center gap-2 md:justify-start">
              {heroBadges.map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex flex-wrap items-center justify-center gap-1.5 rounded-full border border-border bg-surface-muted px-3 py-1 text-xs font-semibold text-muted-foreground"
                >
                  {badge.label}
                  {badge.scope && (
                    <span className="font-normal">· {badge.scope}</span>
                  )}
                  {badge.comingSoon && <ComingSoonBadge service={badge.label} />}
                </span>
              ))}
            </div>
            <h1
              className="animate-rise mt-5 font-display text-4xl leading-tight tracking-tight sm:text-5xl"
              style={{ animationDelay: "70ms" }}
            >
              Su próximo amanecer digital
            </h1>
            <p
              className="animate-rise mx-auto mt-5 max-w-lg text-base text-muted-foreground sm:text-lg md:mx-0"
              style={{ animationDelay: "140ms" }}
            >
              Desarrollamos software, apps móviles y sitios web para empresas
              chilenas de todos los tamaños — con recomendación profesional en
              cada proyecto.
            </p>
            <div
              className="animate-rise mt-8 flex flex-wrap justify-center gap-3 md:justify-start"
              style={{ animationDelay: "210ms" }}
            >
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-card transition hover:-translate-y-0.5 hover:opacity-90"
              >
                Solicitar cotización
                <ArrowRight className="h-4 w-4" />
              </Link>
              <WhatsAppButton className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition hover:border-secondary hover:text-secondary" />
            </div>
          </div>

          <div className="animate-rise" style={{ animationDelay: "140ms" }}>
            <HeroIllustration />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {valueProps.map((item) => (
            <div
              key={item.title}
              className="card-elevated reveal rounded-2xl border border-border bg-surface p-6"
            >
              <span className="icon-tile">
                <item.icon className="h-6 w-6" />
              </span>
              <h2 className="mt-5 text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="flex items-end justify-center gap-4 text-center sm:justify-between sm:text-left">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl">Qué hacemos</h2>
              <p className="mt-2 text-muted-foreground">
                Software, apps y sitios web, pensados para tu operación.
              </p>
            </div>
            <Link
              href="/servicios"
              className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-primary hover:underline sm:inline-flex"
            >
              Ver todos <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) =>
              service.comingSoon ? (
                <div
                  key={service.slug}
                  className="coming-soon-block reveal rounded-2xl border border-border bg-background p-6"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-semibold text-muted-foreground">
                      {service.title}
                    </h3>
                    <ComingSoonBadge service={service.title} />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{service.short}</p>
                </div>
              ) : (
                <Link
                  key={service.slug}
                  href={`/servicios#${service.slug}`}
                  className="card-elevated reveal group rounded-2xl border border-border bg-background p-6 transition hover:border-primary"
                >
                  <h3 className="text-base font-semibold group-hover:text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{service.short}</p>
                </Link>
              )
            )}
          </div>

          <Link
            href="/servicios"
            className="mx-auto mt-8 flex w-fit items-center gap-1 text-sm font-semibold text-primary hover:underline sm:hidden"
          >
            Ver todos los servicios <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="cta-sunrise reveal rounded-3xl px-8 py-14 text-center sm:px-16">
          <h2 className="font-display text-2xl sm:text-3xl">
            ¿Tienes un proyecto o requerimiento técnico?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base">
            Cuéntanos qué necesitas y coordinamos una reunión virtual o
            presencial para definir el alcance.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contacto"
              className="rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-card transition hover:-translate-y-0.5 hover:opacity-90"
            >
              Completar formulario
            </Link>
            <WhatsAppButton className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-foreground/10" />
          </div>
        </div>
      </section>
    </>
  );
}
