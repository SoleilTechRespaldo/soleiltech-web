export function HeroIllustration() {
  return (
    <div className="flex items-center justify-center rounded-2xl border border-border bg-background p-6">
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
          <clipPath id="sunClip">
            <rect x="0" y="0" width="400" height="150" />
          </clipPath>
        </defs>

        <circle cx="200" cy="150" r="70" fill="url(#sunGradient)" clipPath="url(#sunClip)" />
        <g stroke="#C56A14" strokeWidth="3" strokeLinecap="round" opacity="0.6">
          <line x1="200" y1="55" x2="200" y2="35" />
          <line x1="150" y1="70" x2="137" y2="55" />
          <line x1="250" y1="70" x2="263" y2="55" />
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
