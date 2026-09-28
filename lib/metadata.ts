import type { Metadata } from "next"
import { ogAlt, ogSize } from "@/lib/og"
import { site } from "@/lib/site"

const ogImage = { url: "/opengraph-image", ...ogSize, alt: ogAlt }

export function pageMetadata({
  title,
  description,
  path,
  type = "website",
}: {
  title: string
  description: string
  path: string
  type?: "website" | "article"
}): Metadata {
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
