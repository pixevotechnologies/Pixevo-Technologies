import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export interface BackToTopProps {
  /**
   * Scroll threshold in pixels before the button appears. Default is 500px.
   */
  threshold?: number;
  /**
   * Optional custom classes for container positioning or styling.
   */
  className?: string;
  /**
   * Show circular scroll progress track around the button. Default is true.
   */
  showProgress?: boolean;
}

export const BackToTop: React.FC<BackToTopProps> = ({
  threshold = 500,
  className = '',
  showProgress = true,
}) => {
  const { t, language } = useLanguage();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const isRtl = language === 'ar';
  const label = t('footer.scrollTop') || (isRtl ? 'العودة للأعلى' : 'Back to top');

  const checkScrollPosition = useCallback(() => {
    if (typeof window === 'undefined') return;

    const scrollY = window.scrollY || document.documentElement.scrollTop;
    setIsVisible(scrollY > threshold);

    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const progressRatio = Math.min(Math.max(scrollY / totalHeight, 0), 1);
      setScrollProgress(progressRatio);
    } else {
      setScrollProgress(0);
    }
  }, [threshold]);

  useEffect(() => {
    checkScrollPosition();
    window.addEventListener('scroll', checkScrollPosition, { passive: true });
    window.addEventListener('resize', checkScrollPosition, { passive: true });

    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
      window.removeEventListener('resize', checkScrollPosition);
    };
  }, [checkScrollPosition]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Circular progress SVG values
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - scrollProgress * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="back-to-top-wrapper"
          initial={{ opacity: 0, scale: 0.6, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 24 }}
          transition={{
            type: 'spring',
            stiffness: 380,
            damping: 24,
            mass: 0.8,
          }}
          className={`fixed bottom-6 left-6 sm:bottom-8 sm:left-8 z-40 select-none ${className}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Animated Tooltip on Hover */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.9 }}
                animate={{ opacity: 1, y: -8, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.9 }}
                transition={{ duration: 0.18 }}
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2.5 py-1 rounded-lg bg-slate-900/95 border border-slate-700/80 text-white text-[11px] font-medium tracking-tight whitespace-nowrap shadow-xl shadow-black/50 backdrop-blur-md pointer-events-none flex items-center gap-1.5"
              >
                <span>{label}</span>
                <span className="text-[10px] font-mono text-blue-400 font-semibold">
                  {Math.round(scrollProgress * 100)}%
                </span>
                {/* Arrow pointing down to button */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-4 border-transparent border-t-slate-800" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating Action Button */}
          <motion.button
            id="back-to-top-button"
            type="button"
            onClick={scrollToTop}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.92 }}
            aria-label={label}
            title={label}
            className="group relative w-12 h-12 rounded-full bg-white/95 dark:bg-slate-900/90 hover:bg-slate-50 dark:hover:bg-slate-850 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white border border-slate-200 dark:border-slate-700/80 hover:border-blue-500/60 shadow-lg shadow-slate-200/50 dark:shadow-black/60 hover:shadow-blue-500/20 backdrop-blur-md flex items-center justify-center transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          >
            {/* Circular Progress Ring */}
            {showProgress && (
              <svg
                className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-[2px]"
                viewBox="0 0 48 48"
              >
                {/* Background track circle */}
                <circle
                  cx="24"
                  cy="24"
                  r={radius}
                  className="stroke-slate-200 dark:stroke-slate-800/80 fill-none"
                  strokeWidth="2.5"
                />
                {/* Active progress stroke */}
                <circle
                  cx="24"
                  cy="24"
                  r={radius}
                  className="stroke-blue-600 dark:stroke-blue-500 transition-all duration-150 ease-out fill-none"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  style={{ strokeDashoffset }}
                />
              </svg>
            )}

            {/* Inner Upward Arrow Icon */}
            <ArrowUp className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
