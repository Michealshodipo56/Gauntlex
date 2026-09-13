interface LogoProps {
  size?: number;
  showWordmark?: boolean;
  showTagline?: boolean;
  dark?: boolean;
  className?: string;
}

/**
 * The official Gauntlex brand mark:
 * - Lime chevron representing progress and forward growth (#C6FF00)
 * - Tilted violet capsule representing the next challenge (#6A00FF)
 * - Vertical division seam with shadow tone (#3B03B8)
 * (See /logo_overview.png)
 */
export function LogoMark({ size = 32 }: { size?: number }) {
  // Unique id prefix to avoid svg clipPath collisions if rendered multiple times
  const clipId = "gauntlex-mark-clip";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <defs>
        {/* Clip path of the rotated violet pill */}
        <clipPath id={clipId}>
          <rect
            x="-19.5"
            y="-27.1"
            width="39"
            height="54.2"
            rx="11.4"
            transform="translate(58.57, 62.38) rotate(45)"
          />
        </clipPath>
      </defs>

      {/* Base Violet Pill (#6A00FF) */}
      <rect
        x="-19.5"
        y="-27.1"
        width="39"
        height="54.2"
        rx="11.4"
        fill="#6A00FF"
        transform="translate(58.57, 62.38) rotate(45)"
      />

      {/* Left shadow of the violet pill (split vertically at x=57.14) */}
      <rect
        x="0"
        y="0"
        width="57.14"
        height="100"
        fill="#3B03B8"
        clipPath={`url(#${clipId})`}
      />

      {/* Forward Lime Chevron (#C6FF00) */}
      <path
        d="M 2.38 45.24 L 2.38 62.86 C 2.38 69.52, 4.76 71.43, 8.57 71.43 C 13.33 71.43, 18.1 68.57, 20.95 64.76 L 57.14 28.57 L 57.14 11.43 C 57.14 2.38, 54.76 0.0, 45.71 0.0 C 41.9 0.0, 36.19 3.81, 32.38 7.62 L 8.57 31.43 C 3.81 36.19, 2.38 40.48, 2.38 45.24 Z"
        fill="#C6FF00"
      />
    </svg>
  );
}

export function Logo({
  size = 32,
  showWordmark = true,
  showTagline = false,
  dark = false,
  className = "",
}: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoMark size={size} />
      {showWordmark && (
        <div className="flex flex-col justify-center leading-none select-none">
          <span
            className={`font-black tracking-tight ${dark ? "text-white" : "text-gray-950"}`}
            style={{ fontSize: size * 0.65, letterSpacing: "-0.03em" }}
          >
            Gauntlex
          </span>
          {showTagline && (
            <span
              className={`font-bold tracking-[0.26em] uppercase mt-1 ${
                dark ? "text-gray-400" : "text-gray-500"
              }`}
              style={{ fontSize: size * 0.22 }}
            >
              BUILD. LEARN. PROVE.
            </span>
          )}
        </div>
      )}
    </div>
  );
}
