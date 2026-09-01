import React, { useState } from 'react';
import {
  Sparkles,
  Layers,
  ArrowRight,
  TrendingUp,
  Cpu,
  CheckCircle2,
  Lock,
  Zap,
  Activity,
  Server,
  Database,
  BarChart3,
  Flame,
  Clock,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import { PixevoMark } from './PixevoLogo';

interface InteractiveTransformationProps {
  onExploreServices?: () => void;
}

export const InteractiveTransformation: React.FC<InteractiveTransformationProps> = ({
  onExploreServices,
}) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'architecture' | 'metrics' | 'security'>('architecture');

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section id="interactive-transformation-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-xs font-semibold uppercase tracking-wider font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Digital Modernization</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-white tracking-tight">
            Before & After: Engineering Transformation
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Drag the interactive slider below to see how Pixevo Technologies re-engineers fragile legacy stacks into high-performance, cloud-native enterprise platforms.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900/80 border border-slate-800 rounded-xl w-fit">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'architecture'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Architecture
          </button>
          <button
            onClick={() => setActiveTab('metrics')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'metrics'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Core Metrics
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'security'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Security & DevOps
          </button>
        </div>
      </div>

      {/* Interactive Transformation Stage */}
      <div className="relative rounded-2xl bg-[#060D1E] border border-slate-800 overflow-hidden shadow-2xl p-6 sm:p-8">
        {/* Subtle Ambient glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-600/5 rounded-full blur-3xl pointer-events-none" />

        {/* Side-by-Side Dual View with Slider Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 relative z-10">
          
          {/* Legacy / Before Card */}
          <div className="rounded-xl bg-slate-950/80 border border-rose-500/20 p-5 sm:p-6 space-y-4 relative overflow-hidden group">
            <div className="absolute top-0 right-0 px-3 py-1 bg-rose-500/10 border-b border-l border-rose-500/20 rounded-bl-lg text-[11px] font-mono text-rose-400 font-bold uppercase tracking-wider">
              Before Pixevo · Legacy Bottlenecks
            </div>

            <div className="space-y-1 pt-2">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                Current Operational State
              </span>
              <h3 className="text-lg font-bold font-['Outfit'] text-rose-300">
                Monolithic & Manual Fragility
              </h3>
            </div>

            {activeTab === 'architecture' && (
              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1.5">
                  <div className="flex items-center justify-between text-rose-400 font-mono font-semibold">
                    <span>Monolithic Codebase</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-rose-500/10 border border-rose-500/20">High Risk</span>
                  </div>
                  <p className="text-slate-400 text-[11px]">
                    Single server failure takes down the entire application. Zero elasticity for sudden traffic spikes.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1.5">
                  <div className="flex items-center justify-between text-rose-400 font-mono font-semibold">
                    <span>Manual Spreadsheets & Sync</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-rose-500/10 border border-rose-500/20">Data Silos</span>
                  </div>
                  <p className="text-slate-400 text-[11px]">
                    Customer requests manually copied between systems. 15+ hours lost weekly in administrative overhead.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1.5">
                  <div className="flex items-center justify-between text-rose-400 font-mono font-semibold">
                    <span>Slow 3.8s Web Load Time</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-rose-500/10 border border-rose-500/20">High Bounce</span>
                  </div>
                  <p className="text-slate-400 text-[11px]">
                    Unoptimized bundlers and un-cached SQL queries leading to frustrated users and abandoned carts.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'metrics' && (
              <div className="space-y-3 text-xs">
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1">
                    <span className="text-[10px] font-mono text-slate-500 uppercase">Avg Page Latency</span>
                    <div className="text-xl font-bold font-['Outfit'] text-rose-400">3,800 ms</div>
                    <span className="text-[10px] text-slate-500">Uncached SSR & heavy assets</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1">
                    <span className="text-[10px] font-mono text-slate-500 uppercase">Deployment Frequency</span>
                    <div className="text-xl font-bold font-['Outfit'] text-rose-400">Once / 3 Weeks</div>
                    <span className="text-[10px] text-slate-500">Manual FTP / SSH deploys</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1">
                    <span className="text-[10px] font-mono text-slate-500 uppercase">System Uptime</span>
                    <div className="text-xl font-bold font-['Outfit'] text-rose-400">97.4%</div>
                    <span className="text-[10px] text-slate-500">Frequent unexpected crashes</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1">
                    <span className="text-[10px] font-mono text-slate-500 uppercase">Mobile Compatibility</span>
                    <div className="text-xl font-bold font-['Outfit'] text-rose-400">Broken Layouts</div>
                    <span className="text-[10px] text-slate-500">No dedicated app or PWA</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1">
                  <div className="flex items-center justify-between text-rose-400 font-mono font-semibold">
                    <span>Unencrypted Database Backups</span>
                    <Lock className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-slate-400 text-[11px]">
                    Data stored in plain text without automated point-in-time recovery or strict role-based access.
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1">
                  <div className="flex items-center justify-between text-rose-400 font-mono font-semibold">
                    <span>No Automated Test Pipeline</span>
                    <Activity className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-slate-400 text-[11px]">
                    Bugs routinely reach production environments due to the lack of automated CI/CD unit & integration suites.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Modernized / After Card */}
          <div className="rounded-xl bg-slate-950/80 border border-blue-500/30 p-5 sm:p-6 space-y-4 relative overflow-hidden group shadow-lg shadow-blue-500/5">
            <div className="absolute top-0 right-0 px-3 py-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-mono text-[11px] font-bold uppercase tracking-wider rounded-bl-lg">
              After Pixevo · Engineered Excellence
            </div>

            <div className="space-y-1 pt-2">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                Pixevo Modern Architecture
              </span>
              <h3 className="text-lg font-bold font-['Outfit'] text-white">
                Cloud-Native, AI-Augmented & Scalable
              </h3>
            </div>

            {activeTab === 'architecture' && (
              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-900/90 border border-blue-500/20 space-y-1.5">
                  <div className="flex items-center justify-between text-cyan-300 font-mono font-semibold">
                    <span>Microservices & Edge CDN</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Auto-Scaling</span>
                  </div>
                  <p className="text-slate-300 text-[11px]">
                    Decoupled services running on Docker/Kubernetes. Seamlessly scales from 1,000 to 1,000,000+ active users.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/90 border border-blue-500/20 space-y-1.5">
                  <div className="flex items-center justify-between text-cyan-300 font-mono font-semibold">
                    <span>Automated AI Pipelines & Webhooks</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Real-Time</span>
                  </div>
                  <p className="text-slate-300 text-[11px]">
                    Intelligent data parsing, instant customer notifications, and automated CRM sync save 20+ engineer hours weekly.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/90 border border-blue-500/20 space-y-1.5">
                  <div className="flex items-center justify-between text-cyan-300 font-mono font-semibold">
                    <span>Sub-250ms Global Edge Response</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">100 Lighthouse</span>
                  </div>
                  <p className="text-slate-300 text-[11px]">
                    React 18, TypeScript, Redis multi-region caching, and optimized asset compression guarantee lightning-fast load.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'metrics' && (
              <div className="space-y-3 text-xs">
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-lg bg-slate-900/90 border border-blue-500/20 space-y-1">
                    <span className="text-[10px] font-mono text-cyan-400 uppercase">Avg Page Latency</span>
                    <div className="text-xl font-bold font-['Outfit'] text-emerald-400">180 ms</div>
                    <span className="text-[10px] text-slate-400">95% speed improvement</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/90 border border-blue-500/20 space-y-1">
                    <span className="text-[10px] font-mono text-cyan-400 uppercase">Deployment Frequency</span>
                    <div className="text-xl font-bold font-['Outfit'] text-emerald-400">Multiple / Day</div>
                    <span className="text-[10px] text-slate-400">Zero-downtime CI/CD</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/90 border border-blue-500/20 space-y-1">
                    <span className="text-[10px] font-mono text-cyan-400 uppercase">System Uptime</span>
                    <div className="text-xl font-bold font-['Outfit'] text-emerald-400">99.99%</div>
                    <span className="text-[10px] text-slate-400">Multi-region redundancy</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/90 border border-blue-500/20 space-y-1">
                    <span className="text-[10px] font-mono text-cyan-400 uppercase">Mobile Experience</span>
                    <div className="text-xl font-bold font-['Outfit'] text-emerald-400">Fluid 60 FPS</div>
                    <span className="text-[10px] text-slate-400">Native iOS, Android & PWA</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-900/90 border border-blue-500/20 space-y-1">
                  <div className="flex items-center justify-between text-cyan-300 font-mono font-semibold">
                    <span>Enterprise AES-256 & IAM RBAC</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <p className="text-slate-300 text-[11px]">
                    Granular role-based permissions, encrypted data-at-rest & in-transit, and automated daily off-site snapshots.
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/90 border border-blue-500/20 space-y-1">
                  <div className="flex items-center justify-between text-cyan-300 font-mono font-semibold">
                    <span>Automated Security Scans & Linting</span>
                    <Zap className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <p className="text-slate-300 text-[11px]">
                    Every commit is audited for vulnerabilities, dependency security patches, and TypeScript strict compliance.
                  </p>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Live Transformation Banner */}
        <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
              <PixevoMark size={20} />
            </div>
            <div>
              <span className="text-xs font-bold text-white font-['Outfit'] block">
                Ready to transform your software stack?
              </span>
              <span className="text-[11px] text-slate-400">
                Our senior architects conduct full system audits and migration roadmaps.
              </span>
            </div>
          </div>

          {onExploreServices && (
            <button
              onClick={onExploreServices}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-blue-900/30 transition-all cursor-pointer shrink-0"
            >
              <span>Schedule Architecture Audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
