"use client"

import { personalInfo } from "@/lib/data"
import { cn } from "@/lib/utils"
import { Github, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { useEffect, useState } from "react"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
]

/**
 * Returns the Base-UI ScrollArea *Viewport* element — the actual scrollable div.
 * The Root element (#scroll-main) is just a wrapper; scroll events fire on the
 * Viewport child identified by data-slot="scroll-area-viewport".
 */
function getScrollViewport(): HTMLElement | null {
  const root = document.querySelector(
    "[data-slot='scroll-area-viewport']"
  ) as HTMLElement | null

  return root
}

const NAVBAR_HEIGHT = 56 // h-14 = 3.5rem = 56px

export function Navbar() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)

    const viewport = getScrollViewport()
    console.log("🚀 ~ Navbar ~ viewport found:", !!viewport)

    if (!viewport) return

    const handleScroll = () => {
      const scrollTop = viewport.scrollTop
      setScrolled(scrollTop > 10)
    }

    viewport.addEventListener("scroll", handleScroll)
    return () => viewport.removeEventListener("scroll", handleScroll)
  }, [])

  /** Smoothly scroll to a #hash section with navbar offset, works inside ScrollArea viewport. */
  function handleNavClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) {
    if (!href.startsWith("#")) return
    e.preventDefault()
    const id = href.slice(1)
    const target = document.getElementById(id)
    if (!target) return

    const viewport = getScrollViewport()
    if (viewport) {
      const viewportRect = viewport.getBoundingClientRect()
      const targetRect = target.getBoundingClientRect()
      const offset =
        targetRect.top - viewportRect.top + viewport.scrollTop - NAVBAR_HEIGHT
      viewport.scrollTo({ top: offset, behavior: "smooth" })
    } else {
      const top =
        target.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT
      window.scrollTo({ top, behavior: "smooth" })
    }
    setScrolled(true)
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-y border-border transition-all duration-300",
        scrolled ? "backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-6">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="font-mono text-sm font-bold tracking-tighter text-foreground transition-opacity hover:opacity-70"
        >
          <span className="text-base">{"{ "}</span>
          MK
          <span className="text-base">{" }"}</span>
        </a>

        {/* Nav Links */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="rounded-md px-3 py-1.5 font-mono text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <Link
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-md px-2.5 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <Github className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">GitHub</span>
          </Link>

          {mounted && (
            <button
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          )}
        </div>
      </div>
    </header>
  )
}
