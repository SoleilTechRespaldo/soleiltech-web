import Link from "next/link";

const demos = [
  {
    href: "/preview/amanecer-scroll",
    title: "El amanecer como scroll",
    desc: "El fondo pasa de noche a día a medida que navegas la página.",
  },
  {
    href: "/preview/consola-amanecer",
    title: "La consola del amanecer",
    desc: "El sitio enmarcado como una pantalla técnica, con secuencia de arranque.",
  },
];

export default function PreviewIndex() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="text-2xl font-bold">Previews — propuestas disruptivas</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Solo para revisión interna, no forman parte del sitio final todavía.
      </p>
      <div className="mt-10 flex flex-col gap-4">
        {demos.map((d) => (
          <Link
            key={d.href}
            href={d.href}
            className="rounded-2xl border border-border bg-surface p-6 transition hover:border-primary"
          >
            <h2 className="text-lg font-semibold">{d.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{d.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
