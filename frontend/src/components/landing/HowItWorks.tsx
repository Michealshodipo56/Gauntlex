import { motion } from "framer-motion";
import { ArrowRight, Code2, FileText, HelpCircle, Lock, MessageCircle } from "lucide-react";

const STEPS = [
  {
    icon: FileText,
    bg: "bg-[#c6ff00]",
    iconColor: "text-gray-950",
    title: "Get a task",
    desc: "Work on the next project in a fixed sequence.",
  },
  {
    icon: MessageCircle,
    bg: "bg-[#6001ff]",
    iconColor: "text-white",
    title: "Get unstuck",
    desc: "Use the AI Guide to reason through problems (no answers).",
  },
  {
    icon: Code2,
    bg: "bg-[#c6ff00]",
    iconColor: "text-gray-950",
    title: "Pass the tests",
    desc: "Your code is run in a secure environment with the real test suite.",
  },
  {
    icon: HelpCircle,
    bg: "bg-[#6001ff]",
    iconColor: "text-white",
    title: "Prove you understand",
    desc: "Answer questions from the AI Auditor about your implementation.",
  },
  {
    icon: Lock,
    bg: "bg-[#c6ff00]",
    iconColor: "text-gray-950",
    title: "Unlock the next task",
    desc: "Move forward only when you've demonstrated real understanding.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function HowItWorks() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="relative mb-14 flex flex-col md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-2 text-xs font-bold tracking-[0.18em] text-gray-500 uppercase">How Gauntlex Works</p>
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-950 sm:text-5xl">
            A simple process.
            <br />
            Real learning.{" "}
            <span className="inline-block align-middle">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 22V10M12 10C12 6 8 3 4 5C3 9 6 12 12 10ZM12 10C12 6 16 3 20 5C21 9 18 12 12 10Z"
                  stroke="#84cc16"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="#c6ff00"
                  fillOpacity="0.4"
                />
              </svg>
            </span>
          </h2>
          <p className="mt-3 text-base text-gray-500">Focused, hands-on, and guided at every step.</p>
        </div>

        {/* Handwritten note on top right */}
        <div className="mt-6 md:mt-0 flex flex-col items-center select-none">
          <div className="font-hand text-lg font-bold leading-tight text-gray-900 text-center rotate-3">
            <div>Real Projects.</div>
            <div>Real Skills.</div>
            <div>No Shortcuts.</div>
          </div>
          {/* Hand drawn arrow pointing down */}
          <div className="mt-1 translate-x-2">
            <svg width="28" height="42" viewBox="0 0 30 46" fill="none">
              <path
                d="M10 2C16 16 26 26 18 38M18 38L10 32M18 38L24 35"
                stroke="#1e293b"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5"
      >
        {STEPS.map((step, i) => (
          <motion.div key={step.title} className="relative flex flex-col items-start">
            <motion.div
              variants={item}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="w-full h-full rounded-2xl border border-gray-200/70 bg-white p-5 shadow-2xs hover:shadow-md transition-all"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${step.bg} ${step.iconColor}`}>
                  <step.icon size={18} strokeWidth={2.5} />
                </span>
                <span className="text-base font-bold text-gray-400">{i + 1}</span>
              </div>
              <h3 className="mb-1.5 text-sm font-bold text-gray-900">{step.title}</h3>
              <p className="text-xs leading-relaxed text-gray-500">{step.desc}</p>
            </motion.div>

            {i < STEPS.length - 1 && (
              <div className="pointer-events-none absolute top-1/2 -right-3 z-10 hidden -translate-y-1/2 text-gray-300 lg:block">
                <ArrowRight size={16} strokeWidth={2} />
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
