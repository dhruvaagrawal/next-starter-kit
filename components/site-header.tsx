import { siteConfig } from "@/config/site"
import MainNav from "@/components/main-nav"
import MobileNav from "@/components/mobile-nav"
import Profile from "@/components/profile"
import Searchbar from "@/components/search-bar"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 flex h-[70px] w-full items-center justify-between gap-12 bg-background px-5 sm:gap-20">
      <MobileNav items={siteConfig.mainNav} />
      <MainNav items={siteConfig.mainNav} />
      <Searchbar />
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Profile />
      </div>
    </header>
  )
}
