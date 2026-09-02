import React, { useState } from 'react';
import { PageId, TestimonialItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import {
  MessageSquareQuote,
  Star,
  Quote,
  Building2,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Info,
} from 'lucide-react';

interface TestimonialsSectionProps {
  onNavigate?: (page: PageId) => void;
  showNotice?: boolean;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  onNavigate,
  showNotice = true,
}) => {
  const { data, language, t } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'enterprise' | 'mobile' | 'ai'>('all');

  const filteredTestimonials = data.testimonials.filter((item) => {
    if (filter === 'all') return true;
    if (filter === 'enterprise') return item.projectScope?.toLowerCase().includes('enterprise') || item.projectScope?.toLowerCase().includes('saas') || item.projectScope?.includes('مؤسسية') || item.projectScope?.includes('سحابية');
    if (filter === 'mobile') return item.projectScope?.toLowerCase().includes('mobile') || item.projectScope?.toLowerCase().includes('ios') || item.projectScope?.includes('هاتف') || item.projectScope?.includes('تطبيق');
    if (filter === 'ai') return item.projectScope?.toLowerCase().includes('ai') || item.projectScope?.toLowerCase().includes('automation') || item.projectScope?.includes('ذكاء') || item.projectScope?.includes('أتمتة');
    return true;
  });

  const filterTabs = [
    { id: 'all', label: language === 'ar' ? 'جميع الآراء' : 'All Reviews' },
    { id: 'enterprise', label: language === 'ar' ? 'الأنظمة المؤسسية و SaaS' : 'Enterprise & SaaS' },
    { id: 'mobile', label: language === 'ar' ? 'تطبيقات الهواتف' : 'Mobile Apps' },
    { id: 'ai', label: language === 'ar' ? 'الذكاء الاصطناعي والأتمتة' : 'AI & Automation' },
  ];

  return (
    <section id="testimonials-section" className="space-y-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider font-mono">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>{language === 'ar' ? 'آراء وتوصيات العملاء' : 'Client Endorsements & Feedback'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-white tracking-tight">
            {language === 'ar' ? 'ماذا يقول شركاؤنا وعملاؤنا عن العمل معنا' : 'What Clients Say About Working With Us'}
          </h2>
          <p className="text-slate-400 text-sm">
            {language === 'ar'
              ? 'تجارب وآراء المؤسسين، والمديرين التقنيين، وقادة المنتجات الذين وثقوا في بيكسيفو للتقنية لتنفيذ مشاريعهم.'
              : 'Read perspectives from founders, engineering leads, and product owners who partnered with Pixevo Technologies.'}
          </p>
        </div>

        {onNavigate && (
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-full shadow-md shadow-blue-900/20 transition-all whitespace-nowrap cursor-pointer"
          >
            <span>{language === 'ar' ? 'ابدأ مشروعك وشارك تجربتك' : 'Start a Project & Share Feedback'}</span>
            <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
          </button>
        )}
      </div>

      {/* Real Testimonials Placeholder Notice */}
      {showNotice && (
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider block">
                {language === 'ar' ? 'قسم آراء وتقييمات العملاء' : 'Testimonial Showcase Section'}
              </span>
              <p className="text-xs text-slate-400 mt-0.5">
                {language === 'ar'
                  ? 'النماذج أدناه هي عينات أولية لتجارب المشاريع. يتم تحديث ونشر مراجعات وتقييمات العملاء الحقيقية فور اكتمال وتسليم المشاريع.'
                  : 'The entries below are sample placeholder templates. Real client reviews, video testimonials, and partner quotes can be easily updated and published here as engagements conclude.'}
              </p>
            </div>
          </div>

          <span className="px-3 py-1 text-[11px] font-mono rounded-full bg-slate-950 border border-slate-800 text-slate-400 whitespace-nowrap">
            {language === 'ar' ? 'جاهز للعرض' : 'Template Slot Ready'}
          </span>
        </div>
      )}

      {/* Category Filter Chips */}
      <div className="flex flex-wrap items-center gap-2">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id as any)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              filter === tab.id
                ? 'bg-blue-600 text-white shadow-md shadow-blue-900/20'
                : 'bg-slate-950 text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-slate-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTestimonials.map((testimonial, idx) => (
          <div
            key={testimonial.id}
            id={`testimonial-${testimonial.id}`}
            className="p-6 sm:p-7 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-6 relative group"
          >
            {/* Top metadata & Star Rating */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                {/* 5-star rating */}
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating || 5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  {testimonial.isPlaceholder && (
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-950 text-slate-400 border border-slate-800">
                      {language === 'ar' ? 'نموذج تقييم' : 'Sample Testimonial'}
                    </span>
                  )}
                  <span className="text-xs font-mono text-slate-500">
                    0{idx + 1}
                  </span>
                </div>
              </div>

              {/* Quote text */}
              <div className="relative">
                <Quote className="w-8 h-8 text-blue-500/20 absolute -top-2 -left-1 rtl:-left-auto rtl:-right-1 pointer-events-none" />
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed pl-6 rtl:pl-0 rtl:pr-6 relative z-10 italic">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Project Scope pill if present */}
              {testimonial.projectScope && (
                <div className="pt-1">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-400 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>{language === 'ar' ? 'نطاق المشروع' : 'Scope'}: {testimonial.projectScope}</span>
                  </span>
                </div>
              )}
            </div>

            {/* Client Profile Footer */}
            <div className="pt-4 border-t border-slate-800 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-blue-600/30 to-indigo-600/30 border border-blue-500/30 flex items-center justify-center text-white font-bold font-['Outfit'] text-sm shrink-0">
                {testimonial.avatarInitials || testimonial.clientName.charAt(0)}
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-sm font-bold text-white font-['Outfit'] truncate">
                  {testimonial.clientName}
                </h4>
                <div className="text-xs text-slate-400 truncate">
                  {testimonial.title}
                </div>
                <div className="text-xs text-blue-400 font-medium flex items-center gap-1 mt-0.5 truncate">
                  <Building2 className="w-3 h-3 shrink-0" />
                  <span>{testimonial.company}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Your Testimonial Prompt Footer */}
      <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-2">
        <p className="text-xs text-slate-400">
          {language === 'ar'
            ? 'هل تعاونت مع بيكسيفو للتقنية في تطوير برمجيات، أو تطبيقات موبايل، أو حلول الذكاء الاصطناعي؟'
            : 'Have you partnered with Pixevo Technologies on a custom software, mobile app, or AI project?'}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-blue-400">
          <span>{language === 'ar' ? 'نعتز بكل شراكة تقنية ونرحب بملاحظاتكم دائماً.' : 'We value every client relationship and feedback loop.'}</span>
          {onNavigate && (
            <button
              onClick={() => onNavigate('contact')}
              className="underline hover:text-blue-300 cursor-pointer"
            >
              {language === 'ar' ? 'تواصل معنا لمشاركة تجربتك ←' : 'Get in touch to submit a case quote →'}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

