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
      className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3 px-5"
    >
      <span className="flex items-center gap-2 rounded-full bg-midnight px-4 py-2 text-sm font-semibold text-white">
        <span className="rounded-md bg-lime px-1.5 py-0.5 text-xs font-extrabold text-midnight">01</span>
        01 Curriculum
      </span>

      {LANGUAGES.map((lang) => {
        const Icon = lang.icon;
        return (
          <span
            key={lang.name}
            className="flex items-center gap-2 rounded-full border border-midnight/10 bg-white px-4 py-2 text-sm font-medium text-midnight/80 shadow-sm"
          >
            <Icon size={15} color={lang.color} />
            {lang.name}
          </span>
        );
      })}

      {EXTRA.map((cat) => (
        <span
          key={cat.name}
          className="flex items-center gap-2 rounded-full border border-midnight/10 bg-white px-4 py-2 text-sm font-medium text-midnight/80 shadow-sm"
        >
          <cat.icon size={15} className="text-violet" />
          {cat.name}
        </span>
      ))}
    </motion.div>
  );
}
