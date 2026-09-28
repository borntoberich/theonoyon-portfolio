import { cn } from "@/lib/utils"

/** Badge de projet (tag mono en accent). */
export function ProjectBadge({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[4px] border border-accent/60 px-2 py-0.5 font-mono text-[13px] leading-5 tracking-[0.02em] text-accent-text",
        className
      )}
    >
      {children}
    </span>
  )
}
