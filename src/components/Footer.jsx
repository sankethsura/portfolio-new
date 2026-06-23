import { profile } from "@/lib/data";
import LocalTime from "./LocalTime";

const socials = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Email", href: `mailto:${profile.email}` },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-bg">
      <div className="shell py-14 md:py-20">
        {/* top row: availability + socials */}
        <div className="flex flex-col gap-10 border-b border-bg/15 pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="flex items-center gap-2.5 text-sm text-faint">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Available for new projects
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-4 inline-block font-display text-[clamp(1.8rem,5vw,3.25rem)] font-medium uppercase leading-none tracking-tight transition-colors hover:text-accent"
            >
              Let&apos;s talk ↗
            </a>
          </div>

          <ul className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="link-sweep text-bg/80 hover:text-bg"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* bottom row: meta */}
        <div className="flex flex-col gap-4 pt-8 text-sm text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="order-3 sm:order-none">
            {profile.location} · <LocalTime />
          </p>
          <a href="#top" className="link-sweep text-bg/80 hover:text-bg">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
