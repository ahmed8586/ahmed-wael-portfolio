'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Brain, Cpu, Code, Wrench, Award, Check } from 'lucide-react';
import { TECHNICAL_SKILLS } from '@/data/portfolioData';

const categoryIcons: Record<string, any> = {
  "Automation Engineering": Bot,
  "AI & Machine Learning": Brain,
  "Embedded Systems & Robotics": Cpu,
  "Software & Web Development": Code,
  "Engineering Tools & Hardware": Wrench,
  "Soft Skills & Leadership": Award,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(TECHNICAL_SKILLS[0].title);

  const selectedCategoryData = TECHNICAL_SKILLS.find(
    (cat) => cat.title === activeCategory
  ) || TECHNICAL_SKILLS[0];

  return (
    <section id="skills" className="relative py-28 bg-[#090d16] border-t border-white/5 overflow-hidden">
      {/* Subtle glow orb */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.4em] font-semibold text-blue-400 mb-3"
          >
            Technical Competencies & Tools
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif-heading text-4xl sm:text-5xl font-bold text-white tracking-tight"
          >
            Engineering <span className="gradient-text">Skills Matrix</span>
          </motion.h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4" />
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {TECHNICAL_SKILLS.map((cat) => {
            const Icon = categoryIcons[cat.title] || Bot;
            const isActive = activeCategory === cat.title;

            return (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(cat.title)}
                className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-[0_0_25px_rgba(37,99,235,0.6)] border border-blue-400'
                    : 'glass-panel text-slate-300 hover:text-white hover:border-white/20'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-blue-400'}`} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Skill Meters Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            {selectedCategoryData.skills.map((skill, idx) => (
              <div
                key={skill.name}
                className="glass-card p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:animate-ping" />
                    <span className="font-semibold text-white text-base group-hover:text-blue-300 transition-colors">
                      {skill.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {skill.tag && (
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-950/70 border border-blue-500/30 text-[10px] font-mono text-blue-400">
                        {skill.tag}
                      </span>
                    )}
                    <span className="text-xs font-mono font-bold text-blue-400">
                      {skill.level}%
                    </span>
                  </div>
                </div>

                {/* Meter Bar */}
                <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden p-0.5 border border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: idx * 0.05 }}
                    className="h-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-400 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.6)]"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Quick Badges Cloud */}
        <div className="mt-16 text-center">
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-6">
            Technologies & Frameworks Breakdown
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
            {[
              "Siemens S7-300/400", "Classic Control", "VFD Motors", "SCADA", "Profibus", "Modbus RTU",
              "ESP32", "Arduino", "STM32", "IoT Sensors", "SolidWorks", "ANSYS HFSS", "MATLAB",
              "Python", "TensorFlow", "Keras", "PyTorch", "Pandas", "NumPy", "Scikit-Learn", "Power BI",
              "Next.js", "React", "Tailwind CSS", "TypeScript", "SQL", "Git", "Linux", "Docker"
            ].map((badge) => (
              <span
                key={badge}
                className="px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-white/10 text-xs font-mono text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-950/40 transition-all cursor-default"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
