import { motion } from "framer-motion";
import { Check, ChevronDown, Clock, CodeXml, Play, RotateCcw, Share2, SlidersHorizontal, Sun } from "lucide-react";
import { useState } from "react";
import { SiPython } from "react-icons/si";

const CHECKLIST = ["Multiple languages", "Save & share", "No setup required", "Dark & light mode"];

const PLAYGROUND_CODE = [
  { n: 1, content: <span className="text-gray-500"># Gauntlex Playground</span> },
  { n: 2, content: <span className="text-gray-500"># Write, run and experiment with code</span> },
  { n: 3, content: null },
  {
    n: 4,
    content: (
      <>
        <span className="text-gray-200">name</span> <span className="text-gray-400">=</span>{" "}
        <span className="text-[#e5c07b]">"Gauntlex"</span>
      </>
    ),
  },
  { n: 5, content: null },
  {
    n: 6,
    content: (
      <>
        <span className="text-[#c678dd]">for</span> <span className="text-gray-200">i</span>{" "}
        <span className="text-[#c678dd]">in</span> <span className="text-[#61afef]">range</span>
        <span className="text-gray-400">(3):</span>
      </>
    ),
  },
  {
    n: 7,
    content: (
      <>
        <span className="pl-4 text-[#61afef]">print</span>
        <span className="text-gray-400">(</span>
        <span className="text-[#e5c07b]">f"Hello, </span>
        <span className="text-[#e06c75]">{"{name}"}</span>
        <span className="text-[#e5c07b]">! 👋"</span>
        <span className="text-gray-400">)</span>
      </>
    ),
  },
  { n: 8, content: null },
];

function PlaygroundEditor() {
  const [tab, setTab] = useState<"code" | "output">("code");
  const [running, setRunning] = useState(false);

  return (
    <div className="relative">
      {/* Background purple blob with refresh badge */}
      <div className="pointer-events-none absolute -top-8 -left-10 z-0">
        <svg width="220" height="260" viewBox="0 0 220 260" fill="none">
          <path
            d="M80 20C140 20 200 60 190 140C180 220 120 250 50 240C-20 230 -10 140 10 80C30 20 50 20 80 20Z"
            fill="#6001ff"
          />
        </svg>
      </div>
      {/* Circular white icon badge on the blob */}
      <div className="absolute -top-4 -left-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#6001ff] shadow-xl">
        <RotateCcw size={20} strokeWidth={2.5} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 overflow-hidden rounded-2xl border border-white/10 bg-[#0c1017] shadow-2xl"
      >
        {/* Top toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-2.5">
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setTab("code")}
              className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-colors ${
                tab === "code" ? "text-white" : "text-gray-500 hover:text-gray-400"
              }`}
            >
              Code
            </button>
            <span className="text-gray-600 text-xs">·</span>
            <button
              type="button"
              onClick={() => setTab("output")}
              className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-colors ${
                tab === "output" ? "text-white" : "text-gray-500 hover:text-gray-400"
              }`}
            >
              Output
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button type="button" className="text-gray-400 hover:text-white transition-colors" title="Toggle theme">
              <Sun size={15} />
            </button>
            <button
              type="button"
              className="flex items-center gap-1 text-xs font-semibold text-gray-300 hover:text-white transition-colors"
            >
              <Share2 size={13} /> Share
            </button>
            <motion.button
              type="button"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setRunning(true)}
              className="flex items-center gap-1.5 rounded-lg bg-[#6001ff] px-4 py-1.5 text-xs font-bold text-white shadow-sm hover:bg-[#5200db] transition-colors"
            >
              <Play size={11} fill="currentColor" />
              Run
            </motion.button>
          </div>
        </div>

        {/* Secondary language & actions bar */}
        <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.02] px-4 py-2">
          <div className="flex items-center gap-2 rounded-md bg-white/[0.05] px-2.5 py-1 text-xs font-semibold text-gray-200 cursor-pointer">
            <SiPython size={14} color="#3776AB" />
            <span>Python</span>
            <ChevronDown size={12} className="text-gray-400" />
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <button type="button" className="hover:text-gray-300" title="Format code">
              <CodeXml size={14} />
            </button>
            <button type="button" className="hover:text-gray-300" title="Settings">
              <SlidersHorizontal size={14} />
            </button>
          </div>
        </div>

        {/* Code editor content */}
        <div className="min-h-[220px] px-5 py-4 font-mono text-[13px] leading-relaxed">
          {tab === "code" ? (
            <div className="space-y-1">
              {PLAYGROUND_CODE.map((line, idx) => (
                <div key={idx} className="flex gap-4">
                  <span className="w-3 shrink-0 select-none text-gray-600 text-right">{line.n}</span>
                  <span>{line.content}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-1.5 text-sm text-gray-200">
              {running ? (
                <>
                  <p>Hello, Gauntlex! 👋</p>
                  <p>Hello, Gauntlex! 👋</p>
                  <p>Hello, Gauntlex! 👋</p>
                </>
              ) : (
                <p className="text-gray-500">Run code to see output here.</p>
              )}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between border-t border-white/10 px-4 py-2 text-[11px] text-gray-500">
          <span className="flex items-center gap-1.5 text-gray-400">
            <span className="h-2 w-2 rounded-full bg-[#c6ff00]" />
            Ready
          </span>
          <div className="flex items-center gap-4">
            <span>Python 3.12</span>
            <span className="flex items-center gap-1">
              <Clock size={11} /> 245ms
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function Playground() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 bg-white">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <PlaygroundEditor />

        <div className="relative">
          {/* Top right floating hand-drawn box with arrow */}
          <div className="absolute -top-16 right-4 hidden md:block select-none">
            <div className="relative rounded-2xl border-2 border-[#6001ff] bg-white px-4 py-3 shadow-xs rotate-2">
              <div className="font-hand text-base font-bold leading-tight text-[#6001ff]">
                <div>Code →</div>
                <div>Experiment</div>
                <div>Learn</div>
                <div>Improve</div>
              </div>
            </div>
            {/* Purple curved arrow pointing down */}
            <div className="mt-1 translate-x-4">
              <svg width="24" height="34" viewBox="0 0 28 38" fill="none">
                <path
                  d="M18 2C24 12 26 22 14 32M14 32L6 26M14 32L22 30"
                  stroke="#6001ff"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <p className="mb-2 text-xs font-bold tracking-[0.18em] text-gray-500 uppercase">Built for developers</p>
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-950 sm:text-5xl leading-[1.15]">
            A powerful
            <br />
            online{" "}
            <span className="rounded-lg bg-[#c6ff00] px-2.5 py-0.5 text-gray-950">playground.</span>
          </h2>
          <p className="mt-4 max-w-lg text-base text-gray-600 leading-relaxed">
            Write, run, and share code in your browser. Support for multiple languages, perfect for practice,
            experimentation, and learning.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3">
            {CHECKLIST.map((c) => (
              <div key={c} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-gray-800">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6001ff] text-white">
                  <Check size={12} strokeWidth={3} />
                </span>
                {c}
              </div>
            ))}
          </div>

          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#6001ff] px-6 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-[#5200db] transition-all"
          >
            Open Playground <span aria-hidden>→</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}

