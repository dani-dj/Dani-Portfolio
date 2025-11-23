import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, MapPin, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-sap-surface pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Let's Connect</h2>
        <p className="text-gray-400 mb-10 max-w-xl mx-auto">
          Whether you have a question about SAP BTP, need help with an S/4HANA migration, or just want to say hi, my inbox is always open.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-3 text-lg text-white hover:text-sap-primary transition-colors bg-sap-card px-6 py-4 rounded-xl border border-gray-700">
               <Mail /> {PERSONAL_INFO.email}
            </a>
            <div className="flex items-center gap-3 text-lg text-gray-400">
               <MapPin /> {PERSONAL_INFO.location}
            </div>
        </div>

        <div className="flex justify-center gap-6 mb-12">
          <a href={`mailto:${PERSONAL_INFO.email}`} className="p-3 bg-sap-bg rounded-full text-gray-400 hover:text-white hover:bg-sap-primary transition-all">
             <Mail className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/daniel-n-in" target="_blank" rel="noopener noreferrer" className="p-3 bg-sap-bg rounded-full text-gray-400 hover:text-white hover:bg-[#0077b5] transition-all">
             <Linkedin className="w-6 h-6" />
          </a>
        </div>

        <div className="text-sm text-gray-600 border-t border-gray-800 pt-8">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React & Tailwind.</p>
          <p className="mt-2 text-xs">Not affiliated with SAP SE.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;