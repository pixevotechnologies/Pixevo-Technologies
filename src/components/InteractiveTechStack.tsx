import React, { useState } from 'react';
import { TECH_STACK_CATEGORIES } from '../data/siteData';
import { Code2, Server, Smartphone, Cloud, Bot, Check, ArrowRight } from 'lucide-react';

export const InteractiveTechStack: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const getCategoryIcon = (name: string) => {
    switch (name) {
      case 'Frontend':
        return Code2;
      case 'Backend & APIs':
        return Server;
      case 'Mobile Development':
        return Smartphone;
      case 'Cloud & Infrastructure':
        return Cloud;
      case 'AI & Automation':
        return Bot;
      default:
        return Code2;
    }
  };

  const currentCategory = TECH_STACK_CATEGORIES[activeTab];

  return (
    <div className="rounded-2xl bg-slate-900/40 border border-slate-800 p-6 sm:p-8 shadow-xl">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 pb-6 border-b border-slate-800">
        {TECH_STACK_CATEGORIES.map((cat, idx) => {
          const Icon = getCategoryIcon(cat.name);
          const isActive = activeTab === idx;
          return (
            <button
              key={cat.name}
              id={`tech-tab-${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                isActive
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20'
                  : 'bg-slate-950 text-slate-300 hover:bg-slate-900 hover:text-white border border-slate-800'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Active Category Description */}
      <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold font-['Outfit'] text-white">
            {currentCategory.name} Technologies
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            {currentCategory.description}
          </p>
        </div>
        <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 w-fit">
          Enterprise Standards & Type Safety
        </span>
      </div>

      {/* Technologies Grid */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {currentCategory.technologies.map((tech) => (
          <div
            key={tech.name}
            className="p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-all group"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-bold text-sm text-white group-hover:text-blue-400 transition-colors font-['Outfit']">
                {tech.name}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                {tech.level}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">{tech.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
