import React, { useState } from 'react';
import { motion } from 'motion/react';

const skillCategories = [
  {
    id: 'languages',
    name: 'Programming Languages',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'C++', level: 85 },
      { name: 'Java', level: 80 },
      { name: 'SQL', level: 90 },
      { name: 'JavaScript', level: 75 },
      { name: 'HTML/CSS', level: 80 },
    ]
  },
  {
    id: 'ai',
    name: 'AI & Machine Learning',
    skills: [
      { name: 'Machine Learning', level: 95 },
      { name: 'Deep Learning', level: 90 },
      { name: 'NLP', level: 85 },
      { name: 'Computer Vision', level: 85 },
      { name: 'TensorFlow/Keras', level: 90 },
      { name: 'PyTorch', level: 85 },
      { name: 'Scikit-learn', level: 95 },
      { name: 'OpenCV', level: 80 },
    ]
  },
  {
    id: 'data',
    name: 'Data Science & Analytics',
    skills: [
      { name: 'Data Analysis & Cleaning', level: 95 },
      { name: 'Data Visualization', level: 90 },
      { name: 'EDA', level: 95 },
      { name: 'PCA', level: 85 },
      { name: 'Pandas/NumPy', level: 95 },
      { name: 'Matplotlib', level: 90 },
    ]
  },
  {
    id: 'mlops',
    name: 'MLOps & Deployment',
    skills: [
      { name: 'API Development', level: 85 },
      { name: 'Backend Integration', level: 80 },
      { name: 'Model Monitoring', level: 75 },
      { name: 'Version Control (Git)', level: 90 },
    ]
  },
  {
    id: 'math',
    name: 'Mathematics',
    skills: [
      { name: 'Linear Algebra', level: 90 },
      { name: 'Calculus', level: 85 },
      { name: 'Probability & Statistics', level: 90 },
    ]
  },
  {
    id: 'soft',
    name: 'Soft Skills',
    skills: [
      { name: 'Problem Solving', level: 95 },
      { name: 'Analytical Thinking', level: 95 },
      { name: 'Communication', level: 85 },
      { name: 'Teamwork', level: 90 },
      { name: 'Continuous Learning', level: 100 },
    ]
  }
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);

  return (
    <section id="skills" className="py-24 relative z-10 bg-[#03070c]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="text-cyan-400">Skills</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === category.id 
                  ? 'bg-cyan-500 text-white shadow-[0_0_15px_rgba(0,188,212,0.4)]' 
                  : 'glass-panel text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillCategories.find(c => c.id === activeTab)?.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-6 rounded-2xl"
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium text-white">{skill.name}</span>
                <span className="text-cyan-400 font-mono">{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
