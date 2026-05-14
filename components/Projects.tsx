import React from 'react';
import { PROJECTS } from '../constants';
import ScrollReveal from './ScrollReveal';
import { ExternalLink, Layers } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-sap-surface">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
           <h2 className="text-3xl font-bold mb-12 text-white flex items-center gap-3">
             <Layers className="text-sap-secondary" />
             Featured Projects
           </h2>
        </ScrollReveal>

        <div className="flex overflow-x-auto pb-12 gap-8 snap-x snap-mandatory no-scrollbar -mx-6 px-6">
          {PROJECTS.map((project, idx) => (
            <ScrollReveal key={project.id} delay={idx * 150} className="snap-start shrink-0 w-[80vw] md:w-[35vw] lg:w-[22vw]">
              <div className="group bg-sap-card rounded-xl overflow-hidden border border-gray-800 hover:border-sap-primary/50 transition-all duration-300 h-full flex flex-col hover:shadow-2xl hover:shadow-sap-primary/10 min-h-[500px]">
                <div className="relative h-48 overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-t from-sap-card to-transparent z-10" />
                   <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 opacity-60 group-hover:opacity-80"
                   />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                        <span className="text-xs text-sap-primary font-medium px-2 py-0.5 rounded bg-sap-primary/10">
                            {project.role}
                        </span>
                    </div>
                    {project.link && <ExternalLink className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer" />}
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techStack.map(tech => (
                      <span key={tech} className="text-xs font-mono text-gray-500 border border-gray-800 px-2 py-1 rounded bg-black/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;