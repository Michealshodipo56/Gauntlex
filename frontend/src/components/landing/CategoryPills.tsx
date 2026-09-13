import { motion } from "framer-motion";
import { Binary, Globe, Layers } from "lucide-react";
import { LANGUAGES } from "./languages";

const EXTRA = [
  { name: "Web", icon: Globe },
  { name: "Algorithms", icon: Binary },
  { name: "Systems", icon: Layers },
];

export function CategoryPills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-2.5 px-5"
    >
      <span className="flex items-center gap-2 rounded-full bg-[#0c1017] px-4 py-1.5 text-xs sm:text-sm font-semibold text-white shadow-xs">
        <span className="rounded bg-[#c6ff00] px-1.5 py-0.5 text-[11px] font-extrabold text-black">01</span>
        01 Curriculum
      </span>

      {LANGUAGES.map((lang) => {
        const Icon = lang.icon;
        return (
          <span
            key={lang.name}
            className="flex items-center gap-2 rounded-full border border-gray-200/80 bg-white px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-gray-800 shadow-2xs hover:border-gray-300 transition-colors"
          >
            <Icon size={16} color={lang.color} />
            {lang.name}
          </span>
        );
      })}

      {EXTRA.map((cat) => (
        <span
          key={cat.name}
          className="flex items-center gap-2 rounded-full border border-gray-200/80 bg-white px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-gray-800 shadow-2xs hover:border-gray-300 transition-colors"
        >
          <cat.icon size={16} className="text-[#6001ff]" />
          {cat.name}
        </span>
      ))}
    </motion.div>
  );
}
