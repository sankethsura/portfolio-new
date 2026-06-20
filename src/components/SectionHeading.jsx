import Reveal from "./Reveal";

export default function SectionHeading({ index, title, kicker }) {
  return (
    <div className="flex flex-col gap-5 border-t border-line pt-8 md:flex-row md:items-end md:justify-between md:pt-10">
      <Reveal className="flex items-baseline gap-4">
        <span className="font-display text-sm font-medium text-accent">
          {index}
        </span>
        <h2 className="display text-[clamp(2rem,5.5vw,4.25rem)]">{title}</h2>
      </Reveal>
      {kicker && (
        <Reveal delay={0.1}>
          <p className="max-w-xs text-sm leading-relaxed text-muted md:text-right">
            {kicker}
          </p>
        </Reveal>
      )}
    </div>
  );
}
