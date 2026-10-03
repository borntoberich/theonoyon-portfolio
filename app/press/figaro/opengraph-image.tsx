import { figaro } from "@/content/press"
import { ogSize, renderArticleOgImage } from "@/lib/og"

export const alt = figaro.title
export const size = ogSize
export const contentType = "image/png"

export default async function Image() {
  return renderArticleOgImage({ eyebrow: figaro.tag, title: figaro.title })
}
