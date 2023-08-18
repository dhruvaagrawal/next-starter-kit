"use client"

import { FC, HTMLAttributes } from "react"
import { signOut, useSession } from "next-auth/react"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from "@/components/icons"

interface ProfileProps extends HTMLAttributes<HTMLDivElement> {}

const Profile: FC<ProfileProps> = ({ className, ...props }) => {
  const { data: session } = useSession()
  console.log("user session:", session)
  return (
    <div
      className={cn("flex cursor-pointer items-center p-2", className)}
      {...props}
    >
      <DropdownMenu>
        <DropdownMenuTrigger className="" asChild>
          <Button
            type="button"
            className="rounded-full p-0 text-lg text-muted-foreground"
          >
            <Avatar>
              <AvatarImage src="/assets/logo.png" alt="dhruvaagrawal" />
              <AvatarFallback>DA</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Dhruva Agrawal</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem className="cursor-pointer gap-2">
              <Icons.profile className="h-4 w-4" />
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuItem
            className="cursor-pointer gap-2"
            onClick={() => signOut()}
          >
            <Icons.signOut className="h-4 w-4" />
            <span>Sign out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default Profile
