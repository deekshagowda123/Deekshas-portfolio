import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, MapPin, Calendar, CheckCircle2, Trophy, Sparkles } from 'lucide-react';
import { EDUCATIONS } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-slate-100/60 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-mono text-xs uppercase tracking-widest font-semibold">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-slate-900 dark:text-white">
            Education & Performance
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            Consistently ranking at the top of the Computer Science Engineering cohort with a 9.33 CGPA.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative max-w-4xl mx-auto space-y-8">
          
          {/* Vertical connecting line */}
          <div className="absolute left-6 sm:left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-indigo-500 via-violet-500 to-slate-300 dark:to-slate-800 hidden sm:block" />

          {EDUCATIONS.map((edu, idx) => (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              key={edu.institution}
              className="relative pl-0 sm:pl-20 group"
            >
              {/* Timeline dot */}
              <div className="absolute left-5 sm:left-[23px] top-7 w-5 h-5 rounded-full bg-indigo-600 border-4 border-white dark:border-slate-950 shadow-md hidden sm:flex items-center justify-center z-10 group-hover:scale-125 transition-transform" />

              {/* Education Card */}
              <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-6">
                  <div className="space-y-1">
                    <span className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-mono text-xs font-bold inline-block mb-2">
                      {edu.score}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-base font-semibold text-slate-700 dark:text-slate-300">
                      {edu.institution}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 shrink-0">
                    <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                      <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                      <span>{edu.period}</span>
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-0.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{edu.location}</span>
                    </span>
                  </div>
                </div>

                {edu.highlights && (
                  <div className="pt-6 space-y-3">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Key Highlights & Activities:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {edu.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2.5 p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/50 border border-slate-100 dark:border-slate-800/80 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
