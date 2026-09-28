"use client"

import { m, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"

/** Fade + translate subtil à l'entrée dans le viewport (500ms, easeOut). */
export function Reveal({
  children,
  className,
  disabled,
}: {
  children: React.ReactNode
  className?: string
  /** Contenu au-dessus de la ligne de flottaison : rendu immédiat (préserve le LCP). */
  disabled?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" })
  const reduceMotion = useReducedMotion()

  if (disabled || reduceMotion) return <div className={className}>{children}</div>

  return (
    <m.div
      ref={ref}
      data-reveal
      className={className}
      initial={{ opacity: 0, y: 8 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </m.div>
  )
}
