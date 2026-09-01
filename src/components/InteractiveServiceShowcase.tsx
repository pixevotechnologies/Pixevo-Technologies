import React, { useState } from 'react';
import {
  Code2,
  Smartphone,
  Bot,
  Cloud,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Monitor,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { PageId } from '../types';

interface InteractiveServiceShowcaseProps {
  onNavigate: (page: PageId) => void;
  onOpenEstimator: () => void;
}

interface ServiceTab {
  id: string;
  title: string;
  category: string;
  icon: React.ElementType;
  tagline: string;
  description: string;
  stack: string[];
  deliverables: string[];
  mockup: {
    type: 'saas' | 'mobile' | 'ai' | 'cloud';
    screenTitle: string;
    metrics: { label: string; value: string; color?: string }[];
    previewItems: string[];
  };
}

export const InteractiveServiceShowcase: React.FC<InteractiveServiceShowcaseProps> = ({
  onNavigate,
  onOpenEstimator,
}) => {
  const [activeTabId, setActiveTabId] = useState<string>('custom-saas');

  const services: ServiceTab[] = [
    {
      id: 'custom-saas',
      title: 'Full-Stack Web & SaaS',
      category: 'Platforms & Portals',
      icon: Code2,
      tagline: 'High-Throughput React, Next.js & Node.js Applications',
      description:
        'We engineer scalable multi-tenant SaaS products, complex customer dashboards, and internal business platforms with uncompromising UI speed and clean API design.',
      stack: ['React 18', 'Next.js', 'TypeScript', 'Node.js / Express', 'Tailwind CSS', 'PostgreSQL'],
      deliverables: [
        'Multi-tenant authentication & RBAC',
        'Stripe / LemonSqueezy subscription billing',
        'Real-time WebSockets & notifications',
        'Lighthouse 95+ performance optimization',
      ],
      mockup: {
        type: 'saas',
        screenTitle: 'Enterprise SaaS Analytics Portal',
        metrics: [
          { label: 'Active Seats', value: '4,820', color: 'text-white' },
          { label: 'MRR Growth', value: '+34.8%', color: 'text-emerald-400' },
          { label: 'API Uptime', value: '99.99%', color: 'text-cyan-400' },
        ],
        previewItems: [
          'Live Revenue Telemetry Stream',
          'Role-Based Customer Management',
          'Automated Invoicing & Webhooks',
        ],
      },
    },
    {
      id: 'mobile-apps',
      title: 'Mobile App Engineering',
      category: 'Cross-Platform Native',
      icon: Smartphone,
      tagline: 'Fluid Flutter & React Native Applications for iOS & Android',
      description:
        'Deliver native-grade mobile experiences with offline data synchronization, biometric authentication, push notifications, and seamless device hardware access.',
      stack: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'SQLite / WatermelonDB'],
      deliverables: [
        'Dual-platform store submission (App Store + Google Play)',
        'Biometric login (FaceID / Fingerprint)',
        'Offline-first synchronization with background queue',
        'Push notifications & location geofencing',
      ],
      mockup: {
        type: 'mobile',
        screenTitle: 'Cross-Platform Mobile App Suite',
        metrics: [
          { label: 'Frame Rate', value: '60 FPS', color: 'text-emerald-400' },
          { label: 'Offline Sync', value: 'Instant', color: 'text-cyan-400' },
          { label: 'Crash Rate', value: '< 0.01%', color: 'text-white' },
        ],
        previewItems: [
          'Native Biometric Authentication Flow',
          'Real-time Geolocation & Tracking',
          'Dynamic In-App Messaging & Badges',
        ],
      },
    },
    {
      id: 'ai-automation',
      title: 'AI & Custom LLM Systems',
      category: 'Intelligent Workflows',
      icon: Bot,
      tagline: 'Context-Aware Generative Agents & Retrieval Augmented Generation',
      description:
        'Supercharge internal operations with custom AI bots, document vectorization pipelines, automated extraction, and intelligent customer support agents.',
      stack: ['Gemini 3.7 API', 'LangChain', 'FastAPI', 'Pinecone Vector DB', 'Python / TS'],
      deliverables: [
        'Enterprise RAG knowledge base search',
        'Multi-turn AI customer service agents',
        'Automated PDF, receipt & invoice OCR parsing',
        'Guardrails & content safety filtering',
      ],
      mockup: {
        type: 'ai',
        screenTitle: 'AI Semantic RAG & Agent Console',
        metrics: [
          { label: 'Context Tokens', value: '1,000,000', color: 'text-cyan-400' },
          { label: 'RAG Accuracy', value: '98.6%', color: 'text-emerald-400' },
          { label: 'Parsing Time', value: '420 ms', color: 'text-white' },
        ],
        previewItems: [
          'Automated Enterprise Document Parsing',
          'Multi-channel WhatsApp & Web Bot Dispatch',
          'Real-Time Confidence Score Auditing',
        ],
      },
    },
    {
      id: 'cloud-devops',
      title: 'Cloud Architecture & DevOps',
      category: 'Infrastructure & Security',
      icon: Cloud,
      tagline: 'Containerized CI/CD, Kubernetes & Zero-Downtime Deployments',
      description:
        'Resilient cloud infrastructure setup on GCP, AWS, or Azure with automated deployment pipelines, Docker containerization, and enterprise security hardening.',
      stack: ['Docker', 'Kubernetes', 'AWS / GCP Cloud Run', 'GitHub Actions', 'Terraform'],
      deliverables: [
        'Zero-downtime rolling blue/green deployments',
        'Infrastructure as Code (Terraform / Helm)',
        'Database replication & automated disaster recovery',
        'Strict SOC-2 compliant security auditing',
      ],
      mockup: {
        type: 'cloud',
        screenTitle: 'Multi-Region Cloud Ingress & Security',
        metrics: [
          { label: 'Cluster Nodes', value: '12 Active', color: 'text-white' },
          { label: 'Edge Caching', value: '96.4%', color: 'text-emerald-400' },
          { label: 'Build Duration', value: '42 sec', color: 'text-cyan-400' },
        ],
        previewItems: [
          'Automated GitHub Actions CI/CD Pipeline',
          'Zero-Downtime Container Traffic Migration',
          'Automated SSL & WAF Threat Protection',
        ],
      },
    },
  ];

  const currentService = services.find((s) => s.id === activeTabId) || services[0];
  const CurrentIcon = currentService.icon;

  return (
    <section id="interactive-service-showcase-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-semibold uppercase tracking-wider font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>Interactive Service Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-white tracking-tight">
            Explore Our Engineering Core
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Click across our core capabilities to view live architectural specifications, deliverables, and interactive interface mockups.
          </p>
        </div>

        <button
          onClick={() => onNavigate('services')}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-blue-400 hover:text-white bg-blue-500/10 hover:bg-blue-600/30 border border-blue-500/30 rounded-full transition-all w-fit cursor-pointer"
        >
          <span>View All 10 Services</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Interactive Tabs Header */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3">
        {services.map((srv) => {
          const Icon = srv.icon;
          const isActive = srv.id === activeTabId;
          return (
            <button
              key={srv.id}
              onClick={() => setActiveTabId(srv.id)}
              className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                isActive
                  ? 'bg-gradient-to-b from-blue-600/20 to-slate-900 border-blue-500/50 shadow-lg shadow-blue-500/10'
                  : 'bg-slate-900/40 border-slate-800 hover:bg-slate-800/60 hover:border-slate-700'
              }`}
            >
              <div className="space-y-2">
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                    isActive ? 'bg-blue-600 text-white' : 'bg-slate-800 text-blue-400'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider block text-slate-500">
                    {srv.category}
                  </span>
                  <h3 className={`text-sm font-bold font-['Outfit'] ${isActive ? 'text-white' : 'text-slate-300'}`}>
                    {srv.title}
                  </h3>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className={`text-[10px] font-mono ${isActive ? 'text-cyan-400 font-semibold' : 'text-slate-500'}`}>
                  {isActive ? '● Active View' : 'Explore Specs'}
                </span>
                <ChevronRight className={`w-3 h-3 ${isActive ? 'text-cyan-400 translate-x-0.5' : 'text-slate-600'} transition-transform`} />
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Service Showcase Card & Interactive Preview Mockup */}
      <div className="rounded-2xl bg-[#070D1E] border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
          
          {/* Left Column: Detailed Specifications */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/25 text-xs font-mono">
                <CurrentIcon className="w-3.5 h-3.5" />
                <span>{currentService.category}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-['Outfit'] text-white">
                {currentService.tagline}
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                {currentService.description}
              </p>
            </div>

            {/* Deliverables Checklist */}
            <div className="space-y-2.5">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block">
                Standard Engineering Deliverables:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {currentService.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="space-y-2 pt-2 border-t border-slate-800/80">
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                Primary Technology Stack:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {currentService.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenEstimator}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-md shadow-blue-600/20 transition-all cursor-pointer"
              >
                Estimate This Service
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-bold transition-all cursor-pointer"
              >
                Request Custom Proposal
              </button>
            </div>
          </div>

          {/* Right Column: Live Animated UI Mockup */}
          <div className="lg:col-span-6">
            <div className="rounded-xl bg-slate-950 border border-slate-800/90 shadow-2xl p-5 space-y-4 relative overflow-hidden group">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-slate-600">|</span>
                  <span className="font-mono text-[11px] text-slate-400 truncate">
                    {currentService.mockup.screenTitle}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Interactive Mockup</span>
                </div>
              </div>

              {/* Mockup Metrics Grid */}
              <div className="grid grid-cols-3 gap-2.5">
                {currentService.mockup.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-900/90 border border-slate-800/80 space-y-1">
                    <span className="text-[10px] font-mono text-slate-500 uppercase block truncate">
                      {m.label}
                    </span>
                    <div className={`text-base sm:text-lg font-bold font-['Outfit'] ${m.color || 'text-white'}`}>
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mockup Active Feature Canvas */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider block font-semibold">
                  Live Module Components:
                </span>
                <div className="space-y-2">
                  {currentService.mockup.previewItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/80 border border-slate-800/90 text-xs font-mono text-slate-300 hover:border-blue-500/40 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        <span className="truncate">{item}</span>
                      </div>
                      <span className="text-[10px] text-emerald-400 font-semibold uppercase">Active</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer indicator */}
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-1">
                <span>Pixevo Design System v2.4</span>
                <span>Sub-millisecond State Engine</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
