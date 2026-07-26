import { motion } from 'framer-motion';
import { GlowCard } from '@/components/interactive/GlowCard';
import { ParticleButton } from '@/components/interactive/ParticleButton';
import { ExternalLink, Github, Wrench, Cpu, Trophy, FolderSync } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'RepairLens',
    status: 'In Development',
    description: 'Offline-first iOS and macOS diagnostics platform for electronics repair technicians. RepairLens is designed to identify devices, capture serial numbers and damage photos, guide diagnostic workflows, and synchronize structured repair records across Apple devices when connectivity is available.',
    tech: ['Swift', 'SwiftUI', 'SwiftData', 'CloudKit', 'Vision', 'Core ML', 'XCTest'],
    color: 'purple' as const,
    icon: <Wrench className="w-8 h-8" />,
    delay: 0.1
  },
  {
    id: 2,
    title: 'Apple Silicon Performance Lab',
    status: 'In Development',
    description: 'Native macOS benchmarking and analysis tool for repeatable Apple silicon performance experiments. The app combines SwiftUI, a C++ benchmark engine, and Metal compute workloads to evaluate CPU performance, memory behavior, multithreading, storage throughput, algorithm efficiency, and CPU-versus-GPU execution with reproducible measurements.',
    tech: ['SwiftUI', 'C++', 'Metal', 'Concurrency', 'SwiftData', 'Instruments', 'XCTest'],
    color: 'cyan' as const,
    icon: <Cpu className="w-8 h-8" />,
    delay: 0.2
  },
  {
    id: 3,
    title: 'Dynasty Draft',
    description: 'Interactive Call of Duty esports roster-building simulator that lets users draft cross-era teams and simulate a six-event season. The project models historical player ratings, team chemistry, and title-specific fit to compare roster construction strategies across competitive eras.',
    tech: ['Simulation Logic', 'Historical Data', 'Roster Builder', 'Interactive UI', 'Esports Analytics'],
    color: 'pink' as const,
    icon: <Trophy className="w-8 h-8" />,
    link: 'https://github.com/B-HowellCMD/Dynasty-Draft',
    delay: 0.3
  },
  {
    id: 4,
    title: 'TransferDesk',
    description: 'Windows desktop file-migration application designed to make large transfers more reliable and transparent. TransferDesk supports queued transfers, real-time progress updates, validation, detailed logs, and multiple migration modes including standard copy, parallel processing, Robocopy, and archive-based migration.',
    tech: ['C#', '.NET 8', 'WPF', 'Async Workflows', 'Windows File Systems', 'Robocopy'],
    color: 'yellow' as const,
    icon: <FolderSync className="w-8 h-8" />,
    delay: 0.4
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-foreground">
            Featured <span className="bg-neon-purple bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Selected software projects focused on real workflows, practical problem-solving, and production-style engineering.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: project.delay }}
            >
              <GlowCard glowColor={project.color} className="h-full">
                <div className="p-6 flex flex-col h-full">
                  {/* Icon */}
                  <div className={`
                    w-16 h-16 rounded-lg flex items-center justify-center mb-4
                    ${project.color === 'purple' ? 'bg-retro-purple/20 text-retro-purple' :
                      project.color === 'cyan' ? 'bg-retro-cyan/20 text-retro-cyan' :
                      project.color === 'yellow' ? 'bg-retro-yellow/20 text-retro-yellow' :
                      'bg-retro-pink/20 text-retro-pink'}
                  `}>
                    {project.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="mb-3">
                    <h3 className="text-2xl font-bold text-foreground">
                      {project.title}
                    </h3>

                    {'status' in project && project.status && (
                      <span className="inline-flex mt-3 px-3 py-1 text-xs font-semibold bg-retro-surface-alt rounded-full text-retro-yellow border border-retro-yellow/40">
                        {project.status}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium bg-retro-surface-alt rounded-full text-foreground border border-retro-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Actions */}
                  {'link' in project && project.link ? (
                    <div className="flex gap-3">
                      <ParticleButton 
                        variant={project.color}
                        onClick={() => window.open(project.link, '_blank')}
                        className="flex-1"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </ParticleButton>
                      <ParticleButton 
                        variant="yellow"
                        onClick={() => window.open(project.link, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </ParticleButton>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 rounded-md border border-retro-border bg-retro-surface-alt px-4 py-3 text-sm font-semibold text-muted-foreground">
                      <Github className="w-4 h-4" />
                      Repository link coming soon
                    </div>
                  )}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
