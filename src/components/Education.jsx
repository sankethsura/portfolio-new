import { education } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="shell py-20 md:py-32">
      <SectionHeading
        index="05"
        title="Education"
        kicker="From load-bearing walls to load-bearing code."
      />

      <div className="mt-14 grid gap-10 md:mt-24 md:grid-cols-12">
        {/* degree card */}
        <Reveal className="md:col-span-5">
          <div className="flex h-full flex-col justify-between gap-10 rounded-xl border border-line bg-bg-2 p-7 md:p-9">
            <span className="label">Degree</span>
            <div>
              <h3 className="font-display text-2xl font-medium tracking-tight md:text-[1.7rem]">
                {education.degree}
              </h3>
              <p className="mt-2 text-ink-soft">{education.school}</p>
              <p className="label mt-4">{education.period}</p>
            </div>
          </div>
        </Reveal>

        {/* pivot narrative */}
        <div className="flex flex-col justify-center gap-6 md:col-span-6 md:col-start-7">
          {education.pivot.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p
                className={
                  i === 0
                    ? "font-display text-[clamp(1.4rem,3vw,2.1rem)] font-medium leading-[1.18] tracking-tight"
                    : "text-base leading-relaxed text-muted"
                }
              >
                {p}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
