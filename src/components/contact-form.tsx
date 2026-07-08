"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2, MessageCircle } from "lucide-react";
import { siteConfig, services } from "@/lib/site-config";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    if (!accessKey) {
      setStatus("error");
      return;
    }

    formData.append("access_key", accessKey);
    formData.append("subject", `Nueva solicitud desde soleiltech.cl — ${formData.get("servicio")}`);
    formData.append("from_name", "Formulario SoleilTech");

    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface px-8 py-14 text-center">
        <CheckCircle2 className="h-10 w-10 text-primary" />
        <h2 className="text-lg font-semibold">¡Solicitud enviada!</h2>
        <p className="max-w-sm text-sm text-muted-foreground">
          Recibimos tu mensaje y te vamos a responder a la brevedad por
          correo. Si es urgente, también puedes escribirnos por WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nombre y Apellido" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="input"
          />
        </Field>
        <Field label="Empresa (opcional)" htmlFor="company">
          <input id="company" name="company" type="text" className="input" />
        </Field>
        <Field label="Correo electrónico" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="input"
          />
        </Field>
        <Field label="Teléfono" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+56 9 1234 5678"
            className="input"
          />
        </Field>
      </div>

      <Field label="Servicio de interés" htmlFor="servicio">
        <select id="servicio" name="servicio" required defaultValue="" className="input">
          <option value="" disabled>
            Selecciona un servicio
          </option>
          {services.map((service) => (
            <option key={service.slug} value={service.title} disabled={service.comingSoon}>
              {service.title}
              {service.comingSoon ? " (Futuramente)" : ""}
            </option>
          ))}
          <option value="Otro">Otro / no estoy seguro</option>
        </select>
      </Field>

      <Field label="Cuéntanos tu requerimiento" htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Describe brevemente lo que necesitas: qué problema quieres resolver, plazos, y cualquier referencia que tengas."
          className="input resize-none"
        />
      </Field>

      <div className="flex flex-col gap-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" && <Loader2 className="h-4 w-4 animate-spin" />}
          {status === "sending" ? "Enviando..." : "Enviar solicitud"}
        </button>
        <p className="text-xs text-muted-foreground">
          Te respondemos por correo o WhatsApp a la brevedad.
        </p>
      </div>

      {status === "error" && (
        <div className="rounded-xl border border-secondary/40 bg-surface-muted px-4 py-3 text-sm">
          <p>
            No pudimos enviar el formulario en este momento. Escríbenos
            directo por WhatsApp y te respondemos altiro.
          </p>
          <a
            href={`${siteConfig.whatsappLink}?text=${encodeURIComponent(
              "Hola SoleilTech, quiero solicitar información sobre un proyecto."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 font-semibold text-secondary hover:underline"
          >
            <MessageCircle className="h-4 w-4" /> Abrir WhatsApp
          </a>
        </div>
      )}

      <p className="text-xs text-muted-foreground">
        Al enviar este formulario aceptas nuestra{" "}
        <a href="/privacidad" className="underline hover:text-primary">
          política de privacidad
        </a>
        . Solo usamos tus datos para responder tu solicitud.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-1.5 text-sm font-medium">
      {label}
      {children}
    </label>
  );
}
