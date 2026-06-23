"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-/<>*";

/**
 * Renders `text`, then "decodes" it with a letter-scramble effect the first
 * time it scrolls into view. Real text is in the DOM on load (SSR/SEO-safe).
 */
export default function ScrambleText({ text, className, frames = 26 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    let raf;

    const tick = () => {
      const reveal = Math.floor((frame / frames) * text.length);
      let out = "";
      for (let i = 0; i < text.length; i++) {
        if (text[i] === " " || i < reveal) out += text[i];
        else out += CHARS[Math.floor(Math.random() * CHARS.length)];
      }
      setDisplay(out);
      frame++;
      if (frame <= frames) raf = requestAnimationFrame(tick);
      else setDisplay(text);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, text, frames]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
