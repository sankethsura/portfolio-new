import { Space_Grotesk, Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://sanketh.dev";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sanketh G — Full-Stack Developer & AI Systems Engineer",
    template: "%s · Sanketh G",
  },
  description:
    "Full-stack developer specialized in AI-driven systems. 3+ years building high-performance web apps with Next.js, the MERN stack, and LLM integrations — serving 1M+ monthly users.",
  keywords: [
    "Sanketh G",
    "Full-Stack Developer",
    "Next.js",
    "MERN",
    "AI Engineer",
    "LLM Integration",
    "LangChain",
    "Bengaluru",
  ],
  authors: [{ name: "Sanketh G" }],
  creator: "Sanketh G",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Sanketh G — Full-Stack Developer & AI Systems Engineer",
    description:
      "Building AI-driven products at scale with Next.js, the MERN stack, and LLM orchestration.",
    siteName: "Sanketh G",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanketh G — Full-Stack Developer & AI Systems Engineer",
    description:
      "Building AI-driven products at scale with Next.js, the MERN stack, and LLM orchestration.",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${instrumentSerif.variable}`}
    >
      {/* suppressHydrationWarning: browser extensions (Grammarly, ColorZilla,
          etc.) inject attributes like cz-shortcut-listen onto <body> before
          React hydrates — this only silences that benign body-attribute noise. */}
      <body className="cursor-on" suppressHydrationWarning>
        <Cursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
