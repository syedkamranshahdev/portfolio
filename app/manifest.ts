import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Syed Kamran Shah — AI Full-Stack Developer",
    short_name: "Kamran Portfolio",
    description: "AI product, SaaS, client portal, and business automation portfolio.",
    start_url: "/",
    display: "standalone",
    background_color: "#080a09",
    theme_color: "#c8ff52",
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
