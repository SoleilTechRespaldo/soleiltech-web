import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { LumenStockMark } from "@/components/lumenstock-logo";
import { projects } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Productos propios de SoleilTech, como LumenStock — inventario y ventas para el comercio chileno.",
};

export default function ProyectosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="max-w-2xl text-center sm:text-left">
        <h1 className="font-display text-3xl sm:text-4xl">Proyectos</h1>
        <p className="mt-4 text-muted-foreground">
          Productos y desarrollos propios de SoleilTech. Estos son los que
          estamos construyendo hoy.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={project.href}
            className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition hover:border-primary"
          >
            <div className="flex items-center gap-4">
              {project.slug === "lumenstock" && <LumenStockMark size={52} />}
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="font-display text-xl transition group-hover:text-primary">
                    {project.name}
                  </h2>
                  <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-xs font-semibold text-badge-foreground">
                    {project.statusLabel}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{project.tagline}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{project.short}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
              Ver más
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-center gap-4 rounded-3xl border border-border bg-surface px-8 py-12 text-center">
        <h2 className="font-display text-xl sm:text-2xl">
          ¿Tienes un proyecto en mente?
        </h2>
        <p className="max-w-lg text-sm text-muted-foreground">
          Cuéntanos qué necesitas y te damos una recomendación profesional, sin
          costo por la conversación inicial.
        </p>
        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Conversemos <ArrowRight className="h-4 w-4" />
          </Link>
          <WhatsAppButton />
        </div>
      </div>
    </div>
  );
}
