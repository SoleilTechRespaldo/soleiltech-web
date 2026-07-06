import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function WhatsAppButton({
  message = "Hola SoleilTech, quiero cotizar un proyecto.",
  className,
  children,
}: {
  message?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const href = `${siteConfig.whatsappLink}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        className ??
        "inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground transition hover:opacity-90"
      }
    >
      <MessageCircle className="h-4 w-4" />
      {children ?? "Escríbenos por WhatsApp"}
    </a>
  );
}
