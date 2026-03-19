import { GridBackground } from "@/components/ui/grid-background";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { ExperienceSection } from "@/components/experience-section";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <div className="relative min-h-screen bg-background">
      <GridBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ExperienceSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
