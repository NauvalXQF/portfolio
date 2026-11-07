"use client";

import { useEffect, useRef } from "react";

export function ConsoleBackground() {
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      el.style.transform = `translate3d(0, ${Math.round(window.scrollY * 0.06)}px, 0)`;
    };
    const onScroll = () => {
      if (frame === 0) frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div ref={gridRef} className="blueprint-grid absolute inset-0" />
      <div className="hero-glow absolute inset-x-0 top-0 h-[62vh]" />
    </div>
  );
}
