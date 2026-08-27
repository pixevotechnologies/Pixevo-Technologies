import React, { useState } from 'react';
import { PageId } from '../types';
import { SERVICES_DATA } from '../data/siteData';
import { PageHeader } from '../components/PageHeader';
import {
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
  ArrowRight,
  Sparkles,
  Layers,
  FileCheck,
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onInquireService: (serviceName: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onInquireService,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

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

  const filteredServices = SERVICES_DATA;

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      <PageHeader
        category="Comprehensive Engineering Services"
        title="Custom Software, Mobile, Web & AI Solutions"
        description="Explore our full spectrum of software development services designed to help businesses build scalable digital products, automate operations, and compete effectively."
        currentPageName="Services"
        onNavigateHome={() => onNavigate('home')}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Services List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((service, index) => {
            const Icon = getServiceIcon(service.iconName);
            return (
              <div
                key={service.id}
                id={`service-${service.id}`}
                className="rounded-2xl bg-slate-900/40 border border-slate-800 p-7 sm:p-8 space-y-6 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
                      Service 0{index + 1}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold font-['Outfit'] text-white">
                      {service.title}
                    </h2>
                    <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                      {service.fullDesc}
                    </p>
                  </div>

                  {/* Core Capabilities */}
                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block">
                      Key Capabilities
                    </span>
                    <ul className="space-y-2">
                      {service.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block">
                      Typical Deliverables
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.deliverables.map((deliv, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300"
                        >
                          <FileCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="truncate">{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Tech Tags & Action */}
                <div className="pt-5 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {service.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-xs font-mono bg-slate-950 text-slate-300 rounded border border-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onInquireService(service.title)}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-full shadow-md shadow-blue-900/20 transition-all whitespace-nowrap cursor-pointer"
                  >
                    <span>Inquire About Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Engineering Banner */}
        <section className="p-8 sm:p-10 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold font-['Outfit'] text-white">
              Need a Custom Multi-Disciplinary Software Solution?
            </h3>
            <p className="text-slate-400 text-sm max-w-xl">
              Many business systems combine custom web portals, mobile apps, and automated AI pipelines. We can architect a unified solution tailored to your exact workflows.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-full shadow-lg shadow-blue-900/20 transition-all whitespace-nowrap cursor-pointer"
          >
            Schedule a Technical Discovery Call
          </button>
        </section>
      </div>
    </div>
  );
};
