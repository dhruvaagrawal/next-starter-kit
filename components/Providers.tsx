"use client"

import { FC, ReactNode } from "react"
import { SessionProvider } from "next-auth/react"

import { ThemeProvider } from "@/components/theme-provider"

interface LayoutProps {
  children: ReactNode
}

const Providers: FC<LayoutProps> = ({ children }) => {
  return (
    <SessionProvider>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        {children}
      </ThemeProvider>
    </SessionProvider>
  )
}

export default Providers
