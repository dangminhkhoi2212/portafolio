import { cn } from "@/lib/utils"
import React from "react"

type Props = React.ComponentProps<"div">
const Section: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        "w-full border-x border-border px-6 py-12 md:max-w-3xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default Section
