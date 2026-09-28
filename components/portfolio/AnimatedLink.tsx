import Link from "next/link"

import { cn } from "@/lib/utils"

type AnimatedLinkProps = React.ComponentProps<typeof Link> & {
  /** Lien externe ou fichier : rendu en <a> natif. */
  external?: boolean
}

/** Lien avec underline d'accent qui se dessine de gauche à droite au hover. */
export function AnimatedLink({
  className,
  external,
  href,
  ...props
}: AnimatedLinkProps) {
  const classes = cn("link-underline", className)

  if (external) {
    return (
      <a
        href={String(href)}
        className={classes}
        {...(props as React.ComponentProps<"a">)}
      />
    )
  }

  return <Link href={href} className={classes} {...props} />
}
