import { education } from "@/lib/data"
import { GraduationCap } from "lucide-react"
import { SectionHeading } from "./about-section"
import { FadeReveal } from "./ui/fade-reveal"
import Section from "./ui/section"

type Props = object

const EducationSection: React.FC<Props> = () => {
  return (
    <Section id="education" className="px-4">
      {/* Education */}
      <FadeReveal>
        <SectionHeading label="Education" />

        <div className="mt-6 space-y-4">
          {education.map((edu) => (
            <div key={edu.school} className="flex items-start gap-3">
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-card">
                <GraduationCap className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex flex-1 flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {edu.school}
                  </h3>
                  <p className="text-sm text-muted-foreground italic">
                    {edu.degree}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-xs text-muted-foreground">
                    {edu.period}
                  </p>
                  <p className="font-mono text-xs text-muted-foreground">
                    GPA: {edu.gpa}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </FadeReveal>
    </Section>
  )
}

export default EducationSection
