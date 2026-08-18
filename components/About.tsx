'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Users, BookOpen, Cpu, Handshake, CheckCircle2, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO, CORE_VALUES, ANIMATED_STATS } from '@/data/portfolioData';

const iconMap: Record<string, any> = {
  Lightbulb,
  Users,
  BookOpen,
  Cpu,
  Handshake,
};

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-[#07090e] border-t border-white/5 overflow-hidden">
      {/* Glow ambient background */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.4em] font-semibold text-blue-400 mb-3"
          >
            Engineering Profile & Core Values
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif-heading text-4xl sm:text-5xl font-bold text-white tracking-tight"
          >
            About <span className="gradient-text">Ahmed Wael</span>
          </motion.h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4" />
        </div>

        {/* Narrative & Photo Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          {/* Photo & Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 glass-panel shadow-[0_0_50px_rgba(37,99,235,0.2)] p-2">
                <img
                  src={PERSONAL_INFO.avatar}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover rounded-xl filter brightness-105 contrast-105"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 glass-panel border border-blue-500/30 p-5 rounded-2xl shadow-2xl flex items-center gap-4 bg-[#0a0e1a]/90 backdrop-blur-xl">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">Education</div>
                  <div className="text-sm font-bold text-white">BUC Mechatronics 2026</div>
                  <div className="text-xs text-blue-400 font-semibold">Graduation Project: A+</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Narrative Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6 text-slate-300 font-light text-base sm:text-lg leading-relaxed"
          >
            <h3 className="font-serif-heading text-2xl sm:text-3xl font-semibold text-white">
              Bridging Software, Electronics & Industrial Robotics
            </h3>

            <p>
              I am <strong className="text-white font-semibold">Ahmed Wael Farouk</strong>, a recent Mechatronics Engineering Technology graduate from <span className="text-blue-400 font-medium">Badr University in Cairo (BUC)</span>.
            </p>

            <p>
              I am deeply passionate about <strong className="text-slate-200 font-normal">Automation Engineering, Electrical Power Distribution, Artificial Intelligence, Machine Learning, and Deep Learning</strong>. My drive comes from transforming complex engineering ideas into intelligent real-world solutions by integrating software, electronic controllers, embedded systems, and industrial machinery.
            </p>

            <p>
              Beyond technical engineering, I bring extensive leadership experience through my roles as <strong className="text-blue-400 font-medium">IEEE BUC Secretary</strong> and former <strong className="text-blue-400 font-medium">Google Developer Student Club (GDSC) Lead</strong>. In these positions, I led student communities of 100+ members, organized multi-speaker technical conferences, and managed engineering teams.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 font-mono text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Siemens S7-300/400 PLC Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Deep Learning (CNN-LSTM, Autoencoder)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Suez Steel Industrial Maintenance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>MCIT FabLab Digital Fabrication</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Animated Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-24">
          {ANIMATED_STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-5 rounded-2xl text-center border border-white/5 hover:border-blue-500/30"
            >
              <div className="font-serif-heading text-2xl sm:text-3xl font-bold text-blue-400 font-mono mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-white mb-1">{stat.label}</div>
              <div className="text-[10px] text-slate-400 font-light">{stat.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Core Values Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-white">
              Core Engineering Values
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {CORE_VALUES.map((val, idx) => {
              const Icon = iconMap[val.icon] || Lightbulb;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="glass-card p-6 rounded-2xl flex flex-col items-center text-center group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-950/60 border border-blue-500/30 text-blue-400 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-white text-base mb-2 group-hover:text-blue-400 transition-colors">
                    {val.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {val.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
