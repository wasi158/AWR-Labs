"use client";

import { Button } from "@/components/ui/Button";
import { AmbientPulse, HeroMotion } from "@/components/ui/HeroMotion";
import { AnimatedWords } from "@/components/ui/TextReveal";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100svh-4.75rem)] items-center overflow-hidden pt-10 pb-16"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 top-8 h-px accent-line opacity-60"
        aria-hidden
      />
      <AmbientPulse className="pointer-events-none absolute top-1/3 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(46,182,255,0.16),transparent_68%)] blur-2xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-5 text-center sm:px-8">
        <h1
          id="hero-heading"
          className="font-display max-w-4xl text-[clamp(1.2rem,5.2vw,1.875rem)] leading-[1.15] font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl"
        >
          <span className="inline-block whitespace-nowrap">
            <AnimatedWords text="We turn hard problems into" delay={0.05} stagger={0.05} />
          </span>
          <br />
          <HeroMotion delay={0.35} className="mt-1 inline-block whitespace-nowrap sm:mt-2">
            <span className="text-gradient">working tech solutions</span>
          </HeroMotion>
        </h1>

        <HeroMotion delay={0.45}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {siteConfig.tagline}. From custom software and POS to ERP, mobile apps, and practical
            AI — built for teams that need systems that hold up every day.
          </p>
        </HeroMotion>

        <HeroMotion delay={0.58} className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button href="#contact">Talk to us</Button>
          <Button href="#products" variant="secondary">
            See what we build
          </Button>
        </HeroMotion>
      </div>
    </section>
  );
}
