import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CrownDoodle } from "./Doodles";
import { LogoMark } from "./Logo";

function LaptopMockup() {
  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
      {/* Laptop Screen */}
      <div className="relative mx-auto rounded-t-xl border-[6px] border-[#222834] bg-[#0c1017] p-2 shadow-2xl">
        <div className="flex aspect-[16/10] items-center justify-center rounded-md bg-gradient-to-b from-[#111622] to-[#0a0d14] relative overflow-hidden">
          {/* Subtle reflection line */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.07] pointer-events-none" />
          {/* Screen content: Gauntlex Logo */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <LogoMark size={52} />
          </motion.div>
        </div>
      </div>
      {/* Laptop Base */}
      <div className="relative mx-auto h-3 w-full rounded-b-xl bg-[#1e2330] shadow-lg border-t border-[#303848]">
        <div className="mx-auto h-1 w-14 rounded-b-md bg-[#3a4458]" />
      </div>
      {/* Laptop Shadow underneath */}
      <div className="mx-auto -mt-1 h-3 w-5/6 rounded-full bg-black/60 blur-md" />
    </div>
  );
}

export function CTA() {
  return (
    <section className="mx-4 sm:mx-8 lg:mx-auto lg:max-w-7xl mb-20">
      <div className="relative overflow-hidden rounded-3xl bg-[#0c1017] px-6 py-14 sm:px-12 sm:py-16 text-white shadow-2xl">
        {/* Background ambient lighting */}
        <div className="pointer-events-none absolute -top-20 -left-20 h-80 w-80 rounded-full bg-[#6001ff]/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 right-1/4 h-80 w-80 rounded-full bg-[#c6ff00]/15 blur-3xl" />

        <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column (Heading, Text, CTA buttons) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 xl:col-span-6"
          >
            <p className="mb-2 text-xs font-bold tracking-[0.18em] text-gray-400 uppercase">
              YOUR NEXT SKILL STARTS HERE
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              Ready to take on the challenge?
            </h2>
            <p className="mt-4 max-w-md text-sm sm:text-base text-gray-400 leading-relaxed">
              Join thousands of learners building real skills with Gauntlex.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2.5 rounded-full bg-[#c6ff00] px-7 py-3.5 text-sm font-bold text-black shadow-[0_8px_20px_-6px_rgba(198,255,0,0.8)] hover:bg-[#bbf000] transition-all"
              >
                Get Started Free <ArrowRight size={17} strokeWidth={2.5} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.06)" }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 rounded-full border border-gray-700 bg-white/[0.02] px-6 py-3.5 text-sm font-bold text-white transition-all"
              >
                <span className="flex h-4 w-4 items-center justify-center rounded-full border border-white/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </span>
                Explore Curriculum
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column (Laptop mockup + doodles + vertical badges) */}
          <div className="relative flex items-center justify-center lg:justify-end lg:col-span-6 xl:col-span-6">
            {/* Background purple fluid shape */}
            <div className="pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 z-0">
              <svg width="340" height="340" viewBox="0 0 340 340" fill="none">
                <path
                  d="M260 80C320 140 330 240 270 290C210 340 120 320 60 270C0 220 20 120 90 60C160 0 200 20 260 80Z"
                  fill="#6001ff"
                />
              </svg>
            </div>

            {/* Handwritten Note + Crown on Left of laptop */}
            <div className="absolute -top-6 left-0 sm:left-4 z-20 flex flex-col items-center select-none -rotate-6">
              <CrownDoodle className="w-6 h-4 mb-0.5 text-[#c6ff00]" color="#c6ff00" />
              <div className="font-hand text-base sm:text-lg font-bold leading-tight text-white text-center">
                <div>Same</div>
                <div>Curriculum.</div>
                <div>A Brighter</div>
                <div>You.</div>
              </div>
              {/* Arrow pointing to laptop */}
              <div className="mt-1 translate-x-3">
                <svg width="24" height="20" viewBox="0 0 28 24" fill="none">
                  <path
                    d="M4 4C12 8 20 14 26 18M26 18L18 16M26 18L22 10"
                    stroke="#c6ff00"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Laptop Mockup */}
            <div className="relative z-10 mx-auto lg:mx-0 mr-8 sm:mr-16">
              <LaptopMockup />
            </div>

            {/* Stacked Tags on Right */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2 select-none">
              <span className="rounded-lg bg-[#c6ff00] px-3.5 py-1 text-center font-mono text-xs font-extrabold text-black shadow-sm">
                Build
              </span>
              <span className="rounded-lg bg-[#6001ff] px-3.5 py-1 text-center font-mono text-xs font-extrabold text-white shadow-sm">
                Think
              </span>
              <span className="rounded-lg bg-[#c6ff00] px-3.5 py-1 text-center font-mono text-xs font-extrabold text-black shadow-sm">
                Prove
              </span>
              <span className="rounded-lg bg-[#6001ff] px-3.5 py-1 text-center font-mono text-xs font-extrabold text-white shadow-sm">
                Repeat
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

