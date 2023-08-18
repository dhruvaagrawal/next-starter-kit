import { HTMLAttributes } from "react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteFooter({ className }: HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="flex h-16 flex-col items-center justify-between border-t border-secondary px-5 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <Icons.logo className="h-7 w-7" />
          <p className="text-center text-sm leading-loose md:text-left">
            Being continuously messed up by the {siteConfig.author}
          </p>
        </div>
        <ThemeToggle />
      </div>
    </footer>
  )
}
