"use client"

import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { useEffect } from "react"

export function SpotlightBackground() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
      style={{
        background: useMotionTemplate`radial-gradient(1000px circle at ${mouseX}px ${mouseY}px, rgba(120, 120, 120, 0.05), transparent 80%)`,
      }}
    />
  )
}
