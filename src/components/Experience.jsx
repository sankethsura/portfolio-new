import { experience } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="shell py-20 md:py-32">
      <SectionHeading
        index="03"
        title="Experience"
        kicker="Where I've shipped, and what I shipped there."
      />

      <div className="mt-14 md:mt-24">
        {experience.map((job, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <article className="group grid gap-x-6 gap-y-8 border-t border-line py-12 md:grid-cols-12 md:gap-x-10 md:py-16">
              <div className="md:col-span-4">
                <div className="flex items-center gap-3">
                  <h3 className="font-display text-2xl font-medium tracking-tight md:text-3xl">
                    {job.company}
                  </h3>
                  {job.current && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-[0.7rem] font-medium text-muted">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                      </span>
                      Now
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-ink-soft">{job.role}</p>
                <p className="label mt-3">{job.period}</p>
              </div>

              <div className="md:col-span-8">
                <p className="text-base leading-relaxed text-ink-soft">
                  {job.summary}
                </p>
                <ul className="mt-6 flex flex-col gap-3.5">
                  {job.points.map((pt, pi) => (
                    <li
                      key={pi}
                      className="flex gap-3 text-[0.95rem] leading-relaxed text-muted"
                    >
                      <span className="mt-2 h-px w-4 shrink-0 bg-line-strong" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-2">
                  {job.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
        <div className="border-t border-line" />
      </div>
    </section>
  );
}
