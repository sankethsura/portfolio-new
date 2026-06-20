"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { navLinks, profile } from "@/lib/data";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-line bg-bg/80 backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <nav className="shell flex items-center justify-between py-4 md:py-5">
          <a
            href="#top"
            className="font-display text-lg font-medium tracking-tight"
          >
            Sanketh<span className="text-accent">.</span>
          </a>

          <div className="hidden items-center gap-9 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="link-sweep text-sm font-medium text-ink-soft"
              >
                {l.label}
              </a>
            ))}
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-ink px-4 py-2 text-sm font-medium transition-colors hover:bg-ink hover:text-bg"
            >
              Résumé
              <span className="transition-transform group-hover:translate-x-0.5">
                ↗
              </span>
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-px w-7 bg-ink"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="block h-px w-7 bg-ink"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-px w-7 bg-ink"
            />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-bg md:hidden"
          >
            <div className="shell flex flex-col gap-2">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i + 0.1 }}
                  className="font-display text-5xl font-medium uppercase tracking-tight"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * navLinks.length + 0.1 }}
                className="mt-6 text-sm font-medium text-muted"
              >
                Résumé ↗
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
