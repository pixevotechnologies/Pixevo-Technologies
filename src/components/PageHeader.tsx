import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

interface PageHeaderProps {
  category?: string;
  title: string;
  description: string;
  currentPageName: string;
  onNavigateHome: () => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  category,
  title,
  description,
  currentPageName,
  onNavigateHome,
}) => {
  return (
    <div className="relative py-12 sm:py-16 lg:py-18 bg-slate-50/80 dark:bg-slate-950 border-b border-slate-200/60 dark:border-slate-800/80 overflow-hidden transition-colors">
      {/* Background ambient lighting */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.1 }}
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-4 font-mono"
        >
          <button
            onClick={onNavigateHome}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600" />
          <span className="text-slate-800 dark:text-slate-200 font-medium">{currentPageName}</span>
        </motion.div>

        {/* Category Pill */}
        {category && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-500/10 dark:border-blue-500/20 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-500 rounded-full animate-pulse"></span>
            <span>{category}</span>
          </motion.div>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Outfit'] text-slate-900 dark:text-white tracking-tight max-w-3xl leading-tight"
        >
          {title}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed"
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
};
