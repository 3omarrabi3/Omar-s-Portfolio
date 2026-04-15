import React from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, Activity, MessageSquare, Eye, BarChart2 } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Medical Image Classification System",
    description: "Deep Learning model for disease detection from X-rays. Built a robust pipeline for preprocessing medical imagery and training a CNN to identify anomalies with high precision.",
    tech: ["TensorFlow", "Keras", "OpenCV", "Flask"],
    result: "94% accuracy",
    icon: <Activity size={24} />,
    color: "from-emerald-500/20 to-teal-900/20"
  },
  {
    id: 2,
    title: "NLP Chatbot for Student Learning",
    description: "Educational chatbot using NLP and Reinforcement Learning to assist students with programming concepts. Adapts to student learning pace and provides contextual hints.",
    tech: ["PyTorch", "NLP", "Python", "RL"],
    result: "Helped 200+ students",
    icon: <MessageSquare size={24} />,
    color: "from-blue-500/20 to-indigo-900/20"
  },
  {
    id: 3,
    title: "Real-time Object Detection System",
    description: "Computer Vision application for surveillance and monitoring. Implemented YOLO architecture optimized for edge devices to process video streams efficiently.",
    tech: ["YOLO", "OpenCV", "Python"],
    result: "30 FPS real-time detection",
    icon: <Eye size={24} />,
    color: "from-purple-500/20 to-fuchsia-900/20"
  },
  {
    id: 4,
    title: "Predictive Analytics Dashboard",
    description: "Interactive data visualization and prediction tool for business intelligence. Integrates multiple data sources to forecast trends and highlight key performance indicators.",
    tech: ["Pandas", "Scikit-learn", "Streamlit"],
    result: "Actionable BI insights",
    icon: <BarChart2 size={24} />,
    color: "from-orange-500/20 to-red-900/20"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10 bg-[#03070c]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-cyan-400">Projects</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel rounded-2xl overflow-hidden group flex flex-col h-full"
            >
              {/* Project Header / Visual Area */}
              <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden flex items-center justify-center`}>
                <div className="absolute inset-0 bg-[#050b14]/40 backdrop-blur-[2px]"></div>
                
                {/* Abstract visualization instead of image */}
                <div className="relative z-10 w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  {project.icon}
                </div>
                
                {/* Overlay links on hover */}
                <div className="absolute inset-0 bg-[#050b14]/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-20">
                  <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-cyan-500 hover:text-[#050b14] transition-colors">
                    <Github size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-cyan-500 hover:text-[#050b14] transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                </div>
                
                <p className="text-slate-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6 p-3 rounded-lg bg-blue-900/20 border border-blue-500/20 inline-block self-start">
                  <span className="text-sm font-medium text-cyan-400">Impact: {project.result}</span>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-700/50">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-mono text-slate-300 bg-slate-800/50 px-2.5 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a href="https://github.com/3omarrabi3" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-600 text-slate-300 hover:text-white hover:border-cyan-400 transition-colors">
            <Github size={18} />
            <span>View More on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
