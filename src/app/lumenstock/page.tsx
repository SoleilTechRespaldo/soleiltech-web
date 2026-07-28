import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  Calculator,
  Check,
  Clock,
  DatabaseBackup,
  Download,
  QrCode,
  Receipt,
  ShieldCheck,
  ShoppingCart,
  Tags,
  Truck,
  Users,
  WifiOff,
} from "lucide-react";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { LumenStockMark } from "@/components/lumenstock-logo";

export const metadata: Metadata = {
  title: "LumenStock — Inventario y ventas",
  description:
    "LumenStock: punto de venta e inventario para el comercio chileno. Ventas, stock, boleta, cobro con QR de Mercado Pago y dashboards. Funciona sin internet.",
};

const features = [
  {
    icon: ShoppingCart,
    title: "Punto de venta (caja)",
    text: "Vende escaneando el código o buscando por nombre. Efectivo con vuelto, tarjeta o QR — todo en una pantalla.",
  },
  {
    icon: Boxes,
    title: "Inventario con alertas",
    text: "Productos, precios y stock que se descuenta solo con cada venta. Avisa cuando algo baja del mínimo.",
  },
  {
    icon: Tags,
    title: "Categorías",
    text: "Ordena tu catálogo por categorías: crear, renombrar, eliminar y filtrar en un clic.",
  },
  {
    icon: QrCode,
    title: "Cobro con QR (Mercado Pago)",
    text: "El cliente paga escaneando un QR con su teléfono; el dinero llega directo a tu cuenta de Mercado Pago.",
  },
  {
    icon: Receipt,
    title: "Boleta imprimible o en PDF",
    text: "Boleta de 80 mm para impresora térmica, o guardada en PDF. Con impresión automática opcional.",
  },
  {
    icon: Calculator,
    title: "Cierre de caja",
    text: "Apertura con fondo, efectivo esperado y diferencia al cierre. Cada turno queda registrado.",
  },
  {
    icon: Truck,
    title: "Proveedores y compras",
    text: "Lleva tus proveedores y las compras que les haces, pagadas o pendientes.",
  },
  {
    icon: Users,
    title: "Usuarios y permisos",
    text: "Crea vendedores y define exactamente qué puede hacer cada uno. El administrador ve todo.",
  },
  {
    icon: BarChart3,
    title: "Dashboards",
    text: "Ventas en el tiempo, medios de pago, productos más vendidos y tus propios gráficos.",
  },
];

const faqs = [
  {
    q: "¿Necesito internet para usarlo?",
    a: "No para vender ni para el inventario: LumenStock funciona sin conexión. Solo el cobro con QR de Mercado Pago requiere internet.",
  },
  {
    q: "¿Se pierden mis datos si cierro el programa?",
    a: "No. Todo se guarda en tu computador y, además, se respalda automáticamente una vez al día.",
  },
  {
    q: "¿En qué equipos funciona?",
    a: "En computadores con Windows 10 y 11.",
  },
  {
    q: "¿Puedo tener varias cajas?",
    a: "Sí. Varias cajas pueden vender a la vez sobre la misma base, cada una con su propia numeración de boletas.",
  },
];

