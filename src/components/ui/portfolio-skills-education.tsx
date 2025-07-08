"use client"

import { Badge } from "./badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card"
import { Progress } from "./progress"
import { GraduationCap, Award, Code2, Database, Brain, Wrench, Star, Bot, Zap, Cpu, Network } from "lucide-react"

interface SkillItemProps {
  name: string
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert"
}

const SkillItem = ({ name, level }: SkillItemProps) => {
  const getLevelValue = (level: string) => {
    switch (level) {
      case "Expert": return 95
      case "Advanced": return 85
      case "Intermediate": return 65
      case "Beginner": return 40
      default: return 50
    }
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert": return "text-accent font-bold"
      case "Advanced": return "text-accent"
      case "Intermediate": return "text-primary"
      case "Beginner": return "text-secondary"
      default: return "text-secondary"
    }
  }

  const isAI = name.toLowerCase().includes('ai') || 
            name.toLowerCase().includes('neural') || 
            name.toLowerCase().includes('learning') ||
            name.toLowerCase().includes('llm') ||
            name.toLowerCase().includes('gpt')

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-foreground">{name}</span>
          {isAI && <Brain className="w-4 h-4 text-accent" />}
        </div>
        <span className={`text-xs font-medium ${getLevelColor(level)}`}>
          {level}
        </span>
      </div>
      <Progress 
        value={getLevelValue(level)} 
        className="h-2 bg-muted"
      />
    </div>
  )
}

interface EducationCardProps {
  institution: string
  degree: string
  achievement: string
  duration: string
  icon: React.ReactNode
}

const EducationCard = ({ institution, degree, achievement, duration, icon }: EducationCardProps) => (
  <Card className="bg-surface border border-border hover:shadow-lg transition-all duration-300 hover:border-accent/30">
    <CardHeader className="pb-4">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg text-accent">
          {icon}
        </div>
        <div className="flex-1">
          <CardTitle className="text-lg text-foreground font-[var(--font-display)]">
            {institution}
          </CardTitle>
          <CardDescription className="text-secondary mt-1">
            {degree}
          </CardDescription>
        </div>
      </div>
    </CardHeader>
    <CardContent className="pt-0">
      <div className="flex items-center justify-between">
        <Badge variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20 border border-accent/20">
          {achievement}
        </Badge>
        <span className="text-sm text-secondary font-medium">
          {duration}
        </span>
      </div>
    </CardContent>
  </Card>
)

interface SkillCategoryProps {
  title: string
  icon: React.ReactNode
  skills: SkillItemProps[]
  isAIFocused?: boolean
}

