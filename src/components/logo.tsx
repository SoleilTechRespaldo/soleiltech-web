"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";

export function Logo({ className }: { className?: string }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect -- hydration-safe mount flag (next-themes pattern)
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";
  const src = isDark
    ? "/brand/svg/soleiltech-color-oscuro.svg"
    : "/brand/svg/soleiltech-color-claro.svg";

  return (
    <Link href="/" className={className} aria-label="SoleilTech — inicio">
      <Image
        src={src}
        alt="SoleilTech"
        width={194}
        height={44}
        priority
        className="h-8 w-auto"
      />
    </Link>
  );
}
