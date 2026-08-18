'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Mail, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function TopBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Story', href: '#sequence' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-[#07090e]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand */}
          <a
            href="#"
            className="flex items-center gap-3 text-white tracking-[0.25em] font-serif-heading text-xl font-bold hover:text-blue-400 transition-colors group"
          >
            <span className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center text-xs font-mono group-hover:bg-blue-600 group-hover:text-white transition-all">
              {PERSONAL_INFO.initials}
            </span>
            <span className="hidden sm:inline">AHMED WAEL</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] font-medium text-slate-300 hover:text-blue-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={PERSONAL_INFO.cvPath}
              download="CV_Ahmed_Wael_Farouk.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider text-slate-200 border border-white/20 hover:border-blue-400 hover:text-blue-400 hover:bg-blue-950/30 transition-all shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.7)]"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="fixed inset-x-0 top-[60px] z-40 bg-[#090d16]/95 backdrop-blur-2xl border-b border-white/10 p-6 md:hidden shadow-2xl"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium uppercase tracking-widest text-slate-300 hover:text-blue-400 py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-2">
              <a
                href={PERSONAL_INFO.cvPath}
                download="CV_Ahmed_Wael_Farouk.pdf"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider"
              >
                <FileText className="w-4 h-4" />
                Download CV
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 text-white text-xs font-semibold uppercase tracking-wider shadow-lg shadow-blue-600/30"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
