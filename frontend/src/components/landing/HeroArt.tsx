import { motion } from "framer-motion";
import { Check, ChevronRight, Crown, Sparkle } from "lucide-react";
import { EditorChrome } from "./EditorChrome";
import { HandDrawnNote } from "./HandDrawnNote";
import { LANGUAGES } from "./languages";

const CODE_LINES = [
  { n: 1, content: <span className="text-white/35"># Build. Learn. Prove.</span> },
  { n: 2, content: null },
  {
    n: 3,
    content: (
      <>
        <span className="text-violet-light">def</span> <span className="text-[#7cc4ff]">greet</span>
        <span className="text-white/70">(name):</span>
      </>
    ),
  },
  {
    n: 4,
    content: (
      <>
        <span className="pl-4 text-violet-light">return</span> <span className="text-lime">f"Hello, {"{name}"}! 👋"</span>
      </>
    ),
  },
  { n: 5, content: null },
  {
    n: 6,
    content: (
      <>
        <span className="text-[#7cc4ff]">greet</span>
        <span className="text-white/70">(</span>
        <span className="text-lime">"Gauntlex"</span>
        <span className="text-white/70">)</span>
      </>
    ),
  },
];

function CodeBody() {
  return (
    <div className="space-y-1.5 px-5 py-5 font-mono text-[13px] leading-relaxed">
      {CODE_LINES.map((line) => (
        <div key={line.n} className="flex gap-4">
          <span className="w-3 shrink-0 select-none text-white/25">{line.n}</span>
          <span>{line.content}</span>
        </div>
      ))}
    </div>
  );
}

function LanguagePickerCard({ className = "" }: { className?: string }) {
  return (
    <div className={`w-52 rounded-2xl border border-midnight/10 bg-white p-2 shadow-xl ${className}`}>
      {LANGUAGES.map((lang, i) => {
        const Icon = lang.icon;
        return (
          <div
            key={lang.name}
            className={`flex items-center gap-2.5 rounded-xl px-2.5 py-2 text-sm font-medium ${
              i === 0 ? "bg-violet/10 text-midnight" : "text-midnight/70"
            }`}
          >
            <Icon size={16} color={lang.color} className="shrink-0" />
            {lang.name}
          </div>
        );
      })}
      <div className="flex items-center gap-2.5 rounded-xl px-2.5 py-2 text-sm font-medium text-midnight/45">
        <span className="text-base leading-none">+</span> More...
      </div>
    </div>
  );
}

function RunBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`flex w-52 items-center gap-3 rounded-2xl border border-midnight/10 bg-white p-3.5 shadow-xl ${className}`}>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet text-white">
        <Check size={18} strokeWidth={3} />
      </span>
      <div className="leading-tight">
        <p className="text-sm font-bold text-midnight">Run</p>
        <p className="text-xs text-midnight/50">Your ideas. Real results.</p>
      </div>
    </div>
  );
}

function StickyNote({ className = "" }: { className?: string }) {
  const items = ["Code", "Learn", "Improve", "Repeat"];
  return (
    <div className={`w-40 rounded-lg bg-lime p-4 shadow-xl ${className}`}>
      <ul className="space-y-1.5 text-sm font-bold text-midnight">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-1.5">
            <ChevronRight size={14} strokeWidth={3} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function OutputPanel({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-white/10 bg-midnight shadow-2xl ${className}`}>
      <div className="flex gap-4 border-b border-white/10 px-4 pt-3 text-xs font-semibold">
        {["Output", "Test Results", "AI Guide"].map((tab, i) => (
          <span
            key={tab}
            className={`pb-3 ${i === 0 ? "border-b-2 border-lime text-white" : "text-white/40"}`}
          >
            {tab}
          </span>
        ))}
      </div>
      <div className="space-y-2 px-4 py-4 font-mono text-[13px]">
        <p className="text-white/85">Hello, Gauntlex! 👋</p>
        <p className="flex items-center gap-2 text-white/45">
          <span className="h-1.5 w-1.5 rounded-full bg-lime" />
          Program executed successfully.
        </p>
      </div>
    </div>
  );
}

const float = (delay: number, distance = 10, duration = 4) => ({
  animate: { y: [0, -distance, 0] },
  transition: { duration, repeat: Infinity, ease: "easeInOut" as const, delay },
});

export function HeroArt() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      {/* ambient background blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-16 -right-10 h-64 w-64 rounded-full bg-violet/25 blur-3xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-lime/20 blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* ===== Desktop composition ===== */}
      <div className="relative hidden min-h-[620px] lg:block">
        <motion.div
          className="absolute top-0 right-16 z-10"
          animate={{ rotate: [-4, 2, -4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Crown size={22} className="mb-1 text-violet" fill="var(--color-violet)" />
          <HandDrawnNote lines={["Same", "Struggle", "Greater You."]} rotate={-4} className="text-2xl" />
        </motion.div>

        <motion.div className="absolute top-24 right-0 z-0 text-violet-light" {...float(0.4, 8, 5)}>
          <Sparkle size={28} fill="currentColor" />
        </motion.div>

        <motion.div
          className="absolute top-36 left-6 z-20 w-[420px]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <EditorChrome tabs={["main.py"]}>
            <CodeBody />
          </EditorChrome>
        </motion.div>

        <motion.div className="absolute top-16 left-0 z-30" {...float(0)}>
          <LanguagePickerCard />
        </motion.div>

        <motion.div className="absolute top-8 right-0 z-30" {...float(0.6)}>
          <RunBadge />
        </motion.div>

        <motion.div
          className="absolute top-[19rem] right-4 z-20"
          animate={{ rotate: [6, 9, 6], y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        >
          <StickyNote />
        </motion.div>

        <motion.div
          className="absolute top-[26rem] left-12 z-20 w-[400px]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <OutputPanel />
        </motion.div>
      </div>

      {/* ===== Mobile / tablet composition ===== */}
      <div className="relative flex flex-col items-center gap-4 lg:hidden">
        <div className="self-start pl-2">
          <Crown size={18} className="mb-0.5 text-violet" fill="var(--color-violet)" />
          <HandDrawnNote lines={["Same Struggle Greater You."]} rotate={-2} className="text-xl" />
        </div>

        <div className="w-full">
          <EditorChrome tabs={["main.py"]}>
            <CodeBody />
          </EditorChrome>
        </div>

        <div className="flex w-full gap-3">
          <LanguagePickerCard className="w-1/2 flex-1" />
          <RunBadge className="w-1/2 flex-1" />
        </div>

        <StickyNote className="self-end" />

        <div className="w-full">
          <OutputPanel />
        </div>
      </div>
    </div>
  );
}
