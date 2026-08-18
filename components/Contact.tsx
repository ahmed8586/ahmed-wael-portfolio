'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Copy, Check, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function Contact() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-28 bg-[#090d16] border-t border-white/5 overflow-hidden">
      {/* Glow background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blue-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.4em] font-semibold text-blue-400 mb-3"
          >
            Initiate Connection
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif-heading text-4xl sm:text-5xl font-bold text-white tracking-tight"
          >
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details & Copyable Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
              <h3 className="font-serif-heading text-2xl font-bold text-white mb-2">
                Let's Build Together
              </h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Whether you're interested in industrial automation systems, AI software integration, mechatronics project consulting, or hiring an ambitious engineering graduate—my inbox is open.
              </p>

              {/* Email item */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-950/60 border border-white/5 group hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-500/30 text-blue-400 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Email Address</div>
                    <div className="text-xs font-semibold text-white font-mono">{PERSONAL_INFO.email}</div>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-all"
                  title="Copy email"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone item */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-950/60 border border-white/5 group hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-500/30 text-blue-400 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Phone & WhatsApp</div>
                    <div className="text-xs font-semibold text-white font-mono">{PERSONAL_INFO.phone}</div>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-all"
                  title="Copy phone"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location item */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-950/60 border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-500/30 text-blue-400 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Location</div>
                    <div className="text-xs font-semibold text-white">{PERSONAL_INFO.location}</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-xl bg-slate-900 border border-white/10 hover:border-blue-500/40 text-slate-300 hover:text-white text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  LinkedIn
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-xl bg-slate-900 border border-white/10 hover:border-blue-500/40 text-slate-300 hover:text-white text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <Github className="w-4 h-4 text-blue-400" />
                  GitHub
                </a>
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
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10">
              <h3 className="font-serif-heading text-2xl font-bold text-white mb-6">
                Send a Direct Message
              </h3>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-blue-950/40 border border-blue-500/40 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto shadow-xl">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Transmitted!</h4>
                  <p className="text-xs text-slate-300 font-light">
                    Thank you for reaching out, Ahmed Wael will reply to your message shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Eng. Sarah Hassan"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white text-xs font-sans focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white text-xs font-sans focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Automation Project / Job Opportunity / Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white text-xs font-sans focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message or project requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white text-xs font-sans focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-[0_0_30px_rgba(37,99,235,0.5)]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmit Message</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
