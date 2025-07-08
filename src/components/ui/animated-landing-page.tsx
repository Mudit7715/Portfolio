"use client";

import { motion } from "motion/react";
import { Button } from "./button";
import { Github, Linkedin, Download, Mail } from "lucide-react";

const AnimatedLandingPage = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Mudit_Gupta_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const floatingVariants = {
    initial: { y: 0, rotate: 0 },
    animate: {
      y: [-20, 20, -20],
      rotate: [0, 180, 360],
    },
  };

  const floatingVariants2 = {
    initial: { x: 0, y: 0 },
    animate: {
      x: [-30, 30, -30],
      y: [-15, 15, -15],
    },
  };

  return (
    <section className="relative min-h-screen bg-[#f3f4f6] flex items-center justify-center overflow-hidden px-4">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-purple-500/5 animate-gradient-shift" />
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary/20 rounded-full"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-2 h-2 bg-accent/30 rounded-full"
        variants={floatingVariants2}
        initial="initial"
        animate="animate"
        transition={{ duration: 8, ease: "easeInOut", repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-purple-500/20 rounded-full"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, delay: 2 }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-6 h-6 border border-primary/20 rounded-full"
        variants={floatingVariants2}
        initial="initial"
        animate="animate"
        transition={{ duration: 8, ease: "easeInOut", repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-accent/25 rounded-full"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 3 }}
      />

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Name with Gradient Animation */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
          variants={itemVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="ai-gradient">Mudit Gupta</span>
        </motion.h1>

        {/* Professional Title */}
        <motion.h2
          className="text-xl md:text-2xl lg:text-3xl text-secondary mb-6 font-medium"
          variants={itemVariants}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          AI Engineer & Data Science Student
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-secondary/80 max-w-2xl mx-auto mb-12 leading-relaxed"
          variants={itemVariants}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          Transforming ideas into intelligent solutions through AI innovation and startup development
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-6"
          variants={itemVariants}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          <Button
            size="lg"
            variant="default"
            className="group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg bg-primary hover:bg-primary/90"
            asChild
          >
            <a
              href="https://github.com/Mudit7715"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-5 h-5 transition-transform group-hover:rotate-12" />
              GitHub
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-accent hover:text-accent-foreground hover:border-accent"
            asChild
          >
            <a
              href="https://linkedin.com/in/mudit-gupta-92a8891b3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5 transition-transform group-hover:scale-110" />
              LinkedIn
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-purple-600 hover:text-white hover:border-purple-600"
            onClick={handleResumeDownload}
          >
            <Download className="w-5 h-5 mr-2 transition-transform group-hover:translate-y-1" />
            Resume
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-emerald-600 hover:text-white hover:border-emerald-600"
            asChild
          >
            <a
              href="mailto:gupta101mudit@gmail.com"
              className="flex items-center gap-2"
            >
              <Mail className="w-5 h-5 transition-transform group-hover:scale-110" />
              Contact
            </a>
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-secondary/30 rounded-full p-1"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="w-1 h-2 bg-secondary/50 rounded-full mx-auto"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Additional Floating Shapes */}
      <motion.div
        className="absolute top-20 left-20 w-8 h-8 border-2 border-accent/20 rotate-45"
        animate={{
          rotate: [45, 225, 405],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-6 h-6 bg-purple-500/20 rotate-45"
        animate={{
          rotate: [-45, 135, 315],
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
};

export default AnimatedLandingPage;