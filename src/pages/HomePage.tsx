import React from 'react';
import { PageId, ProjectItem } from '../types';
import { PORTFOLIO_DATA } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';
import { HeroVisual } from '../components/HeroVisual';
import { InteractiveProcess } from '../components/InteractiveProcess';
import { TestimonialSection } from '../components/TestimonialSection';
import { FAQSection } from '../components/FAQSection';
import { ContactFormSection } from '../components/ContactFormSection';
import { ScrollReveal } from '../components/ScrollReveal';
import { ClientTrust } from '../components/ClientTrust';
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
  ChevronRight,
  Eye,
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

      {/* 2. CLIENT TRUST & SECTOR CAROUSEL */}
      <ScrollReveal direction="up" delay={100}>
        <ClientTrust />
      </ScrollReveal>

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

      {/* 4. OUR 5-STEP PROCESS */}
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

      {/* 5. PORTFOLIO / FEATURED WORK */}
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

      {/* 6. ENGAGEMENT MODELS */}
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

      {/* 7. CLIENT TESTIMONIALS */}
      <section id="testimonials-home-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <TestimonialSection onNavigate={onNavigate} />
        </ScrollReveal>
      </section>

      {/* 8. FREQUENTLY ASKED QUESTIONS */}
      <section id="home-faq-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <FAQSection
            onNavigate={onNavigate}
            onOpenEstimator={onOpenEstimator}
            badge={t('faq.badge')}
            title={t('faq.homeTitle')}
            subtitle={t('faq.homeDesc')}
            showFocusCards={true}
          />
        </ScrollReveal>
      </section>

      {/* 9. BOTTOM CONTACT & DISCOVERY CALL SECTION */}
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
