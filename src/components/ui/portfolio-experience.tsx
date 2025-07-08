"use client";

import { motion } from "motion/react";
import { MapPin, Calendar, Bot, Brain, Zap, Cpu, Users, TrendingUp } from "lucide-react";

interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  duration: string;
  type: "ai" | "leadership";
  projects: {
    title: string;
    description: string;
    metrics?: string;
    technologies: string[];
  }[];
  achievements?: string[];
}

const experiences: Experience[] = [
  {
    id: "staqo",
    company: "STAQO",
    position: "AI Intern",
    location: "Remote",
    duration: "June 2024 - Present",
    type: "ai",
    projects: [
      {
        title: "Foam Defect Detection System",
        description: "Developed YOLO-based object detection system for Sleepwell factory using Intel RealSense camera integration",
        metrics: "95% accuracy",
        technologies: ["YOLO v8", "Intel RealSense", "PyTorch", "Computer Vision", "Python", "OpenCV", "TensorFlow"]
      },
      {
        title: "AI Visualization Tool",
        description: "Built LLM-powered chart recommendation system with Highcharts integration for automated dashboard creation",
        metrics: "60% faster dashboard creation",
        technologies: ["LLM", "Highcharts", "NLP", "React", "Node.js", "AI Agents"]
      }
    ]
  },
  {
    id: "ecell",
    company: "E-Cell MIT Manipal",
    position: "Startup Development Head",
    location: "Manipal, India",
    duration: "September 2024 - Present",
    type: "leadership",
    projects: [
      {
        title: "Business Clinic Pipeline",
        description: "Transforming student ideas into viable startups through structured mentorship programs",
        metrics: "15+ clients, 60+ students",
        technologies: ["Business Development", "Mentorship", "Strategy"]
      },
      {
        title: "Pitch Tank Event",
        description: "Organized large-scale startup pitch competition with venture capital participation",
        metrics: "450+ participants, 15 finalists, 17 VCs, ₹1.5L prize pool",
        technologies: ["Event Management", "VC Relations", "Pitch Training"]
      },
      {
        title: "Innovation Mela",
        description: "Coordinated massive innovation expo showcasing student entrepreneurship",
        metrics: "1.5km expo, 140+ stalls, 25,000+ attendees",
        technologies: ["Event Planning", "Logistics", "Coordination"]
      },
      {
        title: "Startup Chatbot",
        description: "Built AI-powered chatbot for startup guidance using advanced retrieval systems",
        metrics: "Serving 25,000+ attendees",
        technologies: ["LlamaIndex", "ChromaDB", "AI", "Chatbot"]
      }
    ],
    achievements: [
      "Startup Scoop Newsletter: 2,000+ subscribers"
    ]
  }
];

const aiTechnologies = ["YOLO v8", "Intel RealSense", "PyTorch", "Computer Vision", "OpenCV", "TensorFlow", "LLM", "NLP", "AI Agents", "LlamaIndex", "ChromaDB", "AI", "Chatbot"];

export default function PortfolioExperience() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Brain className="w-8 h-8 text-accent" />
            <h2 className="text-4xl font-bold font-[var(--font-display)] text-[var(--primary)]">
              Professional Experience
            </h2>
            <Bot className="w-8 h-8 text-primary" />
          </div>
          <p className="text-lg text-[var(--secondary)] font-[var(--font-body)] max-w-2xl mx-auto">
            Building the future through AI innovation and startup development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-primary to-accent opacity-30 hidden md:block"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-16 last:mb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 w-5 h-5 bg-gradient-to-br from-accent to-primary rounded-full border-4 border-surface shadow-lg hidden md:block z-10"></div>

              {/* Content */}
              <div className="md:ml-20 bg-white rounded-2xl shadow-lg border border-[var(--border)] p-8 hover:shadow-xl transition-shadow duration-300">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold font-[var(--font-display)] text-[var(--primary)] mb-2">
                      {experience.position}
                    </h3>
                    <div className="flex items-center gap-2 text-lg font-semibold text-[var(--secondary)] mb-2">
                      {experience.type === "ai" ? (
                        <Cpu className="w-5 h-5 text-accent" />
                      ) : (
                        <Users className="w-5 h-5 text-primary" />
                      )}
                      {experience.company}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-[var(--secondary)]">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {experience.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {experience.location}
                    </div>
                  </div>
                </div>

                {/* Projects */}
                <div className="space-y-6">
                  {experience.projects.map((project, projectIndex) => (
                    <motion.div
                      key={projectIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: projectIndex * 0.1 }}
                      className="border-l-4 border-[var(--accent)] pl-6 py-2"
                    >
                      <h4 className="text-lg font-semibold font-[var(--font-display)] text-[var(--primary)] mb-2">
                        {project.title}
                      </h4>
                      <p className="text-[var(--secondary)] font-[var(--font-body)] mb-3 leading-relaxed">
                        {project.description}
                      </p>
                      
                      {project.metrics && (
                        <div className="bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 rounded-lg p-4 mb-4 flex items-center gap-3">
                          <Zap className="w-5 h-5 text-accent flex-shrink-0" />
                          <div>
                            <div className="text-sm font-medium text-[var(--secondary)] mb-1">Impact Metrics</div>
                            <div className="font-semibold text-[var(--primary)] flex items-center gap-2">
                              {project.metrics}
                              <TrendingUp className="w-4 h-4 text-accent" />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ${
                              aiTechnologies.includes(tech)
                                ? "bg-gradient-to-r from-accent/20 to-accent/30 text-accent border border-accent/30"
                                : "bg-gradient-to-r from-primary/10 to-primary/20 text-primary border border-primary/20"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Achievements */}
                {experience.achievements && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-6 pt-6 border-t border-[var(--border)]"
                  >
                    <h5 className="font-semibold font-[var(--font-display)] text-[var(--primary)] mb-3">Additional Achievements</h5>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-center gap-3 text-[var(--secondary)]">
                          <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}