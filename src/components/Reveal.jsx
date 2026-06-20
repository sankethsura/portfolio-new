"use client";

import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1];

/** Scroll-triggered fade + rise. Plays once. */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  as = "div",
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
      transition={{ duration: 0.85, ease, delay }}
    >
      {children}
    </MotionTag>
  );
}

/** Masked line reveal — clips text rising into view. */
export function RevealLine({ children, className, delay = 0 }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className={`block ${className ?? ""}`}
        initial={{ y: "110%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, margin: "-8% 0px" }}
        transition={{ duration: 0.95, ease, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}
