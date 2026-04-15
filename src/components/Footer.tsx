import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#020408] py-12 border-t border-slate-800 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-display font-bold text-white mb-2">
              O<span className="text-cyan-400">R</span>S<span className="text-cyan-400">.</span>
            </h2>
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Omar Rabea Shaban. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
            <p className="text-slate-600 text-xs flex items-center gap-1">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
