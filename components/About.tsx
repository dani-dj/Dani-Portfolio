import React from 'react';
import { PERSONAL_INFO } from '../constants';
import ScrollReveal from './ScrollReveal';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-12 h-1 bg-sap-primary rounded-full"></span>
            About Me
          </h2>
          <div className="glass-panel p-8 md:p-12 rounded-2xl border-l-4 border-l-sap-secondary">
             <div className="space-y-6">
               {Array.isArray(PERSONAL_INFO.about) ? (
                 PERSONAL_INFO.about.map((paragraph, index) => (
                   <p key={index} className="text-lg md:text-xl text-gray-300 leading-relaxed font-light text-justify">
                     {paragraph}
                   </p>
                 ))
               ) : (
                 <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light text-justify">
                   {PERSONAL_INFO.about}
                 </p>
               )}
             </div>
             
             <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-gray-800">
                <div>
                   <h3 className="text-3xl font-bold text-white">4+</h3>
                   <p className="text-sm text-sap-muted uppercase tracking-wider mt-1">Years Exp.</p>
                </div>
                <div>
                   <h3 className="text-3xl font-bold text-white">5+</h3>
                   <p className="text-sm text-sap-muted uppercase tracking-wider mt-1">Projects</p>
                </div>
                <div>
                   <h3 className="text-3xl font-bold text-white">4+</h3>
                   <p className="text-sm text-sap-muted uppercase tracking-wider mt-1">Certifications</p>
                </div>
                 <div>
                   <h3 className="text-3xl font-bold text-white">100%</h3>
                   <p className="text-sm text-sap-muted uppercase tracking-wider mt-1">Code Coverage</p>
                </div>
             </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;