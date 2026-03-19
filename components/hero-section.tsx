import { Badge } from "@/components/ui/badge"
import { personalInfo } from "@/lib/data"
import {
  ExternalLink,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const socialCards = [
  {
    name: "GitHub",
    url: `https://github.com/${personalInfo.github}`,
    icon: Github,
    username: `@${personalInfo.github}`,
  },
  {
    name: "LinkedIn",
    url: `https://linkedin.com/in/${personalInfo.github}`,
    icon: Linkedin,
    username: "dangminhkhoi",
  },
  {
    name: "Email",
    url: `mailto:${personalInfo.email}`,
    icon: Mail,
    username: personalInfo.email,
  },
]

const metaItems = [
  { icon: MapPin, label: personalInfo.location },
  { icon: Phone, label: personalInfo.phone },
  { icon: Mail, label: personalInfo.email },
  { icon: Globe, label: personalInfo.pronouns },
]

export function HeroSection() {
  return (
    <section id="home" className="border-b border-border">
      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* Profile Row */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          {/* Avatar */}
          <div className="relative shrink-0">
            <div className="size-32 overflow-hidden rounded-full ring-2 ring-border ring-offset-2 ring-offset-background">
              <Image
                src={personalInfo.avatar}
                alt={personalInfo.name}
                width={120}
                height={120}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Name & Title */}
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-2xl font-bold tracking-tight text-foreground">
                {personalInfo.name}
              </h1>
              <Badge variant="secondary" className="font-mono text-xs">
                he/him
              </Badge>
            </div>
            <p className="mt-1 font-mono text-sm text-muted-foreground">
              {personalInfo.title}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {personalInfo.tagline}
            </p>

            {/* Meta Pills */}
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
              {metaItems.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="flex items-center gap-1.5 text-xs text-muted-foreground"
                >
                  <Icon className="h-3.5 w-3.5 shrink-0" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Social Grid */}
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {socialCards.map(({ name, url, icon: Icon, username }) => (
            <Link
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3 transition-all duration-200 hover:bg-accent hover:shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-muted">
                  <Icon className="h-4 w-4 text-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{name}</p>
                  <p className="font-mono text-xs text-muted-foreground">
                    {username}
                  </p>
                </div>
              </div>
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
