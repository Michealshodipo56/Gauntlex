import { motion } from "framer-motion";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";

const NAV_LINKS = ["Curriculum", "Playground", "For Programs", "About"];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-midnight/5 bg-surface/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 lg:px-8">
        <a href="#top" className="shrink-0">
          <Logo size={34} showTagline />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="text-[0.95rem] font-medium text-midnight/70 transition-colors hover:text-midnight"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden flex-1 items-center justify-center px-4 md:flex lg:max-w-xs">
          <label className="flex w-full items-center gap-2 rounded-full bg-midnight/[0.05] px-4 py-2 text-sm text-midnight/50 transition-colors focus-within:bg-midnight/[0.08]">
            <Search size={16} className="shrink-0" />
            <input
              type="text"
              placeholder="Search tasks, languages, topics..."
              className="w-full bg-transparent text-midnight outline-none placeholder:text-midnight/45"
            />
          </label>
        </div>

        <div className="hidden items-center gap-3 sm:flex">
          <button
            type="button"
            className="rounded-full px-4 py-2 text-sm font-semibold text-midnight transition-colors hover:bg-midnight/5"
          >
            Log in
          </button>
          <motion.button
            type="button"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full bg-violet px-5 py-2 text-sm font-semibold text-white shadow-[0_8px_20px_-6px_rgba(106,0,255,0.6)] transition-shadow hover:shadow-[0_10px_26px_-6px_rgba(106,0,255,0.75)]"
          >
            Sign Up
          </motion.button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="rounded-lg p-2 text-midnight sm:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="border-t border-midnight/10 px-5 pb-5 sm:hidden"
        >
          <div className="flex flex-col gap-1 pt-3">
            {NAV_LINKS.map((link) => (
              <a key={link} href="#" className="rounded-lg px-2 py-2.5 text-sm font-medium text-midnight/80">
                {link}
              </a>
            ))}
          </div>
          <div className="mt-3 flex gap-3">
            <button
              type="button"
              className="flex-1 rounded-full border border-midnight/15 px-4 py-2.5 text-sm font-semibold text-midnight"
            >
              Log in
            </button>
            <button type="button" className="flex-1 rounded-full bg-violet px-4 py-2.5 text-sm font-semibold text-white">
              Sign Up
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
