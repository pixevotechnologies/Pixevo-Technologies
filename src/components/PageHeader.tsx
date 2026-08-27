import React from 'react';
import { PageId } from '../types';
import { ChevronRight, Sparkles } from 'lucide-react';

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
    <div className="relative py-12 sm:py-16 lg:py-18 bg-slate-950 border-b border-slate-800/80 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-4 font-mono">
          <button
            onClick={onNavigateHome}
            className="hover:text-blue-400 transition-colors cursor-pointer"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-slate-200">{currentPageName}</span>
        </div>

        {/* Category Pill */}
        {category && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
            <span>{category}</span>
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Outfit'] text-white tracking-tight max-w-3xl leading-tight">
          {title}
        </h1>

        {/* Description */}
        <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
