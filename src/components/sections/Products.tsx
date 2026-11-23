"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { products } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProductModal } from "@/components/sections/ProductModal";

export function Products() {
  const [index, setIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const product = products[index];
  const total = products.length;

  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % total) + total) % total);
    },
    [total],
  );

  const previous = useCallback(() => goTo(index - 1), [goTo, index]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches || modalOpen) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [modalOpen, total]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (modalOpen) return;
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [modalOpen, next, previous]);

  return (
    <section
      id="products"
      className="section-tone section-dark relative scroll-mt-24 border-t border-border py-20 sm:py-28"
      aria-labelledby="products-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Products we build"
          title="Tech solutions for restaurants, retail, ERP & field teams"
          description="Browse each product in the slider — full screenshot on the left, details on the right. Built for real operations, not slide decks."
        />

        <Reveal>
          <div className="product-slider-shell">
            <button
              type="button"
              onClick={previous}
              className="product-slider-nav product-slider-nav-left"
              aria-label="Previous product"
            >
              <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden>
                <path
                  d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"
                  fill="currentColor"
                />
              </svg>
            </button>

            <button
              type="button"
              onClick={next}
              className="product-slider-nav product-slider-nav-right"
              aria-label="Next product"
            >
              <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden>
                <path
                  d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z"
                  fill="currentColor"
                />
              </svg>
            </button>

            <div className="product-slider" aria-roledescription="carousel" aria-label="Products">
            <div className="product-slider-frame">
              <div className="product-slider-media" aria-hidden={false}>
                <div key={product.id} className="product-slider-image-wrap">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    width={1280}
                    height={720}
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="product-slider-image"
                    priority
                  />
                </div>
              </div>

              <div key={product.id} className="product-slider-details product-copy-enter">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs tracking-[0.18em] text-accent uppercase">
                    {product.category}
                  </span>
                  <span className="text-xs text-muted tabular-nums">
                    {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                  </span>
                  {product.featured ? (
                    <span className="border border-accent/40 bg-accent/10 px-2 py-0.5 text-[0.65rem] font-semibold tracking-[0.12em] text-accent uppercase">
                      Featured
                    </span>
                  ) : null}
                </div>

                <h3
                  id="products-heading"
                  className="font-display mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
                >
                  {product.name}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                  {product.description}
                </p>

                <ul className="mt-6 space-y-2.5">
                  {product.features.slice(0, 4).map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/90"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {product.stack.map((item) => (
                    <span
                      key={item}
                      className="border border-border bg-background/50 px-2.5 py-1 text-xs text-foreground/85"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setModalOpen(true)}
                    className="focus-ring inline-flex items-center bg-accent px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-bright"
                  >
                    Full details
                  </button>
                  {product.liveUrl ? (
                    <a
                      href={product.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring inline-flex items-center border border-border-strong px-4 py-2.5 text-sm text-foreground transition-colors hover:border-accent hover:text-accent-bright"
                    >
                      Live preview
                    </a>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="product-slider-controls">
              <div className="mx-auto flex flex-wrap items-center justify-center gap-2" role="tablist" aria-label="Product slides">
                {products.map((item, itemIndex) => (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={itemIndex === index}
                    aria-label={`Show ${item.name}`}
                    onClick={() => goTo(itemIndex)}
                    className={`product-slider-dot ${itemIndex === index ? "is-active" : ""}`}
                  />
                ))}
              </div>
            </div>
            </div>
          </div>
        </Reveal>
      </div>

      <ProductModal
        product={modalOpen ? product : null}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
