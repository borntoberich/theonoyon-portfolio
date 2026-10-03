import type { Metadata } from "next"

import { ProjectCaseStudy } from "@/components/portfolio/CaseStudyLayout"
import { getProject } from "@/content/projects"
import { pageMetadata } from "@/lib/metadata"

const { project, next } = getProject("family-office")

export const metadata: Metadata = pageMetadata({
  ...project.seo,
  path: "/projects/family-office",
  type: "article",
  image: { url: "/projects/family-office/opengraph-image", alt: project.title },
})

export default function Page() {
  return <ProjectCaseStudy project={project} next={next} />
}
