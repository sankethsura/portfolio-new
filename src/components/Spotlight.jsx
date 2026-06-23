"use client";

import { useRef } from "react";

/**
 * Card wrapper with a soft radial glow that follows the cursor.
 * Tracks pointer position via CSS custom properties (cheap, no re-renders).
 */
export default function Spotlight({
  children,
  className = "",
  color = "rgba(255, 77, 46, 0.12)",
  size = 260,
}) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={`group/spot relative ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
        style={{
          background: `radial-gradient(${size}px circle at var(--mx, 50%) var(--my, 50%), ${color}, transparent 70%)`,
        }}
      />
      {children}
    </div>
  );
}
