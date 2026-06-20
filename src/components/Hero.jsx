"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { profile } from "@/lib/data";
import Magnetic from "./Magnetic";

const ease = [0.16, 1, 0.3, 1];

function Line({ children, delay }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: "115%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.05, ease, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-between gap-y-10 overflow-hidden pt-32 pb-12 md:pt-40 md:pb-16"
    >
      {/* top meta row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="shell flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"
      >
        <p className="max-w-xs text-sm leading-relaxed text-muted">
          {profile.tagline}
        </p>
        <p className="label">
          {profile.location} — {new Date().getFullYear()}
        </p>
      </motion.div>

      {/* giant title */}
      <motion.div style={{ y, opacity }} className="shell">
        <h1 className="display text-[clamp(2.6rem,12.5vw,13rem)] leading-[0.94]">
          <Line delay={0.15}>Full-Stack</Line>
          <Line delay={0.28}>
            <span className="text-muted">Developer</span>
          </Line>
          <Line delay={0.41}>
            <span className="inline-flex items-baseline gap-[0.18em]">
              <span className="font-serif-acc text-accent lowercase italic tracking-normal">
                &amp;
              </span>
              AI Systems
            </span>
          </Line>
        </h1>
      </motion.div>

      {/* bottom row */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.75, ease }}
        className="shell flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
      >
        <p className="max-w-lg text-[1.05rem] leading-relaxed text-muted md:text-lg">
          <span className="font-medium text-ink">Full-stack developer</span> with{" "}
          <span className="font-medium text-ink">3+ years</span> shipping
          production-grade apps on the{" "}
          <span className="font-medium text-ink">MERN stack &amp; Next.js</span>,
          integrating{" "}
          <span className="font-medium text-ink">LLM-driven</span> features into
          systems serving{" "}
          <span className="font-serif-acc text-[1.15em] italic text-accent">
            1M+ users
          </span>{" "}
          a month.
        </p>
        <div className="flex items-center gap-5">
          <Magnetic className="inline-flex">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-bg"
            >
              View work
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </Magnetic>
          <a
            href="#contact"
            className="link-sweep text-sm font-medium text-ink-soft"
          >
            Get in touch
          </a>
        </div>
      </motion.div>

      {/* scroll hint */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="label"
        >
          Scroll
        </motion.div>
      </motion.div>
    </section>
  );
}
