import Link from "next/link"

import { ProjectBadge } from "@/components/portfolio/ProjectBadge"
import type { Project } from "@/content/projects"

/**
 * Card cliquable (pattern « stretched link ») : le nom accessible du lien
 * reste le titre, mais toute la surface est cliquable.
 * Sert aux projets comme à la presse.
 */
export function ProjectCard({
  href,
  tag,
  title,
  summary,
  meta,
  tags,
  headingLevel: Heading = "h3",
}: {
  href: string
  tag: string
  title: string
  summary: string
  meta: string
  tags?: string[]
  headingLevel?: "h2" | "h3"
}) {
  return (
    <article className="group relative rounded-lg border border-border bg-card p-8 transition-[transform,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-accent has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-3 has-[a:focus-visible]:outline-ring motion-reduce:hover:translate-y-0">
      <div className="flex items-center justify-between">
        <ProjectBadge>{tag}</ProjectBadge>
        <span
          aria-hidden="true"
          className="text-muted-foreground transition-[color,transform] duration-200 ease-out group-hover:translate-x-1 group-hover:text-accent-text motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
        >
          →
        </span>
      </div>

      <Heading className="mt-5 text-xl leading-snug font-medium tracking-[-0.01em] md:text-2xl">
        <Link href={href} className="focus-visible:outline-none">
          <span aria-hidden="true" className="absolute inset-0 rounded-lg" />
          <span className="link-underline">{title}</span>
        </Link>
      </Heading>

      <p className="mt-3 text-muted-foreground">{summary}</p>

      <div className="mt-8 flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="text-muted-foreground">{meta}</p>
        {tags && (
          <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[13px] tracking-[0.02em] text-muted-foreground">
            {tags.map((tag) => (
              <li key={tag}>#{tag}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}

/** Props de card pour un projet. */
export function projectCardProps(project: Project) {
  return {
    href: `/projects/${project.slug}`,
    tag: project.tag,
    title: project.title,
    summary: project.summary,
    meta: `${project.org} · ${project.date}`,
    tags: project.tags,
  }
}
