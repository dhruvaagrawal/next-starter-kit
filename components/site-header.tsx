import { siteConfig } from "@/config/site"
import MainNav from "@/components/main-nav"
import Profile from "@/components/profile"
import Searchbar from "@/components/search-bar"

export function SiteHeader() {
  return (
    <header className="bg-solid-white sticky top-0 z-40 w-full">
      <div className="flex h-[70px] items-center justify-between gap-40 px-8">
        <MainNav items={siteConfig.mainNav} />
        <Searchbar />
        <Profile />
      </div>
    </header>
  )
}
