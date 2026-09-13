interface LogoProps {
  size?: number;
  showWordmark?: boolean;
  showTagline?: boolean;
  dark?: boolean;
  className?: string;
}

/** The Gauntlex mark: a lime chevron (progress) folding into a violet gem (the next challenge). */
export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M24 78 L49 18 L70 56"
        stroke="var(--color-lime)"
        strokeWidth="19"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="gauntlex-gem" x1="38" y1="50" x2="86" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="var(--color-violet-light)" />
          <stop offset="1" stopColor="var(--color-violet-dark)" />
        </linearGradient>
      </defs>
      <rect
        x="47"
        y="47"
        width="38"
        height="38"
        rx="10"
        fill="url(#gauntlex-gem)"
        transform="rotate(45 66 66)"
      />
    </svg>
  );
}

export function Logo({ size = 32, showWordmark = true, showTagline = false, dark = false, className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark size={size} />
      {showWordmark && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-extrabold tracking-tight ${dark ? "text-white" : "text-midnight"}`}
            style={{ fontSize: size * 0.62 }}
          >
            Gauntlex
          </span>
          {showTagline && (
            <span
              className={`text-[0.55em] font-semibold tracking-[0.25em] uppercase mt-0.5 ${
                dark ? "text-white/50" : "text-midnight/40"
              }`}
            >
              Build. Learn. Prove.
            </span>
          )}
        </div>
      )}
    </div>
  );
}
