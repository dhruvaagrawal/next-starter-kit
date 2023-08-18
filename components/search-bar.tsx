"use client"

import { useCallback, useEffect, useState } from "react"
import { DialogProps } from "@radix-ui/react-alert-dialog"
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
          "relative h-[44px] w-full justify-between border-transparent bg-secondary px-4 py-2 text-sm text-muted-foreground"
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <span className="flex items-center justify-start space-x-2 font-normal">
          <Icons.search className="h-4 w-4" />
          <p className="text-sm">Search</p>
        </span>
        <div className="hidden justify-end md:flex">
          <kbd className="pointer-events-none flex select-none gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
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
            <CommandItem
              className="flex cursor-pointer gap-2"
              onSelect={() => runCommand(() => setTheme("light"))}
            >
              <Icons.sun className="h-4 w-4" />
              Light
            </CommandItem>
            <CommandItem
              className="flex cursor-pointer gap-2"
              onSelect={() => runCommand(() => setTheme("dark"))}
            >
              <Icons.moon className="h-4 w-4" />
              Dark
            </CommandItem>
            <CommandItem
              className="flex cursor-pointer gap-2"
              onSelect={() => runCommand(() => setTheme("system"))}
            >
              <Icons.laptop className="h-4 w-4" />
              System
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}

export default Searchbar
