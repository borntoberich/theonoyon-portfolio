import type { Metadata } from "next"
import { ogAlt, ogSize } from "@/lib/og"
import { site } from "@/lib/site"

const defaultImage = { url: "/opengraph-image", alt: ogAlt }

export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  image = defaultImage,
}: {
  title: string
  description: string
  path: string
  type?: "website" | "article"
  /** Image de partage dédiée (route opengraph-image de la page). */
  image?: { url: string; alt: string }
}): Metadata {
  const ogImage = { ...image, ...ogSize }
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.name,
      locale: "fr_FR",
      type,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  }
}
