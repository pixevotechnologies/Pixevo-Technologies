import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Compass,
  FileCode2,
  Palette,
  Cpu,
  Rocket,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface InteractiveProcessProps {
  onStartProject?: () => void;
}

export const InteractiveProcess: React.FC<InteractiveProcessProps> = ({ onStartProject }) => {
  const { data, language } = useLanguage();
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const steps = data.processSteps;
  const stepIcons = [Compass, FileCode2, Palette, Cpu, Rocket];
  const currentStep = steps[activeStepIndex] || steps[0];
  const StepIcon = stepIcons[activeStepIndex] || Compass;

  return (
    <div className="w-full space-y-8">
      {/* Step Numbers & Tabs Progress Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3">
        {steps.map((step, idx) => {
          const Icon = stepIcons[idx] || Compass;
          const isActive = activeStepIndex === idx;
          const isCompleted = idx < activeStepIndex;

          return (
            <button
              key={step.number}
              id={`process-step-btn-${step.number}`}
              onClick={() => setActiveStepIndex(idx)}
              className={`relative text-left p-3.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-blue-600/15 border-blue-500/70 shadow-lg shadow-blue-900/20 ring-1 ring-blue-500/50'
                  : 'bg-slate-900/40 hover:bg-slate-800/40 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                    isActive
                      ? 'bg-blue-500 text-white'
                      : isCompleted
                      ? 'bg-emerald-500/20 text-emerald-400'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {step.number}
                </span>
                <Icon
                  className={`w-4 h-4 ${
                    isActive ? 'text-blue-400' : 'text-slate-500'
                  }`}
                />
              </div>

              <div className="font-bold text-sm font-['Outfit'] text-white">
                {step.title}
              </div>
              <div className="text-[11px] text-slate-400 truncate mt-0.5">
                {step.tagline}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Phase Deep Dive Card */}
      <div className="rounded-2xl bg-slate-900/40 border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
        {/* Subtle glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Summary & Activities */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shadow-md">
                <StepIcon className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">
                    {language === 'ar' ? `المرحلة ${currentStep.number}` : `Phase ${currentStep.number}`}
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    <span>{language === 'ar' ? `المدة التقديرية: ${currentStep.durationEstimate}` : `Est. ${currentStep.durationEstimate}`}</span>
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-white">
                  {currentStep.title} — {currentStep.tagline}
                </h3>
              </div>
            </div>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {currentStep.description}
            </p>

            {/* Key Activities */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>{language === 'ar' ? 'الأنشطة الهندسية الأساسية' : 'Key Engineering Activities'}</span>
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-1 gap-2.5">
                {currentStep.keyActivities.map((act, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 bg-slate-950 p-3 rounded-lg border border-slate-800"
                  >
                    <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-[10px] font-mono shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Deliverables Checklist */}
          <div className="lg:col-span-5 bg-slate-950 rounded-xl border border-slate-800 p-5 sm:p-6 space-y-4 shadow-inner">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h4 className="text-sm font-bold text-white font-['Outfit']">
                {language === 'ar' ? 'مخرجات المرحلة' : 'Phase Deliverables'}
              </h4>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                {language === 'ar' ? 'مخرجات معتمدة' : 'Verified Output'}
              </span>
            </div>

            <div className="space-y-2.5">
              {currentStep.deliverables.map((deliv, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900 border border-slate-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-slate-200">{deliv}</span>
                </div>
              ))}
            </div>

            {/* Next Step Quick Nav */}
            <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
              {activeStepIndex < steps.length - 1 ? (
                <button
                  onClick={() => setActiveStepIndex((prev) => prev + 1)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-full transition-all cursor-pointer"
                >
                  <span>
                    {language === 'ar'
                      ? `التالي: المرحلة ${steps[activeStepIndex + 1].number} (${steps[activeStepIndex + 1].title})`
                      : `Next: Phase ${steps[activeStepIndex + 1].number} (${steps[activeStepIndex + 1].title})`}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  onClick={onStartProject}
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-full shadow-md shadow-blue-900/20 transition-all cursor-pointer"
                >
                  <span>{language === 'ar' ? 'ابدأ مشروعك وفق منهجيتنا' : 'Start Your Project With Our Process'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
