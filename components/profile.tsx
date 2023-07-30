import { FC, HTMLAttributes } from "react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

interface ProfileProps extends HTMLAttributes<HTMLDivElement> {}

const Profile: FC<ProfileProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn(className, "flex gap-4 border-black p-2 cursor-pointer")}
      {...props}
    >
      <Icons.settings className="h-7 w-7" />
      <div className="flex items-center justify-start text-lg text-muted-foreground">
        Profile
      </div>
    </div>
  )
}

export default Profile
