import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Handshake, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "SoleilTech es una empresa chilena que recién comienza en el desarrollo tecnológico, ayudando a empresas de todos los tamaños a mejorar su operación y su identidad web.",
};

const pillars = [
  {
    icon: Target,
    title: "Empezando con foco",
    text: "Somos una empresa que está partiendo en el desarrollo tecnológico. Preferimos ser honestos sobre eso y compensarlo con dedicación real a cada proyecto.",
  },
  {
    icon: Handshake,
    title: "Cercanía con cada cliente",
    text: "Ayudamos a empresas grandes y pequeñas a mejorar su operación y su presencia en la web, con soluciones a la medida de cada presupuesto.",
  },
  {
    icon: Wrench,
    title: "Recomendación antes que venta",
    text: "Desarrollamos según lo que pidas — tu diseño, tu logo, tus ideas — pero siempre con una recomendación profesional de por medio cuando creemos que hay una mejor forma de resolverlo.",
  },
];

export default function NosotrosPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <h1 className="text-center font-display text-3xl sm:text-left sm:text-4xl">
        Nosotros
      </h1>
      <p className="mt-5 max-w-2xl text-center text-muted-foreground sm:text-left">
        SoleilTech nace para acompañar a empresas grandes y pequeñas en
        todo el territorio nacional, en su transformación tecnológica,
        desarrollando el software, las apps y los sitios web y móviles que
        necesiten.
      </p>
      <p className="mt-3 max-w-2xl text-center text-sm text-muted-foreground sm:text-left">
        Hasta el sitio tiene su propio amanecer y anochecer — el botón de
        tema del header cambia de nombre, no solo de color.
      </p>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {pillars.map((p) => (
          <div
            key={p.title}
            className="card-elevated reveal rounded-2xl border border-border bg-surface p-6"
          >
            <span className="icon-tile-primary">
              <p.icon className="h-6 w-6" />
            </span>
            <h2 className="mt-5 text-lg font-semibold">{p.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
          </div>
        ))}
      </div>

      <div className="reveal shadow-card mt-16 flex flex-col items-center gap-4 rounded-3xl border border-border bg-surface px-8 py-12 text-center">
        <h2 className="font-display text-xl sm:text-2xl">
          Conversemos sobre tu proyecto
        </h2>
        <p className="max-w-lg text-sm text-muted-foreground">
          Coordinamos una reunión virtual o presencial, según la
          disponibilidad de ambas partes, para entender tu requerimiento.
        </p>
        <Link
          href="/contacto"
          className="mt-2 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
        >
          Ir al formulario de contacto <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
