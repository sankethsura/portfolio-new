import { marqueeItems } from "@/lib/data";

export default function Marquee() {
  const row = [...marqueeItems, ...marqueeItems];
  return (
    <section className="marquee-paused border-y border-line bg-bg-2 py-5">
      <div className="overflow-hidden">
        <div className="marquee-track">
          {row.map((item, i) => (
            <span
              key={i}
              className="flex items-center font-display text-xl font-medium uppercase tracking-tight text-ink-soft md:text-2xl"
            >
              <span className="px-7">{item}</span>
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
