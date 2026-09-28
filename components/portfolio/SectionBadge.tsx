import { cn } from "@/lib/utils"

/** Badge mono de section : « 01 / Selected work ». */
export function SectionBadge({
  index,
  label,
  className,
}: {
  index: string
  label: string
  className?: string
}) {
  return (
    <p
      className={cn(
        "font-mono text-[13px] tracking-[0.02em] text-muted-foreground",
        className
      )}
    >
      <span className="text-foreground">{index}</span>
      <span aria-hidden="true"> / </span>
      <span className="sr-only"> — </span>
      {label}
    </p>
  )
}
