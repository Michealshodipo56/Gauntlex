export function SquiggleUnderline({ className = "", color = "var(--color-midnight)" }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 120 12"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M2 8 C 20 2, 35 2, 50 6 S 80 10, 98 5 S 115 2, 118 4"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
