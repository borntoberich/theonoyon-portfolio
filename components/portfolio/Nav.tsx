"use client"

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

import { AnimatedLink } from "@/components/portfolio/AnimatedLink"
import { Container } from "@/components/portfolio/Container"
import { ThemeToggle } from "@/components/portfolio/ThemeToggle"
import { cn } from "@/lib/utils"

/** `section` : préfixe d'URL qui rend l'item actif. */
const links = [
  { href: "/projects", section: "/projects", label: "Projects" },
  { href: "/press/figaro", section: "/press", label: "Press" },
  { href: "/about", section: "/about", label: "About" },
]

export function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-200",
        scrolled
          ? "border-border bg-background/80 backdrop-blur-md"
          : "border-transparent bg-background"
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <AnimatedLink
          href="/"
          className="text-[15px] font-medium tracking-[-0.01em]"
        >
          Théo Noyon
        </AnimatedLink>

        <nav aria-label="Navigation principale" className="flex items-center gap-4 sm:gap-6">
          <ul className="flex items-center gap-4 sm:gap-6">
            {links.map(({ href, section, label }) => {
              const active = pathname === section || pathname.startsWith(`${section}/`)
              return (
                <li key={href}>
                  <AnimatedLink
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "text-sm hover:text-foreground",
                      active ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {label}
                  </AnimatedLink>
                </li>
              )
            })}
          </ul>
          <ThemeToggle className="-mr-2" />
        </nav>
      </Container>
    </header>
  )
}
