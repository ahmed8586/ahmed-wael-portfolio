'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, ChevronLeft, ChevronRight, AlertTriangle, Lightbulb, Trophy, ImageIcon } from 'lucide-react';
import { Project } from '@/data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Reset image index whenever project changes
  useEffect(() => {
    setActiveImageIndex(0);
  }, [project]);

  if (!project) return null;

  const galleryImages = project.images && project.images.length > 0
    ? project.images
    : [project.image];

  const currentImage = galleryImages[activeImageIndex] || project.image;

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9990] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#04060a]/85 backdrop-blur-xl"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0d121f] border border-white/10 rounded-3xl shadow-2xl p-6 sm:p-8 text-white my-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:bg-blue-600 transition-all z-20"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Interactive Image Gallery Carousel Frame */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 mb-4 bg-slate-950 group">
            <motion.img
              key={currentImage}
              initial={{ opacity: 0.7 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              src={currentImage}
              alt={`${project.title} screenshot ${activeImageIndex + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d121f] via-transparent to-transparent opacity-70 pointer-events-none" />

            {/* Category & Badge overlay */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
              <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-mono font-semibold uppercase tracking-wider shadow-lg">
                {project.category}
              </span>
              <span className="text-xs font-mono text-slate-300 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                {project.subtitle}
              </span>
            </div>

            {/* Navigation Arrows (if multiple images exist) */}
            {galleryImages.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/70 border border-white/20 text-white hover:bg-blue-600 transition-all backdrop-blur-md"
                  aria-label="Previous Image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/70 border border-white/20 text-white hover:bg-blue-600 transition-all backdrop-blur-md"
                  aria-label="Next Image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>

          {/* Thumbnails Row (if multiple images exist) */}
          {galleryImages.length > 1 && (
            <div className="flex items-center gap-3 mb-8 overflow-x-auto pb-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 flex items-center gap-1.5 mr-2">
                <ImageIcon className="w-3.5 h-3.5 text-blue-400" />
                Gallery ({galleryImages.length}):
              </span>
              {galleryImages.map((img, idx) => (
                <button
                  key={img}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-20 h-14 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                    idx === activeImageIndex
                      ? 'border-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.6)] scale-105'
                      : 'border-white/10 opacity-60 hover:opacity-100 hover:border-white/30'
                  }`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Title & Subtitle */}
          <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-white mb-2">
            {project.title}
          </h2>
          <p className="text-slate-300 text-base font-light mb-6">
            {project.description}
          </p>

          {/* Tech Badges */}
          <div className="mb-8">
            <h4 className="text-xs uppercase tracking-widest font-mono text-slate-400 mb-3">
              Technologies & Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-blue-950/70 border border-blue-500/30 text-blue-300 text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Deep Dive Grid (Challenges, Solution, Results) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Challenge */}
            <div className="glass-panel p-5 rounded-2xl border border-amber-500/20 bg-amber-950/10">
              <div className="flex items-center gap-2.5 text-amber-400 font-bold text-sm mb-3">
                <AlertTriangle className="w-4 h-4" />
                <span>Engineering Challenge</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                {project.challenges}
              </p>
            </div>

            {/* Solution */}
            <div className="glass-panel p-5 rounded-2xl border border-blue-500/20 bg-blue-950/10">
              <div className="flex items-center gap-2.5 text-blue-400 font-bold text-sm mb-3">
                <Lightbulb className="w-4 h-4" />
                <span>Proposed Solution</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                {project.solution}
              </p>
            </div>

            {/* Results */}
            <div className="glass-panel p-5 rounded-2xl border border-emerald-500/20 bg-emerald-950/10">
              <div className="flex items-center gap-2.5 text-emerald-400 font-bold text-sm mb-3">
                <Trophy className="w-4 h-4" />
                <span>Key Results & Grade</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                {project.results}
              </p>
            </div>
          </div>

          {/* Modal Footer CTAs */}
          <div className="flex flex-wrap items-center justify-end gap-4 pt-4 border-t border-white/10">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 hover:border-blue-400 text-slate-200 hover:text-white text-xs font-mono uppercase tracking-wider transition-all"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
