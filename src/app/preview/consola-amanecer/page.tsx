"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const BOOT_LINES = [
  "soleiltech_ > iniciando...",
  "cargando servicios: software, apps, web...",
  "systemctl status pyme.digital → activo",
];

export default function ConsolaAmanecerPreview() {
  const [skip, setSkip] = useState(true);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    const seen = sessionStorage.getItem("soleiltech-boot-seen");
    if (seen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- reads sessionStorage (external system) on mount
      setSkip(true);
      setLineIndex(BOOT_LINES.length);
    } else {
      setSkip(false);
      sessionStorage.setItem("soleiltech-boot-seen", "1");
    }
  }, []);

  useEffect(() => {
    if (skip || lineIndex >= BOOT_LINES.length) return;
    const t = setTimeout(() => setLineIndex((i) => i + 1), 450);
    return () => clearTimeout(t);
  }, [skip, lineIndex]);

  const bootDone = skip || lineIndex >= BOOT_LINES.length;

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="rounded-[28px] bg-[#141414] p-3">
        <div className="h-[3px] rounded-full bg-gradient-to-r from-[#C56A14] to-[#0E8FE0]" />
        <div className="mt-3 rounded-[20px] bg-[#0B1437] px-6 py-8 sm:px-10 sm:py-12">
          <div className="min-h-[72px] font-mono text-xs text-[#0E8FE0] sm:text-sm">
            {BOOT_LINES.slice(0, lineIndex).map((line, i) => (
              <p key={i} className="mb-1">
                {line}
              </p>
            ))}
          </div>

          {bootDone && (
            <div className="mt-6 border-t border-[#22305f] pt-8">
              <span className="font-mono text-[11px] text-[#5F7A9F]">
                {"// desarrollo de software e infraestructura, sin relleno"}
              </span>
              <h1 className="mt-3 max-w-lg text-3xl font-extrabold leading-tight text-[#E6ECF7] sm:text-4xl">
                Tecnología hecha por gente que sí sabe programarla
              </h1>
              <p className="mt-4 max-w-md text-sm text-[#9FB0C8]">
                Software, apps y sitios a la medida de tu empresa —
                explicado en lenguaje simple, sin perder rigor técnico.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 rounded-md bg-[#DDB24E] px-6 py-3 font-mono text-sm font-semibold text-[#0B1437] transition hover:opacity-90"
                >
                  cotizar --ahora <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/preview"
                  className="inline-flex items-center gap-2 rounded-md border border-[#22305f] px-6 py-3 font-mono text-sm text-[#9FB0C8]"
                >
                  volver --previews
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
