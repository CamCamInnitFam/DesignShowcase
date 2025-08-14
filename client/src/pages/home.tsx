import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { ExperienceSection } from "@/components/experience-section";
import { SkillsSection } from "@/components/skills-section";
import { AboutSection } from "@/components/about-section";
import { CVSection } from "@/components/cv-section";
import { ProjectWriteupsSection } from "@/components/project-writeups-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <AboutSection />
      <div id="cv">
        <CVSection />
      </div>
      <div id="documentation">
        <ProjectWriteupsSection />
      </div>
      <ContactSection />
      <Footer />
    </div>
  );
}
