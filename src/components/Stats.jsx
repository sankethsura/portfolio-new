import { stats } from "@/lib/data";
import Counter from "./Counter";
import Reveal from "./Reveal";

export default function Stats() {
  return (
    <section className="border-y border-line bg-bg-2">
      <div className="shell grid grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal
            key={i}
            delay={i * 0.08}
            className={`flex flex-col gap-3 py-10 md:py-14 ${
              i % 2 === 0 ? "border-r border-line" : ""
            } ${i < 2 ? "border-b border-line lg:border-b-0" : ""} ${
              i === 2 ? "lg:border-r" : ""
            } pl-4 md:pl-6`}
          >
            <span className="font-display text-[clamp(2.6rem,7vw,5rem)] font-medium leading-none tracking-tight">
              <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
            </span>
            <span className="max-w-[10rem] text-sm leading-snug text-muted">
              {s.label}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
