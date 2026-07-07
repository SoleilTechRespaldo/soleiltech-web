"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Clock, CheckCircle2 } from "lucide-react";
import { WhatsAppButton } from "@/components/whatsapp-button";

type WaitlistStatus = "idle" | "sending" | "success" | "error";

export function ComingSoonBadge({ service }: { service: string }) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<WaitlistStatus>("idle");
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!open) return;
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open]);

  async function handleWaitlist(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    const formData = new FormData(e.currentTarget);
    if (!accessKey) {
      setStatus("error");
      return;
    }
    formData.append("access_key", accessKey);
    formData.append("subject", `Lista de espera — ${service}`);
    formData.append("from_name", "Lista de espera SoleilTech");

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <span ref={ref} className="relative inline-block">
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen((v) => !v);
        }}
        aria-expanded={open}
        className="inline-flex items-center gap-1 rounded-full bg-primary/15 px-2.5 py-1 text-xs font-semibold text-primary transition hover:bg-primary/25"
      >
        <Clock className="h-3 w-3" /> Futuramente
      </button>

      {open && (
        <div className="absolute right-0 top-full z-30 mt-2 w-72 max-w-[calc(100vw-2.5rem)] rounded-xl border border-border bg-surface p-4 text-left shadow-lg">
          <p className="text-sm text-foreground">
            Estamos preparando este servicio. Si lo necesitas ahora,
            escríbenos y vemos cómo ayudarte igual.
          </p>
          <WhatsAppButton
            message={`Hola SoleilTech, me interesa el servicio de ${service}, vi que está marcado como futuramente.`}
            className="mt-3 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-xs font-semibold text-secondary-foreground transition hover:opacity-90"
          />

          <div className="mt-4 border-t border-border pt-3">
            {status === "success" ? (
              <p className="flex items-center gap-2 text-xs text-foreground">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                Te avisamos apenas esté disponible.
              </p>
            ) : (
              <form onSubmit={handleWaitlist} className="flex flex-col gap-2">
                <label htmlFor={`waitlist-${service}`} className="text-xs text-muted-foreground">
                  O deja tu correo y te avisamos cuando esté listo:
                </label>
                <div className="flex gap-2">
                  <input
                    id={`waitlist-${service}`}
                    name="email"
                    type="email"
                    required
                    placeholder="tu@correo.cl"
                    className="input"
                  />
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="shrink-0 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "sending" ? "..." : "Avisarme"}
                  </button>
                </div>
                {status === "error" && (
                  <p className="text-xs text-muted-foreground">
                    No se pudo enviar. Prueba por WhatsApp arriba.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      )}
    </span>
  );
}
