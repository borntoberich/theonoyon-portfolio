import { existsSync } from "node:fs"
import { join } from "node:path"

import type { Metadata } from "next"
import Image from "next/image"

import { BackHome, CaseStudyLayout } from "@/components/portfolio/CaseStudyLayout"
import { figaro } from "@/content/press"
import { pageMetadata } from "@/lib/metadata"

export const metadata: Metadata = pageMetadata({
  ...figaro.seo,
  path: "/press/figaro",
  type: "article",
  image: { url: "/press/figaro/opengraph-image", alt: figaro.title },
})

/** Visuel de l'article, ou placeholder tant que le fichier n'est pas fourni. */
function Cover() {
  const hasCover = existsSync(join(process.cwd(), "public", figaro.cover.src))

  if (!hasCover)
    return (
      <div className="flex aspect-[16/10] items-center justify-center rounded-lg border border-border bg-card font-mono text-[13px] text-muted-foreground">
        [Image à ajouter]
      </div>
    )

  return (
    <Image
      src={figaro.cover.src}
      alt={figaro.cover.alt}
      width={1440}
      height={900}
      sizes="(min-width: 768px) 720px, 100vw"
      className="h-auto w-full rounded-lg border border-border"
    />
  )
}

export default function Page() {
  return (
    <CaseStudyLayout
      tag={figaro.tag}
      title={figaro.title}
      meta={figaro.meta}
      cover={<Cover />}
      sections={figaro.sections}
      cta={figaro.cta}
      footer={<BackHome />}
    />
  )
}
