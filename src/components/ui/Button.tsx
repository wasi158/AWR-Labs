"use client";

import type { ComponentPropsWithoutRef, MouseEvent, ReactNode } from "react";
import { scrollToSection, sectionIdFromHref } from "@/lib/scroll";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
} & ComponentPropsWithoutRef<"a">;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-[#031018] hover:bg-accent-bright shadow-[0_0_0_1px_rgba(94,200,255,0.35)]",
  secondary:
    "bg-transparent text-foreground border border-border-strong hover:border-accent hover:text-accent-bright",
  ghost: "bg-transparent text-muted hover:text-foreground",
};

export function Button({
  children,
  variant = "primary",
  className = "",
  href = "#",
  onClick,
  ...props
}: ButtonProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#")) {
      event.preventDefault();
      scrollToSection(sectionIdFromHref(href));
    }
    onClick?.(event);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`focus-ring inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium tracking-wide transition-colors duration-200 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
