import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO, CORE_VALUES, TRUST_PILLARS } from '../data/siteData';
import { PageHeader } from '../components/PageHeader';
import { TestimonialsSection } from '../components/TestimonialsSection';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Users2,
  Zap,
  TrendingUp,
  Cpu,
  Target,
  ArrowRight,
  Code2,
  Layers,
  HeartHandshake,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const getValueIcon = (name: string) => {
    switch (name) {
      case 'Innovation':
        return Sparkles;
      case 'Integrity':
        return ShieldCheck;
      case 'Quality':
        return CheckCircle2;
      case 'Collaboration':
        return Users2;
      case 'Reliability':
        return Zap;
      case 'Continuous Improvement':
        return TrendingUp;
      default:
        return Sparkles;
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      <PageHeader
        category="About Pixevo Technologies"
        title="Engineering Practical Digital Solutions for Modern Businesses"
        description="Pixevo Technologies is a software development and technology company focused on creating practical digital solutions for modern businesses."
        currentPageName="About Us"
        onNavigateHome={() => onNavigate('home')}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Mission & Vision Split */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 sm:p-10 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4 shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider block">
              Our Mission
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-white">
              "{COMPANY_INFO.mission}"
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              We focus on building practical, high-value technology that simplifies complex business operations and enables companies to scale sustainably.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4 shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono text-indigo-400 font-bold uppercase tracking-wider block">
              Our Vision
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-white">
              "{COMPANY_INFO.vision}"
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              We aspire to be the long-term technical foundation for startups and enterprises seeking trusted engineering stewardship and modern software architecture.
            </p>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider">
              Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-['Outfit'] text-white">
              Our Core Values
            </h2>
            <p className="text-slate-400 text-sm">
              These fundamental values guide every software architecture decision, client interaction, and code review at Pixevo Technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_VALUES.map((val) => {
              const Icon = getValueIcon(val.name);
              return (
                <div
                  key={val.name}
                  className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 space-y-3 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold font-['Outfit'] text-white">
                    {val.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Technology Philosophy & Client-Focused Approach */}
        <section className="rounded-2xl bg-slate-900/40 border border-slate-800 p-8 sm:p-12 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider font-mono">
                <Cpu className="w-3.5 h-3.5" />
                <span>Our Technology Philosophy</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-white">
                Pragmatic Architecture Over Hype Cycles
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We believe technology should serve business goals, not the other way around. We select proven, reliable frameworks with strong developer ecosystems (such as TypeScript, React, and Node.js) to ensure that codebases remain clean, maintainable, and cost-effective to operate.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Every software system we engineer is built with type safety, modular boundaries, automated testing, and comprehensive technical documentation.
              </p>
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider font-mono">
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>Client-Focused Partnership</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-white">
                Transparent Collaboration at Every Milestone
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We reject opaque development practices. You receive access to the private Git code repository from day one, regular bi-weekly sprint demonstration calls, and transparent sprint tracking.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Upon project completion, 100% of the intellectual property, design assets, and deployment keys are transferred to your organization with full documentation.
              </p>
            </div>
          </div>
        </section>

        {/* Client Testimonials Section */}
        <TestimonialsSection onNavigate={onNavigate} showNotice={true} />

        {/* Global CTA */}
        <section className="text-center p-8 sm:p-12 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-5">
          <h3 className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-white">
            Ready to Discuss Your Project with Our Team?
          </h3>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Schedule an initial consultation to review your requirements, technical constraints, and project roadmap.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-full shadow-lg shadow-blue-900/20 transition-all cursor-pointer"
          >
            <span>Start a Project Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </section>
      </div>
    </div>
  );
};
