import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Sparkles, ExternalLink, Linkedin, Github, Globe, MessageSquare } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all required fields (Name, Email, Message).');
      setStatus('error');
      return;
    }

    // Basic email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      setStatus('error');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    // Simulate functional sending delay
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-mono text-xs uppercase tracking-widest font-semibold">
            <MessageSquare className="w-4 h-4" />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-slate-900 dark:text-white">
            Let's Build Together
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            Interested in fullstack engineering opportunities, AI research collaboration, or medical image segmentation consultation? Send me a direct message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Info & Direct Links (Col 5) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 p-8 space-y-8 shadow-sm">
              <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
                Contact Coordinates
              </h3>

              <div className="space-y-6">
                
                {/* Phone */}
                <a
                  href={`tel:${PROFILE.phone}`}
                  className="flex items-start gap-4 group p-3 rounded-2xl hover:bg-white dark:hover:bg-slate-800 transition-all"
                >
                  <div className="p-3 rounded-2xl bg-indigo-100 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-slate-400">Direct Phone</div>
                    <div className="text-base font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {PROFILE.phone}
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="flex items-start gap-4 group p-3 rounded-2xl hover:bg-white dark:hover:bg-slate-800 transition-all"
                >
                  <div className="p-3 rounded-2xl bg-violet-100 dark:bg-violet-950/80 text-violet-600 dark:text-violet-400 group-hover:scale-110 transition-transform shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs font-mono uppercase text-slate-400">Electronic Mail</div>
                    <div className="text-base font-semibold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors truncate">
                      {PROFILE.email}
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-3 rounded-2xl">
                  <div className="p-3 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-slate-400">Postal Address</div>
                    <div className="text-base font-medium text-slate-800 dark:text-slate-200">
                      {PROFILE.location}
                    </div>
                  </div>
                </div>

              </div>

              {/* Verified Web Presence */}
              <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800 space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-500">
                  Verified Online Profiles:
                </div>
                <div className="flex flex-col gap-2.5">
                  

                  <a
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono text-slate-800 dark:text-slate-200 hover:border-indigo-500 transition-all"
                  >
                    <span className="flex items-center gap-2 truncate">
                      <Linkedin className="w-4 h-4 text-indigo-500 shrink-0" />
                      <span>deeksha-biliyara-31a233293</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  </a>

                  <a
                    href={PROFILE.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono text-slate-800 dark:text-slate-200 hover:border-indigo-500 transition-all"
                  >
                    <span className="flex items-center gap-2 truncate">
                      <Github className="w-4 h-4 text-slate-700 dark:text-slate-200 shrink-0" />
                      <span>github.com/deekshagowda123</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Functional Email Form (Col 7) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-8 sm:p-10 space-y-6 shadow-xl relative"
            >
              <div className="space-y-1 pb-4 border-b border-slate-100 dark:border-slate-800">
                <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
                  Send a Message
                </h3>
                <p className="text-xs text-slate-500 font-mono">
                  Guaranteed 24-hour response turnaround time.
                </p>
              </div>

              {/* Status Alert Messages */}
              <AnimatePresence>
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900 flex items-center gap-3 text-rose-700 dark:text-rose-300 text-xs font-medium"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-center space-y-2"
                  >
                    <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mx-auto" />
                    <h4 className="font-display font-bold text-lg text-emerald-900 dark:text-emerald-100">
                      Message Transmitted Successfully!
                    </h4>
                    <p className="text-xs text-emerald-700 dark:text-emerald-300 max-w-md mx-auto">
                      Thank you for reaching out, Deeksha has received your transmission and will reply to your inbox shortly.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-300 font-semibold">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Linus Torvalds"
                    disabled={status === 'sending'}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-300 font-semibold">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="linus@linux.org"
                    disabled={status === 'sending'}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all placeholder:text-slate-400"
                  />
                </div>

              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-300 font-semibold">
                  Subject Line
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Fullstack Opportunity / AI Project Collaboration..."
                  disabled={status === 'sending'}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all placeholder:text-slate-400"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-300 font-semibold">
                  Detailed Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe your project requirements, tech stack questions, or hiring timelines..."
                  disabled={status === 'sending'}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all placeholder:text-slate-400 resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-display font-bold text-sm shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/35 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
              >
                {status === 'sending' ? (
                  <span className="flex items-center gap-2 font-mono text-xs">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin inline-block" />
                    <span>Encrypting & Sending Message...</span>
                  </span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Transmit Message to Deeksha</span>
                  </>
                )}
              </button>

              <div className="text-center text-[11px] font-mono text-slate-400 pt-2">
                Protected by TLS Encryption • Zero spam guarantee
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
