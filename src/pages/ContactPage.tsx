import React, { useState } from 'react';
import { PageId, ContactFormData } from '../types';
import { PageHeader } from '../components/PageHeader';
import { ContactFormSection } from '../components/ContactFormSection';
import { FAQS_DATA } from '../data/siteData';
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
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      <PageHeader
        category="Start a Conversation"
        title="Get in Touch with Pixevo Technologies"
        description="Whether you have a specific software project in mind, need technical architecture advice, or want to discuss an AI integration, our team is ready to assist."
        currentPageName="Contact"
        onNavigateHome={() => onNavigate('home')}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Main Interactive Contact & Booking Form */}
        <section id="contact-form-block">
          <ContactFormSection
            prefill={prefill}
            headline="Start Your Technical Inquiry"
            subheadline="Fill out the form below or book an introductory video discovery call with our engineering leadership."
          />
        </section>

        {/* Frequently Asked Questions Accordion */}
        <section className="space-y-8 max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider">
              Common Inquiries
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-white">
              Frequently Asked Questions About Working With Us
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS_DATA.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-slate-900/40 border border-slate-800 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 text-slate-200 hover:text-white transition-colors cursor-pointer"
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
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-400 border-t border-slate-800 leading-relaxed bg-slate-950/40 animate-in fade-in duration-150">
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
