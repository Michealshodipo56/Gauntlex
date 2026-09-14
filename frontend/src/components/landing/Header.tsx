import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { motion } from "framer-motion";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
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

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-midnight"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden flex-1 items-center justify-center px-4 md:flex lg:max-w-xs">
          <label className="flex w-full items-center gap-2.5 rounded-full border border-gray-200/80 bg-[#f4f5f7] px-4 py-2 text-xs text-gray-400 transition-colors focus-within:border-gray-300 focus-within:bg-white">
            <Search size={14} className="shrink-0 text-gray-400" />
            <input
              type="text"
              placeholder="Search tasks, languages, topics..."
              className="w-full bg-transparent text-xs text-midnight outline-none placeholder:text-gray-400"
            />
          </label>
        </div>

        <div className="hidden items-center gap-4 sm:flex">
          <SignedOut>
            <Link
              to="/sign-in"
              className="px-2 py-2 text-sm font-semibold text-gray-700 transition-colors hover:text-midnight"
            >
              Log in
            </Link>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/sign-up"
                className="block rounded-lg bg-[#6001ff] px-5 py-2 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(96,1,255,0.35)] transition-all hover:bg-[#5200db]"
              >
                Sign Up
              </Link>
            </motion.div>
          </SignedOut>
          <SignedIn>
            <Link
              to="/dashboard"
              className="px-2 py-2 text-sm font-semibold text-gray-700 transition-colors hover:text-midnight"
            >
              Dashboard
            </Link>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
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
          <SignedOut>
            <div className="mt-3 flex gap-3">
              <Link
                to="/sign-in"
                className="flex-1 rounded-full border border-midnight/15 px-4 py-2.5 text-center text-sm font-semibold text-midnight"
              >
                Log in
              </Link>
              <Link
                to="/sign-up"
                className="flex-1 rounded-full bg-violet px-4 py-2.5 text-center text-sm font-semibold text-white"
              >
                Sign Up
              </Link>
            </div>
          </SignedOut>
          <SignedIn>
            <div className="mt-3 flex items-center gap-3">
              <Link
                to="/dashboard"
                className="flex-1 rounded-full border border-midnight/15 px-4 py-2.5 text-center text-sm font-semibold text-midnight"
              >
                Dashboard
              </Link>
              <UserButton afterSignOutUrl="/" />
            </div>
          </SignedIn>
        </motion.div>
      )}
    </motion.header>
  );
}
