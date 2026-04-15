import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "AI Training Specialist & Reviewer",
    company: "Scale AI",
    period: "June 2024 - September 2025",
    type: "Remote",
    achievements: [
      "Trained and refined Large Language Models (LLMs) through data labeling, prompt evaluation, and model feedback for Scale AI clients.",
      "Gained practical exposure to advanced LLM techniques: Chain-of-Thought reasoning and Prompt Engineering.",
      "Evaluated and improved AI-generated responses in programming, mathematical reasoning, and statistical problem-solving.",
      "Promoted to Reviewer for consistent high-quality performance.",
      "Validated AI outputs for accuracy and reliability.",
      "Earned $5,500+ across multiple projects."
    ],
    tags: ["LLMs", "Prompt Engineering", "Data Labeling", "Model Evaluation"]
  },
  {
    id: 2,
    role: "Programming Instructor",
    company: "Go Academy",
    period: "February 2024 – February 2026",
    type: "On-site / Hybrid",
    achievements: [
      "Taught programming fundamentals: Python, Algorithms, Scratch, Computer Architecture.",
      "Guided students in building real-world projects.",
      "Mentored students through code reviews, debugging, and constructive feedback.",
      "Improved problem-solving skills through exercises and coding challenges.",
      "Developed curriculum materials and learning resources."
    ],
    tags: ["Python", "Algorithms", "Teaching", "Mentoring"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Professional <span className="text-cyan-400">Experience</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-600 to-transparent"></div>

          {experiences.map((exp, index) => (
            <div key={exp.id} className={`relative flex flex-col md:flex-row gap-8 mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-[#050b14] border-4 border-cyan-500 -translate-x-[15px] md:-translate-x-1/2 mt-1.5 z-10 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
              </div>

              {/* Empty space for alternating layout on desktop */}
              <div className="hidden md:block md:w-1/2"></div>

              {/* Content Card */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="ml-12 md:ml-0 md:w-1/2 glass-panel p-6 md:p-8 rounded-2xl hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex items-center gap-3 mb-2 text-cyan-400">
                  <Briefcase size={20} />
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                </div>
                
                <h4 className="text-lg font-medium text-slate-300 mb-4">{exp.company} <span className="text-slate-500 text-sm ml-2">• {exp.type}</span></h4>
                
                <div className="flex items-center gap-2 text-sm text-slate-400 mb-6 font-mono">
                  <Calendar size={14} />
                  <span>{exp.period}</span>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-blue-900/30 text-blue-300 border border-blue-800/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
