"use client"

import { FC, HTMLAttributes } from "react"
import Link from "next/link"

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
import { Icons } from "@/components/icons"

interface MainNavProps extends HTMLAttributes<HTMLDivElement> {
  items?: NavItem[]
}

const MainNav: FC<MainNavProps> = ({ items, className, ...props }) => {
  return (
    <div className={cn(className, "flex p-2 md:gap-10")} {...props}>
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-[28px] w-[30px]" />
      </Link>
      {items?.length ? (
        <NavigationMenu className="flex">
          <NavigationMenuList className="gap-12">
            {items?.map(
              ({ href, title, subNav }) =>
                href && (
                  <NavigationMenuLink key={title} href={href} asChild>
                    <NavigationMenuItem>
                      {subNav.length > 0 ? (
                        <div>
                          <NavigationMenuTrigger
                            className="px-0 text-lg font-normal"
                            icon={false}
                          >
                            {title}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent className="bg-solid-white">
                            <ul className="grid w-96 p-4">
                              {subNav.map(({ title, href, description }) => (
                                <ListItem
                                  key={title}
                                  title={title}
                                  href={href}
                                  className="hover:bg-input-secondary p-4"
                                >
                                  <p className="text-xs text-gray-500">
                                    {description}
                                  </p>
                                </ListItem>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </div>
                      ) : (
                        <Link href={href} legacyBehavior passHref>
                          <NavigationMenuLink className="px-0 text-lg font-normal">
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
