"use client"

import { BookOpen, Trophy, Award, ExternalLink, Brain, Bot, Zap, Cpu, Users, Target } from "lucide-react"

export default function PortfolioAchievementsResearch() {
  const researchPapers = [
    {
      title: "Sleep Stage Classification Using In-Ear EEG Data",
      status: "Publication in Progress", 
      accuracy: "86%",
      kappa: "0.82",
      description: "State-of-the-art performance in sleep stage detection using novel in-ear EEG approach. Innovative methodology for non-invasive sleep monitoring with advanced neural network architectures.",
      aiTechnologies: ["Deep Neural Networks", "EEG Signal Processing", "Biomedical AI", "Sleep Analysis"],
      innovation: "Novel in-ear EEG approach for sleep monitoring"
    }
  ]

  const majorAchievements = [
    {
      title: "Project Sahyog - Manipal Hackathon Finalist",
      subtitle: "Top 20 out of 300 teams (1200+ participants) - Pan-India Competition",
      description: "Developed comprehensive SME empowerment platform with RAG pipeline, live chat, and ONDC marketplace integration. Showcased at national level with advanced AI implementations.",
      technologies: ["MERN Stack", "Flask", "Ngrok", "LlamaIndex", "Socket.io", "Python", "Vercel"],
      impact: "1200+ participants, Top 20 nationwide",
      icon: Trophy,
      category: "Hackathon",
      link: "https://github.com/Mudit7715/Project-Sahyog-"
    }
  ]

  const otherAchievements = [
    {
      title: "Smart India Hackathon",
      description: "Qualified university round with AI legal query system",
      icon: Bot,
      category: "Hackathon",
      impact: "University level qualification"
    },
    {
      title: "Table Tennis Champion", 
      description: "Inter-Department Tournament winner (30 branches, 10+ fixtures)",
      icon: Award,
      category: "Sports Achievement",
      impact: "30 branches competition winner"
    },
    {
      title: "Startup Impact",
      description: "Managed 15+ startup clients, 25,000+ event attendees served through AI systems",
      icon: Users,
      category: "Leadership Impact",
      impact: "25,000+ people impacted"
    }
  ]

  return (
    <section className="bg-surface py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Brain className="w-10 h-10 text-accent" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-[var(--font-display)]">
              Achievements & Research
            </h2>
            <Zap className="w-10 h-10 text-primary" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-[var(--font-body)]">
            Showcasing cutting-edge research contributions and competitive achievements
          </p>
        </div>

        {/* Major Achievement Highlight */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-accent/10 to-primary/10 border-2 border-accent/30 rounded-xl p-8 shadow-lg">
            {majorAchievements.map((achievement, index) => (
              <div key={index}>
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg">
                    <achievement.icon className="w-8 h-8 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-accent font-[var(--font-display)]">
                        {achievement.title}
                      </h3>
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-lg font-semibold text-primary mb-3 font-[var(--font-body)]">
                      {achievement.subtitle}
                    </p>
                    <p className="text-muted-foreground mb-4 font-[var(--font-body)]">
                      {achievement.description}
                    </p>
                    
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-accent/10 border border-accent/20 rounded-lg p-3">
                        <div className="text-sm font-medium text-accent mb-1">Impact</div>
                        <div className="font-bold text-foreground">{achievement.impact}</div>
                      </div>
                      <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
                        <div className="text-sm font-medium text-primary mb-1">Category</div>
                        <div className="font-bold text-foreground">{achievement.category}</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {achievement.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a 
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium font-[var(--font-body)]"
                    >
                      View Project Details <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Research Papers Section */}
          <div className="bg-card rounded-xl border border-border hover:border-accent/30 transition-colors p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg">
                <Brain className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground font-[var(--font-display)]">
                Research & Publications
              </h3>
              <Bot className="w-6 h-6 text-primary" />
            </div>

            <div className="space-y-6">
              {researchPapers.map((paper, index) => (
                <div key={index} className="border border-border rounded-lg p-6 bg-muted/30 hover:bg-muted/40 transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <h4 className="text-xl font-semibold text-foreground font-[var(--font-display)]">
                      {paper.title}
                    </h4>
                    <Cpu className="w-5 h-5 text-accent" />
                  </div>
                  <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium mb-4 border border-accent/30">
                    <Zap className="w-4 h-4" />
                    {paper.status}
                  </div>
                  <p className="text-muted-foreground mb-4 font-[var(--font-body)]">
                    {paper.description}
                  </p>
                  
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 mb-4">
                    <div className="text-sm font-medium text-primary mb-1">Innovation</div>
                    <div className="text-xs text-muted-foreground">{paper.innovation}</div>
                  </div>
                  
                  {/* AI Technologies Used */}
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-accent mb-2 flex items-center gap-2">
                      <Brain className="w-4 h-4" />
                      AI Technologies
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {paper.aiTechnologies.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-surface border border-border rounded-lg p-4 text-center hover:border-accent/30 transition-colors">
                      <div className="text-2xl font-bold text-accent font-[var(--font-display)]">
                        {paper.accuracy}
                      </div>
                      <div className="text-sm text-muted-foreground font-[var(--font-body)]">
                        Classification Accuracy
                      </div>
                    </div>
                    <div className="bg-surface border border-border rounded-lg p-4 text-center hover:border-primary/30 transition-colors">
                      <div className="text-2xl font-bold text-primary font-[var(--font-display)]">
                        {paper.kappa}
                      </div>
                      <div className="text-sm text-muted-foreground font-[var(--font-body)]">
                        Cohen's Kappa Score
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Achievements */}
          <div className="bg-card rounded-xl border border-border hover:border-primary/30 transition-colors p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg">
                <Trophy className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground font-[var(--font-display)]">
                Other Notable Achievements
              </h3>
              <Zap className="w-6 h-6 text-accent" />
            </div>

            <div className="space-y-4">
              {otherAchievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg border border-border hover:bg-muted/40 transition-colors">
                  <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0">
                    <achievement.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-lg font-semibold text-accent font-[var(--font-display)]">
                        {achievement.title}
                      </h4>
                    </div>
                    <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full mb-2 border border-primary/20">
                      {achievement.category}
                    </span>
                    <p className="text-muted-foreground mb-2 font-[var(--font-body)]">
                      {achievement.description}
                    </p>
                    <div className="text-xs text-accent font-medium">
                      Impact: {achievement.impact}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}