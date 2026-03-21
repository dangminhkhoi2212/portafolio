import { SectionHeading } from "@/components/about-section"
import { experience } from "@/lib/data"
import { Building2 } from "lucide-react"
import { FadeReveal } from "./ui/fade-reveal"
import { HighlightsList } from "./ui/highlights-list"
import Section from "./ui/section"

export function ExperienceSection() {
  return (
    <Section id="experience" className="">
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
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {job.company}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {job.role}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-left sm:flex-col sm:items-end sm:gap-0 sm:text-right">
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
              <div className="mt-4 ml-2 space-y-6 md:ml-12">
                {job.projects.map((project) => (
                  <div key={project.name}>
                    <h4 className="font-semibold text-foreground">
                      {project.name}
                    </h4>
                    <HighlightsList
                      highlights={project.highlights}
                      className="mt-2"
                    />
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
