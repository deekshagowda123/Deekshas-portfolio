import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, Github, ExternalLink, Sparkles, Layers, X, Calendar, Tag, Activity, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsSectionProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  searchQuery,
  setSearchQuery
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'AI / ML', 'IoT', 'Fullstack', 'Healthcare'];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((proj) => {
      const matchesCategory = selectedCategory === 'All' || proj.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !query ||
        proj.title.toLowerCase().includes(query) ||
        proj.shortDescription.toLowerCase().includes(query) ||
        proj.tags.some(tag => tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="projects" className="py-24 bg-slate-100/60 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 dark:border-slate-800 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-mono text-xs uppercase tracking-widest font-semibold">
              <Layers className="w-4 h-4" />
              <span>Engineering Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-slate-900 dark:text-white">
              Featured Projects & Systems
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-base">
              A curated showcase of fullstack architectures, AI medical vision models, and low-latency IoT emergency platforms developed with production standards.
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-80 relative shrink-0">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, stack (e.g. YOLO, React)..."
              className="w-full pl-10 pr-9 py-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400 mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20 scale-105 font-semibold'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((proj) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={proj.id}
                  className="group flex flex-col justify-between rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
                >
                  {/* Image Header */}
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
                    
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-slate-900/80 dark:bg-slate-950/80 backdrop-blur-md text-white text-[11px] font-mono font-medium border border-white/10 shadow-xs">
                        {proj.category}
                      </span>
                    </div>

                    {/* Period badge */}
                    <div className="absolute bottom-3 left-4 text-white text-xs font-mono flex items-center gap-1.5 opacity-90">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{proj.period}</span>
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                        {proj.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                        {proj.shortDescription}
                      </p>

                      {/* Quick Metrics */}
                      {proj.metrics && (
                        <div className="grid grid-cols-2 gap-2 pt-2">
                          {proj.metrics.slice(0, 2).map((m, idx) => (
                            <div key={idx} className="rounded-xl bg-slate-50 dark:bg-slate-950 p-2 border border-slate-100 dark:border-slate-800/80">
                              <div className="text-[10px] font-mono text-slate-400 uppercase">{m.label}</div>
                              <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 truncate">{m.value}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Tags & Action CTA */}
                    <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                      <div className="flex flex-wrap gap-1.5">
                        {proj.tags.slice(0, 4).map((t) => (
                          <span key={t} className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-mono">
                            {t}
                          </span>
                        ))}
                        {proj.tags.length > 4 && (
                          <span className="px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-[11px] font-mono font-semibold">
                            +{proj.tags.length - 4}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <button
                          onClick={() => setSelectedProject(proj)}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors group/btn"
                        >
                          <span>System Blueprint & Details</span>
                          <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </button>

                        <div className="flex items-center gap-2">
                          {proj.githubUrl && (
                            <a
                              href={proj.githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              aria-label="Source code"
                              className="p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                            >
                              <Github className="w-4 h-4" />
                            </a>
                          )}
                          {proj.liveUrl && (
                            <a
                              href={proj.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              aria-label="Live Demo"
                              className="p-2 text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-16 text-center rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 space-y-4">
                <Search className="w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto" />
                <h3 className="text-lg font-display font-semibold text-slate-900 dark:text-white">
                  No projects match your filter "{selectedCategory}" {searchQuery ? `and query "${searchQuery}"` : ''}
                </h3>
                <p className="text-sm text-slate-500 max-w-md mx-auto">
                  Try clearing your search query or selecting "All" to browse all 5 featured engineering projects.
                </p>
                <button
                  onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                  className="px-5 py-2 rounded-full bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Modal Header Banner */}
              <div className="relative h-64 sm:h-80 w-full shrink-0">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 transition-colors border border-white/10 z-10"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-6 left-6 right-6 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-indigo-600 text-white text-xs font-mono font-semibold">
                      {selectedProject.category}
                    </span>
                    <span className="text-slate-300 text-xs font-mono flex items-center gap-1 bg-slate-900/80 px-3 py-1 rounded-full backdrop-blur-xs">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      {selectedProject.period}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-display font-bold text-white">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              {/* Modal Body Scrollable */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-grow">
                
                {/* Metrics Highlight */}
                {selectedProject.metrics && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {selectedProject.metrics.map((metric, i) => (
                      <div key={i} className="rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50 p-4 text-center">
                        <div className="text-xl sm:text-2xl font-display font-bold text-indigo-600 dark:text-indigo-400">{metric.value}</div>
                        <div className="text-[11px] font-mono text-slate-600 dark:text-slate-400 uppercase mt-1">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Architecture & Implementation Highlights */}
                <div className="space-y-4">
                  <h4 className="text-base font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Activity className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    <span>Key Engineering Deliverables & Architecture</span>
                  </h4>
                  <ul className="space-y-3">
                    {selectedProject.fullDescription.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                        <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Tags */}
                <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Technologies & Frameworks Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-mono font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="p-6 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between shrink-0">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                >
                  Close Blueprint
                </button>

                <div className="flex items-center gap-3">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs font-semibold hover:bg-indigo-600 dark:hover:bg-indigo-400 transition-colors flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      <span>View GitHub Source</span>
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold transition-colors flex items-center gap-2 shadow-md shadow-indigo-600/20"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Launch Live Demo</span>
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
