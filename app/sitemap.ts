import type { MetadataRoute } from "next";

import { projects } from "@/data/projects";
import { absoluteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/projects", "/services", "/contact", "/resume"];
  return [
    ...pages.map((path) => ({ url: absoluteUrl(path), lastModified: new Date(), changeFrequency: path === "" ? "weekly" as const : "monthly" as const, priority: path === "" ? 1 : .8 })),
    ...projects.map((project) => ({ url: absoluteUrl("/projects/" + project.slug), lastModified: new Date(), changeFrequency: "monthly" as const, priority: .75 })),
  ];
}