const SkillCategory = ({ title, icon, skills, isAIFocused = false }: SkillCategoryProps) => (
  <Card className={`bg-surface border transition-all duration-300 hover:shadow-md ${
    isAIFocused ? 'border-accent/30 hover:border-accent/50' : 'border-border hover:border-primary/30'
  }`}>
    <CardHeader className="pb-4">
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-lg ${
          isAIFocused ? 'bg-gradient-to-br from-accent/20 to-primary/20 text-accent' : 'bg-primary/10 text-primary'
        }`}>
          {icon}
        </div>
        <CardTitle className="text-lg text-foreground font-[var(--font-display)]">
          {title}
        </CardTitle>
        {isAIFocused && <Bot className="w-5 h-5 text-accent" />}
      </div>
    </CardHeader>
    <CardContent className="space-y-4">
      {skills.map((skill) => (
        <SkillItem key={skill.name} name={skill.name} level={skill.level} />
      ))}
    </CardContent>
  </Card>
)

export default function PortfolioSkillsEducation() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-5 h-5" />,
      skills: [
        { name: "Python", level: "Expert" as const },
        { name: "C++", level: "Intermediate" as const },
        { name: "SQL", level: "Intermediate" as const },
        { name: "NoSQL", level: "Intermediate" as const },
      ]
    },
    {
      title: "Data Science",
      icon: <Database className="w-5 h-5" />,
      skills: [
        { name: "Statistical Analysis", level: "Advanced" as const },
        { name: "Data Visualization", level: "Advanced" as const },
        { name: "EDA", level: "Advanced" as const },
        { name: "Feature Engineering", level: "Advanced" as const },
        { name: "Dimensionality Reduction", level: "Intermediate" as const },
      ]
    },
    {
      title: "Machine Learning",
      icon: <Brain className="w-5 h-5" />,
      isAIFocused: true,
      skills: [
        { name: "Regression", level: "Advanced" as const },
        { name: "Classification", level: "Advanced" as const },
        { name: "Clustering", level: "Advanced" as const },
        { name: "Probabilistic Models", level: "Intermediate" as const },
        { name: "Ensemble Methods", level: "Advanced" as const },
      ]
    },
    {
      title: "Deep Learning",
      icon: <Network className="w-5 h-5" />,
      isAIFocused: true,
      skills: [
        { name: "Neural Networks", level: "Advanced" as const },
        { name: "CNNs", level: "Advanced" as const },
        { name: "RNNs", level: "Intermediate" as const },
        { name: "LSTMs", level: "Intermediate" as const },
        { name: "GRUs", level: "Intermediate" as const },
        { name: "Transformers", level: "Advanced" as const },
        { name: "Transfer Learning", level: "Advanced" as const },
      ]
    },
    {
      title: "Generative AI",
      icon: <Zap className="w-5 h-5" />,
      isAIFocused: true,
      skills: [
        { name: "ollama", level: "Advanced" as const },
        // { name: "Mistral-7B", level: "Advanced" as const },
        // { name: "Gemma", level: "Intermediate" as const },
        // { name: "Llava", level: "Expert" as const },
        { name: "OpenAI", level: "Advanced" as const },
        // { name: "Claude Sonnet", level: "Intermediate" as const },
        { name: "LlamaIndex", level: "Advanced" as const },
        { name: "LangChain", level: "Intermediate" as const },
        { name: "LangGraph", level: "Intermediate" as const },
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Cpu className="w-5 h-5" />,
      skills: [
        { name: "Git", level: "Intermediate" as const },
        { name: "MongoDB", level: "Intermediate" as const },
        { name: "Oracle SQL", level: "Intermediate" as const },
        { name: "Hadoop", level: "Intermediate" as const },
        // { name: "PySpark", level: "Advanced" as const },
        // { name: "Jupyter", level: "Advanced" as const },
        // { name: "VS Code", level: "Intermediate" as const },
        // { name: "Google Colab", level: "Advanced" as const },
        { name: "Linux", level: "Intermediate" as const },
      ]
    }
  ]

  const certifications = [
    {
      title: "Computer Vision and Image Processing",
      type: "Professional Certificate",
      level: "Intermediate"
    },
    {
      title: "Big Data Specialization", 
      type: "Complete coursework in Big Data ecosystem",
      level: "Advanced"
    },
    {
      title: "Reinforcement Learning Specialization",
      type: "Advanced ML techniques",
      level: "Advanced"
    },
    {
      title: "LangGraph Certification",
      type: "Modern AI agent frameworks",
      level: "Intermediate"
    },
    {
      title: "Postgress SQL Infosys Springboard",
      type: "Professional Certificate",
      level: "Intermediate"
    }
  ]

  const education = [
    {
      institution: "Manipal Institute of Technology",
      degree: "Bachelor of Technology in Data Science",
      achievement: "8.2 CGPA",
      duration: "2022 - Present (Fourth Year)",
      description: "Expected Graduation: 2026",
      icon: <Brain className="w-6 h-6" />
    },
    {
      institution: "Dhruva Public School",
      degree: "Class 12th",
      achievement: "85%",
      duration: "2020-2021",
      description: "Mathematics & Computer Science",
      icon: <Award className="w-6 h-6" />
    },
    {
      institution: "DPS Gautam Buddha Nagar",
      degree: "Class 10th", 
      achievement: "91.8%",
      duration: "2016-2019",
      description: "STEM Foundation",
      icon: <Star className="w-6 h-6" />
    }
  ]

  return (
    <section className="min-h-screen bg-background py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Brain className="w-10 h-10 text-accent" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-[var(--font-display)]">
              Technical Skills & Education
            </h2>
            <Bot className="w-10 h-10 text-primary" />
          </div>
          <p className="text-lg text-secondary leading-relaxed">
            Comprehensive expertise across programming, AI/ML, data science, and cutting-edge generative AI technologies.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="p-3 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg text-accent">
              <Brain className="w-7 h-7" />
            </div>
            <h3 className="text-3xl font-bold text-foreground font-[var(--font-display)]">
              Technical Expertise
            </h3>
            <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg text-primary">
              <Zap className="w-7 h-7" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skillCategories.map((category) => (
              <SkillCategory
                key={category.title}
                title={category.title}
                icon={category.icon}
                skills={category.skills}
                isAIFocused={category.isAIFocused}
              />
            ))}
          </div>

          {/* Certifications */}
          <div className="mb-12">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Award className="w-7 h-7 text-accent" />
              <h3 className="text-2xl font-bold text-foreground font-[var(--font-display)]">
                Certifications
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-surface border border-border hover:shadow-lg transition-all duration-300 hover:border-accent/30">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                        {cert.level}
                      </Badge>
                      <Bot className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground font-[var(--font-display)] text-sm mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-secondary">{cert.type}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg text-primary">
              <GraduationCap className="w-7 h-7" />
            </div>
            <h3 className="text-3xl font-bold text-foreground font-[var(--font-display)]">
              Educational Background
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="bg-surface border border-border hover:shadow-lg transition-all duration-300 hover:border-accent/30">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg text-accent">
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg text-foreground font-[var(--font-display)]">
                        {edu.institution}
                      </CardTitle>
                      <CardDescription className="text-secondary mt-1">
                        {edu.degree}
                      </CardDescription>
                      <p className="text-xs text-muted-foreground mt-1">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20 border border-accent/20">
                      {edu.achievement}
                    </Badge>
                    <span className="text-sm text-secondary font-medium">
                      {edu.duration}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}