import { Badge } from "@/components/ui/badge"
import { FadeReveal } from "@/components/ui/fade-reveal"
import { certifications, skills } from "@/lib/data"
import { Award, CheckCircle2 } from "lucide-react"
import Section from "./ui/section"
const abouts = [
  "Skilled in Next.js, React, TypeScript, and modern front-end technologies; building high-quality, user-centric web and mobile applications.",
  "Passionate about exploring new technologies and turning ideas into reality through polished, thoughtfully crafted personal projects.",
  "Strong eye for pixel-perfect UI and seamless UX detail.",
]
export function AboutSection() {
  return (
    <Section id="about">
      <FadeReveal>
        <SectionHeading label="About" />
      </FadeReveal>

      <FadeReveal delay={0.1}>
        <div className="mt-6 space-y-4 leading-relaxed">
          <p>
            Frontend Developer with 1+ years of experience, specializing in
            architecting complex web systems and deep user experience
            optimization.
          </p>
          <ul className="space-y-2">
            {abouts.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </FadeReveal>

      {/* Skills */}
      <div className="mt-10">
        <FadeReveal>
          <SectionHeading label="Skills" />
        </FadeReveal>
        <div className="mt-6 space-y-4">
          {Object.entries(skills).map(([category, items], idx) => (
            <FadeReveal key={category} delay={0.05 * idx}>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start">
                <span className="w-24 shrink-0 font-mono text-xs font-semibold text-foreground">
                  {category}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="font-mono text-xs font-normal transition-all hover:bg-accent hover:text-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </FadeReveal>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="mt-10">
        <FadeReveal>
          <SectionHeading label="Certifications" />
        </FadeReveal>
        <div className="mt-6 space-y-3">
          {certifications.map((cert, idx) => (
            <FadeReveal key={cert.name} delay={0.1 * idx}>
              <div className="group flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3 transition-colors hover:bg-accent/50">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-muted transition-colors group-hover:bg-accent">
                    <Award className="h-4 w-4 text-foreground" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {cert.name}
                  </span>
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  {cert.period}
                </span>
              </div>
            </FadeReveal>
          ))}
        </div>
      </div>
    </Section>
  )
}

export function SectionHeading({ label }: { label: string }) {
  return (
    <h2 className="text-xl font-bold tracking-tight text-foreground">
      {label}
    </h2>
  )
}
