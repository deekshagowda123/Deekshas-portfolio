import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Heart, Sparkles, Terminal } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 dark:bg-slate-950 dark:border-slate-900 py-12 relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Copyright */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 text-white flex items-center justify-center font-display font-bold text-sm shadow-md">
              D
            </div>
            <div>
              <span className="font-display font-bold tracking-tight text-white text-sm block">
                {PROFILE.name}
              </span>
              <span className="text-[11px] text-slate-400 font-mono">
                Fullstack Developer • AI Systems Engineer
              </span>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-mono text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">#about</a>
            <a href="#projects" className="hover:text-white transition-colors">#projects</a>
            <a href="#skills" className="hover:text-white transition-colors">#skills</a>
            <a href="#education" className="hover:text-white transition-colors">#education</a>
            <a href="#resume" className="hover:text-white transition-colors">#resume</a>
            <a href="#contact" className="hover:text-white transition-colors">#contact</a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-3 rounded-2xl bg-slate-800 hover:bg-indigo-600 text-slate-200 hover:text-white transition-all shadow-md hover:-translate-y-0.5"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            &copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved. Designed with precision & React.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Sahyadri College (9.33 CGPA)</span>
            <span>•</span>
            <span className="text-emerald-400 font-semibold">Ready for 2027</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
