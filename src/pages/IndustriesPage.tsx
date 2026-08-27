import React from 'react';
import { PageId } from '../types';
import { INDUSTRIES_DATA } from '../data/siteData';
import { PageHeader } from '../components/PageHeader';
import {
  Hammer,
  Building2,
  Store,
  ShoppingBag,
  GraduationCap,
  Activity,
  Landmark,
  Truck,
  Briefcase,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
} from 'lucide-react';

interface IndustriesPageProps {
  onNavigate: (page: PageId) => void;
  onInquireIndustry: (industryName: string) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({
  onNavigate,
  onInquireIndustry,
}) => {
  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Hammer':
        return Hammer;
      case 'Building2':
        return Building2;
      case 'Store':
        return Store;
      case 'ShoppingBag':
        return ShoppingBag;
      case 'GraduationCap':
        return GraduationCap;
      case 'Activity':
        return Activity;
      case 'Landmark':
        return Landmark;
      case 'Truck':
        return Truck;
      case 'Briefcase':
        return Briefcase;
      case 'Rocket':
        return Rocket;
      default:
        return Layers;
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      <PageHeader
        category="Industry Specializations"
        title="Custom Software Solutions Engineered for Specific Industries"
        description="We tailor digital platforms, internal tools, and mobile applications to solve domain-specific operational challenges across key commercial sectors."
        currentPageName="Industries"
        onNavigateHome={() => onNavigate('home')}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INDUSTRIES_DATA.map((ind) => {
            const Icon = getIndustryIcon(ind.iconName);
            return (
              <div
                key={ind.id}
                id={`industry-${ind.id}`}
                className="rounded-2xl bg-slate-900/40 border border-slate-800 p-7 sm:p-8 space-y-6 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold font-['Outfit'] text-white">
                        {ind.name}
                      </h2>
                      <span className="text-xs font-mono text-slate-400">
                        Tailored Software & Workflows
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {ind.summary}
                  </p>

                  {/* Industry Challenges */}
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400 block">
                      Common Sector Challenges
                    </span>
                    <ul className="space-y-1">
                      {ind.challenges.map((ch, i) => (
                        <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                          <span className="text-rose-400 mt-0.5">•</span>
                          <span>{ch}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solutions Provided */}
                  <div className="space-y-2 pt-1">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 block">
                      Software Solutions We Engineer
                    </span>
                    <ul className="space-y-1.5">
                      {ind.solutionsProvided.map((sol, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div className="text-[11px] text-slate-400">
                    <span className="font-semibold text-slate-300">Impact: </span>
                    {ind.keyBenefits.join(' • ')}
                  </div>
                  <button
                    onClick={() => onInquireIndustry(ind.name)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-full transition-all whitespace-nowrap cursor-pointer shadow-md shadow-blue-900/20"
                  >
                    <span>Discuss Build</span>
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
