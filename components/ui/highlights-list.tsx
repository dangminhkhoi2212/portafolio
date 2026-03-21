"use client"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

interface HighlightsListProps {
  highlights: string[]
  className?: string
}

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

export function HighlightsList({ highlights, className }: HighlightsListProps) {
  return (
    <ul
      className={cn(
        "space-y-2 text-justify text-sm leading-relaxed md:text-base",
        className
      )}
    >
      {highlights.map((highlight, i) => (
        <li key={i} className="flex items-start gap-2.5 text-muted-foreground">
          <ArrowRight className="mt-1.5 h-3 w-3 shrink-0 text-muted-foreground/60" />
          <span>{parseHighlight(highlight)}</span>
        </li>
      ))}
    </ul>
  )
}
