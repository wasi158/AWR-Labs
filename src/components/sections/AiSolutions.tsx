"use client";

import { aiSolutions } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import {
  SequentialActive,
  useSequentialActive,
} from "@/components/ui/SequentialActive";

function SolutionRow({
  solution,
  index,
}: {
  solution: (typeof aiSolutions)[number];
  index: number;
}) {
  const active = useSequentialActive(index);

  return (
    <article
      className={`seq-item group flex gap-5 bg-background/40 px-6 py-6 sm:gap-7 sm:px-8 sm:py-7 ${
        active ? "seq-item-active" : ""
      }`}
      aria-current={active ? "true" : undefined}
    >
      <span
        className={`seq-index font-display pt-0.5 text-sm tabular-nums ${
          active ? "text-accent" : "text-accent/70"
        }`}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="relative min-w-0 flex-1">
        <h3
          className={`seq-title font-display text-lg font-semibold tracking-tight sm:text-xl ${
            active ? "text-accent-bright" : "text-foreground"
          }`}
        >
          {solution.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{solution.description}</p>
      </div>
      {active ? <span key={`progress-${index}`} className="seq-progress" aria-hidden /> : null}
    </article>
  );
}

export function AiSolutions() {
  return (
    <section
      id="ai-solutions"
      className="relative scroll-mt-24 overflow-hidden border-t border-border py-20 sm:py-28"
      aria-labelledby="ai-heading"
    >
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(ellipse_at_right,rgba(46,182,255,0.08),transparent_60%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="AI solutions"
              title="Practical AI that supports your tech stack"
              description="We add AI where it solves a clear problem — inside sales, ERP, and operations software your team already depends on."
            />
            <Reveal delay={0.1}>
              <p id="ai-heading" className="sr-only">
                AI solutions from AWR Labs
              </p>
              <div className="border border-border bg-surface/60 p-6 sm:p-7">
                <p className="font-display text-sm tracking-[0.16em] text-accent uppercase">
                  How we use AI
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  AI is one part of the solution — not the whole story. We ship features that save
                  time, reduce errors, and stay tied to your live business data.
                </p>
              </div>
            </Reveal>
          </div>

          <SequentialActive
            count={aiSolutions.length}
            intervalMs={5000}
            className="divide-y divide-border border border-border"
          >
            {aiSolutions.map((solution, index) => (
              <SolutionRow key={solution.title} solution={solution} index={index} />
            ))}
          </SequentialActive>
        </div>
      </div>
    </section>
  );
}
