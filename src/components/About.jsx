import { about, profile } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ScrollStatement from "./ScrollStatement";

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
          <ScrollStatement />

          <Reveal
            delay={0.1}
            className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line"
          >
            {facts.map((f) => (
              <div key={f.k} className="bg-bg p-5">
                <p className="label mb-1.5">{f.k}</p>
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
