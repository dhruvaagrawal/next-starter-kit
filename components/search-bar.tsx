"use client"

import { useCallback, useEffect, useState } from "react"
import { DialogProps } from "@radix-ui/react-alert-dialog"
import { LaptopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { Icons } from "@/components/icons"

export function Searchbar({ ...props }: DialogProps) {
  const [open, setOpen] = useState(false)
  const { setTheme } = useTheme()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      <Button
        variant="ghost"
        className={cn(
          "relative w-full h-[44px] justify-between text-sm text-muted-foreground border-transparent bg-input-secondary hover:bg-input-secondary py-2 px-4"
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <span className="flex items-center justify-start font-normal space-x-2">
          <Icons.search className="w-4 h-4" />
          <p className="text-sm">Search</p>
        </span>
        <div className="flex justify-end">
          <kbd className="flex pointer-events-none select-none gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
            <span className="text-sm">⌘</span>K
          </kbd>
        </div>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandSeparator />
          <CommandGroup heading="Theme">
            <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
              <SunIcon className="w-4 h-4 mr-2" />
              Light
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
              <MoonIcon className="w-4 h-4 mr-2" />
              Dark
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
              <LaptopIcon className="w-4 h-4 mr-2" />
              System
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}

export default Searchbar
