import { AboutSection } from "@/components/about-section"
import EducationSection from "@/components/education-section"
import { ExperienceSection } from "@/components/experience-section"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import DividerPattern from "@/components/ui/divider-pattern"
import { getRepoOptions } from "@/hooks/use-get-repo"
import { getQueryClient } from "@/lib/query-client"
import { HydrationBoundary, dehydrate } from "@tanstack/react-query"
const initState = () => {
  const queryClient = getQueryClient()
  queryClient.prefetchQuery(getRepoOptions({}))
  return queryClient
}
export default function Page() {
  return (
    <main className="flex w-full flex-col items-center overflow-x-hidden">
      <HydrationBoundary state={dehydrate(initState())}>
        <HeroSection />
      </HydrationBoundary>
      <DividerPattern />

      <AboutSection />
      <DividerPattern />

      <ProjectsSection />
      <DividerPattern />

      <ExperienceSection />
      <DividerPattern />

      <EducationSection />
    </main>
  )
}
