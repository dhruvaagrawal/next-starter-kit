"use client"

import { ReactNode } from "react"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"

import { cn } from "@/lib/utils"

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: ReactNode
  className?: string
}

export default function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  )
}
