import { getProject } from "@/content/projects"
import { ogSize, renderArticleOgImage } from "@/lib/og"

const { project } = getProject("family-office")

export const alt = project.title
export const size = ogSize
export const contentType = "image/png"

export default async function Image() {
  return renderArticleOgImage({ eyebrow: project.tag, title: project.title })
}
