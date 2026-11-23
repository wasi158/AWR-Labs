"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type SequentialActiveContextValue = {
  activeIndex: number;
  count: number;
};

const SequentialActiveContext = createContext<SequentialActiveContextValue>({
  activeIndex: 0,
  count: 0,
});

type SequentialActiveProps = {
  children: ReactNode;
  count: number;
  intervalMs?: number;
  className?: string;
};

export function SequentialActive({
  children,
  count,
  intervalMs = 5000,
  className = "",
}: SequentialActiveProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || count < 2) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % count);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [count, inView, intervalMs]);

  return (
    <SequentialActiveContext.Provider value={{ activeIndex, count }}>
      <div ref={ref} className={className}>
        {children}
      </div>
    </SequentialActiveContext.Provider>
  );
}

export function useSequentialActive(index: number) {
  const { activeIndex } = useContext(SequentialActiveContext);
  return activeIndex === index;
}
