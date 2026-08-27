import React from 'react';
import { PageId, ProjectItem } from '../types';
import {
  COMPANY_INFO,
  TRUST_PILLARS,
  WHY_PIXEVO_POINTS,
  SERVICES_DATA,
  SOLUTIONS_DATA,
  INDUSTRIES_DATA,
  PORTFOLIO_DATA,
  BLOG_POSTS,
  ENGAGEMENT_MODELS,
} from '../data/siteData';
import { HeroVisual } from '../components/HeroVisual';
import { InteractiveProcess } from '../components/InteractiveProcess';
import { InteractiveTechStack } from '../components/InteractiveTechStack';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ContactFormSection } from '../components/ContactFormSection';
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
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-semibold uppercase tracking-wider w-fit">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
                <span>Digital Transformation Experts</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-['Outfit'] text-white tracking-tight leading-[1.1]">
                Building Digital Solutions That{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  Move Your Business Forward.
                </span>
              </h1>

              <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl">
                Pixevo Technologies delivers modern software, AI, and automation solutions designed to help businesses grow and operate smarter.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <button
                  id="hero-primary-cta"
                  onClick={() => onNavigate('services')}
                  className="px-6 py-3 bg-white hover:bg-slate-100 text-slate-950 rounded-lg font-bold text-sm transition-all shadow-md cursor-pointer"
                >
                  Explore Our Services
                </button>

                <button
                  id="hero-secondary-cta"
                  onClick={() => onNavigate('portfolio')}
                  className="px-6 py-3 bg-slate-800/90 hover:bg-slate-800 text-white border border-slate-700 rounded-lg font-bold text-sm transition-all cursor-pointer"
                >
                  View Portfolio
                </button>
              </div>

              {/* Quick Technical Standards Badges */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-3 text-xs font-mono text-slate-400">
                <div className="space-y-0.5">
                  <span className="text-white font-bold block text-sm font-['Outfit']">Full-Stack</span>
                  <span className="text-slate-400">End-to-End Delivery</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-white font-bold block text-sm font-['Outfit']">Enterprise</span>
                  <span className="text-slate-400">TypeScript & Cloud</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-white font-bold block text-sm font-['Outfit']">Agile</span>
                  <span className="text-slate-400">Continuous Sprints</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Tech Architecture Visual */}
            <div className="lg:col-span-6">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST / VALUE SECTION */}
      <section id="trust-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {TRUST_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl flex flex-col gap-3 group transition-all hover:bg-slate-800/60 hover:border-slate-700"
            >
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
          ))}
        </div>
      </section>

      {/* 3. CORE SERVICES SECTION */}
      <section id="services-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-semibold uppercase tracking-wider font-mono">
              <Code2 className="w-3.5 h-3.5" />
              <span>Engineering Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-white tracking-tight">
              Software Development & Technology Services
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We provide end-to-end technical execution—from product concept and system architecture to high-performance development, deployment, and ongoing optimization.
            </p>
          </div>

          <button
            id="view-all-services-btn"
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-blue-400 hover:text-white bg-blue-500/10 hover:bg-blue-600/30 border border-blue-500/30 rounded-full transition-all w-fit"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Primary 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.slice(0, 6).map((service) => {
            const Icon = getServiceIcon(service.iconName);
            return (
              <div
                key={service.id}
                className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between group transition-all hover:bg-slate-800/60 hover:border-slate-700"
              >
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
                    className="text-xs font-semibold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 group-hover:translate-x-1 transition-all"
                  >
                    <span>Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. WHY PIXEVO SECTION */}
      <section id="why-pixevo-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-slate-900/40 border border-slate-800 p-8 sm:p-12 lg:p-14 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Why Businesses Choose Pixevo</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-white tracking-tight">
              Engineered for Real-World Business Outcomes
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We bridge business strategy with technical rigor, delivering scalable software solutions designed to simplify operations, minimize technical debt, and support long-term growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_PIXEVO_POINTS.map((point) => (
              <div
                key={point.title}
                className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-slate-700 space-y-3 transition-all"
              >
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
            ))}
          </div>

          {/* Quick CTA inside Why Pixevo */}
          <div className="pt-4 text-center">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-full shadow-lg shadow-blue-900/20 transition-all cursor-pointer"
            >
              <span>Talk to Our Engineering Team</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE TECHNOLOGY STACK EXPLORER */}
      <section id="tech-stack-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
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
        </div>

        <InteractiveTechStack />
      </section>

      {/* 6. BUSINESS SOLUTIONS SECTION */}
      <section id="solutions-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider font-mono">
              <Layers className="w-3.5 h-3.5" />
              <span>Tailored Business Systems</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-white tracking-tight">
              Purpose-Built Business Solutions
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We design and implement custom digital systems that streamline internal workflows, unify business data, and automate daily tasks.
            </p>
          </div>

          <button
            onClick={() => onNavigate('solutions')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-indigo-400 hover:text-white bg-indigo-500/10 hover:bg-indigo-600/30 border border-indigo-500/30 rounded-full transition-all w-fit"
          >
            <span>Explore All Solutions</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOLUTIONS_DATA.slice(0, 6).map((sol) => {
            const Icon = getSolutionIcon(sol.iconName);
            return (
              <div
                key={sol.id}
                className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 hover:bg-slate-800/60 transition-all flex flex-col justify-between group"
              >
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
                    {sol.keyModules.length} Modules Included
                  </span>
                  <button
                    onClick={() => onNavigate('solutions')}
                    className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                  >
                    <span>View Solution</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. INDUSTRIES SECTION */}
      <section id="industries-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider font-mono">
            <Building2 className="w-3.5 h-3.5" />
            <span>Domain Specialization</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-white tracking-tight">
            Industries We Support
          </h2>
          <p className="text-slate-400 text-sm">
            Tailored software architecture addressing specific operational challenges across key commercial sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {INDUSTRIES_DATA.map((ind) => {
            const Icon = getIndustryIcon(ind.iconName);
            return (
              <button
                key={ind.id}
                onClick={() => onNavigate('industries')}
                className="group text-left p-4 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/60 transition-all flex flex-col justify-between h-full"
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
                  Explore Solutions →
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 8. OUR 5-STEP PROCESS */}
      <section id="process-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Structured Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-white tracking-tight">
            Our 5-Step Development Process
          </h2>
          <p className="text-slate-400 text-sm">
            A disciplined, transparent agile lifecycle ensuring predictable delivery, high code quality, and zero launch surprises.
          </p>
        </div>

        <InteractiveProcess onStartProject={() => onNavigate('contact')} />
      </section>

      {/* 9. PORTFOLIO / CONCEPTS SECTION */}
      <section id="portfolio-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider font-mono">
              <Eye className="w-3.5 h-3.5" />
              <span>Project Demonstrations & Concepts</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-white tracking-tight">
              Featured Concepts & Demo Builds
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Explore our concept builds and architecture demos showcasing our design standards, full-stack capabilities, and engineering patterns.
            </p>
          </div>

          <button
            onClick={() => onNavigate('portfolio')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-purple-400 hover:text-white bg-purple-500/10 hover:bg-purple-600/30 border border-purple-500/30 rounded-full transition-all w-fit"
          >
            <span>View Full Portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.slice(0, 3).map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 hover:bg-slate-800/60 transition-all flex flex-col justify-between group"
            >
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
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Architecture Blueprint</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. ENGAGEMENT MODELS */}
      <section id="engagement-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Collaboration Framework</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-white tracking-tight">
            Flexible Engagement Models
          </h2>
          <p className="text-slate-400 text-sm">
            Choose the engagement model that best suits your project timeline, internal team composition, and roadmap agility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ENGAGEMENT_MODELS.map((model) => (
            <div
              key={model.name}
              className="p-6 sm:p-7 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/60 space-y-5 flex flex-col justify-between transition-all"
            >
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
                  <span className="font-semibold text-slate-300 block">Best Suited For:</span>
                  {model.recommendedFor}
                </div>
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-blue-600 rounded-lg transition-all text-center cursor-pointer"
                >
                  Inquire About This Model
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. CLIENT TESTIMONIALS & FEEDBACK */}
      <section id="testimonials-home-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TestimonialsSection onNavigate={onNavigate} showNotice={true} />
      </section>

      {/* 12. BLOG / INSIGHTS PREVIEW */}
      <section id="insights-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Engineering Insights</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-white tracking-tight">
              Latest Technology & Architecture Articles
            </h2>
            <p className="text-slate-400 text-sm">
              Practical analysis and guides on modern software architecture, AI deployment, and scalable systems.
            </p>
          </div>

          <button
            onClick={() => onNavigate('blog')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-white"
          >
            <span>Explore All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BLOG_POSTS.slice(0, 2).map((post) => (
            <div
              key={post.id}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/60 space-y-4 flex flex-col justify-between group transition-all"
            >
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
                  className="font-semibold text-blue-400 hover:text-white"
                >
                  Read Full Article →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 13. BOTTOM CONTACT SECTION */}
      <section id="home-contact-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactFormSection
          headline="Start Your Project With Pixevo Technologies"
          subheadline="Ready to build reliable software or modernize your existing digital infrastructure? Our engineering leads are here to help."
        />
      </section>
    </div>
  );
};
