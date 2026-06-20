"use client";

import { motion } from "motion/react";
import { profile } from "@/lib/data";
import Reveal, { RevealLine } from "./Reveal";

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "LinkedIn", value: "in/sanketh-sura", href: profile.linkedin },
  { label: "GitHub", value: "View profile", href: profile.github },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line bg-ink text-bg">
      <div className="shell py-24 md:py-36">
        <p className="label text-faint">05 — Contact</p>

        <h2 className="mt-8 font-display text-[clamp(2.6rem,9vw,9rem)] font-medium uppercase leading-[0.92] tracking-tight">
          <RevealLine>Let&apos;s build</RevealLine>
          <RevealLine delay={0.08}>
            <span className="font-serif-acc italic lowercase tracking-normal text-accent">
              something
            </span>{" "}
            real
          </RevealLine>
        </h2>

        <Reveal delay={0.15}>
          <a
            href={`mailto:${profile.email}`}
            className="group mt-12 inline-flex items-center gap-4 text-xl md:text-3xl"
          >
            <span className="border-b border-bg/30 pb-1 transition-colors group-hover:border-accent group-hover:text-accent">
              {profile.email}
            </span>
            <motion.span
              className="text-accent"
              initial={{ x: 0 }}
              whileHover={{ x: 6 }}
            >
              ↗
            </motion.span>
          </a>
        </Reveal>

        <div className="mt-20 grid grid-cols-2 gap-px border border-bg/15 bg-bg/15 md:grid-cols-4">
          {links.map((l, i) => (
            <Reveal
              key={l.label}
              delay={i * 0.06}
              className="bg-ink"
            >
              <a
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex h-full flex-col gap-2 p-6 transition-colors hover:bg-bg/5"
              >
                <span className="label text-faint">{l.label}</span>
                <span className="flex items-center justify-between text-base text-bg group-hover:text-accent">
                  {l.value}
                  <span className="opacity-0 transition-opacity group-hover:opacity-100">
                    →
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
