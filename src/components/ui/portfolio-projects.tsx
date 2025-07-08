"use client"

import { motion } from "motion/react"
import { ExternalLink, Github, Brain, Bot, Zap, Cpu, Network, Database } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "MultiModal RAG using Llava LLM",
    description: "Revolutionary multimodal Retrieval-Augmented Generation pipeline processing text, audio, and image data. Demonstrates state-of-the-art performance in multimodal AI systems with advanced neural architectures and intelligent data processing capabilities.",
    achievements: ["92% Information Retrieval Accuracy", "Multimodal data processing", "State-of-the-art AI performance", "Cross-modal understanding"],
    technologies: ["Llava LLM", "OpenAI Whisper", "gTTS", "Gradio", "BitsAndBytes", "Accelerate", "RAG Architecture", "Multimodal AI"],
    github: "https://github.com/Mudit7715/LLAVA_imageLLM",
    icon: Brain,
    metrics: "92% AI Accuracy",
    aiCategory: "Multimodal AI/ML Research",
    impact: "Demonstrates state-of-the-art performance in multimodal AI systems"
  },
  {
    title: "AI Travel Planner Multi-Agent System",
    description: "Sophisticated multi-agent travel planning system with real-time data integration. Features intelligent agent coordination using LangGraph workflows for autonomous travel planning with natural language processing capabilities.",
    achievements: ["Multi-agent AI architecture", "Real-time data integration", "Natural language processing", "Flexible LLM support"],
    technologies: ["LangGraph", "Streamlit", "SerpAPI", "OpenAI", "Pydantic", "Multi-Agent Systems", "Ollama", "Llama 3.2"],
    github: "https://github.com/MrCyberNaut/Multi-Ai-Agent-Microsoft-Hackathon",
    icon: Network,
    metrics: "Multi-Agent AI",
    aiCategory: "AI Applications Project",
    impact: "Supervisor, Flight, Hotel, and Itinerary agents working in coordination"
  },
  {
    title: "Chicago Traffic Crash Analysis using PySpark",
    description: "Comprehensive big data analysis revealing critical traffic safety patterns using advanced analytics and machine learning techniques. Processed massive datasets to identify seasonal patterns and accident hotspots with predictive insights.",
    achievements: ["Peak crash time analysis: 3-7 PM", "22% higher weekend incidents", "Primary causes identification: 63% driver error", "Geospatial hotspot mapping"],
    technologies: ["Hadoop", "PySpark", "Jupyter", "Folium", "Matplotlib", "Big Data Analytics", "Machine Learning", "Data Visualization"],
    github: "https://github.com/Mudit7715/BDA-mini-Project",
    icon: Database,
    metrics: "Big Data Analytics",
    aiCategory: "Data Science Project",
    impact: "Friday evenings account for 18% of weekly crashes - critical safety insights"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6
    }
  }
}

const iconVariants = {
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
}

export default function PortfolioProjects() {
  return (
    <section id="projects-section" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <Brain className="w-10 h-10 text-accent" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-[var(--font-display)]">
              Featured AI Projects
            </h2>
            <Bot className="w-10 h-10 text-primary" />
          </div>
          <p className="text-xl text-secondary max-w-3xl mx-auto font-[var(--font-body)]">
            Showcasing innovative AI solutions from multimodal systems to intelligent agent architectures, 
            demonstrating expertise in cutting-edge artificial intelligence and machine learning technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:gap-10 grid-cols-1 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div key={project.title} variants={cardVariants}>
              <Card className="bg-surface h-full group hover:shadow-2xl transition-all duration-500 ease-out border-border hover:border-accent/30 hover:-translate-y-2">
                <CardHeader className="space-y-6">
                  <div className="flex items-center justify-between">
                    <motion.div
                      variants={iconVariants}
                      whileHover="hover"
                      className="p-3 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg"
                    >
                      <project.icon className="h-8 w-8 text-accent" />
                    </motion.div>
                    <div className="flex flex-col gap-2">
                      <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20 font-medium text-center">
                        {project.metrics}
                      </Badge>
                      <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/20">
                        {project.aiCategory}
                      </Badge>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 font-[var(--font-display)]">
                        {project.title}
                      </CardTitle>
                      <Zap className="w-5 h-5 text-accent" />
                    </div>
                    <CardDescription className="text-secondary leading-relaxed font-[var(--font-body)] text-sm">
                      {project.description}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Key Achievements */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Brain className="w-4 h-4 text-accent" />
                      <h4 className="text-sm font-semibold text-foreground font-[var(--font-display)]">
                        Key Achievements
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-sm text-secondary font-[var(--font-body)]">
                          <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.1 * i, type: "spring" }}
                            className="w-1.5 h-1.5 bg-gradient-to-r from-accent to-primary rounded-full mt-2 mr-3 flex-shrink-0"
                          />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact */}
                  <div className="bg-gradient-to-r from-accent/5 to-primary/5 border border-accent/20 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-4 h-4 text-accent" />
                      <h4 className="text-sm font-semibold text-foreground font-[var(--font-display)]">Impact</h4>
                    </div>
                    <p className="text-xs text-secondary font-[var(--font-body)]">{project.impact}</p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Cpu className="w-4 h-4 text-primary" />
                      <h4 className="text-sm font-semibold text-foreground font-[var(--font-display)]">
                        Technologies
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, i) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.05 * i }}
                        >
                          <Badge 
                            variant="outline" 
                            className={`text-xs transition-all duration-300 font-[var(--font-body)] py-0 px-2 ${
                              tech.toLowerCase().includes('ai') || 
                              tech.toLowerCase().includes('llm') || 
                              tech.toLowerCase().includes('neural') || 
                              tech.toLowerCase().includes('llava') ||
                              tech.toLowerCase().includes('rag')
                                ? 'bg-accent/10 text-accent border-accent/30 hover:bg-accent/20' 
                                : 'bg-surface hover:bg-primary/5 border-border hover:border-primary/30'
                            }`}
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="pt-6">
                  <Button 
                    asChild 
                    className="w-full bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white border-0 font-semibold py-6 group/btn transition-all duration-300 font-[var(--font-body)]"
                  >
                    <a 
                      href={project.github}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3"
                    >
                      <Github className="h-5 w-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                      View Project
                      <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Bot className="w-6 h-6 text-accent" />
            <p className="text-secondary font-[var(--font-body)]">
              Interested in collaborating on AI innovations or learning more about these projects?
            </p>
            <Brain className="w-6 h-6 text-primary" />
          </div>
          <Button 
            size="lg" 
            variant="outline"
            className="border-accent text-accent hover:bg-gradient-to-r hover:from-accent hover:to-primary hover:text-white transition-all duration-300 px-8 py-6 font-semibold font-[var(--font-body)]"
            asChild
          >
            <a href="https://github.com/Mudit7715" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}