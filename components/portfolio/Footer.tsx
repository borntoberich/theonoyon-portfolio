import { Container } from "@/components/portfolio/Container"
import { ThemeToggle } from "@/components/portfolio/ThemeToggle"

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="flex items-center justify-between gap-6 py-12">
        <p className="text-sm text-muted-foreground">© 2026 Théo Noyon</p>
        <div className="flex items-center gap-4">
          <p className="text-xs text-muted-foreground">Built with Next.js</p>
          <ThemeToggle className="-mr-2" />
        </div>
      </Container>
    </footer>
  )
}
