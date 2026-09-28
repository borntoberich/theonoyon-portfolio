"use client"

import { m, useScroll } from "framer-motion"

/** Barre de progression de lecture (case studies), liée au scroll. */
export function ReadingProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <m.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-accent"
      style={{ scaleX: scrollYProgress }}
    />
  )
}
