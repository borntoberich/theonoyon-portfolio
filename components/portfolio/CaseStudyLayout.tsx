import Link from "next/link"

import { Container } from "@/components/portfolio/Container"
import { ProjectBadge } from "@/components/portfolio/ProjectBadge"
import { Blocks, H2, h1Class } from "@/components/portfolio/Prose"
import { ReadingProgress } from "@/components/portfolio/ReadingProgress"
import { Reveal } from "@/components/portfolio/Reveal"
import { buttonVariants } from "@/components/ui/button"
import type { Project } from "@/content/projects"
import { cn } from "@/lib/utils"

export function CaseStudyLayout({
  project,
  next,
}: {
  project: Project
  next: Project
}) {
  return (
    <>
      <ReadingProgress />
      <article className="pt-16 pb-16 md:pt-24 md:pb-24">
        <Container>
          <header>
            <ProjectBadge>{project.tag}</ProjectBadge>
            <h1 className={cn(h1Class, "mt-5")}>{project.title}</h1>

            <div className="mt-8">
              <p className="font-mono text-[13px] tracking-[0.02em] text-muted-foreground">
                TL;DR
              </p>
              <p className="mt-2 text-lg leading-[1.6] md:text-xl">
                {project.tldr}
              </p>
            </div>

            <dl className="mt-10 grid grid-cols-[6.5rem_1fr] gap-x-4 gap-y-1.5 font-mono text-[13px] leading-[1.6] tracking-[0.02em] text-muted-foreground">
              {project.meta.map(({ label, value }) => (
                <div key={label} className="contents">
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </header>

          <hr className="mt-12 border-t border-border md:mt-16" />

          {project.sections.map((section, i) => {
            const id = `section-${i + 1}`
            return (
              <Reveal key={section.heading}>
                <section aria-labelledby={id} className="mt-14 md:mt-16">
                  <H2 id={id}>{section.heading}</H2>
                  <div className="mt-6">
                    <Blocks blocks={section.blocks} />
                  </div>
                </section>
              </Reveal>
            )
          })}

          {project.download && (
            <Reveal className="mt-14 md:mt-16">
              <a
                href={project.download.href}
                download={project.download.filename}
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                {project.download.label}
              </a>
            </Reveal>
          )}
        </Container>
      </article>

      <aside aria-label="Projet suivant" className="border-t border-border">
        <Container className="py-16 md:py-24">
          <p className="font-mono text-[13px] tracking-[0.02em] text-muted-foreground">
            Next project
          </p>
          <Link
            href={`/projects/${next.slug}`}
            className="group mt-4 inline-flex items-baseline gap-3 text-xl leading-snug font-medium tracking-[-0.01em] text-accent-text md:text-2xl"
          >
            <span className="link-underline">{next.title}</span>
            <span
              aria-hidden="true"
              className="shrink-0 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
            >
              →
            </span>
          </Link>
        </Container>
      </aside>
    </>
  )
}
