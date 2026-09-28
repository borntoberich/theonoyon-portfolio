import type { MetadataRoute } from "next"

import { projects } from "@/content/projects"
import { siteUrl } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/projects",
    ...projects.map((p) => `/projects/${p.slug}`),
    "/about",
  ]
  return routes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.8,
  }))
}
