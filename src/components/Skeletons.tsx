import React from 'react';

interface SkeletonProps {
  className?: string;
  shimmer?: boolean;
}

/**
 * Basic pulsing placeholder with optional shimmering light sweep
 */
export const Skeleton: React.FC<SkeletonProps> = ({ className = '', shimmer = true }) => {
  return (
    <div
      className={`bg-slate-800/60 rounded ${shimmer ? 'animate-shimmer' : 'animate-pulse'} ${className}`}
      aria-hidden="true"
    />
  );
};

/**
 * Skeleton placeholder for a single Portfolio Project card
 */
export const PortfolioCardSkeleton: React.FC = () => {
  return (
    <div
      className="h-full rounded-2xl bg-slate-900/40 border border-slate-800 p-6 space-y-5 flex flex-col justify-between animate-shimmer"
      aria-hidden="true"
    >
      <div className="space-y-4">
        {/* Category & Badge pills */}
        <div className="flex items-center justify-between">
          <div className="h-5 w-24 rounded-full bg-blue-500/10 border border-blue-500/20 animate-pulse" />
          <div className="h-4 w-16 rounded-full bg-indigo-500/10 border border-indigo-500/20 animate-pulse" />
        </div>

        {/* Project Title & Short Description */}
        <div className="space-y-2.5">
          <div className="h-6 w-3/4 rounded-md bg-slate-800 animate-pulse" />
          <div className="space-y-1.5 pt-1">
            <div className="h-3.5 w-full rounded bg-slate-800/60 animate-pulse" />
            <div className="h-3.5 w-5/6 rounded bg-slate-800/60 animate-pulse" />
          </div>
        </div>

        {/* Key Metrics row */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/80">
          <div className="p-2 rounded-lg bg-slate-950 border border-slate-800/80 space-y-1.5">
            <div className="h-2.5 w-14 rounded bg-slate-800/60 animate-pulse" />
            <div className="h-4 w-16 rounded bg-slate-800 animate-pulse" />
          </div>
          <div className="p-2 rounded-lg bg-slate-950 border border-slate-800/80 space-y-1.5">
            <div className="h-2.5 w-14 rounded bg-slate-800/60 animate-pulse" />
            <div className="h-4 w-16 rounded bg-slate-800 animate-pulse" />
          </div>
        </div>

        {/* Technology tags */}
        <div className="flex flex-wrap gap-1 pt-1">
          <div className="h-4 w-12 rounded bg-slate-950 border border-slate-800 animate-pulse" />
          <div className="h-4 w-16 rounded bg-slate-950 border border-slate-800 animate-pulse" />
          <div className="h-4 w-14 rounded bg-slate-950 border border-slate-800 animate-pulse" />
          <div className="h-4 w-10 rounded bg-slate-950 border border-slate-800 animate-pulse" />
        </div>
      </div>

      {/* Action Button */}
      <div className="pt-4 border-t border-slate-800/80">
        <div className="h-9 w-full rounded-full bg-slate-950 border border-slate-800 animate-pulse" />
      </div>
    </div>
  );
};

/**
 * Grid layout of Portfolio Project card skeletons
 */
export const PortfolioSkeleton: React.FC<{ count?: number }> = ({ count = 6 }) => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      role="status"
      aria-label="Loading portfolio projects..."
    >
      {Array.from({ length: count }).map((_, idx) => (
        <PortfolioCardSkeleton key={idx} />
      ))}
      <span className="sr-only">Loading portfolio projects...</span>
    </div>
  );
};

/**
 * Skeleton placeholder for a single Blog article card
 */
