"use client";

import type { ComponentPropsWithoutRef, MouseEvent, ReactNode } from "react";
import { scrollToSection } from "@/lib/scroll";

type InPageLinkProps = {
  id: string;
  children: ReactNode;
  className?: string;
  onNavigate?: () => void;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "children" | "className" | "onClick">;

export function InPageLink({
  id,
  children,
  className = "",
  onNavigate,
  ...props
}: InPageLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollToSection(id);
    onNavigate?.();
  };

  return (
    <a href={`#${id}`} className={className} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
