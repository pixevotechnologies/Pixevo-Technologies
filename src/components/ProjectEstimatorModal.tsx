import React, { useState } from 'react';
import {
  X,
  Sparkles,
  Layers,
  Clock,
  Code2,
  Users,
  CheckCircle2,
  ArrowRight,
  Calculator,
  Loader2,
} from 'lucide-react';
import { PageId } from '../types';

interface ProjectEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToContact: (prefillData: {
    service: string;
    budget: string;
    details: string;
  }) => void;
}

export const ProjectEstimatorModal: React.FC<ProjectEstimatorModalProps> = ({
  isOpen,
  onClose,
  onProceedToContact,
}) => {
  const [projectType, setProjectType] = useState<string>('Web Application');
  const [complexity, setComplexity] = useState<'mvp' | 'standard' | 'enterprise'>('standard');
  const [platforms, setPlatforms] = useState<string[]>(['Web Desktop & Mobile']);
  const [features, setFeatures] = useState<string[]>([
    'User Auth & Roles',
    'Third-Party API Integration',
  ]);
  const [timelinePreference, setTimelinePreference] = useState<'standard' | 'accelerated'>(
    'standard'
  );
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  if (!isOpen) return null;

  const projectTypes = [
    'Custom Software',
    'Web Application',
    'Mobile App (iOS/Android)',
    'AI & Automation',
    'E-commerce Platform',
    'UI/UX Design System',
  ];

  const availableFeatures = [
    'User Auth & Roles',
    'Payment Gateway (Stripe/PayPal)',
    'AI Assistant / LLM Integration',
    'Real-time Notifications / WebSockets',
    'Analytics & Reporting Dashboard',
    'Third-Party API Integration',
    'Multi-Language / Localization',
    'Offline Sync / Local Caching',
  ];

  const handleToggleFeature = (feat: string) => {
    if (features.includes(feat)) {
      setFeatures(features.filter((f) => f !== feat));
    } else {
      setFeatures([...features, feat]);
    }
  };

  // Estimate calculation logic
  const calculateEstimate = () => {
    let weeks = 6;
    let budgetGuide = '$10k – $25k';
    let team = '1 Lead Engineer + 1 UI/UX Designer';
    let stack = 'React + TypeScript + Node.js + PostgreSQL';

    if (complexity === 'mvp') {
      weeks = 4 + Math.floor(features.length * 0.4);
      budgetGuide = '$5k – $15k';
      team = '1 Full-Stack Engineer + 1 UI/UX Designer';
    } else if (complexity === 'standard') {
      weeks = 6 + Math.floor(features.length * 0.8);
      budgetGuide = '$15k – $35k';
      team = '2 Engineers + 1 UI/UX Designer + 1 QA';
    } else {
      weeks = 10 + Math.floor(features.length * 1.2);
      budgetGuide = '$35k+';
      team = '3 Engineers + 1 UI/UX + 1 Cloud Architect + 1 QA';
    }

    if (projectType.includes('Mobile')) {
      stack = 'React Native / Flutter + Express + PostgreSQL';
    } else if (projectType.includes('AI')) {
      stack = 'Gemini API + Python FastAPI + Vector Store + React';
    }

    if (timelinePreference === 'accelerated') {
      weeks = Math.max(3, Math.round(weeks * 0.75));
    }

    return {
      estimatedWeeks: `${weeks} - ${weeks + 3} Weeks`,
      budgetGuide,
      team,
      stack,
    };
  };

  const estimate = calculateEstimate();

  const handleTransferToInquiry = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const summary = `Project Type: ${projectType}\nComplexity Tier: ${complexity.toUpperCase()}\nSelected Features: ${features.join(
        ', '
      )}\nEstimated Timeline: ${estimate.estimatedWeeks}\nRecommended Stack: ${
        estimate.stack
      }`;
      onProceedToContact({
        service: projectType,
        budget: estimate.budgetGuide,
        details: summary,
      });
      setIsGenerating(false);
      onClose();
    }, 450);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="estimator-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-900 transition-all cursor-pointer"
          aria-label="Close estimator modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Scoping Tool</span>
          </div>
          <h2
            id="estimator-title"
            className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-white"
          >
            Project Scope & Timeline Estimator
          </h2>
          <p className="text-sm text-slate-400">
            Configure your technical requirements to receive instant architectural guidance and delivery timeframes.
          </p>
        </div>

        {/* Configuration Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
          {/* Left Form: Options */}
          <div className="lg:col-span-7 space-y-5">
            {/* 1. Project Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 font-mono mb-2">
                1. Project Category
              </label>
              <div className="grid grid-cols-2 gap-2">
                {projectTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setProjectType(type)}
                    className={`p-2.5 text-xs font-medium rounded-xl text-left border transition-all cursor-pointer ${
                      projectType === type
                        ? 'bg-blue-600/10 border-blue-500 text-white font-semibold'
                        : 'bg-slate-900/40 border-slate-800 text-slate-300 hover:bg-slate-900 hover:text-white'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Complexity Tier */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 font-mono mb-2">
                2. Project Scale & Complexity
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'mvp', label: 'MVP / Prototype', desc: 'Core feature validation' },
                  { id: 'standard', label: 'Production App', desc: 'Complete business tool' },
                  { id: 'enterprise', label: 'Enterprise Platform', desc: 'High scale & compliance' },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setComplexity(tier.id as any)}
                    className={`p-3 text-left rounded-xl border transition-all cursor-pointer ${
                      complexity === tier.id
                        ? 'bg-blue-600/10 border-blue-500 text-white'
                        : 'bg-slate-900/40 border-slate-800 text-slate-300 hover:bg-slate-900 hover:text-white'
                    }`}
                  >
                    <div className="text-xs font-bold font-['Outfit']">{tier.label}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5 leading-tight">
                      {tier.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Feature Matrix */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 font-mono mb-2">
                3. Key Functional Modules
              </label>
              <div className="grid grid-cols-2 gap-2">
                {availableFeatures.map((feat) => {
                  const isChecked = features.includes(feat);
                  return (
                    <button
                      key={feat}
                      onClick={() => handleToggleFeature(feat)}
                      className={`flex items-center gap-2 p-2 text-xs rounded-xl border text-left transition-all cursor-pointer ${
                        isChecked
                          ? 'bg-blue-600/10 border-blue-500/60 text-white'
                          : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                      }`}
                    >
                      <span
                        className={`w-4 h-4 rounded flex items-center justify-center text-[10px] ${
                          isChecked ? 'bg-blue-600 text-white' : 'border border-slate-700'
                        }`}
                      >
                        {isChecked && '✓'}
                      </span>
                      <span className="truncate">{feat}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Calculated Blueprint Card */}
          <div className="lg:col-span-5 bg-slate-900/40 rounded-2xl border border-slate-800 p-5 space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
                  Estimated Summary
                </span>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  Live Guidance
                </span>
              </div>

              {/* Timeline Output */}
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>Estimated Delivery Time</span>
                </div>
                <div className="text-xl font-bold font-['Outfit'] text-white">
                  {estimate.estimatedWeeks}
                </div>
              </div>

              {/* Stack Recommendation */}
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Code2 className="w-4 h-4 text-indigo-400" />
                  <span>Recommended Architecture</span>
                </div>
                <div className="text-xs font-mono font-semibold text-slate-200">
                  {estimate.stack}
                </div>
              </div>

              {/* Team Composition */}
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span>Dedicated Squad Setup</span>
                </div>
                <div className="text-xs text-slate-300">{estimate.team}</div>
              </div>
            </div>

            {/* CTA to Transfer to Project Inquiry */}
            <div className="pt-4 border-t border-slate-800 space-y-2">
              <button
                onClick={handleTransferToInquiry}
                disabled={isGenerating}
                id="transfer-estimate-to-inquiry-btn"
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:opacity-75 rounded-full shadow-md shadow-blue-900/20 transition-all cursor-pointer"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Generating Scope Breakdown...</span>
                  </>
                ) : (
                  <>
                    <span>Discuss This Scope With Our Engineers</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
              <p className="text-[11px] text-center text-slate-500">
                Transfers these specifications directly into your project inquiry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
