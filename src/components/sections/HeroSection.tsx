import { motion } from 'framer-motion';
import { ParticleButton } from '@/components/interactive/ParticleButton';
import { ChevronDown, FileText, Github, Mail } from 'lucide-react';

export const HeroSection = () => {
  const resumeUrl = '/Bryson_Howell_Resume.pdf';

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Hero Content */}
      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-8xl font-black mb-6 bg-neon-sunset bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: 'linear' 
            }}
            style={{ backgroundSize: '200% 200%' }}
          >
            Bryson Howell
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-4xl font-bold text-retro-cyan mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Computer Science Student | Software Engineering Intern Candidate
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            I build practical software tools across Apple platforms, Windows desktop, web, and data-driven
            applications, with experience in Swift, SwiftUI, C#, .NET, React, TypeScript, and reliability-focused
            workflows. I'm seeking software engineering internships where I can contribute, learn, and ship useful systems.
          </motion.p>

          <motion.div
            className="mb-12 flex flex-wrap justify-center gap-3 text-sm font-semibold text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <span className="rounded-full border border-retro-border bg-retro-surface-alt px-4 py-2">
              WGU Computer Science
            </span>
            <span className="rounded-full border border-retro-border bg-retro-surface-alt px-4 py-2">
              Swift and SwiftUI
            </span>
            <span className="rounded-full border border-retro-border bg-retro-surface-alt px-4 py-2">
              Apple Platform Development
            </span>
            <span className="rounded-full border border-retro-border bg-retro-surface-alt px-4 py-2">
              Seeking Software Engineering Internships
            </span>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <ParticleButton variant="purple" onClick={scrollToProjects}>
              View My Work
            </ParticleButton>

            <ParticleButton
              variant="yellow"
              onClick={() => window.open(resumeUrl, '_blank', 'noopener,noreferrer')}
            >
              <FileText className="w-4 h-4 mr-2" />
              Resume
            </ParticleButton>
            
            <ParticleButton 
              variant="cyan"
              onClick={() => window.open("mailto:bryson.howell13@yahoo.com", "_blank")}
            >
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </ParticleButton>
            
            <ParticleButton 
              variant="pink"
              onClick={() => window.open('https://github.com/B-HowellCMD', '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </ParticleButton>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown 
          className="w-8 h-8 text-retro-purple cursor-pointer" 
          onClick={scrollToProjects}
        />
      </motion.div>
    </section>
  );
};
