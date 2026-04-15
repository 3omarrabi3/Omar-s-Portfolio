import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In <span className="text-cyan-400">Touch</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            I'm currently open to new opportunities. Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="glass-panel p-8 rounded-2xl h-full">
              <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <ContactItem icon={<Mail className="text-cyan-400" />} title="Email" value="omar.rabea.shaban2002@gmail.com" href="mailto:omar.rabea.shaban2002@gmail.com" />
                <ContactItem icon={<Phone className="text-cyan-400" />} title="Phone" value="+20 114 148 2782" href="tel:+201141482782" />
                <ContactItem icon={<MapPin className="text-cyan-400" />} title="Location" value="Cairo, Egypt" />
              </div>

              <div className="mt-12 pt-8 border-t border-slate-700/50">
                <h4 className="text-sm font-medium text-slate-400 mb-4 uppercase tracking-wider">Connect</h4>
                <div className="flex gap-4">
                  <SocialIcon href="https://linkedin.com/in/omar-rabea" icon={<Linkedin size={20} />} />
                  <SocialIcon href="https://github.com/3omarrabi3" icon={<Github size={20} />} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="glass-panel p-8 rounded-2xl space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full bg-[#050b14]/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full bg-[#050b14]/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-300">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  required
                  className="w-full bg-[#050b14]/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  placeholder="Project Proposal"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  required
                  className="w-full bg-[#050b14]/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                  placeholder="Hello Omar, I'd like to discuss..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formState !== 'idle'}
                className="w-full py-4 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-70"
              >
                {formState === 'idle' && <><Send size={18} /> Send Message</>}
                {formState === 'submitting' && <span className="animate-pulse">Sending...</span>}
                {formState === 'success' && <span>Message Sent Successfully!</span>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, title, value, href }: { icon: React.ReactNode, title: string, value: string, href?: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-medium text-slate-400 mb-1">{title}</h4>
        {href ? (
          <a href={href} className="text-white hover:text-cyan-400 transition-colors font-medium break-all">
            {value}
          </a>
        ) : (
          <p className="text-white font-medium">{value}</p>
        )}
      </div>
    </div>
  );
}

function SocialIcon({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-cyan-500 hover:text-white transition-colors"
    >
      {icon}
    </a>
  );
}
