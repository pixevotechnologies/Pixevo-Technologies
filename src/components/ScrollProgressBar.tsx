import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export const ScrollProgressBar: React.FC = () => {
  const { isRtl } = useLanguage();
  const { scrollYProgress } = useScroll();

  // Smooth spring physics for fluid progress bar movement
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001,
  });

  // Check if page has scrollable content
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScrollable = () => {
      const scrollable = document.documentElement.scrollHeight > window.innerHeight + 50;
      setIsVisible(scrollable);
    };

    checkScrollable();
    window.addEventListener('resize', checkScrollable);
    window.addEventListener('scroll', checkScrollable, { passive: true });

    return () => {
      window.removeEventListener('resize', checkScrollable);
      window.removeEventListener('scroll', checkScrollable);
    };
  }, []);

  return (
    <div
      id="scroll-progress-wrapper"
      className={`fixed top-0 left-0 right-0 h-[2.5px] sm:h-[3px] z-[100] pointer-events-none transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      role="progressbar"
      aria-label="Page scroll progress"
    >
      {/* Subtle track background */}
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[1px]" />

      {/* Progress fill bar */}
      <motion.div
        id="scroll-progress-fill"
        className="h-full w-full bg-gradient-to-r rtl:bg-gradient-to-l from-blue-600 via-indigo-500 to-cyan-400 shadow-[0_0_10px_rgba(56,189,248,0.7)]"
        style={{
          scaleX,
          transformOrigin: isRtl ? '100% 50%' : '0% 50%',
        }}
      />
    </div>
  );
};
