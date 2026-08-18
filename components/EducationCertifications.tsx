'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award, CheckCircle2, ShieldCheck, Clock, FileCheck } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS } from '@/data/portfolioData';

export default function EducationCertifications() {
  return (
    <section className="relative py-28 bg-[#07090e] border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.4em] font-semibold text-blue-400 mb-3"
          >
            Academic Degree & Training Verification
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif-heading text-4xl sm:text-5xl font-bold text-white tracking-tight"
          >
            Education & <span className="gradient-text">Certifications</span>
          </motion.h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4" />
        </div>

        {/* Education Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-8 sm:p-10 rounded-3xl border border-blue-500/30 mb-20 relative overflow-hidden bg-gradient-to-br from-[#0e1320] via-[#090d16] to-[#0d121f]"
        >
          <div className="absolute top-0 right-0 p-8 text-blue-500/10 pointer-events-none">
            <GraduationCap className="w-48 h-48" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/40 text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider">
                <GraduationCap className="w-4 h-4" />
                <span>Bachelor of Science Degree</span>
              </div>

              <h3 className="font-serif-heading text-3xl sm:text-4xl font-bold text-white">
                {EDUCATION.degree}
              </h3>

              <div className="text-lg font-medium text-slate-300">
                {EDUCATION.institution} — {EDUCATION.faculty}
              </div>

              <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-300 pt-2">
                <div className="bg-slate-900/80 px-4 py-2 rounded-xl border border-white/10">
                  Graduation: <span className="text-blue-400 font-bold">{EDUCATION.graduationDate}</span>
                </div>
                <div className="bg-slate-900/80 px-4 py-2 rounded-xl border border-white/10">
                  Overall Grade: <span className="text-blue-400 font-bold">{EDUCATION.overallGrade}</span>
                </div>
                <div className="bg-blue-950/60 px-4 py-2 rounded-xl border border-blue-500/40 text-blue-300">
                  Graduation Project: <span className="text-emerald-400 font-bold">{EDUCATION.projectGrade}</span>
                </div>
              </div>
            </div>

            {/* Coursework Grid */}
            <div className="lg:col-span-5 bg-slate-950/60 p-6 rounded-2xl border border-white/10">
              <h4 className="text-xs uppercase tracking-widest font-mono text-blue-400 font-bold mb-4 flex items-center gap-2">
                <FileCheck className="w-4 h-4" />
                Relevant Specialized Coursework
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 font-light">
                {EDUCATION.coursework.map((course) => (
                  <div key={course} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <div>
          <div className="text-center mb-12">
            <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-white flex items-center justify-center gap-2">
              <ShieldCheck className="w-7 h-7 text-blue-400" />
              <span>Verified Engineering Certificates</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="glass-card p-6 rounded-2xl border border-white/10 hover:border-blue-500/40 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-[10px] font-mono text-blue-400 font-bold uppercase">
                      {cert.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {cert.hoursOrDuration}
                    </span>
                  </div>

                  <h4 className="font-serif-heading text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {cert.title}
                  </h4>

                  <div className="text-xs font-medium text-slate-300 mb-3">
                    {cert.issuer}
                  </div>

                  <p className="text-xs text-slate-400 font-light leading-relaxed mb-4">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Issued: {cert.date}</span>
                  {cert.grade && (
                    <span className="text-emerald-400 font-semibold">{cert.grade}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
