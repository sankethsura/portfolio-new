"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const STATEMENT = [
  "I",
  "turn",
  "complex",
  "AI",
  "workflows",
  "into",
  "fast,",
  "reliable,",
  { text: "production-grade", accent: true },
  "products",
  "people",
  "actually",
  "use.",
];

function Word({ progress, range, children, accent }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span className="mr-[0.25em] inline-block">
      <motion.span
        style={{ opacity }}
        className={
          accent
            ? "font-serif-acc italic lowercase text-accent"
            : undefined
        }
      >
        {children}
      </motion.span>
    </span>
  );
}

/** The big About statement — each word illuminates as it scrolls into view. */
export default function ScrollStatement() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.35"],
  });

  const n = STATEMENT.length;

  return (
    <p
      ref={ref}
      className="font-display text-[clamp(1.6rem,3.4vw,2.75rem)] font-medium leading-[1.18] tracking-tight"
    >
      {STATEMENT.map((w, i) => {
        const start = i / n;
        const end = start + 1 / n;
        const token = typeof w === "string" ? w : w.text;
        const accent = typeof w === "object" && w.accent;
        return (
          <Word
            key={i}
            progress={scrollYProgress}
            range={[start, end]}
            accent={accent}
          >
            {token}
          </Word>
        );
      })}
    </p>
  );
}
