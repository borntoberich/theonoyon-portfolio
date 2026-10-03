import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import type { Cta } from "@/content/projects"

/** Bouton outlined : lien interne, externe (nouvel onglet) ou téléchargement. */
export function CtaButton({ cta }: { cta: Cta }) {
  const className = buttonVariants({ variant: "outline", size: "lg" })

  if (cta.external)
    return (
      <a href={cta.href} target="_blank" rel="noopener noreferrer" className={className}>
        {cta.label}
        <span className="sr-only"> (nouvel onglet)</span>
      </a>
    )

  if (cta.download)
    return (
      <a href={cta.href} download={cta.download} className={className}>
        {cta.label}
      </a>
    )

  return (
    <Link href={cta.href} className={className}>
      {cta.label}
    </Link>
  )
}
