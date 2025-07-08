import AnimatedLandingPage from '@/components/animated-landing-page'
import PortfolioExperience from '@/components/portfolio-experience'
import PortfolioProjects from '@/components/portfolio-projects'
import PortfolioSkillsEducation from '@/components/portfolio-skills-education'
import PortfolioAchievementsResearch from '@/components/portfolio-achievements-research'

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