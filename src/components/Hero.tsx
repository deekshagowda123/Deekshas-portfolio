import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Sparkles, Terminal, Cpu, Trophy, GraduationCap, MapPin } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Ambient Glow Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-500/10 via-violet-500/10 to-transparent dark:from-indigo-500/15 dark:via-purple-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 text-xs font-mono font-medium shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-indigo-500 animate-pulse" />
              <span>Available for Fullstack & AI Roles (2027 Grad)</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Hi, I’m <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-500 dark:from-indigo-400 dark:via-violet-400 dark:to-indigo-300 bg-clip-text text-transparent">{PROFILE.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-display font-semibold text-slate-700 dark:text-slate-300">
                Fullstack Developer Passionate About Web & AI Systems
              </p>
            </div>

            {/* Location & Summary */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl font-normal">
              Computer Science student at <strong className="text-slate-900 dark:text-slate-200">Sahyadri College of Engineering (9.33 CGPA)</strong> with hands-on experience in full-stack web development, REST API architecture, deep learning medical segmentation, and IoT telemetry streaming. Skilled in building ultra-responsive, maintainable applications that scale.
            </p>

            {/* Location Pill */}
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
              <MapPin className="w-4 h-4 text-indigo-500 shrink-0" />
              <span>{PROFILE.location}</span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-ping" />
                Open to Remote & Hybrid Opportunities
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/35 transition-all duration-200 flex items-center gap-2 group"
              >
                <span>Explore My Projects</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#resume"
                className="px-6 py-3.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 text-slate-800 dark:text-slate-200 font-semibold text-sm shadow-xs hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all duration-200"
              >
                View & Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center gap-5 text-slate-500 dark:text-slate-400">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">Connect:</span>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="hover:text-slate-900 dark:hover:text-white transition-colors p-1"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors p-1"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                aria-label="Email Deeksha"
                className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors p-1"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Visual Stats Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl bg-white dark:bg-slate-900 p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-2xl space-y-6">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500 block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500 block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500 block" />
                </div>
                <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                  deeksha_workspace.ts
                </span>
              </div>

              {/* Code Banner */}
              <div className="rounded-2xl bg-slate-950 p-4 text-xs font-mono text-slate-300 space-y-2 overflow-x-auto shadow-inner">
                <div className="text-slate-500">// Academic & Engineering Benchmark</div>
                <div><span className="text-indigo-400">const</span> <span className="text-amber-300">developer</span> = &#123;</div>
                <div className="pl-4"><span className="text-slate-400">name:</span> <span className="text-emerald-300">"Deeksha BR"</span>,</div>
                <div className="pl-4"><span className="text-slate-400">cgpa:</span> <span className="text-violet-400">9.33</span>, <span className="text-slate-500">// Rank: Dept Topper</span></div>
                <div className="pl-4"><span className="text-slate-400">coreStacks:</span> [<span className="text-emerald-300">"React"</span>, <span className="text-emerald-300">"FastAPI"</span>, <span className="text-emerald-300">"YOLOv8"</span>],</div>
                <div className="pl-4"><span className="text-slate-400">specialty:</span> <span className="text-emerald-300">"AI-IoT Medical Systems"</span></div>
                <div>&#125;;</div>
              </div>

              {/* Quick Metrics Bento */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="rounded-2xl bg-slate-50 dark:bg-slate-950/60 p-3.5 border border-slate-200/60 dark:border-slate-800/60 text-center">
                  <div className="flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-1">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="text-lg font-display font-bold text-slate-900 dark:text-white">9.33</div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase">B.E. CGPA</div>
                </div>

                <div className="rounded-2xl bg-slate-50 dark:bg-slate-950/60 p-3.5 border border-slate-200/60 dark:border-slate-800/60 text-center">
                  <div className="flex items-center justify-center text-amber-600 dark:text-amber-400 mb-1">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div className="text-lg font-display font-bold text-slate-900 dark:text-white">Top 10</div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase">React Hackathon</div>
                </div>

                <div className="col-span-2 sm:col-span-1 rounded-2xl bg-slate-50 dark:bg-slate-950/60 p-3.5 border border-slate-200/60 dark:border-slate-800/60 text-center">
                  <div className="flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-1">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div className="text-lg font-display font-bold text-slate-900 dark:text-white">5+</div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase">AI/Fullstack Apps</div>
                </div>
              </div>

              {/* Status footer */}
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Sahyadri College (SCEM)</span>
                </span>
                <span className="text-slate-400 dark:text-slate-600">Graduating 2027</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
