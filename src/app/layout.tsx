import type { Metadata, Viewport } from "next";
import { Outfit, Syne } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { SkipLink } from "@/components/ui/SkipLink";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Tech Solutions & Problem Solving`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "AWR Labs",
    "tech solutions",
    "custom software",
    "problem solving",
    "restaurant POS",
    "ERP software",
    "business automation",
    "AI solutions",
    "software studio",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Tech Solutions & Problem Solving`,
    description: siteConfig.description,
    images: [
      {
        url: "/awr-labs-logo.png",
        width: 960,
        height: 290,
        alt: `${siteConfig.name} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Tech Solutions & Problem Solving`,
    description: siteConfig.description,
    images: ["/awr-labs-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/awr-labs-logo.png", type: "image/png" }],
    apple: [{ url: "/awr-labs-logo.png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#03060c",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${syne.variable} dark h-full`}
      suppressHydrationWarning
    >
      <body
        className="bg-atmosphere min-h-full font-sans antialiased"
        suppressHydrationWarning
      >
        <JsonLd />
        <SkipLink />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
