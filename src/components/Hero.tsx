import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ChevronDown, FileText } from 'lucide-react';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = "Omar Rabea Shaban";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden z-10">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px] -z-10 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-900/20 rounded-full blur-[100px] -z-10 animate-float-delayed"></div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span>Available for new opportunities</span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4 min-h-[1em]">
          {text}<span className="text-cyan-400 animate-pulse">_</span>
        </h1>
        
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-xl md:text-3xl font-medium text-slate-400 mb-6"
        >
          AI Engineer & Data Science Specialist
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="max-w-2xl text-lg text-slate-400 mb-10"
        >
          "Transforming Data into Intelligent Solutions"
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <a href="#projects" className="px-8 py-3 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-medium transition-colors shadow-[0_0_20px_rgba(0,188,212,0.3)]">
            View My Work
          </a>
          <a href="#contact" className="px-8 py-3 rounded-full glass-panel hover:bg-white/5 text-white font-medium transition-colors">
            Contact Me
          </a>
          <a href="#" className="px-8 py-3 rounded-full glass-panel hover:bg-white/5 text-white font-medium transition-colors flex items-center gap-2">
            <FileText size={18} />
            Download CV
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.5 }}
          className="flex items-center space-x-6"
        >
          <SocialLink href="https://linkedin.com/in/omar-rabea" icon={<Linkedin />} />
          <SocialLink href="https://github.com/3omarrabi3" icon={<Github />} />
          <SocialLink href="mailto:omar.rabea.shaban2002@gmail.com" icon={<Mail />} />
        </motion.div>

      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <a href="#about" className="text-slate-500 hover:text-cyan-400 transition-colors">
          <ChevronDown size={32} />
        </a>
      </motion.div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all hover:scale-110"
    >
      {icon}
    </a>
  );
}
