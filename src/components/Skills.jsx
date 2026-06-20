"use client";

import { motion } from "motion/react";
import { skills } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const ease = [0.16, 1, 0.3, 1];

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};
const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

export default function Skills() {
  return (
    <section id="skills" className="shell py-20 md:py-32">
      <SectionHeading
        index="02"
        title="Capabilities"
        kicker="The toolkit behind the work — front to back, plus the AI layer."
      />

      <div className="mt-14 grid gap-x-10 gap-y-14 md:mt-24 md:grid-cols-2 lg:grid-cols-4">
        {skills.map((group, gi) => (
          <Reveal key={group.title} delay={gi * 0.06} className="flex flex-col">
            <h3 className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {group.title}
            </h3>
            <motion.ul
              className="flex flex-col"
              variants={list}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-10% 0px" }}
            >
              {group.items.map((skill) => (
                <motion.li
                  key={skill}
                  variants={item}
                  className="border-t border-line py-2.5 text-[0.95rem] text-ink-soft transition-colors duration-300 last:border-b hover:text-ink"
                >
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
