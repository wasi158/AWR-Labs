export const siteConfig = {
  name: "AWR Labs",
  legalName: "AWR Labs",
  tagline: "Tech solutions that solve real operational problems",
  description:
    "AWR Labs builds custom software, POS, ERP, mobile apps, and practical AI — tech solutions designed to fix bottlenecks and run reliably in production.",
  url: "https://awrlabs.com",
  locale: "en_US",
  email: "hello@awrlabs.com",
  links: {
    twitter: "https://twitter.com/awrlabs",
    linkedin: "https://linkedin.com/company/awrlabs",
    github: "https://github.com/awrlabs",
  },
} as const;

export const navLinks = [
  { id: "problems", label: "Problems" },
  { id: "products", label: "Products" },
  { id: "ai-solutions", label: "AI Solutions" },
  { id: "approach", label: "Approach" },
  { id: "contact", label: "Contact" },
] as const;
