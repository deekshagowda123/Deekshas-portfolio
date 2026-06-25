import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Award, Zap, CheckCircle2, BookOpen, Sparkles, Star } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Trophy: <Trophy className="w-6 h-6 text-amber-500" />,
    Award: <Award className="w-6 h-6 text-indigo-500" />,
    Zap: <Zap className="w-6 h-6 text-violet-500" />,
    CheckCircle2: <CheckCircle2 className="w-6 h-6 text-emerald-500" />,
    BookOpen: <BookOpen className="w-6 h-6 text-blue-500" />
  };

  return (
    <section className="py-24 bg-white dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-mono text-xs uppercase tracking-widest font-semibold">
            <Trophy className="w-4 h-4" />
            <span>Honors & Certifications</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-slate-900 dark:text-white">
            Awards & Recognition
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            Hackathon finalist placements, department topper accolades, and verified professional bootcamps.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((ach, idx) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.1 }}
              key={ach.title}
              className={`rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 p-7 flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                idx === 0 ? 'md:col-span-2 bg-gradient-to-br from-indigo-50/50 to-violet-50/50 dark:from-indigo-950/20 dark:to-violet-950/20 border-indigo-200/80 dark:border-indigo-900/50' : ''
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-white dark:bg-slate-800 shadow-xs border border-slate-100 dark:border-slate-700">
                    {iconMap[ach.icon] || <Star className="w-6 h-6 text-indigo-500" />}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-xs font-semibold">
                    {ach.year}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">
                    {ach.title}
                  </h3>
                  <p className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400">
                    {ach.organization}
                  </p>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                  {ach.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Credential Verified</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                  ● Active
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
