"use client"

import { FC, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

import { NavItem } from "@/types/nav"
import { Button } from "@/components/ui/button"
import MobileLink from "@/components/ui/mobile-link"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Icons } from "@/components/icons"

interface MobileNavProps {
  items?: NavItem[]
}

const MobileNav: FC<MobileNavProps> = ({ items }) => {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="gap-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Icons.mobileNav className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col gap-4">
        <MobileLink
          href="/"
          className="flex items-center gap-2"
          onOpenChange={setOpen}
        >
          <Image
            width={40}
            height={40}
            src="/assets/logo.png"
            className="cursor-pointer"
            alt="The Humble Savant"
            onClick={() => router.push("/")}
          />
        </MobileLink>
        <ScrollArea>
          <div className="flex flex-col gap-4">
            {items?.length
              ? items.map(({ href, title, subNav }) => (
                  <div key={title}>
                    {subNav.length > 0 ? (
                      <div key={title} className="flex flex-col gap-4">
                        <p className="text-muted-foreground">{title}</p>
                        {subNav.map(({ href, title, description }) => (
                          <MobileLink
                            key={title}
                            href={href}
                            onOpenChange={setOpen}
                            className="ml-4 text-xs text-foreground"
                          >
                            <div className="flex flex-col gap-2">
                              <p>{title}</p>
                              <p className="text-muted-foreground">
                                {description}
                              </p>
                            </div>
                          </MobileLink>
                        ))}
                      </div>
                    ) : (
                      <MobileLink
                        href={href}
                        onOpenChange={setOpen}
                        className="text-foreground"
                      >
                        {title}
                      </MobileLink>
                    )}
                  </div>
                ))
              : null}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
