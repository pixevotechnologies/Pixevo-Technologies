import React from 'react';
import { PageId } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { PageHeader } from '../components/PageHeader';
import { InteractiveProcess } from '../components/InteractiveProcess';
import {
  Compass,
  FileCode2,
  Palette,
  Cpu,
  Rocket,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Clock,
  Sparkles,
} from 'lucide-react';

interface ProcessPageProps {
  onNavigate: (page: PageId) => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onNavigate }) => {
  const { data, language, t } = useLanguage();
  const stepIcons = [Compass, FileCode2, Palette, Cpu, Rocket];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      <PageHeader
        category={language === 'ar' ? 'منهجيتنا الهندسية' : 'Our Engineering Methodology'}
        title={language === 'ar' ? 'مسار تطوير واضح ومنضبط في 5 مراحل شفافة' : 'Predictable, Transparent 5-Step Development Process'}
        description={language === 'ar' ? 'نتبع إطار عمل أجايل منضبط يقلل المخاطر ويضمن جودة الكود البرمجي مع وضوح كامل من المتطلبات الأولية حتى الإطلاق.' : 'We follow a disciplined agile framework that minimizes risk, ensures high code quality, and provides complete visibility from initial requirements to post-launch scaling.'}
        currentPageName={t('nav.process')}
        onNavigateHome={() => onNavigate('home')}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Interactive Step Explorer */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider">
              {language === 'ar' ? 'المستكشف التفاعلي للمراحل' : 'Interactive Phase Inspector'}
            </span>
            <h2 className="text-3xl font-bold font-['Outfit'] text-white">
              {language === 'ar' ? 'استكشف كل مرحلة تفصيلياً' : 'Explore Each Phase in Detail'}
            </h2>
          </div>
          <InteractiveProcess onStartProject={() => onNavigate('contact')} />
        </section>

        {/* Detailed Timeline Breakdown */}
        <section className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider">
              {language === 'ar' ? 'دورة حياة المشروع الشاملة' : 'End-to-End Lifecycle'}
            </span>
            <h2 className="text-3xl font-bold font-['Outfit'] text-white">
              {language === 'ar' ? 'المخرجات التفصيلية لكل مرحلة' : 'Comprehensive Phase Deliverables'}
            </h2>
          </div>

          <div className="space-y-6">
            {data.processSteps.map((step, idx) => {
              const Icon = stepIcons[idx] || Cpu;
              return (
                <div
                  key={step.number}
                  id={`process-detail-${step.number}`}
                  className="rounded-2xl bg-slate-900/40 border border-slate-800 p-6 sm:p-8 space-y-6 hover:border-slate-700 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-4">
                      <span className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center font-mono font-bold text-sm">
                        {step.number}
                      </span>
                      <div>
                        <h3 className="text-2xl font-bold font-['Outfit'] text-white">
                          {step.title} — {step.tagline}
                        </h3>
                        <span className="text-xs font-mono text-slate-400">
                          {language === 'ar' ? 'المدة التقديرية: ' : 'Estimated Duration: '}{step.durationEstimate}
                        </span>
                      </div>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed max-w-4xl">
                    {step.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    <div className="space-y-2">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block">
                        {language === 'ar' ? 'الأنشطة الأساسية' : 'Core Activities'}
                      </span>
                      <ul className="space-y-1.5">
                        {step.keyActivities.map((act, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                            <span className="text-blue-400">•</span>
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block">
                        {language === 'ar' ? 'المخرجات الملموسة' : 'Tangible Deliverables'}
                      </span>
                      <ul className="space-y-1.5">
                        {step.deliverables.map((deliv, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{deliv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Quality Assurance Standards */}
        <section className="p-8 sm:p-10 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
              {language === 'ar' ? 'ضمان الجودة والتحقق الهندسي' : 'Quality Assurance & Verification'}
            </span>
            <h3 className="text-2xl font-bold font-['Outfit'] text-white">
              {language === 'ar' ? 'صرامة هندسية مدمجة في كل مرحلة تطوير' : 'Engineering Rigor Built into Every Sprint'}
            </h3>
            <p className="text-slate-400 text-sm max-w-3xl leading-relaxed">
              {language === 'ar'
                ? 'لا نؤجل الاختبار حتى نهاية المشروع. تُجرى الاختبارات الآلية والتحقق التكاملي وفحوصات الأمان عبر مسارات CI/CD مؤتمتة باستمرار.'
                : 'We do not postpone testing until the end of a project. Automated unit tests, integration validation, and cross-device security checks run continuously through automated CI/CD pipelines.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-1">
              <span className="text-white font-bold block font-['Outfit']">{language === 'ar' ? 'التحقق الساكن من الأنواع' : 'Static Type Checking'}</span>
              <span className="text-slate-400">{language === 'ar' ? 'أنواع TypeScript صارمة بنسبة 100% لموثوقية عالية أثناء التشغيل.' : '100% strict TypeScript typing ensuring runtime reliability.'}</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-1">
              <span className="text-white font-bold block font-['Outfit']">{language === 'ar' ? 'مسارات التكامل المؤتمتة' : 'Automated Pipelines'}</span>
              <span className="text-slate-400">{language === 'ar' ? 'تكامل مستمر عبر GitHub Actions يشغّل وحدات الاختبار الآلية.' : 'GitHub Actions continuous integration running unit & integration suites.'}</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-1">
              <span className="text-white font-bold block font-['Outfit']">{language === 'ar' ? 'إطلاقات مستمرة دون انقطاع' : 'Zero-Downtime Releases'}</span>
              <span className="text-slate-400">{language === 'ar' ? 'نشر وتوزيع عبر الحاويات مع إجراءات استرجاع فورية عند الطوارئ.' : 'Containerized deployments with instant rollback safeguards.'}</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
