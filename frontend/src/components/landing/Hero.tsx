import { motion } from "framer-motion";
import { ArrowRight, Box, Play, Star, Users, Zap } from "lucide-react";
import { CategoryPills } from "./CategoryPills";
import { HeroArt } from "./HeroArt";
import { SquiggleUnderline } from "./SquiggleUnderline";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-14 pb-20 lg:pt-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-5 lg:grid-cols-2 lg:gap-10 lg:px-8">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.12, delayChildren: 0.1 }}
          className="max-w-xl"
        >
          <motion.span
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-midnight/15 bg-white px-4 py-1.5 text-xs font-bold tracking-wide text-midnight/70 uppercase"
          >
            <Zap size={13} className="text-violet" fill="var(--color-violet)" />
            Project-Based Learning
          </motion.span>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-5xl leading-[1.05] font-extrabold tracking-tight text-midnight sm:text-6xl"
          >
            Learn new skills.
            <br />
            <span className="relative mr-2 inline-block -rotate-2 rounded-lg bg-lime px-3 py-0.5">Shape</span>
            your{" "}
            <span className="relative inline-block">
              future.
              <SquiggleUnderline className="absolute -bottom-2 left-0 h-3 w-full text-midnight" />
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} transition={{ duration: 0.6 }} className="mt-6 text-lg text-midnight/60">
            Gauntlex is an AI-guided learning platform built on the 01-edu curriculum. Solve real tasks, get
            unstuck with an AI Guide, pass the tests, then prove your understanding with an AI Auditor.
          </motion.p>

          <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="mt-8 flex flex-wrap items-center gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 rounded-full bg-lime px-6 py-3.5 font-bold text-midnight shadow-[0_10px_24px_-8px_rgba(198,255,0,0.7)] transition-shadow hover:shadow-[0_14px_30px_-8px_rgba(198,255,0,0.85)]"
            >
              Get Started Free
              <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ x: 2 }}
              className="flex items-center gap-2.5 font-semibold text-midnight/80"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-midnight/20">
                <Play size={13} fill="currentColor" className="ml-0.5" />
              </span>
              Watch intro
            </motion.a>
          </motion.div>

          <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="mt-12 flex flex-wrap gap-8">
            <div className="flex items-center gap-2.5">
              <Box size={20} className="text-violet" />
              <div className="leading-tight">
                <p className="font-bold text-midnight">01-edu</p>
                <p className="text-xs text-midnight/50">Curriculum</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Users size={20} className="text-violet" />
              <div className="leading-tight">
                <p className="font-bold text-midnight">50K+</p>
                <p className="text-xs text-midnight/50">Learners</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Star size={20} className="text-lime-dark" fill="var(--color-lime)" />
              <div className="leading-tight">
                <p className="font-bold text-midnight">4.9</p>
                <p className="text-xs text-midnight/50">(2.3K reviews)</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <HeroArt />
      </div>

      <div className="mt-20">
        <CategoryPills />
      </div>
    </section>
  );
}
