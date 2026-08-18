'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { WORK_EXPERIENCE, LEADERSHIP_EXPERIENCE } from '@/data/portfolioData';

export default function Experience() {
  const [activeTab, setActiveTab] = useState<'Work' | 'Leadership'>('Work');

  const activeData = activeTab === 'Work' ? WORK_EXPERIENCE : LEADERSHIP_EXPERIENCE;

  return (
    <section id="experience" className="relative py-28 bg-[#090d16] border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.4em] font-semibold text-blue-400 mb-3"
          >
            Track Record & Leadership
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif-heading text-4xl sm:text-5xl font-bold text-white tracking-tight"
          >
            Engineering <span className="gradient-text">Experience</span>
          </motion.h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4" />
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center justify-center mb-16">
          <div className="inline-flex p-1.5 rounded-full bg-slate-900/90 border border-white/10 glass-panel">
            <button
              onClick={() => setActiveTab('Work')}
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'Work'
                  ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.6)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Industrial & Internships</span>
            </button>

            <button
              onClick={() => setActiveTab('Leadership')}
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'Leadership'
                  ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.6)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Leadership & IEEE/GDSC</span>
            </button>
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-blue-500 via-indigo-500 to-transparent opacity-30" />

          <div className="space-y-12">
            {activeData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Badge */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0d121f] border-2 border-blue-500 text-blue-400 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.8)] z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
                  </div>

                  {/* Timeline Card */}
                  <div className="ml-12 sm:ml-0 sm:w-[calc(50%-2rem)] glass-card p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-blue-500/40 group">
                    {/* Period & Location */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3 font-mono text-xs text-blue-400">
                      <span className="inline-flex items-center gap-1.5 bg-blue-950/60 px-3 py-1 rounded-full border border-blue-500/30">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-slate-400">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </span>
                    </div>

                    {/* Role & Organization */}
                    <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                      {item.role}
                    </h3>
                    <div className="text-sm font-medium text-slate-300 mb-4">
                      {item.organization}
                    </div>

                    {/* Interactive Image Gallery if present */}
                    {(item.images?.length || item.image) && (
                      <div className="mb-6 rounded-2xl overflow-hidden border border-white/10 bg-slate-950 p-2 space-y-2">
                        <div className="aspect-[16/9] w-full rounded-xl overflow-hidden relative group/img">
                          <img
                            src={item.images?.[0] || item.image}
                            alt={item.organization}
                            className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute bottom-2 left-2 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 text-[10px] font-mono text-blue-400">
                            Training Gallery ({item.images?.length || 1})
                          </div>
                        </div>
                        {item.images && item.images.length > 1 && (
                          <div className="flex items-center gap-2 overflow-x-auto pt-1">
                            {item.images.map((img, imgIdx) => (
                              <div
                                key={imgIdx}
                                className="w-14 h-10 rounded-lg overflow-hidden border border-white/10 flex-shrink-0 cursor-pointer opacity-80 hover:opacity-100 hover:border-blue-500 transition-all"
                              >
                                <img src={img} alt="training photo" className="w-full h-full object-cover" />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Bullet Points */}
                    <ul className="space-y-2.5 mb-6 text-xs text-slate-300 font-light leading-relaxed">
                      {item.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-md bg-slate-900 border border-white/5 text-[10px] font-mono text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
