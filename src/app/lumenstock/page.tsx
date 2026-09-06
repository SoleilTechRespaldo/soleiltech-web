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
  QrCode,
  Receipt,
  ShieldAlert,
  ShieldCheck,
  ShoppingCart,
  Store,
  Tags,
  Truck,
  Users,
  Wallet,
  WifiOff,
} from "lucide-react";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { LumenStockMark } from "@/components/lumenstock-logo";

export const metadata: Metadata = {
  title: "LumenStock — Inventario y ventas (pago único)",
  description:
    "LumenStock: punto de venta e inventario para el comercio chileno — minimarket, botillería, almacén, ferretería y más. Ventas, stock, boleta, cobro con QR de Mercado Pago y estadísticas. Pago único, funciona sin internet.",
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
    title: "Estadísticas",
    text: "Ventas en el tiempo, por vendedor, medios de pago, productos más vendidos y tus propios gráficos, por fecha o rango.",
  },
  {
    icon: ShieldAlert,
    title: "Control de mermas",
    text: "Detecta pérdidas, roturas y anulaciones atípicas. Clave donde se rompe o se pierde mercadería (ej. botillería).",
  },
];

const faqs = [
  {
    q: "¿Es pago único o mensualidad?",
    a: "Pago único: lo compras una vez y el programa es tuyo, sin cobros mensuales ni comisiones por tus ventas.",
  },
  {
    q: "¿Sirve para mi tipo de local?",
    a: "Sí: minimarket, botillería, almacén, ferretería, pet shop, librería, bazar y cualquier local que venda productos con precio y código.",
  },
  {
    q: "¿Necesito internet para usarlo?",
    a: "No para vender ni para el inventario: LumenStock funciona sin conexión. Solo el cobro con QR de Mercado Pago requiere internet.",
  },
  {
    q: "¿Cómo respaldo mis datos?",
    a: "Todo se guarda en tu computador y se respalda solo cada día. Además, tú activas un respaldo por correo al cerrar la caja (diario, semanal o mensual): el programa te prepara un Excel con el resumen y una copia de tu base para que te la envíes a tu correo y quede fuera del equipo. Tú administras tus respaldos.",
  },
  {
    q: "¿En qué equipos funciona?",
    a: "En computadores con Windows 10 y 11.",
  },
  {
    q: "¿Y si tengo varias cajas o sucursales?",
    a: "La licencia es por computador. El programa maneja varias cajas, cada una con su propia numeración de boletas. Para una segunda caja física o una sucursal, cada equipo funciona de forma independiente (con sus propios datos), y la licencia adicional queda con descuento: $180.000 (IVA incluido). Verlas conectadas y consolidadas en tiempo real (multi-sucursal) llegará con la versión en la nube, más adelante.",
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
            El punto de venta e inventario para el comercio chileno —{" "}
            minimarkets, botillerías, almacenes, ferreterías y más: vende,
            controla tu stock, cobra con QR de Mercado Pago e imprime la boleta —
            todo desde un mismo lugar y <strong>sin depender de internet</strong>.
          </p>
          <p className="mt-4 max-w-2xl text-base sm:text-lg">
            <strong className="text-foreground">Pago único:</strong>{" "}
            <span className="text-muted-foreground">
              lo compras una vez y es tuyo. Sin mensualidad ni comisiones por tus
              ventas.
            </span>
          </p>

          <div className="mt-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <span className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-full border border-dashed border-border bg-surface-muted px-6 py-3 text-sm font-semibold text-muted-foreground">
                <ShoppingCart className="h-4 w-4" /> Comprar para Windows
              </span>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                Quiero LumenStock <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-badge-foreground">
              <Clock className="h-3 w-3" /> Compra disponible pronto
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
              icon: Wallet,
              title: "Pago único",
              text: "Lo compras una vez y es tuyo. Sin mensualidad ni comisiones por tus ventas.",
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

      {/* Para qué locales sirve */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
            <Store className="h-5 w-5 text-primary" />
          </span>
          <h2 className="font-display text-2xl sm:text-3xl">
            ¿Para qué locales sirve?
          </h2>
        </div>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Para cualquier local que venda productos con precio y código. Algunos
          ejemplos:
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Minimarket y almacén",
              text: "Ventas rápidas con escáner, control de stock y alertas cuando algo baja del mínimo. El día a día bajo control.",
            },
            {
              title: "Botillería",
              text: "Arqueo de caja diario y control de mermas por roturas — donde entra harta plata en efectivo y se quiebra mercadería.",
            },
            {
              title: "Ferretería y pañolería",
              text: "Catálogo grande con códigos, precios y categorías, con stock mínimo para reponer a tiempo.",
            },
            {
              title: "Pet shop",
              text: "Inventario por categorías (alimento, accesorios), alertas de stock y registro de proveedores.",
            },
            {
              title: "Librería y bazar",
              text: "Muchos productos chicos con código de barras, ordenados por categoría y fáciles de cobrar.",
            },
            {
              title: "Comida rápida simple",
              text: "Cobra ítems de precio fijo (completos, empanadas, bebidas) como productos, con boleta y cierre de caja.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Capturas (placeholder) */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-2xl sm:text-3xl">Cómo se ve</h2>
        <p className="mt-2 max-w-xl text-muted-foreground">
          Una interfaz clara y directa. Capturas reales próximamente.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {["Caja / Punto de venta", "Inventario", "Estadísticas"].map((label) => (
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
            no en un servidor externo. Tú tienes el control de tus datos y de tus
            respaldos:
          </p>
          <ul className="mt-5 flex flex-col gap-3">
            {[
              "Respaldo diario automático en tu propio equipo.",
              "Respaldo por correo al cerrar la caja: tú lo activas (diario, semanal o mensual) y el programa te prepara un Excel con el resumen más una copia de tu base, para que te la envíes a tu correo y quede fuera del equipo.",
              "Tú administras tus respaldos: como los datos viven en tu computador, cada local guarda sus copias donde prefiera.",
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

      {/* Precio */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-2xl sm:text-3xl">Precio</h2>
          <p className="mt-2 text-muted-foreground">
            Un solo pago. El programa es tuyo —{" "}
            <strong className="text-foreground">sin mensualidad</strong>.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border-2 border-primary bg-surface p-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-lg font-semibold">
                Licencia única · Todo incluido
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Un pago y es tuyo, sin cobros mensuales.
              </p>
            </div>
            <div className="sm:text-right">
              <p className="font-display text-5xl leading-none sm:text-6xl">
                $320.000
              </p>
              <p className="mt-2 text-sm font-semibold text-foreground">
                Precio final a pagar · IVA incluido
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Pago único · ya incluye $51.092 de IVA (neto $268.908).
              </p>
            </div>
          </div>
          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {[
              "Punto de venta con escáner",
              "Inventario, categorías e importación",
              "Boleta e impresión",
              "Cierre de caja avanzado",
              "Proveedores y compras",
              "Usuarios y permisos",
              "Estadísticas y gráficos propios",
              "Control de mermas",
              "Cobro con QR de Mercado Pago",
              "Funciona sin internet",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-border bg-surface p-6">
          <ul className="flex flex-col gap-4 text-sm sm:text-base">
            <li className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span>
                <strong className="font-semibold">30 días de garantía.</strong>{" "}
                Pruébalo un mes; si no te sirve, te devolvemos tu dinero.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span>
                <strong className="font-semibold">Se paga solo.</strong> Otros
                sistemas cobran ~$180.000 a $300.000 al año, para siempre. Acá
                pagas una sola vez.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span>
                <strong className="font-semibold">
                  Instalación y capacitación (opcional):
                </strong>{" "}
                la dejamos andando en tu computador de forma remota, sin que
                tengas que moverte, por $50.000 (precio final con instalación:
                $370.000).
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span>
                <strong className="font-semibold">
                  Correcciones y cambios por ley, incluidos.
                </strong>{" "}
                Los arreglos y lo que exija la normativa (por ejemplo, del SII)
                llegan sin costo.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span>
                <strong className="font-semibold">
                  Mantención (opcional):
                </strong>{" "}
                nuevas funciones y soporte con asistencia cuando lo necesites,
                por $72.000 al año.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span>
                <strong className="font-semibold">
                  Sin comisiones ni costos ocultos.
                </strong>{" "}
                No cobramos por tus ventas.
              </span>
            </li>
          </ul>
          <p className="mt-5 text-xs text-muted-foreground">
            Todos los precios incluyen IVA (19%); emitimos factura por tu compra.
            La boleta que emite el programa (para las ventas de tu local) es un
            comprobante interno; la boleta electrónica del SII la emites por tu
            medio habitual.
          </p>
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
