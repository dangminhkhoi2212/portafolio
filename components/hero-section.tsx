"use client"
import { Badge } from "@/components/ui/badge"
import { personalInfo } from "@/lib/data"
import {
  Copy,
  Github,
  Link2,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { SplitText } from "@/components/ui/split-text"
import { useTheme } from "next-themes"
import { useEffect, useRef, useState } from "react"
import GithubRepo from "./github-repo"
import { Button } from "./ui/button"
import { Ripple } from "./ui/ripple"
import Section from "./ui/section"

const metaItems = [
  {
    icon: MapPin,
    label: personalInfo.location,
    value: personalInfo.location,
    href: `${process.env.NEXT_PUBLIC_GOOGLE_MAPS_SEARCH_URL}${personalInfo.location}`,
  },
  {
    icon: Phone,
    label: personalInfo.phone,
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
  },
  {
    icon: Mail,
    label: personalInfo.email,
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Link2,
    label: "Portfolio",
    value: personalInfo.website!,
    href: personalInfo.website!,
  },
  {
    icon: Github,
    label: "GitHub",
    value: personalInfo.github!,
    href: personalInfo.github!,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: personalInfo.linkedin!,
    href: personalInfo.linkedin!,
  },
]

export function HeroSection() {
  const handleCopy = (value: string) => {
    if (!navigator.clipboard) return
    navigator.clipboard.writeText(value)
  }
  const { resolvedTheme } = useTheme()
  const containerRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <Section id="home">
      {/* Profile Row */}
      <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:items-start">
        {/* Avatar */}
        <div className="relative flex items-center justify-center overflow-visible">
          <Ripple
            mainCircleSize={128}
            mainCircleOpacity={0.15}
            numCircles={7}
            containerRef={containerRef}
          />
          <div
            ref={containerRef}
            className="relative size-32 overflow-hidden rounded-full ring-2 ring-border ring-offset-2 ring-offset-background"
          >
            <Image
              src={personalInfo.avatar}
              alt={personalInfo.name}
              width={128}
              height={128}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Name & Title */}
        <div className="flex-1 space-y-2">
          <h1 className="flex flex-wrap items-center-safe gap-2">
            <SplitText
              text={personalInfo.name}
              className="text-2xl font-bold tracking-tight text-foreground"
              stagger={0.03}
              delay={0.1}
            />
            <Badge variant="secondary" className="font-mono text-xs">
              {personalInfo.pronouns}
            </Badge>
          </h1>
          <SplitText
            text={personalInfo.title}
            className="text-sm font-bold tracking-tight text-foreground"
            stagger={0.03}
            delay={0.1}
          />
          <p className="text-sm text-muted-foreground">
            {personalInfo.tagline}
          </p>
        </div>
      </div>
      {/* Meta Pills */}
      <div className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-2">
        {metaItems.map(({ icon: Icon, label, value, href }) => (
          <div className="group flex items-center justify-between" key={value}>
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center gap-1.5 text-sm text-foreground transition-all duration-300 hover:underline"
            >
              <div className="rounded-md bg-border p-2">
                <Icon className="h-3.5 w-3.5 shrink-0" />
              </div>
              {label}
            </Link>
            <Button
              size="icon"
              variant="ghost"
              className={"invisible cursor-pointer group-hover:visible"}
              onClick={() => handleCopy(value)}
            >
              <Copy />
            </Button>
          </div>
        ))}
      </div>
      {/* GitHub Activity */}
      <div className="mt-10 flex flex-col gap-2">
        <div className="flex justify-center">
          <GithubRepo />
        </div>
        {mounted && (
          <div className="flex w-full justify-center overflow-hidden transition-colors hover:bg-accent/30 sm:rounded-lg">
            <Image
              loading="eager"
              alt="GitHub Contribution Snake"
              width={880}
              height={150}
              src={
                resolvedTheme === "dark"
                  ? "https://raw.githubusercontent.com/dangminhkhoi2212/dangminhkhoi2212/output/github-snake-dark.svg"
                  : "https://raw.githubusercontent.com/dangminhkhoi2212/dangminhkhoi2212/output/github-snake.svg"
              }
              className="h-auto w-full max-w-full"
            />
          </div>
        )}
      </div>
    </Section>
  )
}
