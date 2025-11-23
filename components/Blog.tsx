import React from 'react';
import { BLOGS } from '../constants';
import ScrollReveal from './ScrollReveal';
import { ArrowUpRight } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
           <h2 className="text-3xl font-bold mb-12 text-white">Latest Insights</h2>
        </ScrollReveal>

        <div className="grid gap-6">
          {BLOGS.map((post, idx) => (
             <ScrollReveal key={post.id} delay={idx * 100}>
               <a href="#" className="block glass-panel p-8 rounded-xl group border border-transparent hover:border-gray-700 transition-all">
                 <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4 text-sm text-sap-muted">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex gap-2">
                       {post.tags.map(tag => (
                         <span key={tag} className="px-2 py-1 text-xs font-medium bg-sap-primary/10 text-sap-primary rounded-full">
                           #{tag}
                         </span>
                       ))}
                    </div>
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-sap-primary transition-colors flex items-center gap-2">
                   {post.title}
                   <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                 </h3>
                 <p className="text-gray-400">
                   {post.excerpt}
                 </p>
               </a>
             </ScrollReveal>
          ))}
        </div>
        
        <div className="mt-10 text-center">
            <button className="px-6 py-3 rounded-lg border border-gray-700 text-white hover:bg-sap-card transition-colors font-medium">
                Read All Articles
            </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;