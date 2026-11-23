import { BrandLogo } from "@/components/ui/BrandLogo";
import { InPageLink } from "@/components/ui/InPageLink";
import { navLinks, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-12 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm space-y-4">
          <BrandLogo size="footer" onDarkSurface />
          <p className="text-sm leading-relaxed text-muted">{siteConfig.tagline}</p>
        </div>

        <div className="flex flex-wrap gap-x-10 gap-y-6">
          <div>
            <p className="mb-3 text-xs tracking-[0.18em] text-muted uppercase">Explore</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <InPageLink
                    id={link.id}
                    className="focus-ring text-sm text-foreground/85 transition-colors hover:text-accent-bright"
                  >
                    {link.label}
                  </InPageLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs tracking-[0.18em] text-muted uppercase">Contact</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="focus-ring text-sm text-foreground/85 transition-colors hover:text-accent-bright"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {siteConfig.legalName}. All rights reserved.</p>
          <p>Tech solutions · Problem solving · Practical AI</p>
        </div>
      </div>
    </footer>
  );
}
