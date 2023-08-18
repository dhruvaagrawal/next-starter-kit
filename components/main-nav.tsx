"use client"

import { FC, HTMLAttributes } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"
import ListItem from "@/components/ui/nav-list-item"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import { Icons } from "./icons"

interface MainNavProps extends HTMLAttributes<HTMLDivElement> {
  items?: NavItem[]
}

const MainNav: FC<MainNavProps> = ({ items, className, ...props }) => {
  const router = useRouter()

  return (
    <div
      className={cn("hidden items-center gap-2 md:flex md:gap-8", className)}
      {...props}
    >
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo
          className="h-[28px] w-[30px]"
          onClick={() => router.push("/")}
        />
      </Link>
      {items?.length ? (
        <NavigationMenu className="flex">
          <NavigationMenuList className="gap-2 md:gap-4">
            {items?.map(
              ({ href, title, subNav }) =>
                href && (
                  <NavigationMenuLink key={title} href={href} asChild>
                    <NavigationMenuItem>
                      {subNav.length > 0 ? (
                        <div>
                          <NavigationMenuTrigger
                            className="h-auto p-2 text-xs font-normal sm:text-sm md:text-base xl:text-lg"
                            icon={false}
                          >
                            {title}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid w-96 p-2">
                              {subNav.map(({ title, href, description }) => (
                                <ListItem
                                  key={title}
                                  title={title}
                                  href={href}
                                  className="p-4 hover:bg-secondary"
                                >
                                  <span className="text-xs text-muted-foreground">
                                    {description}
                                  </span>
                                </ListItem>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </div>
                      ) : (
                        <Link href={href} legacyBehavior passHref>
                          <NavigationMenuLink className="p-2 text-sm font-normal md:text-base xl:text-lg">
                            {title}
                          </NavigationMenuLink>
                        </Link>
                      )}
                    </NavigationMenuItem>
                  </NavigationMenuLink>
                )
            )}
          </NavigationMenuList>
        </NavigationMenu>
      ) : null}
    </div>
  )
}

export default MainNav
