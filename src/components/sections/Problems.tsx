"use client";

import { problems } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

export function Problems() {
  return (
    <section
      id="problems"
      className="relative scroll-mt-24 border-t border-border py-20 sm:py-28"
      aria-labelledby="problems-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Problems we solve"
          title="Operations break when software cannot keep up"
          description="Manual processes, disconnected tools, and weak visibility slow growing businesses. We design tech solutions that remove the friction."
        />

        <Stagger className="grid gap-px bg-border sm:grid-cols-3" stagger={0.12}>
          {problems.map((problem, index) => (
            <StaggerItem key={problem.title}>
              <article className="group relative h-full bg-background p-7 transition-colors duration-300 hover:bg-surface sm:p-8">
                <span
                  className="font-display mb-6 block text-sm tracking-[0.2em] text-accent/80"
                  aria-hidden
                >
                  0{index + 1}
                </span>
                <h3
                  id={index === 0 ? "problems-heading" : undefined}
                  className="font-display text-xl font-semibold tracking-tight text-foreground"
                >
                  {problem.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                  {problem.description}
                </p>
                <span
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100"
                  aria-hidden
                />
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
