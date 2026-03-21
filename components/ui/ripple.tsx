"use client"
import React, {
  useEffect,
  useState,
  type CSSProperties,
  type ComponentPropsWithoutRef,
} from "react"

import { cn } from "@/lib/utils"

interface RippleProps extends ComponentPropsWithoutRef<"div"> {
  mainCircleSize?: number
  mainCircleOpacity?: number
  numCircles?: number
  containerRef?: React.RefObject<HTMLDivElement | null>
}

export const Ripple = React.memo(function Ripple({
  mainCircleSize = 210,
  mainCircleOpacity = 0.24,
  numCircles = 8,
  className,
  containerRef,
  ...props
}: RippleProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const container = containerRef?.current
    if (!container) return

    const updatePosition = () => {
      const rect = container.getBoundingClientRect()
      console.log("🚀 ~ updatePosition ~ rect:", rect)
      setPosition({
        x: rect.x + rect.width / 2,
        y: rect.y + rect.height / 2,
      })
    }

    // Initial position
    updatePosition()

    // Monitor for size/layout changes
    const resizeObserver = new ResizeObserver(updatePosition)
    resizeObserver.observe(container)

    // Monitor for scroll changes (critical for fixed positioning)
    const handleScroll = () => {
      window.requestAnimationFrame(updatePosition)
    }

    // Find the closest scrollable parent or use window
    const scrollParent =
      document.querySelector("[data-slot='scroll-area-viewport']") || window
    scrollParent.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", updatePosition)

    return () => {
      resizeObserver.disconnect()
      scrollParent.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", updatePosition)
    }
  }, [containerRef])
  if (!containerRef?.current) return
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 select-none",
        className
      )}
      {...props}
    >
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 70
        const opacity = mainCircleOpacity - i * 0.03
        const animationDelay = `${i * 0.06}s`
        const borderStyle = "solid"

        return (
          <div
            key={i}
            className={`fixed animate-ripple rounded-full border bg-foreground/20 shadow-xl dark:bg-foreground/50`}
            style={
              {
                "--i": i,
                width: `${size}px`,
                height: `${size}px`,
                opacity,
                animationDelay,
                borderStyle,
                borderWidth: "1px",
                borderColor: `var(--foreground)`,
                top: position.y,
                left: position.x,
              } as CSSProperties
            }
          />
        )
      })}
    </div>
  )
})

Ripple.displayName = "Ripple"
