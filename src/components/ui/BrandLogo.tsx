import Image from "next/image";
import { siteConfig } from "@/lib/site";

type BrandLogoProps = {
  size?: "nav" | "hero" | "footer";
  className?: string;
  onDarkSurface?: boolean;
};

const sizes = {
  nav: { width: 180, height: 54, className: "h-9 w-auto sm:h-10" },
  hero: { width: 420, height: 126, className: "mx-auto h-16 w-auto sm:h-20 md:h-24" },
  footer: { width: 150, height: 45, className: "h-8 w-auto sm:h-9" },
} as const;

export function BrandLogo({
  size = "nav",
  className = "",
  onDarkSurface = false,
}: BrandLogoProps) {
  const dimensions = sizes[size];

  return (
    <span
      className={`inline-flex items-center ${
        onDarkSurface
          ? "rounded-md bg-white/95 px-2.5 py-1.5 shadow-[0_0_0_1px_rgba(46,182,255,0.18)]"
          : ""
      } ${className}`.trim()}
    >
      <Image
        src="/awr-labs-logo.png"
        alt={siteConfig.name}
        width={dimensions.width}
        height={dimensions.height}
        className={dimensions.className}
        priority={size === "nav" || size === "hero"}
      />
    </span>
  );
}
