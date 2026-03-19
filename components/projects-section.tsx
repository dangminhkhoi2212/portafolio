import { SectionHeading } from "@/components/about-section"
import { Badge } from "@/components/ui/badge"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { projects } from "@/lib/data"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { FadeReveal } from "./ui/fade-reveal"
import Section from "./ui/section"

function parseHighlight(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g)
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-foreground">
        {part}
      </strong>
    ) : (
      part
    )
  )
}

export function ProjectsSection() {
  return (
    <Section id="projects" className="border-border">
      <FadeReveal>
        <SectionHeading label="Projects" />

        <div className="mt-6 space-y-6">
          {projects.map((project) => (
            <SpotlightCard
              key={project.name}
              className="p-6 transition-shadow duration-200 hover:shadow-md"
              spotlightColor="rgba(120, 120, 120, 0.1)"
            >
              {/* Header */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {project.name}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    {project.period}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {project.demoUrl && (
                    <Link
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground transition-all hover:bg-accent hover:text-foreground"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Live Demo
                    </Link>
                  )}
                  {project?.url && (
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground transition-all hover:bg-accent hover:text-foreground"
                    >
                      <Github className="h-3 w-3" />
                      Code
                    </Link>
                  )}
                </div>
              </div>

              {/* Tags */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="font-mono text-xs font-normal"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Highlights */}
              <ul className="mt-4 space-y-2">
                {project.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="text- flex items-start gap-2 text-muted-foreground"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50" />
                    <span>{parseHighlight(highlight)}</span>
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          ))}
        </div>
      </FadeReveal>
    </Section>
  )
}
