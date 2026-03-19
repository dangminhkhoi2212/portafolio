"use client"

import { cn } from "@/lib/utils"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  animationDuration?: number
  stagger?: number
  threshold?: number
  rootMargin?: string
  textAlign?: "left" | "right" | "center"
}

export function SplitText({
  text,
  className,
  delay = 0,
  animationDuration = 0.5,
  stagger = 0.02,
  threshold = 0.1,
  rootMargin = "-50px",
  textAlign = "left",
}: SplitTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: threshold, margin: rootMargin as any })

  const letters = text.split("")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  }

  const letterVariants = {
    hidden: { y: "150%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: animationDuration,
        ease: [0.215, 0.61, 0.355, 1] as any,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={cn(
        "inline-flex flex-wrap overflow-hidden",
        textAlign === "center" ? "justify-center" : "",
        textAlign === "right" ? "justify-end" : "",
        className
      )}
    >
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          variants={letterVariants}
          className="inline-block whitespace-pre"
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  )
}
