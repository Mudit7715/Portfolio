"use client"

import { Bot, Brain, Cpu, Sparkles } from "lucide-react"

export default function PortfolioAbout() {
  return (
    <section className="relative bg-surface py-24 overflow-hidden">
      {/* AI-themed background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, #06b6d4 2px, transparent 0),
                           radial-gradient(circle at 75px 75px, #8b5cf6 2px, transparent 0)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>
      
      {/* Floating AI elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-accent/10 animate-pulse">
          <Brain className="w-16 h-16" />
        </div>
        <div className="absolute top-40 right-20 text-primary/10 animate-bounce">
          <Cpu className="w-12 h-12" />
        </div>
        <div className="absolute bottom-32 left-1/4 text-accent/10">
          <Bot className="w-14 h-14 animate-pulse" />
        </div>
        <div className="absolute bottom-20 right-1/3 text-primary/10">
          <Sparkles className="w-10 h-10 animate-bounce" />
        </div>
      </div>
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary font-[var(--font-display)] mb-6">
            About{' '}
            <span className="ai-gradient">AI Engineer</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-accent mb-4">
            <Brain className="w-6 h-6" />
            <span className="text-lg font-medium">Transforming ideas into intelligent solutions through AI innovation</span>
            <Bot className="w-6 h-6" />
          </div>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg md:text-xl leading-relaxed text-secondary font-[var(--font-body)] text-center max-w-5xl mx-auto">
            I'm <span className="text-accent font-semibold">Mudit Gupta</span>, a passionate AI Engineer and third-year 
            <span className="text-primary font-medium"> Data Science student</span> at Manipal Institute of Technology with an impressive 
           <span className="text-accent font-bold">8.2 CGPA</span>. Currently serving as the 
           <span className="text-primary font-semibold">Startup Development and Guidance Head</span> at E-Cell MIT, 
            I bridge the gap between cutting-edge AI research and practical business applications.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12 mb-12">
            <div className="text-center p-6 bg-accent/10 rounded-lg border border-accent/20">
              <div className="text-3xl font-bold text-accent mb-2">92%</div>
              <div className="text-sm text-secondary">Multimodal RAG Accuracy</div>
              <div className="text-xs text-muted-foreground">Llava LLM System</div>
            </div>
            <div className="text-center p-6 bg-primary/10 rounded-lg border border-primary/20">
              <div className="text-3xl font-bold text-primary mb-2">86%</div>
              <div className="text-sm text-secondary">Sleep Stage Classification</div>
              <div className="text-xs text-muted-foreground">Cohen's Kappa: 0.82</div>
            </div>
            <div className="text-center p-6 bg-accent/10 rounded-lg border border-accent/20">
              <div className="text-3xl font-bold text-accent mb-2">15+</div>
              <div className="text-sm text-secondary">Startup Clients</div>
              <div className="text-xs text-muted-foreground">25,000+ Event Attendees</div>
            </div>
          </div>
          
          <p className="text-lg md:text-xl leading-relaxed text-secondary font-[var(--font-body)] text-center max-w-5xl mx-auto">
            As an <span className="text-accent font-semibold">AI Intern at STAQO</span>, I develop cutting-edge 
            <span className="text-primary font-medium">YOLO-based object detection systems</span> for industrial applications. 
            My expertise spans <span className="text-accent font-semibold">multimodal AI systems</span>, 
            <span className="text-primary font-medium">computer vision</span>, <span className="text-accent font-semibold">generative AI</span>, 
            and <span className="text-primary font-medium">large language models</span>. From developing AI-powered 
            visualization tools to creating startup chatbots serving thousands of users, I continuously push the boundaries 
            of what's possible with artificial intelligence.
          </p>

          <p className="text-lg leading-relaxed text-secondary font-[var(--font-body)] text-center max-w-4xl mx-auto mt-8">
            <span className="text-muted-foreground italic">Beyond technology</span>, I'm a fitness enthusiast who enjoys table tennis 
            and badminton. I believe the best way to predict the future is to create it through innovative AI solutions.
          </p>
          
          <div className="flex items-center justify-center gap-8 mt-12">
            <div className="flex items-center gap-2 text-accent">
              <Cpu className="w-5 h-5" />
              <span className="font-medium">Deep Learning</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <Brain className="w-5 h-5" />
              <span className="font-medium">Neural Networks</span>
            </div>
            <div className="flex items-center gap-2 text-accent">
              <Bot className="w-5 h-5" />
              <span className="font-medium">AI Research</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}