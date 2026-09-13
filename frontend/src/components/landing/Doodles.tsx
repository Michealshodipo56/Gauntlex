export function CrownDoodle({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 48 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6 26L10 8L20 18L24 6L28 18L38 8L42 26C42 26 28 28 6 26Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="10" cy="7" r="1.5" fill={color} />
      <circle cx="24" cy="5" r="1.5" fill={color} />
      <circle cx="38" cy="7" r="1.5" fill={color} />
    </svg>
  );
}

export function CurvedArrow({
  className = "",
  color = "currentColor",
  flip = false,
}: {
  className?: string;
  color?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 60 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${flip ? "-scale-x-100" : ""}`}
      aria-hidden="true"
    >
      <path
        d="M20 5C24 25 45 40 32 58M32 58L22 48M32 58L42 54"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CurvedArrowHorizontal({
  className = "",
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 50 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 18C14 12 28 10 44 20M44 20L36 12M44 20L34 26"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TripleSquiggle({ className = "", color = "#6001ff" }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 120 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 5C24 1 44 9 64 5C84 1 104 8 116 4"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M8 10C26 6 48 14 68 10C88 6 106 13 114 9"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M14 15C32 11 52 17 72 14C90 11 102 16 110 13"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SproutDoodle({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center select-none ${className}`}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="inline-block"
      >
        <path
          d="M16 28V14M16 14C16 10 11 6 6 8C5 13 9 17 16 14ZM16 14C16 9 22 5 27 7C28 12 23 17 16 14Z"
          stroke="#a3e635"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#c6ff00"
          fillOpacity="0.4"
        />
      </svg>
    </span>
  );
}

export function BadgeSparkles({ className = "", color = "#6001ff" }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 200 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Left accent lines */}
      <path d="M6 10C10 6 14 8 18 12" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M2 18C7 16 12 20 16 22" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      {/* Right accent lines */}
      <path d="M182 10C186 6 190 8 194 12" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M184 20C188 18 192 22 197 20" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
