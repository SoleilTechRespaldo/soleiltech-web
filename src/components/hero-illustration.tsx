export function HeroIllustration() {
  return (
    <div className="shadow-card relative flex items-center justify-center overflow-hidden rounded-3xl border border-border bg-surface p-6">
      <svg
        viewBox="0 0 400 300"
        role="img"
        aria-label="Ilustración de un amanecer sobre una ventana de código, representando software que nace con SoleilTech"
        className="h-auto w-full max-w-sm"
      >
        <defs>
          <linearGradient id="sunGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#DDB24E" />
            <stop offset="100%" stopColor="#C56A14" />
          </linearGradient>
          <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F4C85C" stopOpacity="0.6" />
            <stop offset="55%" stopColor="#E89B3A" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#E89B3A" stopOpacity="0" />
          </radialGradient>
          <clipPath id="sunClip">
            <rect x="0" y="0" width="400" height="150" />
          </clipPath>
        </defs>

        {/* Halo cálido detrás del sol — "respira" con una animación suave de opacidad */}
        <circle
          className="sun-glow"
          cx="200"
          cy="150"
          r="140"
          fill="url(#sunGlow)"
          clipPath="url(#sunClip)"
        />

        <circle cx="200" cy="150" r="70" fill="url(#sunGradient)" clipPath="url(#sunClip)" />
        <g stroke="#C56A14" strokeWidth="3" strokeLinecap="round" opacity="0.6">
          <line x1="200" y1="55" x2="200" y2="35" />
          <line x1="150" y1="70" x2="137" y2="55" />
          <line x1="250" y1="70" x2="263" y2="55" />
          <line x1="111" y1="118" x2="92" y2="111" />
          <line x1="289" y1="118" x2="308" y2="111" />
        </g>

        <line x1="20" y1="150" x2="380" y2="150" stroke="#E8D5B8" strokeWidth="2" />

        <rect x="110" y="170" width="180" height="110" rx="12" fill="var(--surface)" stroke="var(--border)" strokeWidth="2" />
        <rect x="110" y="170" width="180" height="26" rx="12" fill="var(--surface-muted)" />
        <circle cx="126" cy="183" r="4" fill="#C56A14" />
        <circle cx="140" cy="183" r="4" fill="#DDB24E" />
        <circle cx="154" cy="183" r="4" fill="#0E8FE0" />
        <text x="200" y="240" textAnchor="middle" fontFamily="monospace" fontSize="22" fill="#0E8FE0">
          {"</>"}
        </text>
      </svg>
    </div>
  );
}
