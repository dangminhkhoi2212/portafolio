"use client"

import { cn } from "@/lib/utils"
import { HTMLMotionProps, motion } from "framer-motion"
import React from "react"

interface FadeRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
  duration?: number
  blur?: boolean
}

export function FadeReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 20,
  duration = 0.5,
  blur = true,
  ...props
}: FadeRevealProps) {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: blur ? "blur(8px)" : "none",
        ...directions[direction],
      }}
      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
