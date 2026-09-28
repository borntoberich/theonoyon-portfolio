"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      aria-label="Basculer entre thème clair et sombre"
      className={cn(buttonVariants({ variant: "ghost", size: "icon" }), className)}
    >
      {/* Les deux icônes sont rendues ; le CSS choisit — pas de flash à l'hydratation. */}
      <Sun className="hidden dark:block" aria-hidden="true" />
      <Moon className="block dark:hidden" aria-hidden="true" />
    </button>
  )
}
