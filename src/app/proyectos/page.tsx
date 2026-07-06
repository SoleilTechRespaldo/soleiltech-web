import type { Metadata } from "next";
import Link from "next/link";
import { Hammer, ArrowRight } from "lucide-react";
import { WhatsAppButton } from "@/components/whatsapp-button";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Proyectos de SoleilTech — en construcción.",
};

export default function ProyectosPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
      <h1 className="font-display text-3xl sm:text-4xl">
        Proyectos
      </h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        Aún no tenemos proyectos publicados aquí — los estamos preparando.
      </p>

      <div className="mt-12 flex flex-col items-center gap-4 rounded-3xl border border-dashed border-border bg-surface px-8 py-16 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-surface-muted">
          <Hammer className="h-6 w-6 text-primary" />
        </div>
        <h2 className="font-display text-lg">Portafolio en construcción</h2>
        <p className="max-w-md text-sm text-muted-foreground">
          Si quieres ver ejemplos de trabajo o conversar sobre un proyecto
          similar al tuyo, escríbenos directamente y te compartimos lo que
          tenemos en curso.
        </p>
        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Solicitar ejemplos <ArrowRight className="h-4 w-4" />
          </Link>
          <WhatsAppButton message="Hola SoleilTech, quiero ver ejemplos de proyectos anteriores." />
        </div>
      </div>
    </div>
  );
}
