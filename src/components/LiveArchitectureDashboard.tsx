import React, { useState, useEffect } from 'react';
import {
  TrendingUp,
  Activity,
  Cpu,
  Server,
  Zap,
  ShieldCheck,
  Users,
  Clock,
  ArrowUpRight,
  Database,
  RefreshCw,
  Sparkles,
  Bot,
} from 'lucide-react';
import { PixevoMark } from './PixevoLogo';

export const LiveArchitectureDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'realtime' | 'pipelines' | 'infrastructure'>('realtime');
  const [requestCount, setRequestCount] = useState<number>(142850);
  const [cpuLoad, setCpuLoad] = useState<number>(24);
  const [avgLatency, setAvgLatency] = useState<number>(38);
  const [activeRegion, setActiveRegion] = useState<'us-east' | 'eu-west' | 'me-south' | 'ap-south'>('eu-west');

  // Realistic live simulated telemetry tick
  useEffect(() => {
    const interval = setInterval(() => {
      setRequestCount((prev) => prev + Math.floor(Math.random() * 12) + 3);
      setCpuLoad(Math.floor(Math.random() * 10) + 20);
      setAvgLatency(Math.floor(Math.random() * 8) + 34);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const regions = [
    { id: 'us-east', name: 'US East (N. Virginia)', status: 'Healthy', latency: '32ms', load: '22%' },
    { id: 'eu-west', name: 'EU West (London)', status: 'Optimal', latency: '28ms', load: '19%' },
    { id: 'me-south', name: 'Middle East (Riyadh / KSA)', status: 'Active', latency: '42ms', load: '28%' },
    { id: 'ap-south', name: 'Asia Pacific (Pakistan & South Asia)', status: 'Optimal', latency: '39ms', load: '25%' },
  ];

  return (
    <section id="interactive-dashboard-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Section Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-semibold uppercase tracking-wider font-mono">
            <Activity className="w-3.5 h-3.5" />
            <span>Interactive Production Telemetry</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-white tracking-tight">
            High-Availability Cloud Architecture Console
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Experience the real-time telemetry, auto-scaling nodes, and sub-50ms global routing standards built into every Pixevo enterprise software deployment.
          </p>
        </div>

        {/* Console Mode Selector */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl">
          <button
            onClick={() => setActiveTab('realtime')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'realtime'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Live Gateway
          </button>
          <button
            onClick={() => setActiveTab('pipelines')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'pipelines'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            AI & Pipelines
          </button>
          <button
            onClick={() => setActiveTab('infrastructure')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'infrastructure'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Global Regions
          </button>
        </div>
      </div>

      {/* Main Terminal & Interactive Console Container */}
      <div className="rounded-2xl bg-[#080E1E] border border-slate-800 overflow-hidden shadow-2xl p-5 sm:p-7 space-y-6">
        
        {/* Top Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <span className="text-slate-600">|</span>
            <div className="flex items-center gap-2">
              <PixevoMark size={18} />
              <span className="font-mono text-xs font-semibold text-slate-300">
                pixevo-cluster-v3.cloud.prod
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-emerald-400 font-semibold">99.99% UPTIME</span>
            </div>
            <span className="text-slate-700">•</span>
            <span>TLS 1.3 / mTLS ENFORCED</span>
          </div>
        </div>

        {/* Metric Cards Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-[11px] font-mono uppercase">Processed Requests</span>
              <Activity className="w-3.5 h-3.5 text-blue-400" />
            </div>
            <div className="text-2xl font-extrabold font-['Outfit'] text-white">
              {requestCount.toLocaleString()}
            </div>
            <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono">
              <TrendingUp className="w-3 h-3" />
              <span>+18.4% / peak hour</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-[11px] font-mono uppercase">Avg Edge Latency</span>
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
            </div>
            <div className="text-2xl font-extrabold font-['Outfit'] text-cyan-300">
              {avgLatency} <span className="text-sm font-normal text-slate-400">ms</span>
            </div>
            <div className="text-[10px] text-slate-400 font-mono">
              Global Redis Cache Hit: 94.2%
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-[11px] font-mono uppercase">Cluster CPU Utilization</span>
              <Cpu className="w-3.5 h-3.5 text-indigo-400" />
            </div>
            <div className="text-2xl font-extrabold font-['Outfit'] text-indigo-300">
              {cpuLoad}%
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-1">
              <div
                className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${cpuLoad}%` }}
              />
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-[11px] font-mono uppercase">Security Integrity</span>
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="text-2xl font-extrabold font-['Outfit'] text-emerald-400">
              0 Threats
            </div>
            <div className="text-[10px] text-slate-400 font-mono">
              WAF + DDoS Protection Active
            </div>
          </div>
        </div>

        {/* Tab 1: Realtime Live Gateway Stream */}
        {activeTab === 'realtime' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  Live Event Stream & API Traffic
                </span>
                <span className="text-[10px] font-mono text-slate-500">Auto-refreshing 2.5s</span>
              </div>

              <div className="space-y-2 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800/80 flex items-center justify-between hover:border-slate-700 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-bold">200 OK</span>
                    <span className="text-slate-300">POST /api/v1/auth/token-refresh</span>
                  </div>
                  <span className="text-slate-500 text-[11px]">19ms · Edge Cache</span>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800/80 flex items-center justify-between hover:border-slate-700 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 text-[10px] font-bold">200 OK</span>
                    <span className="text-slate-300">GET /api/v1/workspaces/analytics/query</span>
                  </div>
                  <span className="text-slate-500 text-[11px]">34ms · Postgres Pool</span>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800/80 flex items-center justify-between hover:border-slate-700 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 text-[10px] font-bold">201 OK</span>
                    <span className="text-slate-300">POST /api/v1/ai/rag/document-vectorize</span>
                  </div>
                  <span className="text-slate-500 text-[11px]">142ms · Gemini API</span>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800/80 flex items-center justify-between hover:border-slate-700 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-bold">200 OK</span>
                    <span className="text-slate-300">GET /api/v1/inventory/realtime-feed</span>
                  </div>
                  <span className="text-slate-500 text-[11px]">12ms · WebSocket PubSub</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <span className="text-xs font-bold text-white font-mono uppercase tracking-wider block">
                Cluster Health
              </span>

              <div className="space-y-3 text-xs">
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-400">Memory Allocation</span>
                    <span className="text-slate-200 font-mono">4.2 GB / 16 GB</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full rounded-full" style={{ width: '26%' }} />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-400">Database Connection Pool</span>
                    <span className="text-slate-200 font-mono">18 / 100 Active</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full rounded-full" style={{ width: '18%' }} />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-400">Worker Queue Latency</span>
                    <span className="text-emerald-400 font-mono">0 ms (Empty backlog)</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-cyan-400 h-full rounded-full" style={{ width: '4%' }} />
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 text-[11px] text-blue-300">
                ⚡ <strong>Production Benchmark</strong>: Auto-scaling triggers automatically when CPU exceeds 65%.
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: AI & Pipeline Architecture */}
        {activeTab === 'pipelines' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-cyan-400">
                <Bot className="w-4 h-4" />
                <span className="font-bold text-xs font-mono uppercase">LLM & Context RAG</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Integrated with Gemini 3.7 Flash & vector stores. Semantic search and real-time generation over your enterprise knowledge base.
              </p>
              <div className="pt-2 flex items-center gap-1.5 text-[10px] font-mono text-slate-500">
                <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-300">Pinecone / pgvector</span>
                <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-300">Sub-300ms RAG</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-blue-400">
                <Database className="w-4 h-4" />
                <span className="font-bold text-xs font-mono uppercase">Continuous ETL Ingestion</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Asynchronous event workers parsing incoming webhooks, invoices, and analytics feeds into unified Postgres schemas.
              </p>
              <div className="pt-2 flex items-center gap-1.5 text-[10px] font-mono text-slate-500">
                <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-blue-300">Redis BullMQ</span>
                <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-blue-300">Kafka Streams</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-indigo-400">
                <Sparkles className="w-4 h-4" />
                <span className="font-bold text-xs font-mono uppercase">Automated Workflows</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Trigger email dispatches, WhatsApp alerts, PDF generator microservices, and CRM updates without manual staff intervention.
              </p>
              <div className="pt-2 flex items-center gap-1.5 text-[10px] font-mono text-slate-500">
                <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-indigo-300">Event-Driven</span>
                <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-indigo-300">Zero-Loss Retry</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Global Regions */}
        {activeTab === 'infrastructure' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {regions.map((reg) => (
              <button
                key={reg.id}
                onClick={() => setActiveRegion(reg.id as any)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  activeRegion === reg.id
                    ? 'bg-blue-600/10 border-blue-500/50 shadow-md shadow-blue-500/10'
                    : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-[10px] font-mono text-emerald-400 font-bold px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                    {reg.status}
                  </span>
                </div>
                <div className="font-bold text-sm font-['Outfit'] text-white">
                  {reg.name}
                </div>
                <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Latency: <strong className="text-cyan-400">{reg.latency}</strong></span>
                  <span>Load: {reg.load}</span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
