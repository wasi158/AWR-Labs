import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "AWR Labs",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#00b4ff",
    icons: [
      {
        src: "/awr-labs-logo.png",
        sizes: "960x290",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
