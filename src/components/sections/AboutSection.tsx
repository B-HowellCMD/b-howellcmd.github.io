import { motion } from 'framer-motion';
import { GlowCard } from '@/components/interactive/GlowCard';
import { Code, Cpu, Database, Monitor, ShieldCheck, Zap } from 'lucide-react';

const skills = [
  { icon: <Code className="w-6 h-6" />, name: "Apple Platforms: Swift, SwiftUI, SwiftData, CloudKit, Vision, Core ML" },
  { icon: <Monitor className="w-6 h-6" />, name: "Windows Desktop: C#, .NET 8, WPF, async workflows, file-system tooling" },
  { icon: <Cpu className="w-6 h-6" />, name: "Systems & Performance: C++, Metal, Instruments, benchmarking, profiling" },
  { icon: <Database className="w-6 h-6" />, name: "Data & Sync: local persistence, offline-first design, JSON, CSV, validation" },
  { icon: <Zap className="w-6 h-6" />, name: "Web Development: React, TypeScript, interactive UI, REST API integration" },
  { icon: <ShieldCheck className="w-6 h-6" />, name: "Quality: XCTest, error handling, logging, accessibility, Git/GitHub" }
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-foreground">
            About <span className="bg-neon-cyan bg-clip-text text-transparent">Me</span>
          </h2>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlowCard glowColor="purple">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Computer Science Student and Software Engineering Intern Candidate
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I started in hands-on technical roles, working through electronics repair, device diagnostics,
                    customer support, and team leadership before moving deeper into software development. That background
                    shaped how I build: I care about practical tools, clear workflows, reliable error handling, and software
                    that solves real problems for real users.
                  </p>
                  <p>
                    I’m currently pursuing a Computer Science degree at WGU while building projects across Apple platforms,
                    Windows desktop, web, and data-driven applications. My current technical focus includes Swift, SwiftUI,
                    SwiftData, CloudKit, Vision, Core ML, C#, .NET 8, WPF, React, TypeScript, C++, Metal, and performance
                    profiling with Apple developer tools.
                  </p>
                  <p>
                    I’m especially interested in native application development, Apple-platform engineering, desktop tools,
                    systems performance, and software that supports technical workflows. I’m seeking software engineering
                    internship opportunities where I can contribute to meaningful products, keep learning from experienced
                    engineers, and bring a practical support-and-repair mindset to the team.
                  </p>
                </div>
              </div>
            </GlowCard>
          </motion.div>
          
          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlowCard glowColor="cyan">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Technical Skills
                </h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-retro-cyan">
                          {skill.icon}
                        </div>
                        <span className="font-medium text-foreground">
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </GlowCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
