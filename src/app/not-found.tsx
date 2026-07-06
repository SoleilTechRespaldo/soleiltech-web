import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <span className="text-xs font-semibold uppercase tracking-wide text-primary">
        Error 404
      </span>
      <h1 className="mt-4 font-display text-3xl sm:text-4xl">
        Este camino todavía no tiene luz
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        La página que buscas no existe o cambió de lugar. Volvamos a un
        punto conocido.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
        >
          Volver al inicio <ArrowRight className="h-4 w-4" />
        </Link>
        <WhatsAppButton message="Hola SoleilTech, llegué a una página que no encontré en el sitio." />
      </div>
    </div>
  );
}
