'use client';

import { ArrowUp, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070c] border-t border-white/10 py-16 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="font-serif-heading text-3xl font-bold tracking-widest text-white mb-2">
              AHMED WAEL
            </div>
            <p className="text-xs text-slate-400 font-mono tracking-wider">
              Mechatronics Engineer · Automation Engineer · AI Specialist
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 hover:border-blue-500 text-slate-400 hover:text-white flex items-center justify-center transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 hover:border-blue-500 text-slate-400 hover:text-white flex items-center justify-center transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 hover:border-blue-500 text-slate-400 hover:text-white flex items-center justify-center transition-all"
              aria-label="Email Me"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 hover:border-blue-500 text-slate-400 hover:text-white flex items-center justify-center transition-all"
              aria-label="Call Me"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-white/10 hover:border-blue-400 text-xs font-mono text-slate-300 hover:text-white transition-all group"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 text-blue-400 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Base Divider */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <div>
            © 2026 Ahmed Wael Farouk. All rights reserved. Badr University in Cairo (BUC).
          </div>
          <div>
            Cairo · Suez, Egypt
          </div>
        </div>
      </div>
    </footer>
  );
}
