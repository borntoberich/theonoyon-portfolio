import type { Metadata } from "next"

import { Container } from "@/components/portfolio/Container"
import { ProjectCard } from "@/components/portfolio/ProjectCard"
import { h1Class } from "@/components/portfolio/Prose"
import { SectionBadge } from "@/components/portfolio/SectionBadge"
import { projects } from "@/content/projects"
import { pageMetadata } from "@/lib/metadata"

export const metadata: Metadata = pageMetadata({
  title: "Projects — Théo Noyon",
  description:
    "Alternant Growth Marketing chez Manutan Group, expertise concrète en IA appliquée au marketing multi-marchés. Master KEDGE 2027.",
  path: "/projects",
})

export default function ProjectsPage() {
  return (
    <section aria-labelledby="projects-title" className="py-16 md:py-24">
      <Container>
        <SectionBadge index="01" label="Selected work" />
        <h1 id="projects-title" className={`${h1Class} mt-4`}>
          Projects
        </h1>
        <div className="mt-10 flex flex-col gap-6">
          {projects.map((project, i) => (
            <div
              key={project.slug}
              className="enter"
              style={{ "--delay": `${i * 80}ms` } as React.CSSProperties}
            >
              <ProjectCard project={project} headingLevel="h2" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
