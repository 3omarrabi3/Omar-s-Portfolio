import React from 'react';
import { motion } from 'motion/react';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    provider: "Stanford University & DeepLearning.AI",
    title: "Machine Learning Specialization",
    details: [
      "Supervised Machine Learning: Regression and Classification",
      "Advanced Learning Algorithms",
      "Unsupervised Learning, Recommenders, Reinforcement Learning"
    ],
    color: "from-red-500/20 to-red-900/20",
    borderColor: "border-red-500/30"
  },
  {
    provider: "Google",
    title: "Foundations of Data Science",
    details: ["Data, Data, Everywhere"],
    color: "from-blue-500/20 to-blue-900/20",
    borderColor: "border-blue-500/30"
  },
  {
    provider: "IBM",
    title: "Linux Commands and Shell Scripting",
    details: ["Hands-on Introduction"],
    color: "from-slate-500/20 to-slate-900/20",
    borderColor: "border-slate-500/30"
  },
  {
    provider: "Go Academy",
    title: "Platform Internship Certificate",
    details: ["Programming Instruction & Mentorship"],
    color: "from-cyan-500/20 to-cyan-900/20",
    borderColor: "border-cyan-500/30"
  }
];

export default function Certifications() {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Licenses & <span className="text-cyan-400">Certifications</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass-panel p-6 rounded-2xl border ${cert.borderColor} bg-gradient-to-br ${cert.color} hover:-translate-y-2 transition-all duration-300 group`}
            >
              <div className="w-12 h-12 rounded-full bg-[#050b14]/50 flex items-center justify-center mb-4 border border-white/10">
                <Award size={20} className="text-white" />
              </div>
              <h4 className="text-sm font-mono text-slate-400 mb-2 uppercase tracking-wider">{cert.provider}</h4>
              <h3 className="text-lg font-bold text-white mb-4 leading-tight">{cert.title}</h3>
              
              <ul className="space-y-2">
                {cert.details.map((detail, i) => (
                  <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                    <span className="text-cyan-500 mt-1 text-xs">▹</span>
                    <span className="leading-snug">{detail}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-4 border-t border-white/10 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="text-xs flex items-center gap-1 text-cyan-400 hover:text-cyan-300">
                  Verify Credential <ExternalLink size={12} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
