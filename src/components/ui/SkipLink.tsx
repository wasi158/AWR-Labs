"use client";

import { InPageLink } from "@/components/ui/InPageLink";

export function SkipLink() {
  return (
    <InPageLink
      id="main"
      className="focus-ring sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:bg-accent focus:px-3 focus:py-2 focus:text-sm focus:text-[#031018]"
    >
      Skip to content
    </InPageLink>
  );
}
