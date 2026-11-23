"use client";

import { TextReveal, AnimatedWords } from "@/components/ui/TextReveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center items-center" : "";

  return (
    <div className={`mb-12 flex max-w-2xl flex-col gap-6 ${alignment}`}>
      <TextReveal
        as="p"
        delay={0}
        y={16}
        duration={0.55}
        className="font-display text-xs font-semibold tracking-[0.22em] text-accent uppercase"
      >
        {eyebrow}
      </TextReveal>

      <h2 className="font-display text-3xl leading-tight font-semibold tracking-tight text-foreground sm:text-4xl md:text-[2.75rem]">
        <AnimatedWords text={title} delay={0.12} stagger={0.04} />
      </h2>

      {description ? (
        <TextReveal
          as="p"
          delay={0.28}
          y={20}
          duration={0.7}
          className="text-base leading-relaxed text-muted sm:text-lg"
        >
          {description}
        </TextReveal>
      ) : null}
    </div>
  );
}
