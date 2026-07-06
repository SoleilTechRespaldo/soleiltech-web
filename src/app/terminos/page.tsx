import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Términos",
  description: "Términos y condiciones de servicio de SoleilTech.",
};

export default function TerminosPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h1 className="text-3xl font-extrabold tracking-tight">Términos y condiciones</h1>
      <div className="prose-none mt-8 flex flex-col gap-6 text-sm leading-relaxed text-muted-foreground">
        <p>
          Estos términos describen las condiciones generales bajo las que{" "}
          {siteConfig.name} presta sus servicios de desarrollo de software,
          aplicaciones, sitios web e instalación de infraestructura
          tecnológica en Chile.
        </p>
        <p>
          <strong className="text-foreground">Alcance del trabajo:</strong>{" "}
          cada proyecto se define en conjunto con el cliente antes de iniciar,
          según los requerimientos, diseño o identidad de marca que indique.
          Cualquier cambio de alcance respecto a lo acordado se conversa y
          cotiza por separado.
        </p>
        <p>
          <strong className="text-foreground">Garantía:</strong>{" "}
          {siteConfig.name} desarrolla según los requerimientos admitidos por
          el cliente, respetando su diseño o el de su marca, entregando
          además recomendación técnica profesional cuando corresponda. La
          garantía cubre que lo entregado cumpla lo acordado en la propuesta
          aceptada por ambas partes.
        </p>
        <p>
          <strong className="text-foreground">Pagos:</strong> los pagos se
          realizan a la empresa según las condiciones acordadas en cada
          propuesta o contrato de servicio.
        </p>
        <p>
          <strong className="text-foreground">Reuniones y entregas:</strong>{" "}
          la coordinación de reuniones, firmas y entregas se realiza de forma
          virtual o presencial, según disponibilidad de ambas partes.
        </p>
        <p>
          <strong className="text-foreground">Contacto:</strong> para
          consultas sobre estos términos, escríbenos a{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">
            {siteConfig.email}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
