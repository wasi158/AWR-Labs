import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "AWR Labs",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#03060c",
    theme_color: "#03060c",
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
