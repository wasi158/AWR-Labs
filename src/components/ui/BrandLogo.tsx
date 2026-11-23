import Image from "next/image";
import { siteConfig } from "@/lib/site";

type BrandLogoProps = {
  size?: "nav" | "hero" | "footer";
  className?: string;
  /** Light wordmark for dark backgrounds (keeps blue mark) */
  variant?: "default" | "light";
};

const sizes = {
  nav: { width: 180, height: 54, className: "h-9 w-auto sm:h-10" },
  hero: { width: 420, height: 126, className: "mx-auto h-16 w-auto sm:h-20 md:h-24" },
  footer: { width: 150, height: 45, className: "h-8 w-auto sm:h-9" },
} as const;

export function BrandLogo({
  size = "nav",
  className = "",
  variant = "default",
}: BrandLogoProps) {
  const dimensions = sizes[size];
  const src = variant === "light" ? "/awr-labs-logo-light.png" : "/awr-labs-logo.png";

  return (
    <span className={`inline-flex items-center ${className}`.trim()}>
      <Image
        src={src}
        alt={siteConfig.name}
        width={dimensions.width}
        height={dimensions.height}
        className={dimensions.className}
        priority={size === "nav" || size === "hero"}
      />
    </span>
  );
}
