import { SectionHeading } from "@/components/about-section"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/lib/data"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

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
    <section id="projects" className="border-b border-border">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <SectionHeading label="Projects" />

        <div className="mt-6 space-y-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:shadow-md"
            >
              {/* Header */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-base font-semibold text-foreground">
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
                      className="flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
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
                      className="flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
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
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50" />
                    <span>{parseHighlight(highlight)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
