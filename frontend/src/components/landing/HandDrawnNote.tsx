import { motion } from "framer-motion";

interface HandDrawnNoteProps {
  lines: string[];
  className?: string;
  rotate?: number;
  dark?: boolean;
}

/** Marker-style annotation text used as decorative accents throughout the page. */
export function HandDrawnNote({ lines, className = "", rotate = -4, dark = false }: HandDrawnNoteProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, rotate: rotate - 6 }}
      whileInView={{ opacity: 1, scale: 1, rotate }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ type: "spring", stiffness: 200, damping: 14 }}
      className={`font-hand select-none leading-[0.95] ${dark ? "text-lime" : "text-midnight"} ${className}`}
    >
      {lines.map((line) => (
        <div key={line}>{line}</div>
      ))}
    </motion.div>
  );
}