export default function LumenStockPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-badge-foreground">
            <Clock className="h-3 w-3" /> En desarrollo · por SoleilTech
          </span>
          <div className="mt-6 flex items-center gap-4">
            <LumenStockMark size={64} />
            <div>
              <h1 className="font-display text-4xl leading-none sm:text-5xl">
                <span className="text-primary">Lumen</span>
                <span className="text-foreground">Stock</span>
              </h1>
              <p className="mt-1 text-sm font-semibold tracking-[0.2em] text-muted-foreground">
                INVENTARIO · VENTAS
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            El punto de venta e inventario para el comercio chileno: vende,
            controla tu stock, cobra con QR de Mercado Pago e imprime la boleta —
            todo desde un mismo lugar y <strong>sin depender de internet</strong>.
          </p>

          <div className="mt-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <span className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-full border border-dashed border-border bg-surface-muted px-6 py-3 text-sm font-semibold text-muted-foreground">
                <Download className="h-4 w-4" /> Descargar para Windows
              </span>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                Quiero LumenStock <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-badge-foreground">
              <Clock className="h-3 w-3" /> Descarga disponible pronto
            </span>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: WifiOff,
              title: "Funciona sin internet",
              text: "Vende aunque se caiga la conexión. Todo vive en el equipo del local.",
            },
            {
              icon: ShoppingCart,
              title: "Todo en uno",
              text: "Ventas, inventario, caja, proveedores, usuarios y reportes en un solo programa.",
            },
            {
              icon: ShieldCheck,
              title: "Hecho para Chile",
              text: "Pensado para el minimarket y el comercio local, con cobro por QR y boleta de 80 mm.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <item.icon className="h-5 w-5 text-primary" />
              </span>
              <h2 className="mt-4 text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Funciones */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl">Qué incluye</h2>
          <p className="mt-2 max-w-xl text-muted-foreground">
            Todo lo que un local necesita para vender y llevar el control, sin
            complicaciones.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-border bg-background p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <feature.icon className="h-5 w-5 text-primary" />
                </span>
                <h3 className="mt-4 text-base font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capturas (placeholder) */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-2xl sm:text-3xl">Cómo se ve</h2>
        <p className="mt-2 max-w-xl text-muted-foreground">
          Una interfaz clara y directa. Capturas reales próximamente.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {["Caja / Punto de venta", "Inventario", "Dashboard"].map((label) => (
            <div
              key={label}
              className="flex aspect-[4/3] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border bg-surface-muted p-6 text-center"
            >
              <LumenStockMark size={40} />
              <span className="text-sm font-semibold text-muted-foreground">
                {label}
              </span>
              <span className="text-xs text-muted-foreground">
                Captura próximamente
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Datos y seguridad (honesto: offline-first) */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
              <DatabaseBackup className="h-5 w-5 text-primary" />
            </span>
            <h2 className="font-display text-2xl sm:text-3xl">
              Tus datos, en tu poder
            </h2>
          </div>
          <p className="mt-4 text-muted-foreground">
            LumenStock guarda la información de tu local en tu propio computador,
            no en un servidor externo. Además, cuida esa información sola:
          </p>
          <ul className="mt-5 flex flex-col gap-3">
            {[
              "Respaldo automático diario en tu equipo.",
              "Contraseñas de los usuarios siempre cifradas.",
              "Permisos por usuario: cada vendedor ve solo lo que le corresponde.",
            ].map((point) => (
              <li key={point} className="flex items-start gap-2 text-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Precios */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-2xl sm:text-3xl">Planes y precios</h2>
          <p className="mt-2 text-muted-foreground">
            Suscripción mensual, sin cuota de instalación.{" "}
            <strong className="text-foreground">
              Los 2 primeros meses son gratis.
            </strong>
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="flex flex-col rounded-2xl border border-border bg-surface p-8">
            <h3 className="text-lg font-semibold">Básico</h3>
            <p className="mt-2 flex items-baseline gap-1">
              <span className="font-display text-4xl">$14.990</span>
              <span className="text-sm text-muted-foreground">/mes</span>
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Para un local con una caja.
            </p>
            <ul className="mt-6 flex flex-col gap-2.5">
              {[
                "1 caja",
                "Punto de venta con escáner",
                "Inventario y categorías",
                "Boleta e impresión",
                "Funciona sin internet",
                "Dashboards estándar",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex flex-col rounded-2xl border-2 border-primary bg-surface p-8">
            <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
              Recomendado
            </span>
            <h3 className="text-lg font-semibold">Full</h3>
            <p className="mt-2 flex items-baseline gap-1">
              <span className="font-display text-4xl">$24.990</span>
              <span className="text-sm text-muted-foreground">/mes</span>
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Todo incluido, para crecer.
            </p>
            <ul className="mt-6 flex flex-col gap-2.5">
              {[
                "Hasta 3 cajas",
                "Todo lo del plan Básico",
                "Control de mermas",
                "Dashboards personalizables",
                "Cierre de caja avanzado",
                "Soporte prioritario",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-border bg-surface p-6">
          <ul className="flex flex-col gap-4 text-sm sm:text-base">
            <li className="flex items-start gap-3">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span>
                <strong className="font-semibold">
                  2 meses de prueba, gratis de verdad.
                </strong>{" "}
                Incluye la ayuda para dejarlo funcionando; no cobramos
                instalación. Al terminar, tú decides si continúas y recién ahí
                empiezas a pagar, desde el mes siguiente.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span>
                <strong className="font-semibold">Pagas solo tu plan.</strong>{" "}
                Sin comisión por tus ventas y sin costos ocultos.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span>
                <strong className="font-semibold">¿Más de una caja?</strong>{" "}
                Suma cajas adicionales por $5.000/mes cada una.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-2xl sm:text-3xl">Preguntas frecuentes</h2>
        <div className="mt-8 flex flex-col gap-3">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-2xl border border-border bg-surface p-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold">
                {faq.q}
                <ArrowRight className="h-4 w-4 shrink-0 text-primary transition group-open:rotate-90" />
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="rounded-3xl bg-primary px-8 py-14 text-center text-primary-foreground sm:px-16">
          <h2 className="font-display text-2xl sm:text-3xl">
            ¿Quieres LumenStock en tu local?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base">
            Está en los últimos ajustes antes de su lanzamiento. Escríbenos y te
            avisamos apenas puedas descargarlo — o coordinamos una demostración.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contacto"
              className="rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:opacity-90"
            >
              Contactar a SoleilTech
            </Link>
            <WhatsAppButton
              message="Hola SoleilTech, me interesa LumenStock para mi local."
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-foreground/10"
            />
          </div>
        </div>
      </section>
    </>
  );
}
