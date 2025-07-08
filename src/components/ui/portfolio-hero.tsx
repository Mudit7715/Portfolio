"use client";

import { motion } from "motion/react";
import { Brain, Bot, Zap, Download, ExternalLink, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  // Function to scroll to projects section
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Function to download resume
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Mudit_Gupta_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/10 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-4 h-4 bg-accent/30 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-6 h-6 bg-primary/20 rounded-full"
          animate={{
            y: [0, 15, 0],
            x: [0, 10, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-8 h-8 bg-secondary/10 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating AI Icons */}
      <motion.div
        className="absolute top-32 right-32 text-accent/20"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <Brain className="w-8 h-8" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-40 right-16 text-primary/20"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Bot className="w-6 h-6" />
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-16 text-accent/30"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Zap className="w-7 h-7" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 py-16 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Content Section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Name & Title */}
            <div className="space-y-4">
              <motion.h1
                className="text-5xl lg:text-7xl font-bold font-[var(--font-display)] text-foreground leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
              >
                Mudit{" "}
                <span className="ai-gradient">Gupta</span>
              </motion.h1>
              
              <motion.p
                className="text-xl lg:text-2xl font-medium text-primary font-[var(--font-display)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                AI Engineer & Data Science Student
              </motion.p>
            </div>

            {/* Animated Tagline */}
            <motion.p
              className="text-lg text-secondary leading-relaxed font-[var(--font-body)] max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Transforming ideas into intelligent solutions
              </motion.span>{" "}
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                through AI innovation
              </motion.span>{" "}
              <motion.span
                className="inline-block text-accent font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                and startup development
              </motion.span>
            </motion.p>

            {/* Stats Section */}
            <motion.div
              className="grid grid-cols-3 gap-6 py-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-accent font-[var(--font-display)]">92%</div>
                <div className="text-sm text-muted-foreground">AI Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary font-[var(--font-display)]">15+</div>
                <div className="text-sm text-muted-foreground">Startups</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent font-[var(--font-display)]">25k+</div>
                <div className="text-sm text-muted-foreground">People Impacted</div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="flex items-center gap-2 text-secondary font-[var(--font-body)]">
                <Mail className="w-4 h-4" />
                <span>gupta101mudit@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-secondary font-[var(--font-body)]">
                <Phone className="w-4 h-4" />
                <span>+91 9205137011</span>
              </div>
              <div className="flex items-center gap-2 text-secondary font-[var(--font-body)]">
                <MapPin className="w-4 h-4" />
                <span>India</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <Button 
                onClick={scrollToProjects}
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg font-[var(--font-body)]"
              >
                View Projects
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                className="border-accent text-accent hover:bg-accent hover:text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg font-[var(--font-body)]"
              >
                Contact Me
                <Mail className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                onClick={downloadResume}
                variant="secondary" 
                className="bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg font-[var(--font-body)]"
              >
                Download Resume
                <Download className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <motion.a
                href="https://github.com/Mudit7715"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-surface border border-border rounded-lg hover:bg-accent hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/mudit-gupta-92a8891b3"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-surface border border-border rounded-lg hover:bg-accent hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image Section */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="relative"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                {/* Gradient Background Circle */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl"></div>
                
                {/* Profile Image Container */}
                <motion.div
                  className="relative z-10 w-full h-full bg-gradient-to-br from-surface to-muted border-2 border-accent/20 rounded-full flex items-center justify-center shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Placeholder for profile image */}
                  <div className="w-4/5 h-4/5 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-3/4 h-3/4 bg-gradient-to-br from-muted to-accent/5 rounded-full flex items-center justify-center">
                      <Bot className="w-16 h-16 text-accent/50" />
                    </div>
                  </div>
                </motion.div>

                {/* Floating Tech Icons */}
                <motion.div
                  className="absolute -top-4 -right-4 p-3 bg-surface border border-accent/30 rounded-full shadow-lg"
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Zap className="w-6 h-6 text-accent" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 p-3 bg-surface border border-primary/30 rounded-full shadow-lg"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Brain className="w-6 h-6 text-primary" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};