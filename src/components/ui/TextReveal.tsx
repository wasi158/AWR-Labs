"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

type TextRevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  blur?: boolean;
};

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return reduced;
}

export function TextReveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  duration = 0.7,
  y = 28,
  blur = true,
}: TextRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (reduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [reduced]);

  const style: CSSProperties | undefined = reduced
    ? undefined
    : {
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${y}px)`,
        filter: blur ? (visible ? "blur(0)" : "blur(8px)") : undefined,
        transition: [
          `opacity ${duration}s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
          `transform ${duration}s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
          blur ? `filter ${duration}s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s` : null,
        ]
          .filter(Boolean)
          .join(", "),
        willChange: "opacity, transform, filter",
      };

  return (
    <Tag ref={ref} className={`text-reveal ${className}`.trim()} style={style}>
      {children}
    </Tag>
  );
}

type AnimatedWordsProps = {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
};

export function AnimatedWords({
  text,
  as: Tag = "span",
  className = "",
  delay = 0,
  stagger = 0.045,
}: AnimatedWordsProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const reduced = usePrefersReducedMotion();
  const words = text.split(" ");

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (reduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [reduced]);

  return (
    <Tag ref={ref} className={`animated-words ${className}`.trim()}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="animated-word-wrap">
          <span
            className={`animated-word ${visible || reduced ? "is-visible" : ""}`}
            style={
              {
                "--word-delay": `${delay + index * stagger}s`,
              } as CSSProperties
            }
          >
            {word}
          </span>
          {index < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}
