import type { Block, ListItem } from "@/content/projects"
import { cn } from "@/lib/utils"

/** Styles typographiques partagés (case studies, About). */
export const h1Class =
  "text-[32px] leading-[1.15] font-semibold tracking-[-0.02em] md:text-[44px]"
export const h2Class =
  "text-[28px] leading-[1.2] font-semibold tracking-[-0.01em] md:text-[32px]"

export function H2({
  id,
  className,
  children,
}: {
  id?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <h2 id={id} className={cn(h2Class, className)}>
      {children}
    </h2>
  )
}

function Item({ item }: { item: ListItem }) {
  if (typeof item === "string") return <span>{item}</span>
  return (
    <span>
      <span className="block font-medium">{item.title}</span>
      <span className="mt-1 block">{item.text}</span>
    </span>
  )
}

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        if (block.type === "p") return <p key={i}>{block.text}</p>

        if (block.type === "ol")
          return (
            <ol key={i} className="space-y-3">
              {block.items.map((item, j) => (
                <li key={j} className="grid grid-cols-[2rem_1fr]">
                  <span
                    aria-hidden="true"
                    className="pt-[0.2em] font-mono text-[13px] text-muted-foreground"
                  >
                    {j + 1}.
                  </span>
                  <Item item={item} />
                </li>
              ))}
            </ol>
          )

        return (
          <ul key={i} className="space-y-3">
            {block.items.map((item, j) => (
              <li key={j} className="grid grid-cols-[2rem_1fr]">
                <span aria-hidden="true" className="text-muted-foreground">
                  —
                </span>
                <Item item={item} />
              </li>
            ))}
          </ul>
        )
      })}
    </div>
  )
}
