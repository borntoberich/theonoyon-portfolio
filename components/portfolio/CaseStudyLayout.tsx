import Link from "next/link"

import { AnimatedLink } from "@/components/portfolio/AnimatedLink"
import { Container } from "@/components/portfolio/Container"
import { CtaButton } from "@/components/portfolio/CtaButton"
import { ProjectBadge } from "@/components/portfolio/ProjectBadge"
import { Blocks, H2, h1Class } from "@/components/portfolio/Prose"
import { ReadingProgress } from "@/components/portfolio/ReadingProgress"
import { Reveal } from "@/components/portfolio/Reveal"
import type { Cta, Meta, Project, Section } from "@/content/projects"
import { cn } from "@/lib/utils"

/** Gabarit éditorial partagé : case studies et pages presse. */
export function CaseStudyLayout({
  tag,
  title,
  tldr,
  meta,
  note,
  cover,
  sections,
  cta,
  footer,
}: {
  tag: string
  title: string
  tldr?: string
  meta: Meta
  note?: string
  /** Visuel affiché sous l'en-tête. */
  cover?: React.ReactNode
  sections: Section[]
  /** Bouton de fin de page. */
  cta?: Cta
  footer: React.ReactNode
}) {
  return (
    <>
      <ReadingProgress />
      <article className="pt-16 pb-16 md:pt-24 md:pb-24">
        <Container>
          <header>
            <ProjectBadge>{tag}</ProjectBadge>
            <h1 className={cn(h1Class, "mt-5")}>{title}</h1>

            {tldr && (
              <div className="mt-8">
                <p className="font-mono text-[13px] tracking-[0.02em] text-muted-foreground">
                  TL;DR
                </p>
                <p className="mt-2 text-lg leading-[1.6] md:text-xl">{tldr}</p>
              </div>
            )}

            <dl className="mt-10 grid grid-cols-[6.5rem_1fr] gap-x-4 gap-y-1.5 font-mono text-[13px] leading-[1.6] tracking-[0.02em] text-muted-foreground">
              {meta.map(({ label, value }) => (
                <div key={label} className="contents">
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>

            {note && <p className="mt-6 text-sm text-muted-foreground italic">{note}</p>}
          </header>

          {cover && <div className="mt-12 md:mt-16">{cover}</div>}

          <hr className="mt-12 border-t border-border md:mt-16" />

          {sections.map((section, i) => {
            const id = `section-${i + 1}`
            return (
              <Reveal key={section.heading}>
                <section aria-labelledby={id} className="mt-14 md:mt-16">
                  <H2 id={id}>{section.heading}</H2>
                  <div className="mt-6">
                    <Blocks blocks={section.blocks} />
                  </div>
                  {section.cta && (
                    <div className="mt-8">
                      <CtaButton cta={section.cta} />
                    </div>
                  )}
                </section>
              </Reveal>
            )
          })}

          {cta && (
            <Reveal className="mt-14 md:mt-16">
              <CtaButton cta={cta} />
            </Reveal>
          )}
        </Container>
      </article>

      {footer}
    </>
  )
}

/** Pied de case study : lien vers le projet suivant. */
export function NextProject({ project }: { project: Project }) {
  return (
    <aside aria-label="Projet suivant" className="border-t border-border">
      <Container className="py-16 md:py-24">
        <p className="font-mono text-[13px] tracking-[0.02em] text-muted-foreground">
          Next project
        </p>
        <Link
          href={`/projects/${project.slug}`}
          className="group mt-4 inline-flex items-baseline gap-3 text-xl leading-snug font-medium tracking-[-0.01em] text-accent-text md:text-2xl"
        >
          <span className="link-underline">{project.title}</span>
          <span
            aria-hidden="true"
            className="shrink-0 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
          >
            →
          </span>
        </Link>
      </Container>
    </aside>
  )
}

/** Pied de page simple : retour à l'accueil. */
export function BackHome() {
  return (
    <aside aria-label="Navigation" className="border-t border-border">
      <Container className="py-16 md:py-24">
        <AnimatedLink href="/">← Retour à l&apos;accueil</AnimatedLink>
      </Container>
    </aside>
  )
}

/** Case study complet d'un projet, avec lien vers le suivant. */
export function ProjectCaseStudy({ project, next }: { project: Project; next: Project }) {
  return (
    <CaseStudyLayout
      tag={project.tag}
      title={project.title}
      tldr={project.tldr}
      meta={project.meta}
      note={project.note}
      sections={project.sections}
      cta={project.cta}
      footer={<NextProject project={next} />}
    />
  )
}
