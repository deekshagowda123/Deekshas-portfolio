import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FileText, Download, Printer, Eye, Check, Copy, Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';
import { PROFILE, EDUCATIONS, SKILLS } from '../data/portfolioData';

export const ResumeSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [previewTab, setPreviewTab] = useState<'summary' | 'experience' | 'skills'>('summary');

  const handleDownloadTextResume = () => {
    const resumeContent = `
========================================================================
DEEKSHA BR | Fullstack Developer & AI Engineer
Madikeri, Karnataka, India (571201) | Phone: ${PROFILE.phone}
Email: ${PROFILE.email} 
LinkedIn: ${PROFILE.linkedin} | GitHub: ${PROFILE.github}
========================================================================

SUMMARY
${PROFILE.summary}

EDUCATION
1. ${EDUCATIONS[0].institution}
   Degree: ${EDUCATIONS[0].degree} (${EDUCATIONS[0].period})
   Score: ${EDUCATIONS[0].score}
2. ${EDUCATIONS[1].institution}
   Degree: ${EDUCATIONS[1].degree} (${EDUCATIONS[1].period})
   Score: ${EDUCATIONS[1].score}

TECHNICAL SKILLS
- Programming: Python, JavaScript, Java, C, HTML5/CSS3
- Frameworks: React.js, Node.js, Express, FastAPI, Flask, Tailwind CSS, Scikit-Learn
- Databases/Cloud: MongoDB, SQL, REST APIs, IoT ESP32

MAJOR PROJECTS
1. AI-Enabled Smart Ambulance System Using IoT (March 2026 – Present)
   Stack: React, FastAPI, YOLOv8, ESP32, OpenCV, IoT, GPS
2. AI-Based Skin Lesion Detection System (Dec 2025)
   Stack: Python, CNN, U-Net, ACO, Flask
3. Personalized Medicine Recommendation System (Jan 2025)
   Stack: Python, Scikit-Learn, NLP, Flask
========================================================================
`;
    const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Deeksha_BR_Resume_2026.txt');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyEmailOrSummary = () => {
    navigator.clipboard.writeText(PROFILE.summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="resume" className="py-24 bg-slate-100/60 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 dark:border-slate-800 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-mono text-xs uppercase tracking-widest font-semibold">
              <FileText className="w-4 h-4" />
              <span>Downloadable Resume</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-slate-900 dark:text-white">
              Curriculum Vitae
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-base">
              Inspect my academic qualifications, core technical proficiencies, and project history. Download a clean structured copy for ATS evaluation.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={handleCopyEmailOrSummary}
              className="px-4 py-3 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center gap-2 shadow-xs"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Summary Copied!' : 'Copy Bio Summary'}</span>
            </button>

            <button
              onClick={handleDownloadTextResume}
              className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-lg shadow-indigo-600/25 transition-all duration-200 flex items-center gap-2"
            >
              <Download className="w-4 h-4 animate-bounce" />
              <span>Download Resume (.txt)</span>
            </button>
          </div>
        </div>

        {/* Interactive Resume Viewport */}
        <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl overflow-hidden">
          
          {/* Viewport Top Bar */}
          <div className="bg-slate-50 dark:bg-slate-950 px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPreviewTab('summary')}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                  previewTab === 'summary' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                1. Executive Summary
              </button>
              <button
                onClick={() => setPreviewTab('experience')}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                  previewTab === 'experience' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                2. Academic & Experience
              </button>
              <button
                onClick={() => setPreviewTab('skills')}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                  previewTab === 'skills' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                3. Technical Matrix
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>ATS Parsable Format</span>
            </div>
          </div>

          {/* Viewport Body */}
          <div className="p-8 sm:p-12 max-w-4xl mx-auto font-sans text-slate-800 dark:text-slate-200 space-y-8 min-h-[320px]">
            {previewTab === 'summary' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div className="border-b border-slate-200 dark:border-slate-800 pb-6 text-center sm:text-left">
                  <h3 className="text-3xl font-display font-extrabold text-slate-900 dark:text-white uppercase tracking-tight">
                    {PROFILE.name}
                  </h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-display font-semibold text-lg mt-1">
                    {PROFILE.tagline}
                  </p>
                  <p className="text-xs font-mono text-slate-500 mt-2">
                    {PROFILE.location} • {PROFILE.phone} • {PROFILE.email}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3">Professional Summary</h4>
                  <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
                    {PROFILE.summary}
                  </p>
                </div>
              </motion.div>
            )}

            {previewTab === 'experience' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4">Education & Key Qualifications</h4>
                <div className="space-y-6">
                  {EDUCATIONS.map(ed => (
                    <div key={ed.institution} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800">
                      <div className="flex justify-between items-start flex-wrap gap-2">
                        <div>
                          <h5 className="font-bold text-lg text-slate-900 dark:text-white">{ed.degree}</h5>
                          <p className="text-indigo-600 dark:text-indigo-400 font-medium text-sm">{ed.institution}</p>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-mono font-bold">
                          {ed.score}
                        </span>
                      </div>
                      {ed.highlights && (
                        <ul className="mt-3 list-disc list-inside text-xs sm:text-sm text-slate-600 dark:text-slate-400 space-y-1">
                          {ed.highlights.map((h, i) => <li key={i}>{h}</li>)}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {previewTab === 'skills' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4">Classified Technical Stack</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {SKILLS.map(sk => (
                    <div key={sk.category} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800 space-y-2">
                      <h5 className="font-bold text-sm text-slate-900 dark:text-white">{sk.category}</h5>
                      <div className="flex flex-wrap gap-1.5">
                        {sk.skills.map(item => (
                          <span key={item.name} className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono">
                            {item.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Viewport Footer */}
          <div className="bg-slate-50 dark:bg-slate-950 px-8 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
            <span>Live Document Status: Synced</span>
            <button onClick={handleDownloadTextResume} className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
              Download Full Resume File (.txt) &rarr;
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
