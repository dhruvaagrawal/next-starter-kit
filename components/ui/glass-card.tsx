import { FC, HTMLAttributes } from "react"

import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {}

const GlassCard: FC<GlassCardProps> = ({ className, children, ...props }) => {
  return (
    <Card className={cn("glassmorphic-card", className)} {...props}>
      {children}
    </Card>
  )
}

export default GlassCard
