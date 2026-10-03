import type { Metadata } from "next"

import { ProjectCaseStudy } from "@/components/portfolio/CaseStudyLayout"
import { getProject } from "@/content/projects"
import { pageMetadata } from "@/lib/metadata"

const { project, next } = getProject("esport-research")

export const metadata: Metadata = pageMetadata({
  ...project.seo,
  path: "/projects/esport-research",
  type: "article",
})

export default function Page() {
  return <ProjectCaseStudy project={project} next={next} />
}
