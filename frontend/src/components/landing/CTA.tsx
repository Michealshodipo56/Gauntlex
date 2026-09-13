import { motion } from "framer-motion";
import { ArrowRight, Circle } from "lucide-react";
import { HandDrawnNote } from "./HandDrawnNote";
import { LogoMark } from "./Logo";

function LaptopIllustration() {
  return (
    <motion.div
      className="relative hidden w-72 sm:block"
      animate={{ y: [0, -12, 0], rotate: [0, 1, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="rounded-t-xl border-4 border-b-0 border-white/15 bg-white/[0.04] p-3">
        <div className="flex aspect-video items-center justify-center rounded-lg bg-gradient-to-br from-violet/25 to-lime/10">
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <LogoMark size={56} />
          </motion.div>
        </div>
      </div>
      <div className="h-3 rounded-b-xl bg-white/10" />
      <div className="mx-auto h-1.5 w-24 rounded-b-md bg-white/15" />
    </motion.div>
  );
}

export function CTA() {
  return (
    <section className="relative mx-5 mb-16 overflow-hidden rounded-3xl bg-midnight px-6 py-16 sm:mx-8 sm:px-14 lg:mx-auto lg:max-w-7xl">
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-violet/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 -bottom-24 h-72 w-72 rounded-full bg-lime/15 blur-3xl" />

      <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-xs font-bold tracking-[0.2em] text-lime uppercase">Your next skill starts here</p>
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Ready to take on the challenge?
          </h2>
          <p className="mt-4 max-w-md text-lg text-white/55">
            Join thousands of learners building real skills with Gauntlex.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 rounded-full bg-lime px-6 py-3.5 font-bold text-midnight shadow-[0_10px_24px_-8px_rgba(198,255,0,0.7)]"
            >
              Get Started Free <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.08)" }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 font-bold text-white"
            >
              <Circle size={16} />
              Explore Curriculum
            </motion.a>
          </div>
        </motion.div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute -top-10 left-0 hidden -rotate-3 sm:block">
            <HandDrawnNote lines={["Build", "Think", "Prove", "Repeat"]} rotate={-4} dark className="text-2xl" />
          </div>
          <LaptopIllustration />
        </div>
      </div>
    </section>
  );
}
