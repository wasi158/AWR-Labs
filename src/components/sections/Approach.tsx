"use client";

import { approachSteps } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  SequentialActive,
  useSequentialActive,
} from "@/components/ui/SequentialActive";

function ApproachCard({
  item,
  index,
}: {
  item: (typeof approachSteps)[number];
  index: number;
}) {
  const active = useSequentialActive(index);

  return (
    <article className={`seq-card relative ${active ? "seq-card-active" : ""}`}>
      <div
        className={`seq-step mb-5 flex h-10 w-10 items-center justify-center border text-sm ${
          active
            ? "seq-step-active"
            : "border-border-strong bg-surface text-accent"
        }`}
        aria-current={active ? "true" : undefined}
      >
        {item.step}
      </div>
      <h3
        id={item.step === "01" ? "approach-heading" : undefined}
        className={`seq-title font-display text-xl font-semibold tracking-tight ${
          active ? "text-accent-bright" : "text-foreground"
        }`}
      >
        {item.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
      {active ? (
        <span key={`progress-${index}`} className="seq-card-progress" aria-hidden />
      ) : null}
    </article>
  );
}

export function Approach() {
  return (
    <section
      id="approach"
      className="section-tone section-dark relative scroll-mt-24 border-t border-border py-20 sm:py-28"
      aria-labelledby="approach-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="How we work"
          title="A clear path from problem to working software"
          description="We start with the bottleneck, build the smallest useful system, and improve only when results prove it."
        />

        <SequentialActive
          count={approachSteps.length}
          intervalMs={5000}
          className="relative grid gap-8 md:grid-cols-3 md:gap-6"
        >
          <div
            className="pointer-events-none absolute top-8 right-8 left-8 hidden h-px bg-gradient-to-r from-transparent via-border-strong to-transparent md:block"
            aria-hidden
          />
          {approachSteps.map((item, index) => (
            <ApproachCard key={item.step} item={item} index={index} />
          ))}
        </SequentialActive>
      </div>
    </section>
  );
}
