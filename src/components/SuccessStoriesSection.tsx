import React, { useState, useMemo } from 'react';
import { PageId, SuccessStoryItem } from '../types';
import { SUCCESS_STORIES_DATA, COMPANY_INFO } from '../data/siteData';
import {
  Sparkles,
  TrendingUp,
  Clock,
  ArrowRight,
  CheckCircle2,
  Quote,
  Layers,
  ShoppingBag,
  Truck,
  Activity,
  BarChart3,
  ShieldCheck,
  Zap,
  Award,
  MessageCircle,
} from 'lucide-react';

interface SuccessStoriesSectionProps {
  onNavigate: (page: PageId) => void;
  onOpenEstimator?: () => void;
  onInquireProject?: (serviceName: string) => void;
}

export const SuccessStoriesSection: React.FC<SuccessStoriesSectionProps> = ({
  onNavigate,
  onOpenEstimator,
  onInquireProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeStoryId, setActiveStoryId] = useState<string>(SUCCESS_STORIES_DATA[0].id);

  const categories = [
    'All',
    'E-Commerce',
    'Logistics & Fleet',
    'Healthcare',
    'FinTech & AI',
  ];

  const filteredStories = useMemo(() => {
    if (selectedCategory === 'All') return SUCCESS_STORIES_DATA;
    return SUCCESS_STORIES_DATA.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const getIndustryIcon = (industry: string) => {
    if (industry.toLowerCase().includes('commerce') || industry.toLowerCase().includes('retail')) {
      return ShoppingBag;
    }
    if (industry.toLowerCase().includes('logistics') || industry.toLowerCase().includes('supply')) {
      return Truck;
    }
    if (industry.toLowerCase().includes('health')) {
      return Activity;
    }
    if (industry.toLowerCase().includes('fintech') || industry.toLowerCase().includes('financial')) {
      return BarChart3;
    }
    return Layers;
  };

  const aggregateStats = [
    {
      value: '+240%',
      label: 'Peak Conversion Surge',
      subtext: 'E-commerce platform optimization',
      icon: TrendingUp,
    },
    {
      value: '0.74s',
      label: 'Sub-Second Page LCP',
      subtext: 'Next.js edge cloud architecture',
      icon: Zap,
    },
    {
      value: '99.98%',
      label: 'SLA Reliability',
      subtext: 'Zero unplanned deployment downtime',
      icon: ShieldCheck,
    },
    {
      value: '100%',
      label: 'Milestone Delivery',
      subtext: 'Sprint-based guaranteed scopes',
      icon: Award,
    },
  ];

  const handleConsultSimilar = (story: SuccessStoryItem) => {
    if (onInquireProject) {
      onInquireProject(story.title);
    } else {
      onNavigate('contact');
    }
  };

  return (
    <section id="success-stories-section" className="space-y-12">
      {/* 1. Header with Eyebrow */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider font-mono">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Proven Client Outcomes</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Outfit'] text-white tracking-tight">
          Engineering Transformations & Success Stories
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Explore measurable performance gains, streamlined operations, and production-tested systems engineered for growing enterprises.
        </p>
      </div>

      {/* 2. Aggregate Impact Metric Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {aggregateStats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 space-y-1.5 transition-all"
            >
              <div className="flex items-center justify-between pb-1">
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400">
                  {stat.value}
                </span>
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                  <Icon className="w-3.5 h-3.5" />
                </div>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-white font-['Outfit']">
                {stat.label}
              </p>
              <p className="text-[11px] text-slate-400 leading-normal">
                {stat.subtext}
              </p>
            </div>
          );
        })}
      </div>

      {/* 3. Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          const count =
            cat === 'All'
              ? SUCCESS_STORIES_DATA.length
              : SUCCESS_STORIES_DATA.filter((s) => s.category === cat).length;

          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                isSelected
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/30 scale-105'
                  : 'bg-slate-900/50 text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              <span>{cat}</span>
              <span
                className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                  isSelected ? 'bg-blue-700 text-blue-100' : 'bg-slate-800 text-slate-400'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* 4. Success Stories Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredStories.map((story) => {
          const IndustryIcon = getIndustryIcon(story.industry);

          return (
            <div
              key={story.id}
              id={story.id}
              className="rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/70 p-6 sm:p-7 flex flex-col justify-between space-y-6 transition-all duration-200 group relative overflow-hidden"
            >
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500/0 via-emerald-500/40 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-5">
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2.5 pb-2 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                      <IndustryIcon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-200 block">
                        {story.client}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        {story.industry}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                      <Clock className="w-3 h-3" />
                      <span>{story.timeline}</span>
                    </span>
                    {story.badge && (
                      <span className="text-[10px] font-mono text-blue-300 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                        {story.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold font-['Outfit'] text-white group-hover:text-blue-300 transition-colors leading-snug">
                  {story.title}
                </h3>

                {/* Quantitative Impact Metric Tiles */}
                <div className="grid grid-cols-3 gap-2.5 bg-slate-950/70 p-3.5 rounded-xl border border-slate-800/80">
                  {story.keyMetrics.map((metric, i) => (
                    <div key={i} className="text-center space-y-0.5">
                      <div className="text-base sm:text-lg font-mono font-bold text-emerald-400">
                        {metric.value}
                      </div>
                      <div className="text-[11px] font-semibold text-slate-200 truncate">
                        {metric.label}
                      </div>
                      <div className="text-[9px] text-slate-400 truncate hidden sm:block">
                        {metric.description}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Challenge & Solution Architecture Cards */}
                <div className="space-y-2.5 text-xs">
                  <div className="p-3 rounded-xl bg-slate-950/40 border border-slate-800/60 space-y-1">
                    <div className="flex items-center gap-1.5 text-amber-400 font-semibold font-mono text-[11px] uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>The Operational Challenge</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed pl-3">
                      {story.problem}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-blue-950/20 border border-blue-900/30 space-y-1">
                    <div className="flex items-center gap-1.5 text-blue-400 font-semibold font-mono text-[11px] uppercase tracking-wider">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                      <span>Pixevo Engineering Solution</span>
                    </div>
                    <p className="text-slate-200 leading-relaxed pl-5">
                      {story.solution}
                    </p>
                  </div>
                </div>

                {/* Tech Stack Tags */}
                <div className="pt-1">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1.5">
                    Production Stack Implemented:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {story.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-950 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Client Quote & Verified Proof */}
                {story.quote && (
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-start gap-3">
                    <Quote className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div className="space-y-1 text-xs">
                      <p className="text-slate-300 italic leading-relaxed">
                        "{story.quote.text}"
                      </p>
                      <div className="text-[11px] text-slate-400 font-mono">
                        <strong className="text-white not-italic">{story.quote.author}</strong> —{' '}
                        <span>{story.quote.role}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Footer */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href={`https://wa.me/923145138009?text=${encodeURIComponent(
                    `Hello Pixevo! I saw your success story on "${story.title}" and would like to discuss a similar project.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 py-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Discuss Similar Use Case</span>
                </a>

                <button
                  onClick={() => handleConsultSimilar(story)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/30 text-xs font-semibold transition-all cursor-pointer"
                >
                  <span>Inquire About This Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* 5. Bottom Conversion Callout */}
      <div className="rounded-2xl bg-gradient-to-r from-blue-900/30 via-slate-900/60 to-emerald-900/20 border border-blue-500/20 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1.5 text-center md:text-left max-w-xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Guaranteed Sprint Timelines & 100% IP Ownership</span>
          </div>
          <h4 className="text-xl sm:text-2xl font-bold font-['Outfit'] text-white">
            Ready to Build Your Next Success Story?
          </h4>
          <p className="text-xs sm:text-sm text-slate-400">
            Tell us about your digital product requirements or use our interactive estimator to calculate a realistic scope and timeline.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          {onOpenEstimator && (
            <button
              onClick={onOpenEstimator}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white border border-slate-700 transition-all cursor-pointer"
            >
              <span>Instant Scope Estimator</span>
            </button>
          )}

          <button
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white shadow-lg shadow-blue-900/20 transition-all cursor-pointer"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
