import React, { useState, useMemo } from 'react';
import { PageId, FAQItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import {
  HelpCircle,
  ChevronDown,
  Search,
  Sparkles,
  Layers,
  Cpu,
  ShieldCheck,
  CreditCard,
  ArrowRight,
  MessageCircle,
  Mail,
  CheckCircle2,
} from 'lucide-react';

interface FAQSectionProps {
  onNavigate: (page: PageId) => void;
  onOpenEstimator?: () => void;
  title?: string;
  subtitle?: string;
  defaultCategory?: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  onNavigate,
  onOpenEstimator,
  title,
  subtitle,
  defaultCategory = 'All',
}) => {
  const { data, language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>(defaultCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>('faq-1');

  const categories = [
    { id: 'All', label: language === 'ar' ? 'الكل' : 'All' },
    { id: 'Process', label: language === 'ar' ? 'منهجية العمل' : 'Process' },
    { id: 'Technology', label: language === 'ar' ? 'التقنيات والذكاء الاصطناعي' : 'Technology' },
    { id: 'Development', label: language === 'ar' ? 'التطوير والهندسة' : 'Development' },
    { id: 'Security & IP', label: language === 'ar' ? 'الأمان وحقوق الملكية' : 'Security & IP' },
    { id: 'Pricing & Support', label: language === 'ar' ? 'الأسعار والدعم الفني' : 'Pricing & Support' },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Process':
        return Layers;
      case 'Technology':
        return Cpu;
      case 'Security & IP':
        return ShieldCheck;
      case 'Pricing & Support':
        return CreditCard;
      default:
        return HelpCircle;
    }
  };

  const currentFaqs = data.faqs;

  const filteredFaqs = useMemo(() => {
    return currentFaqs.filter((faq) => {
      const matchesCategory =
        selectedCategory === 'All' || faq.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [currentFaqs, selectedCategory, searchQuery]);

  const toggleFaq = (id: string) => {
    setExpandedFaqId((prev) => (prev === id ? null : id));
  };

  const displayTitle = title || (language === 'ar' ? 'الأسئلة الشائعة وإجابات الخبراء' : 'Frequently Asked Questions');
  const displaySubtitle = subtitle || (language === 'ar' ? 'إجابات واضحة ومباشرة على استفسارات العملاء حول منهجية التطوير، حزم التقنيات، الأسعار، وحقوق الملكية.' : 'Clear answers to common questions about our agile engineering process, technology stacks, pricing frameworks, and delivery guarantees.');

  return (
    <section className="space-y-10" id="faq-section">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider font-mono">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>{language === 'ar' ? 'دليل المعرفة واستفسارات العملاء' : 'Knowledge & Client Guide'}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-['Outfit'] text-white">
          {displayTitle}
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          {displaySubtitle}
        </p>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="max-w-4xl mx-auto space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 rtl:left-auto rtl:right-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={language === 'ar' ? 'ابحث في الأسئلة (مثال: الملكية الفكرية، الأسعار، الذكاء الاصطناعي، الضمان)...' : 'Search questions by topic (e.g. Flutter, sprint, pricing, IP ownership, AI)...'}
            className="w-full pl-11 pr-4 rtl:pl-4 rtl:pr-11 py-3 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-200 text-sm placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-200 px-2 py-1 bg-slate-800 rounded cursor-pointer"
            >
              {language === 'ar' ? 'مسح' : 'Clear'}
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
          {categories.map((cat) => {
            const count =
              cat.id === 'All'
                ? currentFaqs.length
                : currentFaqs.filter((f) => f.category === cat.id).length;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-900/20'
                    : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                    isSelected ? 'bg-blue-700 text-blue-100' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* FAQ Accordion List */}
      <div className="max-w-4xl mx-auto space-y-3">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq) => {
            const isOpen = expandedFaqId === faq.id;
            const Icon = getCategoryIcon(faq.category);

            return (
              <div
                key={faq.id}
                id={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900/80 border-blue-500/30 shadow-lg shadow-blue-950/20'
                    : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left rtl:text-right cursor-pointer select-none"
                >
                  <div className="flex items-start sm:items-center gap-3.5">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 sm:mt-0 transition-colors ${
                        isOpen
                          ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                          : 'bg-slate-800 text-slate-400 border border-slate-700/50'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="inline-block text-[11px] font-mono uppercase tracking-wider text-blue-400 font-semibold mb-1">
                        {faq.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-semibold font-['Outfit'] text-white">
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-blue-500/20 text-blue-400' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 border-t border-slate-800/60 mt-1">
                    <p className="text-sm text-slate-300 leading-relaxed pt-4 font-normal">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="p-8 text-center rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3">
            <HelpCircle className="w-8 h-8 text-slate-500 mx-auto" />
            <p className="text-sm text-slate-300">
              {language === 'ar' ? `لم يتم العثور على نتائج مطابقة لـ "${searchQuery}".` : `No matching questions found for "${searchQuery}".`}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="text-xs text-blue-400 hover:text-blue-300 underline cursor-pointer"
            >
              {language === 'ar' ? 'إعادة ضبط البحث والفلاتر' : 'Reset search and filters'}
            </button>
          </div>
        )}
      </div>

      {/* Interactive Helper CTA Box */}
      <div className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-blue-900/30 via-slate-900/60 to-indigo-900/30 border border-blue-500/20 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1.5 text-center sm:text-left rtl:sm:text-right">
          <div className="flex items-center justify-center sm:justify-start rtl:sm:justify-start gap-2 text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'ar' ? 'هل لديك استفسار تقني خاص بمشروعك؟' : 'Have a Specific Architecture Question?'}</span>
          </div>
          <h4 className="text-lg sm:text-xl font-bold font-['Outfit'] text-white">
            {language === 'ar' ? 'تحدث مباشرة مع كبار مهندسينا التقنيين' : 'Speak Directly with Our Engineering Leads'}
          </h4>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            {language === 'ar' ? 'سنقوم بمراجعة متطلبات نظامك وتقديم تقدير زمني وتكلفة مبدئية خلال ٢٤ ساعة.' : 'We will review your technical stack requirements and provide a free scope estimation within 24 hours.'}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          {onOpenEstimator && (
            <button
              onClick={onOpenEstimator}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white border border-slate-700 transition-all cursor-pointer whitespace-nowrap"
            >
              <span>{t('header.estimator')}</span>
            </button>
          )}

          <a
            href={data.company.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold transition-all cursor-pointer whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>{language === 'ar' ? 'محادثة عبر واتساب' : 'WhatsApp Architect'}</span>
          </a>

          <button
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white shadow-md shadow-blue-900/20 transition-all cursor-pointer whitespace-nowrap"
          >
            <span>{t('nav.contact')}</span>
            <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
          </button>
        </div>
      </div>
    </section>
  );
};

