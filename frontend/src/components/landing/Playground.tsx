import { motion } from "framer-motion";
import { Check, ChevronDown, Moon, Play, Share2 } from "lucide-react";
import { useState } from "react";
import { SiPython } from "react-icons/si";
import { HandDrawnNote } from "./HandDrawnNote";

const CHECKLIST = ["Multiple languages", "Save & share", "No setup required", "Dark & light mode"];

const PLAYGROUND_CODE = [
  { n: 1, content: <span className="text-white/35"># Gauntlex Playground</span> },
  { n: 2, content: <span className="text-white/35"># Write, run and experiment with code</span> },
  { n: 3, content: null },
  {
    n: 4,
    content: (
      <>
        <span className="text-[#7cc4ff]">name</span> <span className="text-white/70">=</span>{" "}
        <span className="text-lime">"Gauntlex"</span>
      </>
    ),
  },
  { n: 5, content: null },
  {
    n: 6,
    content: (
      <>
        <span className="text-violet-light">for</span> <span className="text-[#7cc4ff]">i</span>{" "}
        <span className="text-violet-light">in</span> <span className="text-white/70">range(3):</span>
      </>
    ),
  },
  {
    n: 7,
    content: (
      <>
        <span className="pl-4 text-white/70">print(f"Hello, {"{name}"}! 👋")</span>
      </>
    ),
  },
];

function PlaygroundEditor() {
  const [tab, setTab] = useState<"code" | "output">("code");
  const [running, setRunning] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="overflow-hidden rounded-2xl border border-white/10 bg-midnight shadow-2xl"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-3.5">
        <div className="flex gap-1 rounded-lg bg-white/5 p-1 text-sm font-semibold">
          {(["code", "output"] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={`rounded-md px-3.5 py-1.5 capitalize transition-colors ${
                tab === t ? "bg-white/10 text-white" : "text-white/40"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Moon size={16} className="text-white/40" />
          <button type="button" className="flex items-center gap-1.5 text-sm font-medium text-white/60 hover:text-white">
            <Share2 size={14} /> Share
          </button>
          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setRunning(true)}
            className="flex items-center gap-1.5 rounded-lg bg-violet px-4 py-1.5 text-sm font-semibold text-white"
          >
            <Play size={13} fill="currentColor" />
            Run
          </motion.button>
        </div>
      </div>

      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-2.5">
        <span className="flex items-center gap-2 rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-white/70">
          <SiPython size={13} color="#3776AB" />
          Python
          <ChevronDown size={12} />
        </span>
      </div>

      <div className="min-h-[220px] px-5 py-5 font-mono text-[13px] leading-relaxed">
        {tab === "code" ? (
          <div className="space-y-1.5">
            {PLAYGROUND_CODE.map((line) => (
              <div key={line.n} className="flex gap-4">
                <span className="w-3 shrink-0 select-none text-white/25">{line.n}</span>
                <span>{line.content}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-1.5 text-white/80">
            {running ? (
              <>
                <p>Hello, Gauntlex! 👋</p>
                <p>Hello, Gauntlex! 👋</p>
                <p>Hello, Gauntlex! 👋</p>
              </>
            ) : (
              <p className="text-white/30">Run the code to see output here.</p>
            )}
          </div>
        )}
      </div>

      <div className="flex items-center justify-between border-t border-white/10 px-5 py-2.5 text-xs text-white/40">
        <span className="flex items-center gap-1.5">
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-lime"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
          Ready
        </span>
        <span className="flex items-center gap-4">
          <span>Python 3.12</span>
          <span>245ms</span>
        </span>
      </div>
    </motion.div>
  );
}

export function Playground() {
  return (
    <section className="relative overflow-hidden bg-midnight py-24">
      <div className="pointer-events-none absolute top-0 left-1/4 h-72 w-72 rounded-full bg-violet/20 blur-3xl" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-5 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <PlaygroundEditor />

        <div className="relative">
          <div className="absolute -top-14 right-4 hidden rotate-2 sm:block">
            <HandDrawnNote lines={["Code", "Experiment", "Learn", "Improve"]} rotate={3} dark className="text-xl" />
          </div>

          <p className="mb-3 text-xs font-bold tracking-[0.2em] text-lime uppercase">Built for developers</p>
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            A powerful
            <br />
            online <span className="rounded-lg bg-lime px-2 py-0.5 text-midnight">playground.</span>
          </h2>
          <p className="mt-5 max-w-md text-lg text-white/55">
            Write, run, and share code in your browser. Support for multiple languages, perfect for practice,
            experimentation, and learning.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-3">
            {CHECKLIST.map((c) => (
              <div key={c} className="flex items-center gap-2 text-sm font-medium text-white/80">
                <Check size={16} className="text-lime" />
                {c}
              </div>
            ))}
          </div>

          <motion.a
            href="#"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-violet px-6 py-3.5 font-bold text-white shadow-[0_10px_24px_-8px_rgba(106,0,255,0.7)]"
          >
            Open Playground <span aria-hidden>→</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
