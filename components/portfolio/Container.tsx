import { cn } from "@/lib/utils"

export function Container({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className="px-6 md:px-12 lg:px-16">
      <div className={cn("mx-auto w-full max-w-[720px]", className)}>
        {children}
      </div>
    </div>
  )
}
