import { motion } from 'framer-motion';
import { GlowCard } from '@/components/interactive/GlowCard';
import { Code, Gamepad2, Cpu, Palette, Database, Zap } from 'lucide-react';

const skills = [
  { icon: <Code className="w-6 h-6" />, name: "React & TypeScript" },
  { icon: <Gamepad2 className="w-6 h-6" />, name: "Full Stack Development (Node.js, APIs, PostgreSQL)" },
  { icon: <Cpu className="w-6 h-6" />, name: "Cloud & DevOps (AWS, Docker, Linux)" },
  { icon: <Database className="w-6 h-6" />, name: "API Design & Integration" },
  { icon: <Palette className="w-6 h-6" />, name: "System-Level Thinking (OS, performance, monitoring)" },
  { icon: <Zap className="w-6 h-6" />, name: "Debugging & Performance Optimization" }
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
                  Computer Science Student 
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                      I started my career in hands-on technical roles, working my way up to a leadership position at uBreakiFix before moving into an advanced repair role at Best Buy. Those experiences put me in fast-paced, problem-solving environments where I learned how to diagnose complex issues, communicate clearly with people of all backgrounds, and take ownership of real outcomes. Whether I’m fixing a device, troubleshooting a system issue, or helping someone understand new technology, I enjoy breaking problems down and finding practical solutions.                  </p>
                  <p>
                    That same mindset is what led me into software development. I’m currently pursuing a degree in Computer Science and building full-stack applications using modern technologies like React, Node.js, and PostgreSQL. I’ve developed a strong foundation through coursework in operating systems, compilers, frontend and backend development, and Linux systems, and I apply those concepts directly in my projects.
                  </p>
                  <p>
                    I’m especially interested in building systems that are both scalable and useful in real-world environments. I take pride in what I build and enjoy continuously learning, improving, and sharing what I know with others.

I’m currently seeking software engineering or full-stack development internship opportunities where I can contribute to meaningful projects, grow as a developer, and continue building real-world experience.
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