import React from 'react';
import { PageId, ProjectItem } from '../types';
import {
  PORTFOLIO_DATA,
  BLOG_POSTS,
} from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';
import { HeroVisual } from '../components/HeroVisual';
import { InteractiveProcess } from '../components/InteractiveProcess';
import { InteractiveTechStack } from '../components/InteractiveTechStack';
import { InteractiveTransformation } from '../components/InteractiveTransformation';
import { LiveArchitectureDashboard } from '../components/LiveArchitectureDashboard';
import { InteractiveServiceShowcase } from '../components/InteractiveServiceShowcase';
import { ModernEcommerceCaseStudy } from '../components/ModernEcommerceCaseStudy';
import { SuccessStoriesSection } from '../components/SuccessStoriesSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ContactFormSection } from '../components/ContactFormSection';
import { ScrollReveal } from '../components/ScrollReveal';
import {
  ArrowRight,
  Sparkles,
  Code2,
  Globe,
  Smartphone,
  Bot,
  Layout,
  Cloud,
  Briefcase,
  Monitor,
  RefreshCw,
  Headphones,
  CheckCircle2,
  KanbanSquare,
  UserCheck,
  GitMerge,
  ShoppingCart,
  FolderKanban,
  ShieldCheck,
  BarChart3,
  Network,
  Hammer,
  Building2,
  Store,
  ShoppingBag,
  GraduationCap,
  Activity,
  Landmark,
  Truck,
  Rocket,
  ChevronRight,
  Eye,
  Calendar,
  Clock,
  Layers,
  Cpu,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenEstimator: () => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenEstimator,
  onSelectProject,
}) => {
  const { t, data } = useLanguage();

  // Service icon resolver
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return Code2;
      case 'Globe':
        return Globe;
      case 'Smartphone':
        return Smartphone;
      case 'Bot':
        return Bot;
      case 'Layout':
        return Layout;
      case 'Cloud':
        return Cloud;
      case 'Briefcase':
        return Briefcase;
      case 'Monitor':
        return Monitor;
      case 'RefreshCw':
        return RefreshCw;
      case 'Headphones':
        return Headphones;
      default:
        return Code2;
    }
  };

  // Industry icon resolver
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

  // Solution icon resolver
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
    <div className="space-y-24 sm:space-y-32 pb-16 relative">
      {/* 1. HERO SECTION */}
      <section
        id="hero-section"
        className="relative pt-10 sm:pt-16 lg:pt-20 overflow-hidden"
      >
        {/* Ambient atmospheric lighting from Professional Polish theme */}
        <div className="absolute top-10 -right-20 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Content */}
            <ScrollReveal direction="up" duration={800} className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-semibold uppercase tracking-wider w-fit">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
                <span>{t('hero.badge')}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-['Outfit'] text-white tracking-tight leading-[1.1]">
                {t('hero.title.pre')}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  {t('hero.title.highlight')}
                </span>
              </h1>

              <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl">
                {t('hero.description')}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <button
                  id="hero-primary-cta"
                  onClick={() => onNavigate('services')}
                  className="px-6 py-3 bg-white hover:bg-slate-100 text-slate-950 rounded-lg font-bold text-sm transition-all shadow-md cursor-pointer"
                >
                  {t('hero.cta.services')}
                </button>

                <button
                  id="hero-secondary-cta"
                  onClick={() => onNavigate('portfolio')}
                  className="px-6 py-3 bg-slate-800/90 hover:bg-slate-800 text-white border border-slate-700 rounded-lg font-bold text-sm transition-all cursor-pointer"
                >
                  {t('hero.cta.portfolio')}
                </button>
              </div>

              {/* Quick Technical Standards Badges */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-3 text-xs font-mono text-slate-400">
                <div className="space-y-0.5">
                  <span className="text-white font-bold block text-sm font-['Outfit']">{t('hero.badge.fullstack')}</span>
                  <span className="text-slate-400">{t('hero.badge.fullstack.desc')}</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-white font-bold block text-sm font-['Outfit']">{t('hero.badge.enterprise')}</span>
                  <span className="text-slate-400">{t('hero.badge.enterprise.desc')}</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-white font-bold block text-sm font-['Outfit']">{t('hero.badge.agile')}</span>
                  <span className="text-slate-400">{t('hero.badge.agile.desc')}</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Interactive Tech Architecture Visual */}
            <ScrollReveal direction="left" delay={200} duration={900} className="lg:col-span-6">
              <HeroVisual />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. TRUST / VALUE SECTION */}
      <section id="trust-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {data.trustPillars.map((pillar, idx) => (
            <ScrollReveal
              key={pillar.title}
              direction="up"
              delay={idx * 100}
              className="h-full"
            >
              <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl flex flex-col gap-3 group transition-all hover:bg-slate-800/60 hover:border-slate-700 h-full">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 group-hover:bg-blue-500/30 transition-colors">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h2 className="text-base font-bold font-['Outfit'] text-white group-hover:text-blue-300 transition-colors">
                  {pillar.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 3. CORE SERVICES SECTION */}
      <section id="services-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <ScrollReveal direction="up" className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-semibold uppercase tracking-wider font-mono">
              <Code2 className="w-3.5 h-3.5" />
              <span>{t('services.badge')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-white tracking-tight">
              {t('services.title')}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {t('services.desc')}
            </p>
          </div>

          <button
            id="view-all-services-btn"
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-blue-400 hover:text-white bg-blue-500/10 hover:bg-blue-600/30 border border-blue-500/30 rounded-full transition-all w-fit cursor-pointer"
          >
            <span>{t('services.cta.all')}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </ScrollReveal>

        {/* Primary 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.services.slice(0, 6).map((service, idx) => {
            const Icon = getServiceIcon(service.iconName);
            return (
              <ScrollReveal
                key={service.id}
                direction="up"
                delay={idx * 80}
                className="h-full"
              >
                <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between group transition-all hover:bg-slate-800/60 hover:border-slate-700 hover:-translate-y-1 duration-200 h-full">
                  <div className="space-y-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold font-['Outfit'] text-white group-hover:text-blue-300 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">
                        {service.shortDesc}
                      </p>
                    </div>

                    <ul className="space-y-2 pt-2 border-t border-slate-800/80">
                      {service.features.slice(0, 3).map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs text-slate-300"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {service.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => onNavigate('services')}
                      className="text-xs font-semibold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 group-hover:translate-x-1 transition-all cursor-pointer"
                    >
                      <span>{t('common.details')}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* 3B. INTERACTIVE SERVICE CAPABILITIES SHOWCASE & UI MOCKUPS */}
      <ScrollReveal direction="up" delay={100}>
        <InteractiveServiceShowcase
          onNavigate={onNavigate}
          onOpenEstimator={onOpenEstimator}
        />
      </ScrollReveal>

      {/* 4. WHY PIXEVO SECTION */}
      <section id="why-pixevo-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-slate-900/40 border border-slate-800 p-8 sm:p-12 lg:p-14 space-y-12">
          <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t('why.badge')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-white tracking-tight">
              {t('why.title')}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {t('why.desc')}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.whyPixevo.map((point, idx) => (
              <ScrollReveal
                key={point.title}
                direction="up"
                delay={idx * 80}
                className="h-full"
              >
                <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-slate-700 space-y-3 transition-all hover:-translate-y-1 duration-200 h-full">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold font-['Outfit'] text-white">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Quick CTA inside Why Pixevo */}
          <div className="pt-4 text-center">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-full shadow-lg shadow-blue-900/20 transition-all cursor-pointer hover:scale-105"
            >
              <span>{t('services.cta.contact')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 4B. BEFORE & AFTER TRANSFORMATION SHOWCASE */}
      <ScrollReveal direction="up">
        <InteractiveTransformation onExploreServices={() => onNavigate('contact')} />
      </ScrollReveal>

      {/* 5. INTERACTIVE TECHNOLOGY STACK EXPLORER */}
      <section id="tech-stack-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>Modern Technology Standards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-white tracking-tight">
            Our Core Technology Stack
          </h2>
          <p className="text-slate-400 text-sm">
            We use proven, scalable frameworks and cloud technologies to ensure high performance, security, and long-term maintainability.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={150}>
          <InteractiveTechStack />
        </ScrollReveal>
      </section>

      {/* 5B. LIVE ARCHITECTURE TELEMETRY DASHBOARD */}
      <ScrollReveal direction="up" delay={100}>
        <LiveArchitectureDashboard />
      </ScrollReveal>

      {/* 6. BUSINESS SOLUTIONS SECTION */}
      <section id="solutions-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <ScrollReveal direction="up" className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider font-mono">
              <Layers className="w-3.5 h-3.5" />
              <span>{t('solutions.badge')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-white tracking-tight">
              {t('solutions.title')}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {t('solutions.desc')}
            </p>
          </div>

          <button
            onClick={() => onNavigate('solutions')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-indigo-400 hover:text-white bg-indigo-500/10 hover:bg-indigo-600/30 border border-indigo-500/30 rounded-full transition-all w-fit cursor-pointer"
          >
            <span>{t('solutions.cta.all')}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.solutions.slice(0, 6).map((sol, idx) => {
            const Icon = getSolutionIcon(sol.iconName);
            return (
              <ScrollReveal
                key={sol.id}
                direction="up"
                delay={idx * 80}
                className="h-full"
              >
                <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 hover:bg-slate-800/60 transition-all flex flex-col justify-between group h-full">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                        {sol.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold font-['Outfit'] text-white group-hover:text-indigo-300 transition-colors">
                      {sol.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {sol.shortDesc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 font-mono">
                      {sol.keyModules.length} {t('solutions.modules')}
                    </span>
                    <button
                      onClick={() => onNavigate('solutions')}
                      className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 cursor-pointer"
                    >
                      <span>{t('solutions.view')}</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* 7. INDUSTRIES SECTION */}
      <section id="industries-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider font-mono">
            <Building2 className="w-3.5 h-3.5" />
            <span>{t('industries.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-white tracking-tight">
            {t('industries.title')}
          </h2>
          <p className="text-slate-400 text-sm">
            {t('industries.desc')}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {data.industries.map((ind, idx) => {
            const Icon = getIndustryIcon(ind.iconName);
            return (
              <ScrollReveal
                key={ind.id}
                direction="up"
                delay={idx * 40}
                className="h-full"
              >
                <button
                  onClick={() => onNavigate('industries')}
                  className="group text-left p-4 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/60 transition-all flex flex-col justify-between h-full w-full cursor-pointer"
                >
                  <div className="space-y-2.5">
                    <div className="w-9 h-9 rounded-lg bg-blue-500/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold font-['Outfit'] text-white group-hover:text-blue-300 transition-colors">
                      {ind.name}
                    </h3>
                  </div>
                  <span className="text-[10px] text-slate-400 group-hover:text-slate-300 mt-2 block font-mono">
                    {t('industries.explore')} →
                  </span>
                </button>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* 8. OUR 5-STEP PROCESS */}
      <section id="process-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('process.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-white tracking-tight">
            {t('process.title')}
          </h2>
          <p className="text-slate-400 text-sm">
            {t('process.desc')}
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={100}>
          <InteractiveProcess onStartProject={() => onNavigate('contact')} />
        </ScrollReveal>
      </section>

      {/* 8B. FEATURED CASE STUDY: MODERN E-COMMERCE PLATFORM */}
      <ScrollReveal direction="up" delay={100}>
        <ModernEcommerceCaseStudy
          onNavigate={onNavigate}
          onOpenEstimator={onOpenEstimator}
        />
      </ScrollReveal>

      {/* 9. PORTFOLIO / CONCEPTS SECTION */}
      <section id="portfolio-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <ScrollReveal direction="up" className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider font-mono">
              <Eye className="w-3.5 h-3.5" />
              <span>{t('portfolio.badge')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-white tracking-tight">
              {t('portfolio.title')}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {t('portfolio.desc')}
            </p>
          </div>

          <button
            onClick={() => onNavigate('portfolio')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-purple-400 hover:text-white bg-purple-500/10 hover:bg-purple-600/30 border border-purple-500/30 rounded-full transition-all w-fit cursor-pointer"
          >
            <span>{t('portfolio.cta.all')}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.slice(0, 3).map((project, idx) => (
            <ScrollReveal
              key={project.id}
              direction="up"
              delay={idx * 100}
              className="h-full"
            >
              <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 hover:bg-slate-800/60 transition-all flex flex-col justify-between group h-full">
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 text-[11px] font-semibold rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-0.5 text-[10px] font-mono rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      {project.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-['Outfit'] text-white group-hover:text-blue-300 transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {project.shortDesc}
                  </p>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{t('portfolio.inspect')}</span>
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 9B. SUCCESS STORIES & MEASURABLE OUTCOMES */}
      <section id="success-stories-home-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <SuccessStoriesSection
            onNavigate={onNavigate}
            onOpenEstimator={onOpenEstimator}
            onInquireProject={(serviceName) => {
              onNavigate('contact');
            }}
          />
        </ScrollReveal>
      </section>

      {/* 10. ENGAGEMENT MODELS */}
      <section id="engagement-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{t('engagement.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-white tracking-tight">
            {t('engagement.title')}
          </h2>
          <p className="text-slate-400 text-sm">
            {t('engagement.desc')}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.engagementModels.map((model, idx) => (
            <ScrollReveal
              key={model.name}
              direction="up"
              delay={idx * 100}
              className="h-full"
            >
              <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/60 space-y-5 flex flex-col justify-between transition-all h-full">
                <div className="space-y-3">
                  <h3 className="text-lg font-bold font-['Outfit'] text-white">
                    {model.name}
                  </h3>
                  <p className="text-xs text-slate-400">{model.tagline}</p>
                  <ul className="space-y-2 pt-2 border-t border-slate-800">
                    {model.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-800 space-y-3">
                  <div className="text-[11px] text-slate-400">
                    <span className="font-semibold text-slate-300 block">{t('engagement.suitedFor')}</span>
                    {model.recommendedFor}
                  </div>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="w-full py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-blue-600 rounded-lg transition-all text-center cursor-pointer"
                  >
                    {t('engagement.inquire')}
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 11. CLIENT TESTIMONIALS & FEEDBACK */}
      <section id="testimonials-home-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <TestimonialsSection onNavigate={onNavigate} showNotice={true} />
        </ScrollReveal>
      </section>

      {/* 12. BLOG / INSIGHTS PREVIEW */}
      <section id="insights-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <ScrollReveal direction="up" className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t('blog.badge')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-white tracking-tight">
              {t('blog.title')}
            </h2>
            <p className="text-slate-400 text-sm">
              {t('blog.desc')}
            </p>
          </div>

          <button
            onClick={() => onNavigate('blog')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-white cursor-pointer"
          >
            <span>{t('blog.cta.all')}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BLOG_POSTS.slice(0, 2).map((post, idx) => (
            <ScrollReveal
              key={post.id}
              direction="up"
              delay={idx * 120}
              className="h-full"
            >
              <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/60 space-y-4 flex flex-col justify-between group transition-all h-full">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 font-semibold">
                      {post.category}
                    </span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-['Outfit'] text-white group-hover:text-blue-300 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>By {post.author.name}</span>
                  <button
                    onClick={() => onNavigate('blog')}
                    className="font-semibold text-blue-400 hover:text-white cursor-pointer"
                  >
                    {t('blog.read')} →
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 13. BOTTOM CONTACT SECTION */}
      <section id="home-contact-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <ContactFormSection
            headline={t('contact.cta.title')}
            subheadline={t('contact.cta.desc')}
          />
        </ScrollReveal>
      </section>
    </div>
  );
};
