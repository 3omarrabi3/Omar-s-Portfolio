import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    id: 1,
    degree: "B.Sc. in Computer Science and Artificial Intelligence",
    major: "Major: AI",
    institution: "Cairo University - Faculty of Computers and Artificial Intelligence",
    period: "September 2021 – September 2025",
    grade: "Very Good with Honors",
    gpa: "3.25 / 4.00",
    achievement: "Top 50 in class"
  },
  {
    id: 2,
    degree: "High School Diploma",
    major: "Science/Math Track",
    institution: "Ali Ibn Abi Talib Secondary School",
    period: "September 2017 – September 2020",
    location: "Cairo",
    grade: "97.6%",
    achievement: "3rd place"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative z-10 bg-[#03070c]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Education & <span className="text-cyan-400">Academics</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-panel p-8 rounded-3xl relative overflow-hidden group"
            >
              {/* Decorative background element */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-colors"></div>
              
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-6 shadow-lg">
                <GraduationCap size={28} className="text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
              <h4 className="text-lg font-medium text-cyan-400 mb-4">{edu.institution}</h4>
              
              <div className="flex flex-col gap-2 mb-6 text-sm text-slate-400 font-mono">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{edu.period}</span>
                </div>
                {edu.location && (
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{edu.location}</span>
                  </div>
                )}
              </div>

              <div className="space-y-3 border-t border-slate-700/50 pt-6">
                {edu.major && (
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Focus</span>
                    <span className="text-white font-medium">{edu.major}</span>
                  </div>
                )}
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Grade</span>
                  <span className="text-white font-medium">{edu.grade}</span>
                </div>
                {edu.gpa && (
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">GPA</span>
                    <span className="text-cyan-400 font-bold">{edu.gpa}</span>
                  </div>
                )}
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Achievement</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-500 border border-yellow-500/20">
                    {edu.achievement}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
