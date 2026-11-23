"use client";

import { Button } from "@/components/ui/Button";
import { AnimatedWords, TextReveal } from "@/components/ui/TextReveal";
import { siteConfig } from "@/lib/site";

export function Contact() {
  return (
    <section
      id="contact"
      className="section-tone section-dark relative scroll-mt-24 overflow-hidden border-t border-border py-20 sm:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-55" aria-hidden />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-2/3 bg-[radial-gradient(ellipse_at_right,rgba(0,180,255,0.14),transparent_60%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* White content panel on dark grid background */}
        <div className="contact-panel relative overflow-hidden border border-[rgba(0,180,255,0.35)] bg-white px-7 py-12 text-[#0b1a2e] sm:px-12 sm:py-16 md:px-16">
          <div
            className="pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(0,180,255,0.2),transparent_70%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px accent-line"
            aria-hidden
          />

          <TextReveal
            as="p"
            delay={0}
            y={14}
            duration={0.55}
            className="font-display text-xs font-semibold tracking-[0.22em] text-[#00b4ff] uppercase"
          >
            Contact
          </TextReveal>

          <h2
            id="contact-heading"
            className="font-display mt-4 max-w-2xl text-3xl leading-tight font-semibold tracking-tight text-[#0b1a2e] sm:text-4xl md:text-5xl"
          >
            <AnimatedWords text="Ready to fix a real operations problem?" delay={0.1} stagger={0.04} />
          </h2>

          <TextReveal
            as="p"
            delay={0.28}
            y={18}
            className="mt-5 max-w-xl text-base leading-relaxed text-[#5a6d86]"
          >
            Tell us about your restaurant, retail, ERP, mobile, or custom software needs — we will
            reply with a clear plan and next step.
          </TextReveal>

          <TextReveal delay={0.4} y={16} blur={false} className="mt-9 flex flex-wrap items-center gap-3">
            <Button href={`mailto:${siteConfig.email}`}>Email {siteConfig.name}</Button>
            <Button
              href="#products"
              variant="ghost"
              className="text-[#5a6d86] hover:text-[#0b1a2e]"
            >
              Review products
            </Button>
          </TextReveal>
        </div>
      </div>
    </section>
  );
}
