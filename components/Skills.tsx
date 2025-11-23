import React from 'react';
import { SKILLS } from '../constants';
import ScrollReveal from './ScrollReveal';
import { CheckCircle2, Cpu, Wrench } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Ambient Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sap-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-sap-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Technical Expertise</h2>
            <p className="text-sap-muted max-w-2xl mx-auto">
              A comprehensive toolset refined over years of solving complex enterprise challenges.
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-10">
          {SKILLS.map((category, idx) => (
            <ScrollReveal key={category.category} delay={idx * 100}>
              <div className="glass-panel p-8 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-sap-primary/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,140,255,0.1)]">
                
                {/* Decorative active background gradient */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-sap-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none group-hover:bg-sap-primary/10 transition-all duration-700 group-hover:scale-125"></div>
                
                {/* Category Header */}
                <div className="mb-8 flex items-center gap-4 relative z-10">
                  <span className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-[#0a2e52] text-white font-bold tracking-wider shadow-lg border border-[#1e4f7c] uppercase transform transition-transform duration-300 group-hover:-translate-y-1">
                    {category.category === 'SKILLS' ? (
                      <Cpu className="w-4 h-4 text-sap-primary animate-pulse" />
                    ) : (
                      <Wrench className="w-4 h-4 text-sap-secondary" />
                    )}
                    {category.category}
                  </span>
                  {/* Animated Line */}
                  <div className="h-px flex-1 bg-gradient-to-r from-[#1e4f7c] via-sap-primary/30 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-6 relative z-10">
                  {category.skills.map((skill) => (
                    <div key={skill} className="group/item">
                      <div className="flex items-center gap-3 p-2 rounded-lg transition-all duration-300 hover:bg-white/5 hover:translate-x-1 cursor-default border border-transparent hover:border-white/5">
                        <div className="relative">
                          <CheckCircle2 className="w-4 h-4 text-sap-primary group-hover/item:text-sap-secondary transition-all duration-500 group-hover/item:rotate-[360deg] group-hover/item:scale-110" />
                        </div>
                        <span className="text-sm md:text-base text-gray-300 group-hover/item:text-white transition-colors group-hover/item:font-medium">
                          {skill}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;