import { SectionHeading } from "@/components/about-section"
import { experience } from "@/lib/data"
import { Building2 } from "lucide-react"
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

export function ExperienceSection() {
  return (
    <Section id="experience" className="border-b border-border">
      <FadeReveal>
        <SectionHeading label="Experience" />

        <div className="mt-6 space-y-8">
          {experience.map((job) => (
            <div key={job.company} className="relative">
              {/* Company Header */}
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-card">
                  <Building2 className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {job.company}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {job.role}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-xs text-muted-foreground">
                        {job.period}
                      </p>
                      <p className="font-mono text-xs text-muted-foreground">
                        {job.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div className="mt-4 ml-12 space-y-6">
                {job.projects.map((project) => (
                  <div key={project.name}>
                    <h4 className="font-semibold text-foreground">
                      {project.name}
                    </h4>
                    <ul className="mt-2 space-y-2">
                      {project.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-muted-foreground"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/60" />
                          <span>{parseHighlight(h)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeReveal>
    </Section>
  )
}
