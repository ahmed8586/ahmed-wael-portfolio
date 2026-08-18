'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Outer Glowing Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-blue-400/40 pointer-events-none z-[9999] hidden lg:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovered ? 1.6 : 1,
          borderColor: isHovered ? '#60a5fa' : 'rgba(59, 130, 246, 0.4)',
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 28, mass: 0.2 }}
      />

      {/* Inner Blue Glowing Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_12px_#2563eb] pointer-events-none z-[9999] hidden lg:block"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovered ? 2.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 800, damping: 35 }}
      />
    </>
  );
}
