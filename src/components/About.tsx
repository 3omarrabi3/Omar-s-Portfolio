import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, DollarSign, Award, Star } from 'lucide-react';

export default function About() {
  const highlights = [
    { icon: <GraduationCap size={24} />, title: "Graduating 2025", desc: "Cairo University - AI Major" },
    { icon: <DollarSign size={24} />, title: "$5,500+ Earned", desc: "Freelance AI Projects" },
    { icon: <Award size={24} />, title: "Top 50 in Class", desc: "Very Good with Honors" },
    { icon: <Star size={24} />, title: "Promoted Reviewer", desc: "Scale AI" },
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="text-cyan-400">Me</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Photo Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-br from-cyan-400 via-blue-600 to-purple-600">
              <div className="w-full h-full rounded-full bg-[#050b14] flex items-center justify-center overflow-hidden border-4 border-[#050b14]">
                {/* Replace with actual image */}
                <div className="text-6xl font-display font-bold text-slate-700">ORS</div>
              </div>
            </div>
          </motion.div>

          {/* Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">Hello! I'm Omar Rabea Shaban</h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              I am a Data Science and AI Engineer currently in my final year at Cairo University's Faculty of Computers and Artificial Intelligence, majoring in AI. I am deeply passionate about Machine Learning, Computer Vision, NLP, and Reinforcement Learning.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              My focus is on building intelligent systems from concept to deployment using Python, with a particular interest in creating practical, real-world solutions in the healthcare and education domains. I thrive on transforming complex data into actionable, intelligent solutions.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-panel p-4 rounded-xl flex items-center gap-4 hover:bg-white/5 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
