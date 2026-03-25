import { SectionHeading } from "@/components/about-section"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/lib/data"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { BorderBeam } from "./ui/border-beam"
import { Card, CardContent, CardHeader } from "./ui/card"
import { FadeReveal } from "./ui/fade-reveal"
import { HighlightsList } from "./ui/highlights-list"
import Section from "./ui/section"

export function ProjectsSection() {
  return (
    <Section id="projects" className="border-border">
      <FadeReveal>
        <SectionHeading label="Projects" />

        <div className="mt-6 space-y-6">
          {projects.map((project) => (
            <Card key={project.name} className="relative">
              {/* Header */}
              <CardHeader>
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
              </CardHeader>
              <CardContent>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 md:mt-3">
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
                <HighlightsList
                  highlights={project.highlights}
                  className="mt-4"
                />
              </CardContent>
              <BorderBeam />
            </Card>
          ))}
        </div>
      </FadeReveal>
    </Section>
  )
}
