"use client";

import { motion } from "motion/react";
import { clients } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1];

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export default function TrustedBy() {
  return (
    <section className="border-y border-line bg-bg-2">
      <div className="shell flex flex-col gap-8 py-12 md:flex-row md:items-center md:gap-16 md:py-16">
        <p className="label shrink-0 md:max-w-[8rem]">
          Trusted by / worked with
        </p>

        <motion.ul
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-15% 0px" }}
          className="flex flex-wrap items-center gap-x-8 gap-y-3 md:gap-x-12"
        >
          {clients.map((c) => (
            <motion.li
              key={c}
              variants={item}
              className="cursor-default font-display text-xl font-medium tracking-tight text-ink-soft/70 transition-colors duration-300 hover:text-accent md:text-2xl"
            >
              {c}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
