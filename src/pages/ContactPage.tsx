import React, { useState } from 'react';
import { PageId, ContactFormData } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { PageHeader } from '../components/PageHeader';
import { ContactFormSection } from '../components/ContactFormSection';
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  ShieldCheck,
  Zap,
  Lock,
  Sparkles,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  prefill?: Partial<ContactFormData>;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  prefill,
}) => {
  const { data, language, t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      <PageHeader
        category={language === 'ar' ? 'ابدأ محادثة مع فريقنا' : 'Start a Conversation'}
        title={language === 'ar' ? 'تواصل مع فريق بيكسيفو تكنولوجيز' : 'Get in Touch with Pixevo Technologies'}
        description={language === 'ar' ? 'سواء كان لديك مشروع برمجي محدد، أو تحتاج استشارة معمارية تقنية، أو ترغب بمناقشة دمج الذكاء الاصطناعي، فريقنا مستعد لخدمتك.' : 'Whether you have a specific software project in mind, need technical architecture advice, or want to discuss an AI integration, our team is ready to assist.'}
        currentPageName={t('nav.contact')}
        onNavigateHome={() => onNavigate('home')}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Main Interactive Contact & Booking Form */}
        <section id="contact-form-block">
          <ContactFormSection
            prefill={prefill}
            headline={language === 'ar' ? 'ابدأ استشارتك التقنية' : 'Start Your Technical Inquiry'}
            subheadline={language === 'ar' ? 'املأ النموذج أدناه أو احجز جلسة استكشافية عبر مكالمة فيديو مع قيادتنا الهندسية.' : 'Fill out the form below or book an introductory video discovery call with our engineering leadership.'}
          />
        </section>

        {/* Frequently Asked Questions Accordion */}
        <section className="space-y-8 max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider">
              {language === 'ar' ? 'الاستفسارات الشائعة' : 'Common Inquiries'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-white">
              {language === 'ar' ? 'الأسئلة الشائعة حول التعاون معنا' : 'Frequently Asked Questions About Working With Us'}
            </h2>
          </div>

          <div className="space-y-3">
            {data.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-slate-900/40 border border-slate-800 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left rtl:text-right flex items-center justify-between gap-4 text-slate-200 hover:text-white transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-semibold font-['Outfit']">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-blue-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-400 border-t border-slate-800 leading-relaxed bg-slate-950/40 animate-in fade-in duration-150 text-left rtl:text-right">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};
