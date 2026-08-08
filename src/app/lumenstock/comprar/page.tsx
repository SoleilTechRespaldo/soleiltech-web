import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  CheckCircle2,
  Clock,
  CreditCard,
  QrCode,
  ShieldCheck,
} from "lucide-react";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { LumenStockMark } from "@/components/lumenstock-logo";

export const metadata: Metadata = {
  title: "Comprar LumenStock",
  description:
    "Cómo comprar LumenStock: pago único, medios de pago y pasos. Punto de venta e inventario para el comercio chileno.",
};

const steps = [
  {
    title: "Escríbenos",
    text: 'Toca "Comprar" o escríbenos por WhatsApp o correo. Te confirmamos el precio y resolvemos tus dudas.',
  },
  {
    title: "Te enviamos el medio de pago",
    text: "Un link de pago o los datos para transferencia, junto con tu factura.",
  },
  {
    title: "Pagas",
    text: "Con Mercado Pago, tarjeta o transferencia. Es un pago único, sin mensualidad.",
  },
  {
    title: "Recibes LumenStock",
    text: "Te enviamos el instalador para Windows y tu comprobante. Lo instalas y a vender.",
  },
];

const pagos = [
  {
    icon: QrCode,
    title: "Mercado Pago",
    text: "Link de pago: tarjeta, débito o saldo de Mercado Pago.",
  },
  {
    icon: Banknote,
    title: "Transferencia bancaria",
    text: "Te enviamos los datos y nos confirmas el comprobante.",
  },
  {
    icon: CreditCard,
    title: "Tarjeta",
    text: "Crédito o débito a través del link de Mercado Pago.",
  },
];

export default function ComprarLumenStockPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-badge-foreground">
            <Clock className="h-3 w-3" /> Compra disponible pronto
          </span>
          <div className="mt-6 flex items-center gap-4">
            <LumenStockMark size={56} />
            <h1 className="font-display text-3xl sm:text-4xl">
              Comprar <span className="text-primary">Lumen</span>
              <span className="text-foreground">Stock</span>
            </h1>
          </div>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Un solo pago y el programa es tuyo, sin mensualidad. Así de simple es
            adquirirlo.
          </p>
        </div>
      </section>

      {/* Precio */}
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <div className="rounded-2xl border-2 border-primary bg-surface p-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-lg font-semibold">
                Licencia única · Todo incluido
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Un pago, para siempre. Garantía de 30 días.
              </p>
            </div>
            <div className="sm:text-right">
              <p className="font-display text-5xl leading-none sm:text-6xl">
                $250.000
              </p>
              <p className="mt-2 text-sm font-semibold text-foreground">
                Precio final a pagar · IVA incluido
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pasos */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl">
            Cómo comprar, paso a paso
          </h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2">
            {steps.map((s, i) => (
              <li
                key={s.title}
                className="rounded-2xl border border-border bg-background p-6"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Medios de pago */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-2xl sm:text-3xl">Medios de pago</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {pagos.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <p.icon className="h-5 w-5 text-primary" />
              </span>
              <h3 className="mt-4 text-base font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-border bg-surface p-6">
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span>
                <strong className="font-semibold">
                  Instalación remota (opcional):
                </strong>{" "}
                te lo dejamos andando en tu computador por $50.000 (precio final
                con instalación: $300.000).
              </span>
            </li>
            <li className="flex items-start gap-2">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span>
                <strong className="font-semibold">Factura con IVA</strong> por tu
                compra (la necesitas para recuperar el IVA). Todos los precios
                incluyen IVA (19%).
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-4 pb-20 sm:px-6">
        <div className="rounded-3xl bg-primary px-8 py-14 text-center text-primary-foreground sm:px-16">
          <h2 className="font-display text-2xl sm:text-3xl">
            ¿Listo para comprarlo?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base">
            Escríbenos y coordinamos tu compra. Te avisamos apenas la descarga
            esté disponible.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <WhatsAppButton
              message="Hola SoleilTech, quiero comprar LumenStock."
              className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:opacity-90"
            />
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-foreground/10"
            >
              Escribir por correo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
