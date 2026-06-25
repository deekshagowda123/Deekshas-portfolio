import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Cpu, Database, Wrench, Code2, Sparkles, Check } from 'lucide-react';
import { SKILLS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const categoryIcons: Record<string, React.ReactNode> = {
    "Programming Languages": <Code2 className="w-5 h-5 text-indigo-500" />,
    "Frameworks & Libraries": <Cpu className="w-5 h-5 text-violet-500" />,
    "Databases & Cloud": <Database className="w-5 h-5 text-emerald-500" />,
    "Developer Tools": <Wrench className="w-5 h-5 text-amber-500" />
  };

  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-mono text-xs uppercase tracking-widest font-semibold">
            <Terminal className="w-4 h-4" />
            <span>Technical Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-slate-900 dark:text-white">
            Stack & Domain Expertise
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            Mastery across modern web engineering, data science tooling, machine learning frameworks, and embedded IoT architectures.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILLS.map((group, groupIdx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: groupIdx * 0.1 }}
              key={group.category}
              className="rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 p-7 sm:p-8 space-y-6 shadow-xs"
            >
              <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
                <div className="p-2.5 rounded-2xl bg-white dark:bg-slate-800 shadow-xs border border-slate-100 dark:border-slate-700">
                  {categoryIcons[group.category] || <Sparkles className="w-5 h-5 text-indigo-500" />}
                </div>
                <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">
                  {group.category}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5 p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 transition-all hover:border-indigo-200 dark:hover:border-indigo-900">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-800 dark:text-slate-200">
                      <span className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{skill.name}</span>
                      </span>
                      <span className="font-mono text-[11px] text-slate-400">{skill.level}%</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
