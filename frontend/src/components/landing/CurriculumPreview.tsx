import { motion } from "framer-motion";
import { Check, ChevronRight, Lock, Play } from "lucide-react";

const CHECKLIST = [
  "Sequential, structured progression",
  "Real project tasks, no video lectures",
  "AI support without giving away answers",
  "Automated testing and AI auditing",
];

type RowStatus = "done-dark" | "done-green" | "active" | "locked";

const TASKS: { n: string; name: string; status: RowStatus }[] = [
  { n: "01", name: "ft_printft", status: "done-dark" },
  { n: "02", name: "get_next_line", status: "done-green" },
  { n: "03", name: "born2beroot", status: "done-green" },
  { n: "04", name: "so_long", status: "active" },
  { n: "05", name: "push_swap", status: "locked" },
  { n: "06", name: "minishell", status: "locked" },
  { n: "07", name: "philosophers", status: "locked" },
];

function StatusIcon({ status }: { status: RowStatus }) {
  if (status === "done-dark") return <Check size={15} className="text-gray-900" strokeWidth={2.5} />;
  if (status === "done-green") return <Check size={15} className="text-[#84cc16]" strokeWidth={2.5} />;
  if (status === "active")
    return (
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#6001ff] text-white shadow-xs">
        <Play size={10} fill="currentColor" className="ml-0.5" />
      </span>
    );
  return <Lock size={13} className="text-gray-400" />;
}

function CurriculumListCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="relative z-10 w-full max-w-md rounded-2xl border border-gray-200/80 bg-white p-3 sm:p-4 shadow-xl"
    >
      <div className="flex items-center justify-between px-3 pt-2 pb-3">
        <h3 className="text-sm sm:text-base font-bold text-gray-950">Curriculum Preview</h3>
        <a href="#" className="flex items-center gap-1 text-xs font-semibold text-[#6001ff] hover:underline">
          View full curriculum <ChevronRight size={13} />
        </a>
      </div>
      <div className="space-y-1">
        {TASKS.map((task, i) => (
          <motion.div
            key={task.n}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className={`flex items-center gap-3.5 rounded-xl px-3 py-2.5 transition-colors ${
              task.status === "active" ? "bg-[#f4f2ff]" : "hover:bg-gray-50"
            }`}
          >
            <span className="w-5 font-mono text-xs text-gray-400">{task.n}</span>
            <span
              className={`flex-1 font-mono text-xs font-semibold ${
                task.status === "locked" ? "text-gray-400" : "text-gray-900"
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
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const pct = value / total;

  return (
    <svg width={100} height={100} viewBox="0 0 100 100" className="shrink-0 -rotate-90">
      <circle cx={50} cy={50} r={radius} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth={7} />
      <motion.circle
        cx={50}
        cy={50}
        r={radius}
        fill="none"
        stroke="#c6ff00"
        strokeWidth={7}
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        whileInView={{ strokeDashoffset: circumference * (1 - pct) }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
      />
    </svg>
  );
}

function CurrentProgressCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 16 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ type: "spring", stiffness: 180, damping: 18, delay: 0.2 }}
      className="w-60 rounded-2xl bg-[#0c1017] p-4 text-white shadow-2xl"
    >
      <p className="mb-3 text-xs font-semibold text-gray-400">Current Progress</p>
      <div className="flex items-center justify-center my-1">
        <div className="relative flex items-center justify-center">
          <ProgressRing value={3} total={42} />
          <div className="absolute inset-0 flex flex-col items-center justify-center leading-none text-center">
            <span className="text-base font-extrabold text-white">3 / 42</span>
            <span className="mt-1 text-[10px] text-gray-400">completed</span>
          </div>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3">
        <div>
          <p className="text-[10px] text-gray-400">Next unlock</p>
          <p className="text-xs font-semibold text-white">Pass audit on so_long</p>
        </div>
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#6001ff] text-white shadow-xs cursor-pointer hover:bg-[#5200db] transition-colors">
          <ChevronRight size={14} strokeWidth={2.5} />
        </span>
      </div>
    </motion.div>
  );
}

export function CurriculumPreview() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-12">
        <div className="relative max-w-lg">
          <p className="mb-2 text-xs font-bold tracking-[0.18em] text-gray-500 uppercase">The 01-edu curriculum</p>
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-950 sm:text-5xl leading-[1.15]">
            The same curriculum.
            <br />
            More support.
          </h2>
          <p className="mt-4 text-base text-gray-600 leading-relaxed">
            Gauntlex uses the 01-edu curriculum — a proven project-based model that builds real developers — and
            makes it accessible anywhere, with AI guidance and auditing.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            {CHECKLIST.map((c) => (
              <div key={c} className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-gray-800">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c6ff00] text-black">
                  <Check size={12} strokeWidth={3} />
                </span>
                {c}
              </div>
            ))}
          </div>

          <motion.a
            href="#"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-[#c6ff00] px-7 py-3.5 font-bold text-black shadow-[0_8px_20px_-6px_rgba(198,255,0,0.8)] hover:bg-[#bbf000] transition-all"
          >
            Explore the curriculum <span aria-hidden>→</span>
          </motion.a>

          {/* Hand drawn note Build Think Solve Grow with curved arrow */}
          <div className="absolute -bottom-16 right-6 hidden sm:flex flex-col items-center select-none">
            <div className="font-hand text-xl font-bold leading-tight text-gray-950 text-center rotate-3">
              <div>Build</div>
              <div>Think</div>
              <div>Solve</div>
              <div>Grow</div>
            </div>
            <div className="mt-1 -translate-x-2">
              <svg width="26" height="38" viewBox="0 0 28 40" fill="none">
                <path
                  d="M18 2C24 14 26 24 14 34M14 34L6 28M14 34L22 32"
                  stroke="#1e293b"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          {/* Background decorative fluid blobs */}
          <div className="pointer-events-none absolute -inset-8 z-0">
            <div className="absolute -top-10 -right-6 h-48 w-48 rounded-full bg-[#c6ff00]/70 blur-2xl" />
            <div className="absolute -bottom-10 right-1/4 h-56 w-56 rounded-full bg-[#6001ff]/35 blur-3xl" />
          </div>

          <div className="relative z-10 w-full max-w-md">
            <CurriculumListCard />
            <div className="mt-6 flex justify-end lg:absolute lg:-right-10 lg:-bottom-10 lg:mt-0 z-20">
              <CurrentProgressCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

