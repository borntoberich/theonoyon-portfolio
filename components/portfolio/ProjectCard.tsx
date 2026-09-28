import Link from "next/link"

import { ProjectBadge } from "@/components/portfolio/ProjectBadge"
import type { Project } from "@/content/projects"

/**
 * Card cliquable (pattern « stretched link ») : le nom accessible du lien
 * reste le titre, mais toute la surface est cliquable.
 */
export function ProjectCard({
  project,
  headingLevel: Heading = "h3",
}: {
  project: Project
  headingLevel?: "h2" | "h3"
}) {
  return (
    <article className="group relative rounded-lg border border-border bg-card p-8 transition-[transform,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-accent has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-3 has-[a:focus-visible]:outline-ring motion-reduce:hover:translate-y-0">
      <ProjectBadge>{project.tag}</ProjectBadge>

      <Heading className="mt-5 text-xl leading-snug font-medium tracking-[-0.01em] md:text-2xl">
        <Link href={`/projects/${project.slug}`} className="focus-visible:outline-none">
          <span aria-hidden="true" className="absolute inset-0 rounded-lg" />
          <span className="link-underline">{project.title}</span>
        </Link>
      </Heading>

      <p className="mt-3 text-muted-foreground">{project.summary}</p>

      <div className="mt-8 flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="text-muted-foreground">
          {project.org} · {project.date}
        </p>
        <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[13px] tracking-[0.02em] text-muted-foreground">
          {project.tags.map((tag) => (
            <li key={tag}>#{tag}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}
