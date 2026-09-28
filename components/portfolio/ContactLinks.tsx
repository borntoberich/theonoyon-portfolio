import { AnimatedLink } from "@/components/portfolio/AnimatedLink"
import { site } from "@/lib/site"

export function ContactLinks({ cvLabel }: { cvLabel: string }) {
  return (
    <ul className="flex flex-col gap-3 md:flex-row md:flex-wrap md:gap-x-8">
      <li>
        <AnimatedLink external href={`mailto:${site.email}`}>
          {site.email}
        </AnimatedLink>
      </li>
      <li>
        <AnimatedLink
          external
          href={site.linkedin.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {site.linkedin.label}
        </AnimatedLink>
      </li>
      <li>
        <AnimatedLink external href={site.cv.href} download={site.cv.filename}>
          {cvLabel}
        </AnimatedLink>
      </li>
    </ul>
  )
}
