import React, { useEffect, useRef } from 'react';
import { ArrowRight, Download, Database, Cloud, Code2, CheckCircle, ChevronDown } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import ScrollReveal from './ScrollReveal';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Canvas Animation Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        // Increased speed for "more animation"
        this.vx = (Math.random() - 0.5) * 1.5; 
        this.vy = (Math.random() - 0.5) * 1.5;
        this.size = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(77, 177, 255, 0.6)'; // Slightly more opaque
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      // Increased particle count for denser animation
      const particleCount = window.innerWidth < 768 ? 70 : 150;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();

        // Connect particles
        for (let i = index + 1; i < particles.length; i++) {
          const p2 = particles[i];
          const dx = particle.x - p2.x;
          const dy = particle.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 140) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(77, 177, 255, ${0.2 - distance / 800})`; // Fading line
            ctx.lineWidth = 0.8;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleScrollClick = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-[#0f1011]">
      {/* Canvas Background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 opacity-60"
      />
      
      {/* Gradient Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/80 via-transparent to-[#121212] z-0 pointer-events-none" />

      {/* Custom Keyframe Animations */}
      <style>{`
        @keyframes float-y {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes scan-line {
          0% { transform: translateY(-20px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(300px); opacity: 0; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.02); }
        }
        @keyframes gradient-xy {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center w-full">
        <div>
          <ScrollReveal>
            {/* Header Section: Photo + Name Aligned Row */}
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 mb-8">
              {/* Photo Placeholder Box */}
              <div className="relative group flex-shrink-0">
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-sap-primary to-sap-secondary rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                  <div className="relative w-28 h-28 bg-[#1a1a1a] rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
                      <img 
                        src="https://lh3.googleusercontent.com/d/17Xs9P1E4iQkddHeMI3HhM_6wOOtUhRJT" 
                        alt="Daniel N" 
                        className="w-full h-full object-cover object-center transition-opacity"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300';
                        }}
                      />
                  </div>
              </div>

              {/* Name and Title */}
              <div className="text-center sm:text-left">
                <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-2">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-xl md:text-2xl text-sap-primary font-light">
                  SAP Technical Consultant
                </p>
              </div>
            </div>

            <div className="flex justify-center sm:justify-start mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sap-surface border border-sap-card text-xs font-semibold tracking-wide text-sap-primary">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                OPEN TO WORK
              </div>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-gray-400 leading-tight mb-6 text-center sm:text-left">
              Building the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sap-primary to-sap-accent">
                Intelligent Enterprise
              </span>
            </h2>
            <p className="text-lg text-sap-muted mb-8 max-w-lg leading-relaxed text-center sm:text-left mx-auto sm:mx-0">
              {PERSONAL_INFO.tagline} {Array.isArray(PERSONAL_INFO.about) ? PERSONAL_INFO.about[0].split('.')[0] : (PERSONAL_INFO.about as any).split('.')[0]}.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              <a 
                href="https://www.linkedin.com/in/daniel-n-in"
                target="_blank"
                rel="noopener noreferrer" 
                className="px-8 py-3 rounded-lg bg-sap-primary text-white font-medium hover:bg-blue-600 transition-all shadow-[0_0_20px_rgba(77,177,255,0.3)] flex items-center gap-2 group"
              >
                LinkedIn 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/resume.pdf" 
                target="_blank"
                className="px-8 py-3 rounded-lg bg-sap-surface border border-gray-700 text-gray-300 font-medium hover:bg-sap-card hover:text-white transition-all flex items-center gap-2"
              >
                Download CV
                <Download className="w-4 h-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={200} className="hidden md:flex justify-center relative perspective-1000">
           <div 
              className="relative w-full max-w-[500px] aspect-square group" 
              style={{ animation: 'float-y 6s ease-in-out infinite' }}
           >
              
              {/* Animated Background Glow with Cycling Gradient */}
              <div 
                className="absolute -inset-1 rounded-2xl blur-2xl opacity-50 bg-gradient-to-r from-sap-primary via-sap-secondary to-sap-primary bg-[length:200%_200%]" 
                style={{ animation: 'gradient-xy 8s linear infinite, pulse-slow 4s ease-in-out infinite' }}
              ></div>
              
              {/* Main Card */}
              <div className="relative h-full bg-[#131314]/90 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-2xl flex flex-col overflow-hidden transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_0_50px_rgba(77,177,255,0.3)] group-hover:border-sap-primary/40">
                
                {/* Subtle Inner Animated Gradient Overlay */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-sap-primary/5 via-transparent to-sap-secondary/5 bg-[length:200%_200%] pointer-events-none"
                  style={{ animation: 'gradient-xy 12s ease infinite' }}
                />

                {/* Scanning Laser Effect */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl z-0">
                    <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-sap-primary to-transparent shadow-[0_0_20px_#4db1ff] opacity-0" style={{ animation: 'scan-line 4s linear infinite' }}></div>
                </div>

                {/* Window Header */}
                <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4 relative z-10">
                   <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-inner" />
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-inner" />
                      <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-inner" />
                   </div>
                   <div className="flex items-center gap-2 text-xs text-gray-500 font-mono bg-black/20 px-3 py-1 rounded-md border border-white/5">
                      <Code2 className="w-3 h-3" />
                      <span>clean_core_architecture.abap</span>
                   </div>
                </div>

                {/* Code Editor Content */}
                <div className="flex-1 font-mono text-[13px] leading-6 overflow-hidden relative z-10">

                   {/* Original ABAP Section */}
                   <div className="flex">
                      <span className="text-gray-700 w-8 text-right pr-3 select-none">1</span>
                      <p><span className="text-[#c678dd]">CLASS</span> <span className="text-[#e5c07b]">zcl_enterprise_architect</span> <span className="text-[#c678dd]">DEFINITION</span>.</p>
                   </div>
                   <div className="flex">
                      <span className="text-gray-700 w-8 text-right pr-3 select-none">2</span>
                      <p className="pl-4"><span className="text-[#c678dd]">PUBLIC SECTION</span>.</p>
                   </div>
                   <div className="flex">
                      <span className="text-gray-700 w-8 text-right pr-3 select-none">3</span>
                      <p className="pl-8"><span className="text-[#61afef]">METHODS</span>: <span className="text-[#98c379]">design_future_apps</span></p>
                   </div>
                   <div className="flex">
                      <span className="text-gray-700 w-8 text-right pr-3 select-none">4</span>
                      <p className="pl-12"><span className="text-[#c678dd]">IMPORTING</span> stack <span className="text-[#c678dd]">TYPE</span> string.</p>
                   </div>
                   <div className="flex">
                      <span className="text-gray-700 w-8 text-right pr-3 select-none">5</span>
                      <p className="pl-4"><span className="text-[#c678dd]">ENDCLASS</span>.</p>
                   </div>
                   
                   <div className="my-3 border-t border-dashed border-gray-800" />
                   
                   {/* Original CAP Section */}
                   <div className="flex">
                      <span className="text-gray-700 w-8 text-right pr-3 select-none">6</span>
                      <p className="text-gray-500 italic">// Modern Cloud Integration</p>
                   </div>
                   <div className="flex">
                      <span className="text-gray-700 w-8 text-right pr-3 select-none">7</span>
                      <p><span className="text-[#56b6c2]">const</span> <span className="text-[#e06c75]">srv</span> = <span className="text-[#c678dd]">await</span> cds.<span className="text-[#61afef]">connect</span>.<span className="text-[#61afef]">to</span>(<span className="text-[#98c379]">'BTP'</span>);</p>
                   </div>
                   <div className="flex">
                      <span className="text-gray-700 w-8 text-right pr-3 select-none">8</span>
                      <p><span className="text-[#61afef]">srv</span>.<span className="text-[#61afef]">on</span>(<span className="text-[#98c379]">'READ'</span>, <span className="text-[#e5c07b]">Entities</span>, <span className="text-[#c678dd]">req</span> <span className="text-[#56b6c2]">{'=>'}</span> {'{'}</p>
                   </div>
                   <div className="flex">
                      <span className="text-gray-700 w-8 text-right pr-3 select-none">9</span>
                      <p className="pl-4"><span className="text-[#c678dd]">return</span> <span className="text-[#e06c75]">SELECT</span>.<span className="text-[#61afef]">from</span>(req.target);</p>
                   </div>
                   <div className="flex">
                      <span className="text-gray-700 w-8 text-right pr-3 select-none">10</span>
                      <p>{'}'}); <span className="w-2 h-4 bg-sap-primary ml-1 animate-pulse inline-block align-middle rounded-sm"></span></p>
                   </div>
                </div>

                {/* Bottom Status Bar */}
                <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center text-xs relative z-10">
                   <div className="flex items-center gap-2 text-gray-400">
                      <div className="flex items-center gap-1">
                         <div className="w-2 h-2 rounded-full bg-sap-primary animate-pulse"></div>
                         <span>BTP: Connected</span>
                      </div>
                      <div className="w-px h-3 bg-gray-700"></div>
                      <span>v2.0.4</span>
                      {/* Funny Code Snippet in Footer */}
                      <div className="w-px h-3 bg-gray-700"></div>
                      <span className="font-mono hidden sm:block">
                        <span className="text-[#c678dd]">const</span> Daniel_N = <span className="text-[#56b6c2]">true</span>;
                      </span>
                   </div>
                   <div className="flex gap-2">
                      <span className="text-green-500 flex items-center gap-1">
                         <CheckCircle className="w-3 h-3" /> 0 Errors
                      </span>
                   </div>
                </div>
              </div>

              {/* Floating 3D Elements with Parallax float */}
              <div className="absolute -right-6 top-12 bg-[#1a1a1a] p-4 rounded-xl shadow-2xl border border-gray-800 z-20 group-hover:scale-110 transition-transform" style={{ animation: 'float-y 5s ease-in-out infinite reverse' }}>
                 <Cloud className="text-sap-primary w-8 h-8" />
              </div>
              <div className="absolute -left-6 bottom-20 bg-[#1a1a1a] p-4 rounded-xl shadow-2xl border border-gray-800 z-20 group-hover:scale-110 transition-transform" style={{ animation: 'float-y 7s ease-in-out infinite 1s' }}>
                 <Database className="text-sap-secondary w-8 h-8" />
              </div>
           </div>
        </ScrollReveal>
      </div>

      {/* Scroll Indicator - Centered Horizontally */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce cursor-pointer"
        onClick={handleScrollClick}
      >
         <div className="flex flex-col items-center gap-2 hover:text-white transition-colors text-white/70">
            <span className="text-[10px] uppercase tracking-[0.3em] text-sap-primary font-medium">Scroll to Explore</span>
            <ChevronDown className="w-6 h-6" />
         </div>
      </div>
    </section>
  );
};

export default Hero;