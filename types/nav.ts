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

export type SidebarNavItem = {
  title: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
} & (
  | {
      href: string
      items?: never
    }
  | {
      href?: string
      items: never
    }
)

export interface AdminConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}
