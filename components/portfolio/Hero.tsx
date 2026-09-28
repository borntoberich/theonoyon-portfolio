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
          className="enter text-[40px] leading-[1.1] font-semibold tracking-[-0.02em] md:text-[60px] lg:text-[72px]"
        >
          Th<span className="text-accent-text">é</span>o Noyon
        </h1>
        <p
          className="enter mt-5 text-xl leading-snug font-medium md:text-2xl"
          style={{ "--delay": "80ms" } as React.CSSProperties}
        >
          Junior GTM &amp; Marketing Operations
        </p>
        <p
          className="enter mt-6 max-w-[560px] text-muted-foreground md:text-lg"
          style={{ "--delay": "160ms" } as React.CSSProperties}
        >
          Je conçois et déploie des workflows IA appliqués au marketing dans un
          environnement multi-marchés.
        </p>
      </Container>
    </section>
  )
}
