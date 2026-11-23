"use client";

import { useEffect, useState, type CSSProperties, type ReactNode } from "react";

type HeroMotionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function HeroMotion({ children, className = "", delay = 0 }: HeroMotionProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      setReady(true);
      return;
    }

    const frame = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const style: CSSProperties = {
    opacity: ready ? 1 : 0,
    transform: ready ? "translateY(0)" : "translateY(28px)",
    filter: ready ? "blur(0)" : "blur(10px)",
    transition: [
      `opacity 0.85s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
      `transform 0.85s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
      `filter 0.85s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
    ].join(", "),
  };

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}

export function AmbientPulse({ className = "" }: { className?: string }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!media.matches) setEnabled(true);
  }, []);

  if (!enabled) return null;

  return <div className={`ambient-pulse ${className}`.trim()} aria-hidden />;
}