export const BlogCardSkeleton: React.FC = () => {
  return (
    <div
      className="h-full rounded-2xl bg-slate-900/40 border border-slate-800 p-7 space-y-5 flex flex-col justify-between animate-shimmer"
      aria-hidden="true"
    >
      <div className="space-y-4">
        {/* Category & Read Time / Date */}
        <div className="flex items-center justify-between">
          <div className="h-5 w-24 rounded-full bg-blue-500/10 border border-blue-500/20 animate-pulse" />
          <div className="flex items-center gap-2">
            <div className="h-3.5 w-16 rounded bg-slate-800/60 animate-pulse" />
            <div className="h-3.5 w-20 rounded bg-slate-800/60 animate-pulse" />
          </div>
        </div>

        {/* Title & Excerpt */}
        <div className="space-y-2.5">
          <div className="h-7 w-4/5 rounded-md bg-slate-800 animate-pulse" />
          <div className="h-7 w-3/5 rounded-md bg-slate-800 animate-pulse" />
          <div className="space-y-1.5 pt-2">
            <div className="h-3.5 w-full rounded bg-slate-800/60 animate-pulse" />
            <div className="h-3.5 w-11/12 rounded bg-slate-800/60 animate-pulse" />
            <div className="h-3.5 w-4/5 rounded bg-slate-800/60 animate-pulse" />
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          <div className="h-4 w-16 rounded bg-slate-950 border border-slate-800 animate-pulse" />
          <div className="h-4 w-20 rounded bg-slate-950 border border-slate-800 animate-pulse" />
          <div className="h-4 w-14 rounded bg-slate-950 border border-slate-800 animate-pulse" />
        </div>
      </div>

      {/* Author & Read Action */}
      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/30 animate-pulse" />
          <div className="h-3.5 w-24 rounded bg-slate-800/60 animate-pulse" />
        </div>
        <div className="h-3.5 w-20 rounded bg-slate-800/60 animate-pulse" />
      </div>
    </div>
  );
};

/**
 * Grid layout of Blog article card skeletons
 */
export const BlogSkeleton: React.FC<{ count?: number }> = ({ count = 4 }) => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
      role="status"
      aria-label="Loading engineering articles..."
    >
      {Array.from({ length: count }).map((_, idx) => (
        <BlogCardSkeleton key={idx} />
      ))}
      <span className="sr-only">Loading engineering articles...</span>
    </div>
  );
};

/**
 * Skeleton placeholder for a single Career Job position card
 */
export const CareersJobSkeleton: React.FC = () => {
  return (
    <div
      className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-6 animate-shimmer"
      aria-hidden="true"
    >
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div className="space-y-2.5">
          <div className="flex flex-wrap items-center gap-2">
            <div className="h-5 w-28 rounded-full bg-blue-500/10 border border-blue-500/20 animate-pulse" />
            <div className="h-5 w-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 animate-pulse" />
            <div className="h-4 w-24 rounded bg-slate-800/50 animate-pulse" />
          </div>
          <div className="h-7 w-64 sm:w-80 rounded-md bg-slate-800 animate-pulse" />
        </div>
        <div className="h-9 w-36 rounded-full bg-blue-600/30 border border-blue-500/20 animate-pulse shrink-0" />
      </div>

      {/* Description */}
      <div className="space-y-1.5">
        <div className="h-3.5 w-full rounded bg-slate-800/60 animate-pulse" />
        <div className="h-3.5 w-5/6 rounded bg-slate-800/60 animate-pulse" />
      </div>

      {/* 2-col Responsibilities & Requirements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2.5">
          <div className="h-3 w-28 rounded bg-slate-800/80 animate-pulse" />
          <div className="space-y-1.5">
            <div className="h-3 w-4/5 rounded bg-slate-800/60 animate-pulse" />
            <div className="h-3 w-11/12 rounded bg-slate-800/60 animate-pulse" />
            <div className="h-3 w-3/4 rounded bg-slate-800/60 animate-pulse" />
          </div>
        </div>

        <div className="space-y-2.5">
          <div className="h-3 w-28 rounded bg-slate-800/80 animate-pulse" />
          <div className="space-y-1.5">
            <div className="h-3 w-5/6 rounded bg-slate-800/60 animate-pulse" />
            <div className="h-3 w-4/5 rounded bg-slate-800/60 animate-pulse" />
            <div className="h-3 w-3/4 rounded bg-slate-800/60 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Benefits pills */}
      <div className="pt-3 border-t border-slate-800 flex flex-wrap gap-2 items-center">
        <div className="h-3 w-12 rounded bg-slate-800/60 animate-pulse" />
        <div className="h-5 w-24 rounded bg-slate-950 border border-slate-800 animate-pulse" />
        <div className="h-5 w-20 rounded bg-slate-950 border border-slate-800 animate-pulse" />
        <div className="h-5 w-28 rounded bg-slate-950 border border-slate-800 animate-pulse" />
      </div>
    </div>
  );
};

/**
 * List layout of Career Job position card skeletons
 */
export const CareersSkeleton: React.FC<{ count?: number }> = ({ count = 3 }) => {
  return (
    <div
      className="space-y-6"
      role="status"
      aria-label="Loading career openings..."
    >
      {Array.from({ length: count }).map((_, idx) => (
        <CareersJobSkeleton key={idx} />
      ))}
      <span className="sr-only">Loading career openings...</span>
    </div>
  );
};
