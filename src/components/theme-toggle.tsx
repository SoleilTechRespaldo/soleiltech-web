"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect -- hydration-safe mount flag (next-themes pattern)
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-9 w-[104px]" aria-hidden="true" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Cambiar a modo amanecer" : "Cambiar a modo anochecer"}
      className="flex h-9 items-center gap-1.5 rounded-full border border-border bg-surface pl-1.5 pr-3 text-xs font-medium text-foreground transition hover:border-primary"
    >
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-full transition ${
          isDark ? "bg-transparent text-muted-foreground" : "bg-primary text-primary-foreground"
        }`}
      >
        <Sun className="h-3.5 w-3.5" />
      </span>
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-full transition ${
          isDark ? "bg-primary text-primary-foreground" : "bg-transparent text-muted-foreground"
        }`}
      >
        <Moon className="h-3.5 w-3.5" />
      </span>
      <span className="hidden sm:inline">{isDark ? "Anochecer" : "Amanecer"}</span>
    </button>
  );
}
