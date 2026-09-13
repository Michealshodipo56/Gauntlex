import { motion } from "framer-motion";
import { ArrowRight, Code2, FileText, HelpCircle, Lock, MessageCircle } from "lucide-react";
import { HandDrawnNote } from "./HandDrawnNote";

const STEPS = [
  {
    icon: FileText,
    bg: "bg-lime",
    iconColor: "text-midnight",
    title: "Get a task",
    desc: "Work on the next project in a fixed sequence.",
  },
  {
    icon: MessageCircle,
    bg: "bg-violet",
    iconColor: "text-white",
    title: "Get unstuck",
    desc: "Use the AI Guide to reason through problems (no answers).",
  },
  {
    icon: Code2,
    bg: "bg-lime",
    iconColor: "text-midnight",
    title: "Pass the tests",
    desc: "Your code is run in a secure environment with the real test suite.",
  },
  {
    icon: HelpCircle,
    bg: "bg-violet",
    iconColor: "text-white",
    title: "Prove you understand",
    desc: "Answer questions from the AI Auditor about your implementation.",
  },
  {
    icon: Lock,
    bg: "bg-midnight",
    iconColor: "text-lime",
    title: "Unlock the next task",
    desc: "Move forward only when you've demonstrated real understanding.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

const item = {
  hidden: { opacity: 0, y: 28, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export function HowItWorks() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="relative mb-14 max-w-xl">
        <p className="mb-3 text-xs font-bold tracking-[0.2em] text-violet uppercase">How Gauntlex Works</p>
        <h2 className="text-4xl font-extrabold tracking-tight text-midnight sm:text-5xl">
          A simple process.
          <br />
          Real learning. <span className="inline-block">🌿</span>
        </h2>
        <p className="mt-4 text-lg text-midnight/55">Focused, hands-on, and guided at every step.</p>

        <div className="absolute top-0 right-0 hidden -rotate-3 text-right sm:block">
          <HandDrawnNote lines={["Real Projects.", "Real Skills.", "No Shortcuts."]} rotate={2} className="text-xl text-violet" />
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={container}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4"
      >
        {STEPS.map((step, i) => (
          <motion.div key={step.title} className="relative flex flex-col items-start">
            <motion.div
              variants={item}
              transition={{ type: "spring", stiffness: 180, damping: 16 }}
              whileHover={{ y: -6 }}
              className="w-full rounded-2xl border border-midnight/8 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${step.bg} ${step.iconColor}`}>
                  <step.icon size={20} />
                </span>
                <span className="font-hand text-2xl text-midnight/30">{i + 1}</span>
              </div>
              <h3 className="mb-1.5 font-bold text-midnight">{step.title}</h3>
              <p className="text-sm leading-relaxed text-midnight/55">{step.desc}</p>
            </motion.div>

            {i < STEPS.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="pointer-events-none absolute top-1/2 -right-3 z-10 hidden -translate-y-1/2 text-midnight/20 lg:block"
              >
                <ArrowRight size={20} />
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
