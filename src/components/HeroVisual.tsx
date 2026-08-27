import React, { useState, useEffect } from 'react';
import { PixevoMark } from './PixevoLogo';
import {
  Globe,
  Smartphone,
  Cloud,
  Bot,
  Layers,
  Database,
  Cpu,
  ShieldCheck,
  Zap,
  Activity,
  CheckCircle2,
  Terminal,
} from 'lucide-react';

interface TechNode {
  id: string;
  name: string;
  category: string;
  icon: React.ElementType;
  color: string;
  badge: string;
  tech: string[];
  description: string;
  status: string;
}

export const HeroVisual: React.FC = () => {
  const [activeNodeIndex, setActiveNodeIndex] = useState<number>(0);
  const [pulseCount, setPulseCount] = useState(0);

  const nodes: TechNode[] = [
    {
      id: 'web',
      name: 'Modern Web & SaaS',
      category: 'Frontend & Platforms',
      icon: Globe,
      color: 'from-blue-500 to-cyan-400',
      badge: 'Edge / SSR',
      tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      description: 'Ultra-fast, accessible single-page applications and responsive client portals.',
      status: '60 FPS Optimized',
    },
    {
      id: 'mobile',
      name: 'Mobile Ecosystem',
      category: 'Cross-Platform Native',
      icon: Smartphone,
      color: 'from-indigo-500 to-blue-400',
      badge: 'iOS & Android',
      tech: ['React Native', 'Flutter', 'Offline Sync', 'Biometrics'],
      description: 'Fluid mobile apps with native device integration and background synchronization.',
      status: 'Native Hardware Ready',
    },
    {
      id: 'cloud',
      name: 'Cloud & DevOps',
      category: 'Infrastructure',
      icon: Cloud,
      color: 'from-purple-500 to-indigo-400',
      badge: 'Containers / CI/CD',
      tech: ['Google Cloud', 'AWS', 'Docker', 'Kubernetes'],
      description: 'Elastic cloud architectures configured for zero downtime and auto-scaling.',
      status: '99.99% Architecture Target',
    },
    {
      id: 'ai',
      name: 'AI & Automation',
      category: 'Intelligent Workflows',
      icon: Bot,
      color: 'from-cyan-400 to-emerald-400',
      badge: 'LLM & RAG',
      tech: ['Gemini API', 'LangChain', 'FastAPI', 'Automation Pipelines'],
      description: 'Context-aware generative bots, document parsers, and event-driven automation.',
      status: 'Grounded Workflows',
    },
    {
      id: 'api',
      name: 'Microservices & APIs',
      category: 'Systems Connectivity',
      icon: Layers,
      color: 'from-violet-500 to-fuchsia-400',
      badge: 'REST / GraphQL',
      tech: ['Node.js', 'Go', 'WebSockets', 'Redis Queues'],
      description: 'Resilient API endpoints and asynchronous message queues handling high throughput.',
      status: '< 45ms Avg Latency',
    },
    {
      id: 'data',
      name: 'Secure Data Layer',
      category: 'Database & Storage',
      icon: Database,
      color: 'from-emerald-400 to-teal-500',
      badge: 'ACID / Encrypted',
      tech: ['PostgreSQL', 'Prisma ORM', 'Redis', 'AES-256'],
      description: 'Encrypted relational storage with automated backup strategies and role-based ACL.',
      status: 'Encrypted at Rest',
    },
  ];

  // Auto-cycle through nodes gently every 5 seconds if not hovered/interacted
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNodeIndex((prev) => (prev + 1) % nodes.length);
      setPulseCount((c) => c + 1);
    }, 4500);
    return () => clearInterval(timer);
  }, [nodes.length]);

  const currentNode = nodes[activeNodeIndex];

  return (
    <div className="relative w-full rounded-2xl bg-slate-900/40 border border-slate-800 shadow-2xl p-4 sm:p-6 lg:p-7 overflow-hidden">
      {/* Background Grid & Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-indigo-600/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Terminal Title Bar */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
          </div>
          <span className="text-xs font-mono text-slate-300 ml-2 flex items-center gap-2">
            <PixevoMark size={16} />
            <span className="text-slate-400">pixevo-core-architecture-engine.v2.4</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Systems Synchronized</span>
          </span>
        </div>
      </div>

      {/* Main Interactive Diagram Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
        {/* Left / Top: Node Selector Matrix */}
        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {nodes.map((node, index) => {
            const Icon = node.icon;
            const isSelected = activeNodeIndex === index;
            return (
              <button
                key={node.id}
                id={`tech-node-btn-${node.id}`}
                onClick={() => setActiveNodeIndex(index)}
                className={`relative group flex flex-col text-left p-3.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-slate-800/90 border-blue-500/70 shadow-lg shadow-blue-900/20 ring-1 ring-blue-500/50'
                    : 'bg-slate-950/80 hover:bg-slate-800/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Node Active Indicator */}
                {isSelected && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-blue-400 ring-4 ring-slate-900" />
                )}

                <div className="flex items-center justify-between mb-2">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-tr ${node.color} text-slate-950 shadow-sm`}
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">
                    0{index + 1}
                  </span>
                </div>

                <span className="text-xs font-bold text-white group-hover:text-blue-300 transition-colors truncate">
                  {node.name}
                </span>
                <span className="text-[11px] text-slate-400 font-mono mt-0.5 truncate">
                  {node.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right: Active Node Detail Inspector & Telemetry */}
        <div className="lg:col-span-5 bg-slate-950 rounded-xl border border-slate-800 p-4.5 space-y-3.5 shadow-inner">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider">
                  {currentNode.category}
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-[11px] font-mono text-emerald-400">
                  {currentNode.status}
                </span>
              </div>
              <h4 className="text-base font-bold text-white font-['Outfit'] mt-0.5">
                {currentNode.name}
              </h4>
            </div>
            <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
              <Zap className="w-4 h-4" />
            </div>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            {currentNode.description}
          </p>

          {/* Integrated Tech Chips */}
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 block mb-1.5 font-mono">
              Core Technologies
            </span>
            <div className="flex flex-wrap gap-1.5">
              {currentNode.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 text-[11px] font-mono text-slate-200 bg-slate-900 border border-slate-800 rounded-md"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Live Simulated Telemetry Stream */}
          <div className="pt-2 border-t border-slate-800 space-y-1.5">
            <div className="flex items-center justify-between text-[11px] font-mono">
              <span className="text-slate-400">Pipeline Protocol</span>
              <span className="text-blue-400">gRPC / TypeScript Async</span>
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono">
              <span className="text-slate-400">Security Standard</span>
              <span className="text-emerald-400">TLS 1.3 / OAuth2 / RBAC</span>
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono">
              <span className="text-slate-400">Integration Reliability</span>
              <span className="text-indigo-300">Continuous CI / Automated QA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Architecture Flow Ribbon */}
      <div className="relative z-10 mt-5 pt-3.5 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 font-mono">
        <div className="flex items-center gap-2">
          <Activity className="w-3.5 h-3.5 text-blue-400" />
          <span>Unified Data Pipeline & Synchronized Micro-Services</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-slate-500 hidden sm:inline">Click any node to inspect layer</span>
          <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px]">
            Production Ready
          </span>
        </div>
      </div>
    </div>
  );
};
