import { motion } from "framer-motion";
import { ArrowRight, Box, Play, Star, Users } from "lucide-react";
import { CategoryPills } from "./CategoryPills";
import { HeroArt } from "./HeroArt";

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
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="relative mb-6 inline-block">
            <span className="relative z-10 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/90 px-4 py-1 text-xs font-bold tracking-wider text-gray-800 uppercase shadow-xs">
              <span className="text-gray-400">·</span>
              PROJECT-BASED LEARNING
              <span className="text-gray-400">·</span>
            </span>
            <span className="pointer-events-none absolute -inset-x-2 -inset-y-1">
              <svg viewBox="0 0 240 36" fill="none" className="h-full w-full">
                <path d="M4 14C10 6 18 10 22 16" stroke="#6001ff" strokeWidth="2" strokeLinecap="round" />
                <path d="M218 8C224 4 230 8 234 14" stroke="#6001ff" strokeWidth="2" strokeLinecap="round" />
                <path d="M222 22C226 26 232 24 236 20" stroke="#6001ff" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold tracking-tight text-gray-950 sm:text-6xl leading-[1.1]"
          >
            Learn new skills.
            <br />
            <span className="inline-block rounded-xl bg-[#6001ff] px-3.5 py-0.5 text-white mr-2.5 shadow-sm">
              Shape
            </span>
            your{" "}
            <span className="relative inline-block rounded-lg bg-[#c6ff00] px-3 py-0.5 text-black">
              future.
              <span className="absolute -bottom-3 left-0 w-full pointer-events-none">
                <svg viewBox="0 0 130 18" fill="none" className="w-full h-3">
                  <path d="M4 4C24 0 48 8 72 4C96 0 114 7 126 4" stroke="#6001ff" strokeWidth="2.8" strokeLinecap="round" />
                  <path d="M10 8C30 5 54 13 78 9C98 5 116 11 124 8" stroke="#6001ff" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M16 13C36 10 60 17 84 14C102 11 114 15 120 12" stroke="#6001ff" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </span>
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} transition={{ duration: 0.6 }} className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg">
            Gauntlex is an AI-guided learning platform built on the 01-edu curriculum. Solve real tasks, get
            unstuck with an AI Guide, pass the tests, then prove your understanding with an AI Auditor.
          </motion.p>

          <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="mt-8 flex flex-wrap items-center gap-5">
            <motion.a
              href="#"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2.5 rounded-full bg-[#c6ff00] px-7 py-3.5 font-bold text-black shadow-[0_8px_20px_-6px_rgba(198,255,0,0.8)] transition-all hover:bg-[#bbf000]"
            >
              Get Started Free
              <ArrowRight size={18} strokeWidth={2.5} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-3 font-bold text-gray-900"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6001ff] text-white shadow-md">
                <Play size={14} fill="currentColor" className="ml-0.5" />
              </span>
              Watch intro
            </motion.a>
          </motion.div>

          <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="mt-12 flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f4effe] text-[#6001ff]">
                <Box size={20} strokeWidth={2.2} />
              </span>
              <div className="leading-tight">
                <p className="font-bold text-gray-900 text-sm">01-edu</p>
                <p className="text-xs text-gray-500">Curriculum</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f4fee7] text-[#65a30d]">
                <Users size={20} strokeWidth={2.2} />
              </span>
              <div className="leading-tight">
                <p className="font-bold text-gray-900 text-sm">50K+</p>
                <p className="text-xs text-gray-500">Learners</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#fefce8] text-[#eab308]">
                <Star size={20} fill="#eab308" className="text-[#eab308]" />
              </span>
              <div className="leading-tight">
                <p className="font-bold text-gray-900 text-sm">4.9</p>
                <p className="text-xs text-gray-500">(2.3K reviews)</p>
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
