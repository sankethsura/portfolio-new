"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { projects, featuredProject } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const ease = [0.16, 1, 0.3, 1];

function FeaturedCard() {
  const p = featuredProject;
  const ref = useRef(null);

  // cursor-driven 3D tilt
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [4.5, -4.5]), {
    stiffness: 150,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-5, 5]), {
    stiffness: 150,
    damping: 18,
  });

  const onMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <Reveal className="mt-14 md:mt-24" style={{ perspective: 1200 }}>
      <motion.a
        ref={ref}
        href={p.href}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="hover"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.5, ease }}
        className="group relative block overflow-hidden rounded-2xl border border-line bg-bg-2"
      >
        {/* accent edge */}
        <span className="absolute inset-x-0 top-0 h-1 bg-accent" aria-hidden />

        <div className="grid gap-10 p-7 md:grid-cols-12 md:gap-12 md:p-12">
          {/* left: identity + copy */}
          <div className="md:col-span-7">
            <div className="flex items-center gap-4">
              <span className="font-display text-sm font-medium text-accent">
                {p.index}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-bg px-3 py-1 text-xs font-medium text-ink-soft">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                {p.status}
              </span>
              <span className="label hidden sm:inline">{p.role}</span>
            </div>

            <h3 className="mt-8 font-display text-[clamp(2.4rem,6vw,4.5rem)] font-medium uppercase leading-none tracking-tight">
              {p.title}
            </h3>
            <p className="mt-2 font-serif-acc text-2xl italic text-accent-ink">
              {p.tagline}
            </p>

            <p className="mt-6 max-w-xl text-[0.97rem] leading-relaxed text-muted">
              {p.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* right: highlights + visit CTA */}
          <div className="flex flex-col justify-between gap-8 md:col-span-5">
            <ul className="flex flex-col gap-3.5">
              {p.highlights.map((h) => (
                <li
                  key={h}
                  className="flex gap-3 text-sm leading-relaxed text-ink-soft"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between rounded-xl border border-line bg-bg px-5 py-4">
              <span className="font-display text-sm font-medium tracking-tight">
                {p.url}
              </span>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft transition-colors group-hover:text-accent">
                Visit live site
                <span className="transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </span>
            </div>
          </div>
        </div>
      </motion.a>
    </Reveal>
  );
}

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="shell py-20 md:py-32">
      <SectionHeading
        index="05"
        title="Selected Work"
        kicker="From a live SaaS product to AI pipelines and conversational tooling."
      />

      <FeaturedCard />

      <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:mt-8 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.index} delay={(i % 2) * 0.08} className="bg-bg">
            <motion.article
              onMouseEnter={() => setActive(p.index)}
              onMouseLeave={() => setActive(null)}
              data-cursor="hover"
              className="group relative flex h-full flex-col justify-between overflow-hidden p-7 md:p-10"
            >
              {/* hover wash */}
              <motion.span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-ink"
                initial={false}
                animate={{ opacity: active === p.index ? 1 : 0 }}
                transition={{ duration: 0.45, ease }}
              />

              <div
                className={`relative z-10 transition-colors duration-300 ${
                  active === p.index ? "text-bg" : "text-ink"
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-display text-sm font-medium text-accent">
                    {p.index}
                  </span>
                  {(p.metric || p.status) && (
                    <span
                      className={`rounded-full border px-3 py-1 text-xs ${
                        active === p.index
                          ? "border-bg/30 text-bg/80"
                          : "border-line text-muted"
                      }`}
                    >
                      {p.status ?? p.metric}
                    </span>
                  )}
                </div>

                <h3 className="mt-10 font-display text-[clamp(1.5rem,3vw,2.1rem)] font-medium leading-tight tracking-tight md:mt-16">
                  {p.title}
                </h3>
                <p
                  className={`mt-1 font-serif-acc text-lg italic ${
                    active === p.index ? "text-accent" : "text-accent-ink"
                  }`}
                >
                  {p.tagline}
                </p>

                <p
                  className={`mt-5 max-w-md text-[0.95rem] leading-relaxed transition-colors duration-300 ${
                    active === p.index ? "text-bg/70" : "text-muted"
                  }`}
                >
                  {p.description}
                </p>
              </div>

              <div className="relative z-10 mt-8 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className={`rounded-full border px-3 py-1 text-xs transition-colors duration-300 ${
                      active === p.index
                        ? "border-bg/25 text-bg/80"
                        : "border-line text-muted"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
