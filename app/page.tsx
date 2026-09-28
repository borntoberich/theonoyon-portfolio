import { AnimatedLink } from "@/components/portfolio/AnimatedLink"
import { ContactLinks } from "@/components/portfolio/ContactLinks"
import { Container } from "@/components/portfolio/Container"
import { Hero } from "@/components/portfolio/Hero"
import { ProjectCard } from "@/components/portfolio/ProjectCard"
import { H2 } from "@/components/portfolio/Prose"
import { Reveal } from "@/components/portfolio/Reveal"
import { SectionBadge } from "@/components/portfolio/SectionBadge"
import { projects } from "@/content/projects"

export default function HomePage() {
  return (
    <>
      <Hero />

      <section id="projects" aria-labelledby="projects-title" className="py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionBadge index="01" label="Selected work" />
            <H2 id="projects-title" className="mt-4">
              Projects
            </H2>
          </Reveal>
          <div className="mt-10 flex flex-col gap-6">
            {projects.map((project) => (
              <Reveal key={project.slug}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="about-title" className="py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionBadge index="02" label="About" />
            <H2 id="about-title" className="mt-4">
              About
            </H2>
            <p className="mt-6">
              Alternant Growth Marketing chez Manutan Group (17 pays), avec une
              expertise concrète en IA appliquée au marketing. Master KEDGE
              Strategic Branding &amp; Marketing, promotion 2027.
            </p>
            <p className="mt-6">
              <AnimatedLink href="/about">Read more →</AnimatedLink>
            </p>
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="contact-title" className="py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionBadge index="03" label="Contact" />
            <H2 id="contact-title" className="mt-4">
              Contact
            </H2>
            <p className="mt-6">Discutons de vos enjeux GTM et IA.</p>
            <div className="mt-8">
              <ContactLinks cvLabel="Download CV" />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
