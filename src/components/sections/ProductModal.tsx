"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import type { Product } from "@/lib/content";
import { scrollToSection } from "@/lib/scroll";

type ProductModalProps = {
  product: Product | null;
  onClose: () => void;
};

export function ProductModal({ product, onClose }: ProductModalProps) {
  const titleId = useId();
  const [galleryIndex, setGalleryIndex] = useState(0);
  const open = Boolean(product);

  useEffect(() => {
    setGalleryIndex(0);
  }, [product?.id]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!product) return null;

  const activeImage = product.gallery[galleryIndex] ?? product.image;

  return (
    <div className="product-modal-root" role="presentation">
      <button
        type="button"
        className="product-modal-backdrop"
        aria-label="Close product details"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="product-modal-panel"
      >
        <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4 sm:px-7">
          <div>
            <p className="text-xs tracking-[0.18em] text-accent uppercase">
              {product.category}
            </p>
            <h3 id={titleId} className="font-display mt-1 text-xl font-semibold text-foreground sm:text-2xl">
              {product.name}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="focus-ring inline-flex h-10 w-10 shrink-0 items-center justify-center border border-border text-muted transition-colors hover:border-accent hover:text-accent"
            aria-label="Close"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="grid max-h-[min(82vh,880px)] overflow-y-auto lg:grid-cols-[1.15fr_0.85fr]">
          <div className="border-b border-border p-5 sm:p-7 lg:border-r lg:border-b-0">
            <div className="flex min-h-[14rem] items-center justify-center border border-border bg-surface p-3 sm:min-h-[18rem]">
              <Image
                src={activeImage}
                alt={product.imageAlt}
                width={1280}
                height={720}
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="h-auto max-h-[min(26rem,50vh)] w-full object-contain"
                priority
              />
            </div>

            {product.gallery.length > 1 ? (
              <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
                {product.gallery.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
                    type="button"
                    onClick={() => setGalleryIndex(index)}
                    className={`relative h-16 w-28 shrink-0 overflow-hidden border transition-colors ${
                      galleryIndex === index
                        ? "border-accent"
                        : "border-border hover:border-border-strong"
                    }`}
                    aria-label={`Show screenshot ${index + 1}`}
                    aria-pressed={galleryIndex === index}
                  >
                    <Image
                      src={image}
                      alt=""
                      fill
                      sizes="112px"
                      className="object-cover object-top"
                    />
                  </button>
                ))}
              </div>
            ) : null}

            <p className="mt-5 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
              {product.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {product.stack.map((item) => (
                <span
                  key={item}
                  className="border border-border bg-surface px-2.5 py-1 text-xs tracking-wide text-foreground/85"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-7 p-5 sm:p-7">
            <div>
              <h4 className="font-display text-sm tracking-[0.16em] text-accent uppercase">
                Key features
              </h4>
              <ul className="mt-4 space-y-3">
                {product.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-relaxed text-foreground/90">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {product.modules?.length ? (
              <div>
                <h4 className="font-display text-sm tracking-[0.16em] text-accent uppercase">
                  Modules
                </h4>
                <div className="mt-4 space-y-4">
                  {product.modules.map((module) => (
                    <div key={module.title} className="border border-border bg-surface/50 p-4">
                      <p className="font-display text-sm font-semibold text-foreground">
                        {module.title}
                      </p>
                      <ul className="mt-2 space-y-1.5">
                        {module.items.map((item) => (
                          <li key={item} className="text-sm leading-relaxed text-muted">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="flex flex-wrap gap-3 border-t border-border pt-6">
              {product.liveUrl ? (
                <a
                  href={product.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex items-center bg-accent px-4 py-2.5 text-sm font-medium text-[#031018] transition-colors hover:bg-accent-bright"
                >
                  Open live preview
                </a>
              ) : null}
              <a
                href="#contact"
                onClick={(event) => {
                  event.preventDefault();
                  onClose();
                  scrollToSection("contact");
                }}
                className="focus-ring inline-flex items-center border border-border-strong px-4 py-2.5 text-sm text-foreground transition-colors hover:border-accent hover:text-accent-bright"
              >
                Talk about this product
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
