import { principles } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Approach() {
  return (
    <section id="approach" className="shell py-20 md:py-32">
      <SectionHeading
        index="03"
        title="Approach"
        kicker="A few principles behind how I build software."
      />

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:mt-24 md:grid-cols-2">
        {principles.map((p, i) => (
          <Reveal key={p.n} delay={(i % 2) * 0.08} className="bg-bg">
            <div className="group relative flex h-full flex-col gap-4 overflow-hidden p-7 md:p-10">
              {/* large faint index watermark */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-2 -top-6 font-display text-[7rem] font-medium leading-none text-line-strong/40 transition-transform duration-500 group-hover:-translate-y-1 md:text-[9rem]"
              >
                {p.n}
              </span>

              <span className="relative z-10 h-2 w-2 rounded-full bg-accent" />
              <h3 className="relative z-10 font-display text-2xl font-medium tracking-tight md:text-[1.7rem]">
                {p.title}
              </h3>
              <p className="relative z-10 max-w-md text-[0.97rem] leading-relaxed text-muted">
                {p.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
