'use client';

import { motion, useScroll } from 'framer-motion';

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-300 z-[9995] shadow-[0_0_10px_#2563eb] origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
