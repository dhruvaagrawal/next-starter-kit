import { Icons } from "@/components/icons"

type SubNavItem = {
  title: string
  href: string
  description: string
  disabled?: boolean
}

export type NavItem = {
  title: string
  href: string
  subNav: SubNavItem[]
  disabled?: boolean
}

export type MainNavItem = NavItem
