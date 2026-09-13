import { motion } from "framer-motion";
import { Check, Crown } from "lucide-react";
import { EditorChrome } from "./EditorChrome";
import { LANGUAGES } from "./languages";

const CODE_LINES = [
  { n: 1, content: <span className="text-gray-400"># Build. Learn. Prove.</span> },
  { n: 2, content: null },
  {
    n: 3,
    content: (
      <>
        <span className="text-[#c678dd]">def</span> <span className="text-[#61afef]">greet</span>
        <span className="text-gray-200">(name):</span>
      </>
    ),
  },
  {
    n: 4,
    content: (
      <>
        <span className="pl-4 text-[#c678dd]">return</span> <span className="text-[#e5c07b]">f"Hello, </span>
        <span className="text-[#e06c75]">{"{name}"}</span>
        <span className="text-[#e5c07b]">! 👋"</span>
      </>
    ),
  },
  { n: 5, content: null },
  {
    n: 6,
    content: (
      <>
        <span className="text-[#61afef]">greet</span>
        <span className="text-gray-200">(</span>
        <span className="text-[#e5c07b]">"Gauntlex"</span>
        <span className="text-gray-200">)</span>
      </>
    ),
  },
];

function CodeBody() {
  return (
    <div className="space-y-1.5 px-5 py-4 font-mono text-[13px] leading-relaxed">
      {CODE_LINES.map((line) => (
        <div key={line.n} className="flex gap-4">
          <span className="w-3 shrink-0 select-none text-gray-600">{line.n}</span>
          <span>{line.content}</span>
        </div>
      ))}
    </div>
  );
}

function LanguagePickerCard({ className = "" }: { className?: string }) {
  return (
    <div className={`w-44 rounded-2xl border border-gray-200/80 bg-white p-2 shadow-2xl ${className}`}>
      {LANGUAGES.map((lang, i) => {
        const Icon = lang.icon;
        return (
          <div
            key={lang.name}
            className={`flex items-center gap-2.5 rounded-xl px-3 py-1.5 text-xs font-semibold ${
              i === 0 ? "bg-[#EEE9FF] text-gray-900" : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <Icon size={15} color={lang.color} className="shrink-0" />
            {lang.name}
          </div>
        );
      })}
      <div className="flex items-center gap-2.5 rounded-xl px-3 py-1.5 text-xs font-semibold text-gray-400">
        <span className="text-sm leading-none">+</span> More...
      </div>
    </div>
  );
}

function RunBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 rounded-2xl border border-gray-100 bg-white px-4 py-3 shadow-xl ${className}`}>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#6332F6] text-white shadow-sm">
        <Check size={18} strokeWidth={3} />
      </span>
      <div className="leading-tight">
        <p className="text-sm font-bold text-gray-950">Run</p>
        <p className="text-[11px] text-gray-400">Your ideas.<br />Real results.</p>
      </div>
    </div>
  );
}

function StickyNote({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-36 rounded-2xl bg-[#BDFA47] p-4 text-gray-950 shadow-xl select-none ${className}`}
    >
      <div className="font-hand text-xl font-bold leading-snug tracking-wide text-center">
        <div>Code</div>
        <div>Learn</div>
        <div>Improve</div>
        <div>Repeat</div>
      </div>
      {/* decorative hand-drawn loop */}
      <svg
        className="pointer-events-none absolute -inset-1.5 h-[calc(100%+12px)] w-[calc(100%+12px)]"
        viewBox="0 0 160 140"
        fill="none"
      >
        <path
          d="M10 20 C30 5, 130 5, 148 24 C162 44, 156 110, 136 128 C110 144, 25 140, 12 120 C-2 95, 4 35, 24 16"
          stroke="#1e293b"
          strokeWidth="2"
          strokeDasharray="4 2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function OutputPanel({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-white/10 bg-[#11121B] shadow-2xl ${className}`}>
      <div className="flex gap-5 border-b border-white/10 px-4 pt-3 text-xs font-semibold">
        {["Output", "Test Results", "AI Guide"].map((tab, i) => (
          <span
            key={tab}
            className={`pb-2.5 cursor-default ${i === 0 ? "border-b-2 border-[#BDFA47] text-white" : "text-gray-400"}`}
          >
            {tab}
          </span>
        ))}
      </div>
      <div className="space-y-2 px-4 py-3.5 font-mono text-[12px]">
        <p className="text-white font-medium">Hello, Gauntlex! 👋</p>
        <p className="flex items-center gap-2 text-gray-400 text-[11px]">
          <span className="h-2 w-2 rounded-full bg-[#BDFA47]" />
          Program executed successfully.
        </p>
      </div>
    </div>
  );
}

export function HeroArt() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      {/* Organic fluid vector backdrop matching reference */}
      <div className="pointer-events-none absolute -inset-10 z-0 select-none">
        {/* Purple organic blob */}
        <svg
          viewBox="0 0 600 600"
          fill="none"
          className="absolute -top-12 -right-8 w-[500px] h-[500px]"
        >
          <path
            d="M480 160C540 240 560 360 490 440C420 520 300 560 210 510C120 460 60 320 110 220C160 120 320 80 480 160Z"
            fill="#6332F6"
            fillOpacity="0.9"
          />
        </svg>
        {/* Lime organic curved blob at bottom */}
        <svg
          viewBox="0 0 500 500"
          fill="none"
          className="absolute -bottom-16 -left-6 w-[420px] h-[380px]"
        >
          <path
            d="M100 240C60 160 140 70 240 80C340 90 420 180 390 280C360 380 260 420 170 390C80 360 140 320 100 240Z"
            fill="#BDFA47"
            fillOpacity="0.8"
          />
        </svg>
      </div>

      {/* ===== Desktop composition ===== */}
      <div className="relative z-10 hidden min-h-[580px] lg:block">
        {/* Same Struggle Greater You note */}
        <div className="absolute top-2 left-36 z-20 -rotate-6">
          <div className="flex flex-col items-center">
            <Crown size={26} strokeWidth={2.2} className="mb-0.5 text-gray-900" />
            <div className="font-hand text-xl font-bold leading-tight text-gray-900 text-center">
              <div>Same</div>
              <div>Struggle</div>
              <div>Greater</div>
              <div>You.</div>
            </div>
          </div>
        </div>

        {/* Floating rays in top right */}
        <div className="absolute top-6 right-24 z-10">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M10 20C18 16 28 14 34 10" stroke="#6332F6" strokeWidth="3" strokeLinecap="round" />
            <path d="M16 28C22 24 30 20 38 18" stroke="#6332F6" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M22 34C28 32 32 28 36 26" stroke="#6332F6" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        {/* Floating Run badge */}
        <motion.div
          className="absolute top-4 right-2 z-30"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <RunBadge />
        </motion.div>

        {/* Main Code Window */}
        <motion.div
          className="absolute top-24 left-16 z-20 w-[380px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <EditorChrome tabs={["main.py"]}>
            <CodeBody />
          </EditorChrome>
        </motion.div>

        {/* Language picker card */}
        <motion.div
          className="absolute top-40 left-0 z-30"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        >
          <LanguagePickerCard />
        </motion.div>

        {/* Sticky note on the right */}
        <motion.div
          className="absolute top-64 right-6 z-20 rotate-6"
          animate={{ rotate: [6, 9, 6], y: [0, -6, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <StickyNote />
        </motion.div>

        {/* Output panel overlapping editor */}
        <motion.div
          className="absolute top-72 left-28 z-30 w-[360px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <OutputPanel />
        </motion.div>
      </div>

      {/* ===== Mobile / tablet composition ===== */}
      <div className="relative z-10 flex flex-col items-center gap-4 lg:hidden">
        <div className="self-center">
          <div className="flex flex-col items-center">
            <Crown size={22} className="text-gray-900" />
            <div className="font-hand text-lg font-bold text-gray-900 text-center">
              Same Struggle Greater You.
            </div>
          </div>
        </div>

        <div className="w-full">
          <EditorChrome tabs={["main.py"]}>
            <CodeBody />
          </EditorChrome>
        </div>

        <div className="flex w-full gap-3">
          <LanguagePickerCard className="flex-1" />
          <RunBadge className="flex-1" />
        </div>

        <StickyNote className="self-end" />

        <div className="w-full">
          <OutputPanel />
        </div>
      </div>
    </div>
  );
}

