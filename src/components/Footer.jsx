import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ink text-bg">
      <div className="shell flex flex-col gap-4 border-t border-bg/15 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="text-faint">
          © {new Date().getFullYear()} {profile.name} — {profile.location}
        </p>
        <p className="text-faint">
          Built with Next.js, Tailwind &amp; Motion.
        </p>
        <a href="#top" className="link-sweep text-bg">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
