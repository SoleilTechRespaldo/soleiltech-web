import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { services } from "@/lib/site-config";

export default function AmanecerScrollPreview() {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #0B1437 0%, #0B1437 18%, #6b4a1f 42%, #DDB24E 58%, #cfe8f7 78%, #EAF6FF 100%)",
      }}
    >
      <section className="mx-auto flex min-h-[90vh] max-w-4xl flex-col justify-center px-6 py-24">
        <span className="text-xs font-semibold uppercase tracking-wide text-[#9FB0C8]">
          Antes de SoleilTech
        </span>
        <h1 className="mt-4 max-w-xl text-4xl font-extrabold leading-tight text-[#E6ECF7] sm:text-5xl">
          Toda empresa parte a oscuras
        </h1>
        <p className="mt-5 max-w-md text-[#9FB0C8]">
          Sin sistema, sin sitio, sin infraestructura clara — decisiones a
          ciegas sobre lo que realmente necesita tu operación.
        </p>
      </section>

      <section className="mx-auto flex min-h-[100vh] max-w-4xl flex-col justify-center px-6 py-24">
        <span className="text-xs font-semibold uppercase tracking-wide text-[#5a3d10]">
          Con SoleilTech
        </span>
        <h2 className="mt-4 max-w-xl text-4xl font-extrabold leading-tight text-[#3a2406] sm:text-5xl">
          Aquí amanece tu operación
        </h2>
        <p className="mt-5 max-w-md text-[#5a3d10]">
          Desarrollamos el software, las apps y los sitios que tu empresa
          necesita — a la medida de cómo trabajas de verdad.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {services.slice(0, 4).map((s) => (
            <div
              key={s.slug}
              className="flex items-start gap-2 rounded-xl bg-white/40 p-4 text-sm text-[#3a2406]"
            >
              <Check className="mt-0.5 h-4 w-4 shrink-0" />
              {s.title}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto flex min-h-[90vh] max-w-4xl flex-col justify-center px-6 py-24">
        <span className="text-xs font-semibold uppercase tracking-wide text-[#185fa5]">
          Hoy
        </span>
        <h2 className="mt-4 max-w-xl text-4xl font-extrabold leading-tight text-[#042c53] sm:text-5xl">
          Brilla con nosotros
        </h2>
        <p className="mt-5 max-w-md text-[#0c447c]">
          Coordinemos una reunión virtual o presencial y conversemos tu
          proyecto, sin costo por la primera conversación.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 rounded-full bg-[#0369A1] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Solicitar cotización <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/preview"
            className="inline-flex items-center gap-2 rounded-full border border-[#0369A1]/40 px-6 py-3 text-sm font-semibold text-[#0c447c]"
          >
            Volver a previews
          </Link>
        </div>
      </section>
    </div>
  );
}
