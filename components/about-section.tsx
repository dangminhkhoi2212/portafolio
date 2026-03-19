import { Badge } from "@/components/ui/badge"
import { certifications, skills } from "@/lib/data"
import { Award, CheckCircle2 } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="mt-2 border-b border-border">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <SectionHeading label="About" />

        <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p>
            Frontend Developer with 1+ years of experience, specializing in
            architecting complex web systems and deep user experience
            optimization.
          </p>
          <ul className="space-y-2">
            {[
              "Skilled in Next.js, React, TypeScript, and modern front-end technologies; building high-quality, user-centric web and mobile applications.",
              "Passionate about exploring new technologies and turning ideas into reality through polished, thoughtfully crafted personal projects.",
              "Strong eye for pixel-perfect UI and seamless UX detail.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Skills */}
        <div className="mt-10">
          <SectionHeading label="Skills" />
          <div className="mt-6 space-y-4">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="flex flex-col gap-2 sm:flex-row sm:items-start"
              >
                <span className="w-24 shrink-0 font-mono text-xs font-semibold text-foreground">
                  {category}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="font-mono text-xs font-normal"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-10">
          <SectionHeading label="Certifications" />
          <div className="mt-6 space-y-3">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-muted">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function SectionHeading({ label }: { label: string }) {
  return (
    <h2 className="text-xl font-bold tracking-tight text-foreground">
      {label}
    </h2>
  )
}
