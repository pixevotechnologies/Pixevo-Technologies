import React from 'react';
import { PageId } from '../types';
import { SOLUTIONS_DATA } from '../data/siteData';
import { PageHeader } from '../components/PageHeader';
import {
  KanbanSquare,
  UserCheck,
  GitMerge,
  ShoppingCart,
  FolderKanban,
  ShieldCheck,
  Sparkles,
  BarChart3,
  Network,
  Cpu,
  CheckCircle2,
  ArrowRight,
  Layers,
} from 'lucide-react';

interface SolutionsPageProps {
  onNavigate: (page: PageId) => void;
  onInquireSolution: (solutionTitle: string) => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({
  onNavigate,
  onInquireSolution,
}) => {
  const getSolutionIcon = (iconName: string) => {
    switch (iconName) {
      case 'KanbanSquare':
        return KanbanSquare;
      case 'UserCheck':
        return UserCheck;
      case 'GitMerge':
        return GitMerge;
      case 'ShoppingCart':
        return ShoppingCart;
      case 'FolderKanban':
        return FolderKanban;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Sparkles':
        return Sparkles;
      case 'BarChart3':
        return BarChart3;
      case 'Network':
        return Network;
      default:
        return Cpu;
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      <PageHeader
        category="Tailored Business Solutions"
        title="Software Systems Built Around Your Operational Workflows"
        description="Replace fragmented spreadsheets, off-the-shelf constraints, and disconnected tools with custom software solutions engineered specifically for your business."
        currentPageName="Solutions"
        onNavigateHome={() => onNavigate('home')}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOLUTIONS_DATA.map((sol) => {
            const Icon = getSolutionIcon(sol.iconName);
            return (
              <div
                key={sol.id}
                id={`solution-${sol.id}`}
                className="rounded-2xl bg-slate-900/40 border border-slate-800 p-6 sm:p-7 space-y-5 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-indigo-300 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20">
                      {sol.category}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold font-['Outfit'] text-white">
                      {sol.title}
                    </h2>
                    <p className="text-slate-400 text-xs sm:text-sm mt-1.5 leading-relaxed">
                      {sol.fullDesc}
                    </p>
                  </div>

                  {/* Business Impact */}
                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block">
                      Business Impact
                    </span>
                    <ul className="space-y-1.5">
                      {sol.businessImpact.map((impact, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{impact}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Modules */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-800">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block">
                      Key Modules Included
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {sol.keyModules.map((mod) => (
                        <span
                          key={mod}
                          className="px-2 py-0.5 text-[11px] font-mono bg-slate-950 text-slate-300 rounded border border-slate-800"
                        >
                          {mod}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 space-y-3">
                  <div className="text-[11px] text-slate-400">
                    <span className="font-semibold text-slate-300">Ideal For: </span>
                    {sol.idealFor}
                  </div>
                  <button
                    onClick={() => onInquireSolution(sol.title)}
                    className="w-full py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-blue-600 border border-slate-800 hover:border-blue-500 rounded-full transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <span>Inquire About This Solution</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
