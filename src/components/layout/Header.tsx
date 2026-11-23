"use client";

import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { InPageLink } from "@/components/ui/InPageLink";
import { navLinks } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className={`nav-shell nav-shell-light ${solid ? "nav-shell-solid" : "nav-shell-soft"}`}>
        <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-5 sm:h-[4.75rem] sm:px-8">
          <InPageLink
            id="top"
            className="focus-ring relative z-10 shrink-0"
            aria-label="AWR Labs home"
          >
            <BrandLogo size="nav" variant={solid ? "default" : "light"} />
          </InPageLink>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <InPageLink key={link.id} id={link.id} className="focus-ring nav-link">
                {link.label}
              </InPageLink>
            ))}
          </nav>

          <div className="relative z-10 flex items-center gap-2 sm:gap-3">
            <InPageLink id="contact" className="focus-ring nav-cta hidden sm:inline-flex">
              Start a project
            </InPageLink>
            <button
              type="button"
              className="focus-ring nav-menu-btn inline-flex h-10 w-10 items-center justify-center md:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? (
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
                  <path
                    d="M4 7h16M4 12h16M4 17h10"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          id="mobile-nav"
          className={`nav-mobile overflow-hidden transition-[max-height,opacity] duration-300 md:hidden ${
            open ? "max-h-96 border-t border-black/10 opacity-100" : "max-h-0 border-0 opacity-0"
          }`}
          aria-hidden={!open}
        >
          <ul className="flex flex-col gap-1 px-5 py-4 sm:px-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <InPageLink
                  id={link.id}
                  className="focus-ring nav-link block w-full px-3 py-3"
                  onNavigate={() => setOpen(false)}
                >
                  {link.label}
                </InPageLink>
              </li>
            ))}
            <li className="pt-2 sm:hidden">
              <InPageLink
                id="contact"
                className="focus-ring nav-cta inline-flex w-full justify-center"
                onNavigate={() => setOpen(false)}
              >
                Start a project
              </InPageLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
