import { personalInfo } from "@/lib/data"
import { Github, Heart, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

const footerLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: `https://github.com/${personalInfo.github}`,
  },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Mail, label: "Email", href: `mailto:${personalInfo.email}` },
]

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-4xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
            Built with <Heart className="h-3 w-3 fill-red-500 text-red-500" />{" "}
            by{" "}
            <span className="font-semibold text-foreground">
              {personalInfo.name}
            </span>
          </p>
          <div className="flex items-center gap-1">
            {footerLinks.map(({ icon: Icon, label, href }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
