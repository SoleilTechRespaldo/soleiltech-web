// Marca provisional de LumenStock renderizada en código (sin archivo de imagen),
// consistente con el ícono actual de la app: cuadro carbón + "LS" dorado.
// Cuando exista el logo oficial en SVG, se reemplaza esto por un <Image>.

const CARBON = "#121212";
const GOLD = "#C9A227";

/** Monograma LS (cuadro carbón con LS dorado). */
export function LumenStockMark({ size = 44 }: { size?: number }) {
  return (
    <span
      aria-hidden
      className="inline-flex shrink-0 items-center justify-center rounded-xl font-extrabold"
      style={{
        width: size,
        height: size,
        fontSize: size * 0.4,
        backgroundColor: CARBON,
        color: GOLD,
        letterSpacing: "0.02em",
      }}
    >
      LS
    </span>
  );
}

/** Wordmark "LumenStock" (integrado a los tokens del sitio). */
export function LumenStockWordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-semibold tracking-tight ${className}`}>
      <span className="text-primary">Lumen</span>
      <span className="text-foreground">Stock</span>
    </span>
  );
}
