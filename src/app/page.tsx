import AnimatedLandingPage from '@/components/ui/animated-landing-page'
import PortfolioExperience from '@/components/ui/portfolio-experience'
import PortfolioProjects from '@/components/ui/portfolio-projects'
import PortfolioSkillsEducation from '@/components/ui/portfolio-skills-education'
import PortfolioAchievementsResearch from '@/components/ui/portfolio-achievements-research'

export default function Home() {
  return (
    <main>
      <AnimatedLandingPage />
      <PortfolioProjects />
      <PortfolioExperience />
      <PortfolioSkillsEducation />
      <PortfolioAchievementsResearch />
    </main>
  )
}