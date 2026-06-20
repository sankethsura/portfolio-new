"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useMotionValue,
  useAnimationFrame,
} from "motion/react";
import { marqueeItems } from "@/lib/data";

const wrap = (min, max, v) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

export default function Marquee() {
  const baseVelocity = -2.2; // % of width per second (base drift)
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], {
    clamp: false,
  });
  // skew the whole strip based on scroll speed — tactile, premium feel
  const skewX = useTransform(smoothVelocity, [-1500, 0, 1500], [3, 0, -3], {
    clamp: true,
  });

  // two copies side by side -> wrap translate across -50%..0%
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
  const direction = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = direction.current * baseVelocity * (delta / 1000);
    const vf = velocityFactor.get();
    if (vf < 0) direction.current = -1;
    else if (vf > 0) direction.current = 1;
    moveBy += direction.current * moveBy * Math.abs(vf);
    baseX.set(baseX.get() + moveBy);
  });

  const row = [...marqueeItems, ...marqueeItems];

  return (
    <section className="overflow-hidden border-y border-line bg-bg-2 py-5">
      <motion.div style={{ skewX }} className="flex whitespace-nowrap">
        <motion.div style={{ x }} className="flex shrink-0">
          {row.map((item, i) => (
            <span
              key={i}
              className="flex items-center font-display text-xl font-medium uppercase tracking-tight text-ink-soft md:text-2xl"
            >
              <span className="px-7">{item}</span>
              <span className="text-accent">✦</span>
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
