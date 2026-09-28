import { Container } from "@/components/portfolio/Container"

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="flex min-h-[calc(100svh-4rem)] items-center pb-16"
    >
      <Container>
        <h1
          id="hero-title"
          aria-label="Théo Noyon"
          className="text-[40px] leading-[1.1] font-semibold tracking-[-0.02em] md:text-[60px] lg:text-[72px]"
        >
          Th<span className="text-accent-text">é</span>o Noyon
        </h1>
        <p className="mt-5 text-xl leading-snug font-medium md:text-2xl">
          Junior GTM &amp; Marketing Operations
        </p>
        <p className="mt-6 max-w-[560px] text-muted-foreground md:text-lg">
          Je conçois et déploie des workflows IA appliqués au marketing dans un
          environnement multi-marchés.
        </p>
      </Container>
    </section>
  )
}
