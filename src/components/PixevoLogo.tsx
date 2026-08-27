import React from 'react';

interface PixevoMarkProps {
  size?: number | string;
  className?: string;
  variant?: 'default' | 'white-badge' | 'subtle-badge' | 'monochrome';
}

/**
 * Official Pixevo Technologies Logo Mark
 * Geometric 3-tile signature (Royal Blue, Bright Cyan, Obsidian Navy)
 */
export const PixevoMark: React.FC<PixevoMarkProps> = ({
  size = 32,
  className = '',
  variant = 'default',
}) => {
  const dimension = typeof size === 'number' ? `${size}px` : size;

  if (variant === 'white-badge') {
    return (
      <div
        className={`inline-flex items-center justify-center bg-white rounded-xl p-1 shadow-md shrink-0 ${className}`}
        style={{ width: dimension, height: dimension }}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Top Left: Royal Blue */}
          <rect x="6" y="6" width="41" height="41" rx="12" fill="#2563EB" />
          {/* Top Right: Bright Cyan */}
          <rect x="53" y="6" width="41" height="41" rx="12" fill="#00C2E8" />
          {/* Bottom Left: Obsidian Navy */}
          <rect x="6" y="53" width="41" height="41" rx="12" fill="#0F172A" />
        </svg>
      </div>
    );
  }

  if (variant === 'subtle-badge') {
    return (
      <div
        className={`inline-flex items-center justify-center bg-slate-900/90 border border-slate-800 rounded-xl p-1.5 shadow-md shadow-black/40 shrink-0 ${className}`}
        style={{ width: dimension, height: dimension }}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Top Left: Royal Blue */}
          <rect x="6" y="6" width="41" height="41" rx="12" fill="#3B82F6" />
          {/* Top Right: Bright Cyan */}
          <rect x="53" y="6" width="41" height="41" rx="12" fill="#06B6D4" />
          {/* Bottom Left: Obsidian Navy with light border for dark backgrounds */}
          <rect
            x="6"
            y="53"
            width="41"
            height="41"
            rx="12"
            fill="#0B1120"
            stroke="#334155"
            strokeWidth="3"
          />
        </svg>
      </div>
    );
  }

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: dimension, height: dimension }}
      className={`shrink-0 ${className}`}
      aria-label="Pixevo Technologies Logo"
    >
      {/* Top Left: Royal Blue */}
      <rect x="6" y="6" width="41" height="41" rx="12" fill="#2563EB" />
      {/* Top Right: Bright Cyan */}
      <rect x="53" y="6" width="41" height="41" rx="12" fill="#00C2E8" />
      {/* Bottom Left: Obsidian Navy with refined contrast */}
      <rect
        x="6"
        y="53"
        width="41"
        height="41"
        rx="12"
        fill="#0F172A"
        stroke="#334155"
        strokeWidth="3.5"
      />
    </svg>
  );
};

interface PixevoLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  withBadge?: boolean;
  withTagline?: boolean;
  className?: string;
  onClick?: () => void;
}

export const PixevoLogo: React.FC<PixevoLogoProps> = ({
  size = 'md',
  withBadge = false,
  withTagline = false,
  className = '',
  onClick,
}) => {
  const markSizes = {
    sm: 26,
    md: 32,
    lg: 40,
    xl: 48,
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
    xl: 'text-2xl',
  };

  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-2.5 group ${onClick ? 'cursor-pointer select-none' : ''} ${className}`}
    >
      <div className="group-hover:scale-105 transition-transform duration-200">
        <PixevoMark
          size={markSizes[size]}
          variant={withBadge ? 'white-badge' : 'default'}
        />
      </div>

      <div className="flex flex-col leading-tight">
        <div className={`flex items-center gap-1.5 font-['Outfit'] ${textSizes[size]} font-bold tracking-tight text-white`}>
          <span className="group-hover:text-blue-400 transition-colors uppercase">
            Pixevo
          </span>
          <span className="font-light text-blue-400 uppercase">
            Technologies
          </span>
        </div>
        {withTagline && (
          <span className="text-[10px] tracking-wider uppercase font-semibold text-slate-400 font-mono">
            Software & Tech Solutions
          </span>
        )}
      </div>
    </div>
  );
};
