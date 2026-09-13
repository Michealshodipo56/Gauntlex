import { motion } from "framer-motion";
import { Check, ChevronRight, Lock, Play } from "lucide-react";
import { HandDrawnNote } from "./HandDrawnNote";
import { SquiggleUnderline } from "./SquiggleUnderline";

const CHECKLIST = [
  "Sequential, structured progression",
  "Real project tasks, no video lectures",
  "AI support without giving away answers",
  "Automated testing and AI auditing",
];

type RowStatus = "done" | "active" | "locked";

const TASKS: { n: string; name: string; status: RowStatus }[] = [
  { n: "01", name: "ft_printft", status: "done" },
  { n: "02", name: "get_next_line", status: "done" },
  { n: "03", name: "born2beroot", status: "done" },
  { n: "04", name: "so_long", status: "active" },
  { n: "05", name: "push_swap", status: "locked" },
  { n: "06", name: "minishell", status: "locked" },
  { n: "07", name: "philosophers", status: "locked" },
];

function StatusIcon({ status }: { status: RowStatus }) {
  if (status === "done") return <Check size={16} className="text-violet" strokeWidth={3} />;
  if (status === "active")
    return (
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet text-white">
        <Play size={11} fill="currentColor" className="ml-0.5" />
      </span>
    );
  return <Lock size={14} className="text-midnight/25" />;
}

function CurriculumListCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="rounded-2xl border border-midnight/8 bg-white p-2 shadow-xl"
    >
      <div className="flex items-center justify-between px-4 pt-3 pb-2">
        <h3 className="font-bold text-midnight">Curriculum Preview</h3>
        <a href="#" className="flex items-center gap-1 text-sm font-semibold text-violet hover:underline">
          View full curriculum <ChevronRight size={14} />
        </a>
      </div>
      <div>
        {TASKS.map((task, i) => (
          <motion.div
            key={task.n}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className={`flex items-center gap-4 rounded-xl px-4 py-3 ${
              task.status === "active" ? "bg-violet/8" : ""
            }`}
          >
            <span className="w-5 font-mono text-xs text-midnight/35">{task.n}</span>
            <span
              className={`flex-1 text-sm font-medium ${
                task.status === "locked" ? "text-midnight/35" : "text-midnight"
              }`}
            >
              {task.name}
            </span>
            <StatusIcon status={task.status} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function ProgressRing({ value, total }: { value: number; total: number }) {
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const pct = value / total;

  return (
    <svg width={88} height={88} viewBox="0 0 88 88" className="shrink-0 -rotate-90">
      <circle cx={44} cy={44} r={radius} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth={8} />
      <motion.circle
        cx={44}
        cy={44}
        r={radius}
        fill="none"
        stroke="var(--color-lime)"
        strokeWidth={8}
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        whileInView={{ strokeDashoffset: circumference * (1 - pct) }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
      />
    </svg>
  );
}

function CurrentProgressCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ type: "spring", stiffness: 160, damping: 16, delay: 0.2 }}
      className="w-64 rounded-2xl bg-midnight p-5 text-white shadow-2xl"
    >
      <p className="mb-4 text-sm font-semibold text-white/60">Current Progress</p>
      <div className="flex items-center gap-4">
        <div className="relative">
          <ProgressRing value={3} total={42} />
          <div className="absolute inset-0 flex flex-col items-center justify-center leading-none">
            <span className="text-lg font-extrabold">3/42</span>
          </div>
        </div>
        <p className="text-xs text-white/50">completed</p>
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
        <div>
          <p className="text-xs text-white/45">Next unlock</p>
          <p className="text-sm font-semibold">Pass audit on so_long</p>
        </div>
        <ChevronRight size={16} className="text-lime" />
      </div>
    </motion.div>
  );
}

export function CurriculumPreview() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-10">
        <div className="relative max-w-lg">
          <p className="mb-3 text-xs font-bold tracking-[0.2em] text-violet uppercase">The 01-edu curriculum</p>
          <h2 className="text-4xl font-extrabold tracking-tight text-midnight sm:text-5xl">
            The same curriculum.
            <br />
            More support.
          </h2>
          <p className="mt-5 text-lg text-midnight/55">
            Gauntlex uses the 01-edu curriculum — a proven project-based model that builds real developers — and
            makes it accessible anywhere, with AI guidance and auditing.
          </p>

          <div className="mt-7 flex flex-col gap-3">
            {CHECKLIST.map((c) => (
              <div key={c} className="flex items-center gap-2.5 text-sm font-medium text-midnight/80">
                <Check size={17} className="shrink-0 text-violet" />
                {c}
              </div>
            ))}
          </div>

          <motion.a
            href="#"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3.5 font-bold text-midnight shadow-[0_10px_24px_-8px_rgba(198,255,0,0.7)]"
          >
            Explore the curriculum <span aria-hidden>→</span>
          </motion.a>

          <div className="absolute -bottom-16 left-0 hidden rotate-2 sm:block">
            <HandDrawnNote lines={["Build", "Think", "Solve", "Grow"]} rotate={-3} className="text-2xl text-violet" />
            <SquiggleUnderline className="mt-1 h-2 w-24 text-violet" color="var(--color-violet)" />
          </div>
        </div>

        <div className="relative">
          <CurriculumListCard />
          <div className="mt-6 flex justify-end lg:absolute lg:-right-6 lg:-bottom-10 lg:mt-0">
            <CurrentProgressCard />
          </div>
        </div>
      </div>
    </section>
  );
}
