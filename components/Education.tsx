import React from 'react';
import { EDUCATION } from '../constants';
import { GraduationCap, Calendar } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-sap-bg">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
           <h2 className="text-3xl font-bold mb-16 text-center text-white">Educational Qualification</h2>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gray-800 transform md:-translate-x-1/2"></div>

          {EDUCATION.map((edu, index) => {
             const isLeft = index % 2 === 0;
             const Icon = GraduationCap;

             return (
               <ScrollReveal key={edu.id} delay={index * 100} className="mb-12 relative">
                 <div className={`md:flex items-center justify-between w-full ${isLeft ? 'flex-row-reverse' : ''}`}>
                    {/* Empty Space for alignment */}
                    <div className="hidden md:block w-5/12"></div>
                    
                    {/* Icon Node */}
                    <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-sap-card border-2 border-sap-primary flex items-center justify-center z-10 shadow-lg shadow-sap-primary/20">
                      <Icon className="w-4 h-4 text-white" />
                    </div>

                    {/* Content Card */}
                    <div className={`ml-20 md:ml-0 md:w-5/12 ${isLeft ? 'text-right' : 'text-left'}`}>
                       <div className="glass-panel p-6 rounded-xl hover:border-sap-primary/50 transition-colors group">
                          <div className={`flex gap-4 mb-2 ${isLeft ? 'flex-row justify-end' : 'flex-row justify-between'}`}>
                             <div className={`${isLeft ? 'order-1' : 'order-2 flex-1'}`}>
                                <span className={`inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider mb-2 text-green-400`}>
                                   <Calendar className="w-3 h-3" /> {edu.period}
                                </span>
                                <h3 className="text-xl font-bold text-white group-hover:text-sap-primary transition-colors">{edu.role}</h3>
                                <h4 className="text-lg text-gray-400">{edu.company}</h4>
                             </div>
                             {edu.logoUrl && (
                               <div className={`flex-shrink-0 ${isLeft ? 'order-2' : 'order-1'}`}>
                                  <img src={edu.logoUrl} alt={edu.company} className="w-12 h-12 object-contain bg-white rounded-lg p-1" />
                               </div>
                             )}
                          </div>
                          
                          <p className="text-gray-400 text-sm mb-4 leading-relaxed mt-3">
                            {edu.description}
                          </p>
                          <div className={`flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : ''}`}>
                            {edu.technologies.map(tech => (
                              <span key={tech} className="px-2 py-1 bg-sap-bg rounded text-xs text-gray-300 border border-gray-800">
                                {tech}
                              </span>
                            ))}
                          </div>
                       </div>
                    </div>
                 </div>
               </ScrollReveal>
             );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
