import { motion } from 'framer-motion';
import { GlowCard } from '@/components/interactive/GlowCard';
import { Code, Gamepad2, Cpu, Palette, Database, Zap } from 'lucide-react';

const skills = [
  { icon: <Code className="w-6 h-6" />, name: "React & TypeScript" },
  { icon: <Gamepad2 className="w-6 h-6" />, name: "Game Development" },
  { icon: <Cpu className="w-6 h-6" />, name: "System Programming" },
  { icon: <Database className="w-6 h-6" />, name: "API Design" },
  { icon: <Palette className="w-6 h-6" />, name: "UI/UX Design" },
  { icon: <Zap className="w-6 h-6" />, name: "Performance Optimization" }
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
                    I have real world job and leadership experience. I have worked for UBreakifix for 3 years making my way up to the store manager before I made my way to Best Buy. I enjoy the problem solving environments that these work places could provide me. Whether it is fixing phones, random computer problem's or walking an older person through on how to use their brand new laptop. Ever since graduating High School in 2020, I have a passion to fix anything that I can get my hands on and teach other people what I know. I feel very proud of my knowledge that I have so far and wish to share that with everyone that I can.
                  </p>
                  <p>
                    Currently pursuing a Computer Science degree with a passion for software development 
                    and technology. I have hands-on experience with modern web technologies, programming languages, 
                    and development frameworks through coursework and personal projects.
                  </p>
                  <p>
                    Seeking internship opportunities to apply my technical skills in a professional environment 
                    while contributing to meaningful projects and continuing to grow as a developer.
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