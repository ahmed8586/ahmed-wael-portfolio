'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Cpu, Sparkles, Award, FileText, Mail } from 'lucide-react';
import { PERSONAL_INFO, ANIMATED_STATS } from '@/data/portfolioData';

export default function HeroScrollSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const [currentChapter, setCurrentChapter] = useState(0);
  const [scrollPct, setScrollPct] = useState(0);

  // Update current chapter and scroll percentage
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setScrollPct(Math.round(latest * 100));
      if (latest < 0.15) setCurrentChapter(0);
      else if (latest < 0.35) setCurrentChapter(1);
      else if (latest < 0.55) setCurrentChapter(2);
      else if (latest < 0.75) setCurrentChapter(3);
      else if (latest < 0.90) setCurrentChapter(4);
      else setCurrentChapter(5);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Dynamic 3D particle mesh canvas animation reacting to scroll progress
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes definition
    const particleCount = 70;
    const particles: { x: number; y: number; z: number; vx: number; vy: number; radius: number }[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 1.5,
        y: (Math.random() - 0.5) * height * 1.5,
        z: Math.random() * 800,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
      });
    }

    let angle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const scrollVal = scrollYProgress.get();
      angle += 0.003 + scrollVal * 0.01;

      // Draw background blue radial gradient
      const gradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        50,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.8
      );
      gradient.addColorStop(0, `rgba(37, 99, 235, ${0.12 + scrollVal * 0.15})`);
      gradient.addColorStop(0.5, `rgba(15, 23, 42, ${0.4 + scrollVal * 0.2})`);
      gradient.addColorStop(1, '#07090e');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Draw 3D rotating grid / nodes
      const cx = width / 2;
      const cy = height / 2;

      ctx.save();
      ctx.translate(cx, cy);

      const projectedParticles: { px: number; py: number; scale: number; opacity: number }[] = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around bounds
        if (Math.abs(p.x) > width) p.x = (Math.random() - 0.5) * width;
        if (Math.abs(p.y) > height) p.y = (Math.random() - 0.5) * height;

        // 3D rotation based on scroll
        const cosA = Math.cos(angle + scrollVal * Math.PI * 2);
        const sinA = Math.sin(angle + scrollVal * Math.PI * 2);

        const rx = p.x * cosA - p.z * sinA;
        const rz = p.x * sinA + p.z * cosA + 400;

        const fov = 400;
        const denominator = fov + rz;
        if (denominator <= 10) continue; // Skip particles behind camera

        const scale = fov / denominator;
        const px = rx * scale;
        const py = p.y * scale;

        const opacity = Math.min(1, Math.max(0.1, (scale - 0.2) * 1.5));
        const safeRadius = Math.max(0.1, p.radius * Math.abs(scale) * 1.5);

        projectedParticles.push({ px, py, scale, opacity });

        // Draw particle node
        ctx.beginPath();
        ctx.arc(px, py, safeRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96, 165, 250, ${opacity * 0.8})`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = '#2563eb';
        ctx.fill();
      }

      // Draw connecting lines between nearby particles
      ctx.lineWidth = 0.5;
      for (let i = 0; i < projectedParticles.length; i++) {
        for (let j = i + 1; j < projectedParticles.length; j++) {
          const p1 = projectedParticles[i];
          const p2 = projectedParticles[j];
          const dist = Math.hypot(p1.px - p2.px, p1.py - p2.py);

          if (dist < 140) {
            const lineOpacity = (1 - dist / 140) * 0.25 * p1.opacity;
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.strokeStyle = `rgba(37, 99, 235, ${lineOpacity})`;
            ctx.stroke();
          }
        }
      }

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [scrollYProgress]);

  // Framer Motion scroll opacity transforms for chapters
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1, 0.18], [1, 0.9, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.18], [0, -60]);

  const ch1Opacity = useTransform(scrollYProgress, [0.15, 0.22, 0.3, 0.36], [0, 1, 1, 0]);
  const ch1Y = useTransform(scrollYProgress, [0.15, 0.22, 0.36], [50, 0, -50]);

  const ch2Opacity = useTransform(scrollYProgress, [0.35, 0.42, 0.5, 0.56], [0, 1, 1, 0]);
  const ch2Y = useTransform(scrollYProgress, [0.35, 0.42, 0.56], [50, 0, -50]);

  const ch3Opacity = useTransform(scrollYProgress, [0.55, 0.62, 0.7, 0.76], [0, 1, 1, 0]);
  const ch3Y = useTransform(scrollYProgress, [0.55, 0.62, 0.76], [50, 0, -50]);

  const ch4Opacity = useTransform(scrollYProgress, [0.75, 0.82, 0.88, 0.94], [0, 1, 1, 0]);
  const ch4Y = useTransform(scrollYProgress, [0.75, 0.82, 0.94], [50, 0, -50]);

  const ch5Opacity = useTransform(scrollYProgress, [0.90, 0.95, 1], [0, 1, 1]);
  const ch5Y = useTransform(scrollYProgress, [0.90, 1], [50, 0]);

  return (
    <section id="sequence" ref={containerRef} className="relative h-[650vh] bg-[#07090e]">
      {/* Sticky Fullscreen Canvas Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

        {/* Cinematic Vignette & Grain Layers */}
        <div className="layer vignette-layer absolute inset-0 pointer-events-none z-10" />
        <div className="layer grain-layer absolute inset-0 pointer-events-none z-10" />

        {/* Floating Text Panels (Scroll Sequence Chapters) */}
        <div className="relative z-20 h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center pointer-events-none">
          
          {/* HERO CHAPTER (00) */}
          <motion.div
            style={{ opacity: heroOpacity, y: heroY }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-auto"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono tracking-widest uppercase mb-6 backdrop-blur-md shadow-lg shadow-blue-950/50">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>Est. 2026 · Mechatronics & AI Engineer</span>
            </div>

            {/* Profile Avatar Frame */}
            <div className="relative mb-6 group">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-blue-500/50 shadow-[0_0_50px_rgba(37,99,235,0.4)] p-1 bg-gradient-to-tr from-blue-600 to-slate-900 transition-all duration-500 group-hover:scale-105">
                <img
                  src={PERSONAL_INFO.avatar}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover rounded-full filter brightness-105 contrast-105"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-full shadow-lg border border-slate-900">
                <Cpu className="w-4 h-4" />
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-heading text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white max-w-4xl leading-[1.08] mb-4 drop-shadow-2xl">
              Building Intelligent <br className="hidden sm:inline" />
              <span className="gradient-text">Automation Solutions</span>
            </h1>

            {/* Subheadline */}
            <p className="text-slate-300 text-base sm:text-xl max-w-2xl font-light leading-relaxed mb-8">
              {PERSONAL_INFO.subheadline}
            </p>

            {/* Buttons CTA */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              <a
                href={PERSONAL_INFO.cvPath}
                download="CV_Ahmed_Wael_Farouk.pdf"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold uppercase tracking-wider transition-all shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:shadow-[0_0_45px_rgba(37,99,235,0.8)] hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4" />
                <span>Download CV</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 hover:border-blue-400 bg-slate-900/60 hover:bg-blue-950/40 text-slate-200 hover:text-blue-300 text-sm font-semibold uppercase tracking-wider backdrop-blur-md transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-slate-400 animate-bounce">
              <span>Scroll to reveal story</span>
              <ArrowDown className="w-4 h-4 text-blue-400" />
            </div>
          </motion.div>

          {/* CHAPTER 01: FOUNDATION */}
          <motion.div
            style={{ opacity: ch1Opacity, y: ch1Y }}
            className="absolute inset-0 flex flex-col justify-center max-w-2xl mx-auto px-6 text-left pointer-events-auto"
          >
            <div className="font-serif-heading text-6xl sm:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500/50 to-transparent mb-2 font-mono">
              01
            </div>
            <div className="text-xs uppercase tracking-[0.4em] font-semibold text-blue-400 mb-3">
              The Silhouette & Vision
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Mechatronics & <br />
              <span className="gradient-text">Industrial Automation</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed mb-6">
              Engineering solutions at the intersection of electrical control, mechanical design, and software intelligence. Hand-crafted PLC control sequences for Siemens S7-300/400, high-voltage substation switchgear, and multi-stage rolling mill motor drives.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-blue-300">
              <span className="px-3 py-1 rounded-md bg-blue-950/60 border border-blue-500/30">Siemens S7-400</span>
              <span className="px-3 py-1 rounded-md bg-blue-950/60 border border-blue-500/30">VFD Motor Drives</span>
              <span className="px-3 py-1 rounded-md bg-blue-950/60 border border-blue-500/30">SCADA & Sensors</span>
            </div>
          </motion.div>

          {/* CHAPTER 02: INTELLIGENCE */}
          <motion.div
            style={{ opacity: ch2Opacity, y: ch2Y }}
            className="absolute inset-0 flex flex-col justify-center max-w-2xl ml-auto px-6 text-right pointer-events-auto"
          >
            <div className="font-serif-heading text-6xl sm:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-blue-500/50 to-transparent mb-2 font-mono">
              02
            </div>
            <div className="text-xs uppercase tracking-[0.4em] font-semibold text-blue-400 mb-3">
              The Artificial Intelligence
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              AI & Deep Learning <br />
              <span className="gradient-text">Inference Pipelines</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed mb-6">
              Transforming raw telemetry into predictive analytics. Architected dual-model CNN-LSTM spatial-temporal networks and Autoencoders achieving 92% accuracy in agricultural soil classification and real-time environmental anomaly detection.
            </p>
            <div className="flex flex-wrap justify-end gap-2 text-xs font-mono text-blue-300">
              <span className="px-3 py-1 rounded-md bg-blue-950/60 border border-blue-500/30">TensorFlow / Keras</span>
              <span className="px-3 py-1 rounded-md bg-blue-950/60 border border-blue-500/30">CNN-LSTM</span>
              <span className="px-3 py-1 rounded-md bg-blue-950/60 border border-blue-500/30">Random Forest</span>
            </div>
          </motion.div>

          {/* CHAPTER 03: ROBOTICS */}
          <motion.div
            style={{ opacity: ch3Opacity, y: ch3Y }}
            className="absolute inset-0 flex flex-col justify-center max-w-2xl mr-auto px-6 text-left pointer-events-auto"
          >
            <div className="font-serif-heading text-6xl sm:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500/50 to-transparent mb-2 font-mono">
              03
            </div>
            <div className="text-xs uppercase tracking-[0.4em] font-semibold text-blue-400 mb-3">
              The Hardware & Robotics
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              RAVEN-X Rover & <br />
              <span className="gradient-text">Aquatic Water Cleaners</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed mb-6">
              Graduation Project (Grade: A+). Designed and manufactured autonomous vehicles equipped with 9-variable sensor arrays, solar PV power management, SolidWorks CAD modeling, and ANSYS HFSS subsurface radar antenna simulation.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-blue-300">
              <span className="px-3 py-1 rounded-md bg-blue-950/60 border border-blue-500/30">SolidWorks CAD</span>
              <span className="px-3 py-1 rounded-md bg-blue-950/60 border border-blue-500/30">ANSYS HFSS</span>
              <span className="px-3 py-1 rounded-md bg-blue-950/60 border border-blue-500/30">ESP32 & IoT</span>
            </div>
          </motion.div>

          {/* CHAPTER 04: LEADERSHIP */}
          <motion.div
            style={{ opacity: ch4Opacity, y: ch4Y }}
            className="absolute inset-0 flex flex-col justify-center max-w-2xl ml-auto px-6 text-right pointer-events-auto"
          >
            <div className="font-serif-heading text-6xl sm:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-blue-500/50 to-transparent mb-2 font-mono">
              04
            </div>
            <div className="text-xs uppercase tracking-[0.4em] font-semibold text-blue-400 mb-3">
              The Leadership & Impact
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              IEEE EXcom Secretary & <br />
              <span className="gradient-text">Google DSC Lead</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed mb-6">
              Empowering student tech communities. Led 100+ members through 10+ technical workshops, coordinated university-wide hackathons, and managed executive board operations across IEEE and Google Developer Student Clubs.
            </p>
            <div className="flex flex-wrap justify-end gap-2 text-xs font-mono text-blue-300">
              <span className="px-3 py-1 rounded-md bg-blue-950/60 border border-blue-500/30">IEEE Secretary</span>
              <span className="px-3 py-1 rounded-md bg-blue-950/60 border border-blue-500/30">GDSC Lead</span>
              <span className="px-3 py-1 rounded-md bg-blue-950/60 border border-blue-500/30">Event Logistics</span>
            </div>
          </motion.div>

          {/* CHAPTER 05: FABRICATION & OUTRO */}
          <motion.div
            style={{ opacity: ch5Opacity, y: ch5Y }}
            className="absolute inset-0 flex flex-col justify-center items-center text-center max-w-3xl mx-auto px-6 pointer-events-auto"
          >
            <div className="font-serif-heading text-6xl sm:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-600 mb-2 font-mono">
              05
            </div>
            <div className="text-xs uppercase tracking-[0.4em] font-semibold text-blue-400 mb-3">
              Industry 4.0 & Digital Fabrication
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Innovate <br />
              <span className="gradient-text">Real-World Engineering</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed mb-8">
              Trained in MCIT FabLab digital fabrication (CNC routers, FDM 3D printers, laser cutters) and certified by Suez Steel Company & HA Consulting Group with overall grade: Excellent.
            </p>
            <a
              href="#projects"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-semibold uppercase tracking-widest shadow-[0_0_40px_rgba(37,99,235,0.6)] transition-all hover:scale-105"
            >
              <Sparkles className="w-4 h-4" />
              <span>Explore Featured Projects</span>
            </a>
          </motion.div>

        </div>

        {/* Dynamic HUD Indicator (Reference style from polo-oooo.vercel.app) */}
        <div className="absolute bottom-6 left-6 right-6 z-30 flex items-center justify-between pointer-events-none text-xs font-mono">
          <div className="hidden sm:flex items-center gap-3 text-slate-400 tracking-widest">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
            <span>AHMED WAEL · MECHATRONICS & AI</span>
          </div>

          <div className="flex items-center gap-4 ml-auto bg-slate-950/80 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full text-slate-300">
            <span className="text-blue-400 font-bold">
              0{currentChapter} <span className="text-slate-500 font-normal">/ 05</span>
            </span>
            <div className="w-24 h-1 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-indigo-400 rounded-full transition-all duration-150"
                style={{ width: `${scrollPct}%` }}
              />
            </div>
            <span className="text-[10px] text-slate-400">{scrollPct}%</span>
          </div>
        </div>
      </div>
    </section>
  );
}
