import { about, profile } from "@/lib/data";
import Reveal, { RevealLine } from "./Reveal";
import SectionHeading from "./SectionHeading";

const facts = [
  { k: "Role", v: "Senior Software Engineer" },
  { k: "Company", v: "YuVerse" },
  { k: "Based in", v: "Bengaluru, India" },
  { k: "Experience", v: "3+ years" },
];

export default function About() {
  return (
    <section id="about" className="shell py-20 md:py-32">
      <SectionHeading
        index="01"
        title="About"
        kicker="Based in Bengaluru, building for the web and for AI."
      />

      <div className="mt-14 grid gap-10 md:mt-24 md:grid-cols-12">
        <div className="flex flex-col justify-between gap-12 md:col-span-7 md:col-start-1">
          <p className="font-display text-[clamp(1.6rem,3.4vw,2.75rem)] font-medium leading-[1.12] tracking-tight">
            <RevealLine>I turn complex AI workflows into</RevealLine>
            <RevealLine delay={0.06}>
              <span className="text-muted">fast, reliable, </span>
              <span className="font-serif-acc italic text-accent lowercase">
                production-grade
              </span>
            </RevealLine>
            <RevealLine delay={0.12}>
              <span className="text-muted">products people actually use.</span>
            </RevealLine>
          </p>

          <Reveal delay={0.1} className="grid grid-cols-2 gap-px bg-line">
            {facts.map((f) => (
              <div key={f.k} className="bg-bg py-4 pr-4">
                <p className="label mb-1">{f.k}</p>
                <p className="text-sm font-medium text-ink">{f.v}</p>
              </div>
            ))}
          </Reveal>

          {profile.available && (
            <Reveal delay={0.15}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 text-sm font-medium text-ink-soft"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Available for new projects
              </a>
            </Reveal>
          )}
        </div>

        <div className="flex flex-col gap-6 md:col-span-4 md:col-start-9">
          {about.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-base leading-relaxed text-ink-soft">{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
