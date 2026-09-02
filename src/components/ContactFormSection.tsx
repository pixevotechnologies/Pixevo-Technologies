import React, { useState, useEffect } from 'react';
import { ContactFormData } from '../types';
import { COMPANY_INFO, SERVICES_DATA } from '../data/siteData';
import {
  submitContactInquiry,
  generateDirectMailtoUrl,
  generateWhatsAppInquiryUrl,
} from '../services/emailService';
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  Calendar,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  MessageSquare,
  FileCheck,
  MessageCircle,
  Linkedin,
  Github,
  Instagram,
  Facebook,
  Loader2,
  ExternalLink,
} from 'lucide-react';

interface ContactFormSectionProps {
  prefill?: Partial<ContactFormData>;
  headline?: string;
  subheadline?: string;
}

export const ContactFormSection: React.FC<ContactFormSectionProps> = ({
  prefill,
  headline = 'Start Your Project Inquiry',
  subheadline = 'Tell us about your project requirements. Our engineering leads will review your specs and schedule a technical discovery call.',
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    serviceRequired: 'Custom Software Development',
    budget: '$15k – $35k',
    projectDetails: '',
    timeline: 'Within 1 - 2 Months',
  });

  const [activeTab, setActiveTab] = useState<'inquiry' | 'call'>('inquiry');
  const [callDate, setCallDate] = useState<string>('2026-09-01');
  const [callTime, setCallTime] = useState<string>('14:00 UTC');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inquiryId, setInquiryId] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (prefill) {
      setFormData((prev) => ({
        ...prev,
        serviceRequired: prefill.serviceRequired || prev.serviceRequired,
        budget: prefill.budget || prev.budget,
        projectDetails: prefill.projectDetails || prev.projectDetails,
      }));
    }
  }, [prefill]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const payload = {
        type: activeTab,
        fullName: formData.fullName,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        serviceRequired: formData.serviceRequired,
        budget: formData.budget,
        projectDetails: formData.projectDetails,
        timeline: formData.timeline,
        callDate: activeTab === 'call' ? callDate : undefined,
        callTime: activeTab === 'call' ? callTime : undefined,
      };

      const result = await submitContactInquiry(payload);
      setInquiryId(result.inquiryId);
      setSubmitted(true);
    } catch (err: any) {
      console.error('Submission failed:', err);
      setErrorMessage(
        'There was an issue dispatching the form. You can still email us directly at pixevotechnologies@gmail.com or click the WhatsApp button.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const budgetRanges = [
    '< $10,000',
    '$10,000 – $25,000',
    '$25,000 – $50,000',
    '$50,000 – $100,000',
    '$100,000+',
    'Undetermined / Needs Scoping',
  ];

  const timelineOptions = [
    'Immediately (< 2 Weeks)',
    'Within 1 - 2 Months',
    'Within 3 - 6 Months',
    'Flexible / Long-Term Planning',
  ];

  return (
    <div className="w-full bg-slate-900/40 rounded-2xl border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Direct Info & Trust Badges */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Engineering Communication</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Outfit'] text-white tracking-tight">
              {headline}
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              {subheadline}
            </p>
          </div>

          {/* Contact Direct Cards */}
          <div className="space-y-3 pt-2">
            {/* Email */}
            <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="text-xs space-y-0.5 min-w-0 flex-1">
                <span className="font-mono text-slate-400 uppercase tracking-wider block text-[10px]">
                  Email Inquiries
                </span>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="font-semibold text-slate-200 hover:text-blue-400 transition-colors block truncate"
                >
                  {COMPANY_INFO.email}
                </a>
                <span className="text-slate-400 block text-[11px]">
                  Direct engineering & partnership inbox
                </span>
              </div>
            </div>

            {/* Phone & WhatsApp */}
            <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-xs space-y-1 min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-slate-400 uppercase tracking-wider block text-[10px]">
                    Phone / WhatsApp
                  </span>
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-3 h-3" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="font-semibold text-slate-200 hover:text-blue-400 transition-colors block text-sm"
                >
                  {COMPANY_INFO.phone}
                </a>
                <span className="text-slate-400 block text-[11px]">
                  Call or message for instant consultation
                </span>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="text-xs space-y-0.5">
                <span className="font-mono text-slate-400 uppercase tracking-wider block text-[10px]">
                  Headquarters & Delivery
                </span>
                <span className="font-semibold text-slate-200 block text-sm">
                  {COMPANY_INFO.location}
                </span>
                <span className="text-slate-400 block text-[11px]">
                  Distributed engineering delivering to clients globally
                </span>
              </div>
            </div>

            {/* Hours & Response */}
            <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div className="text-xs space-y-1">
                <span className="font-mono text-slate-400 uppercase tracking-wider block text-[10px]">
                  Business Hours & Availability
                </span>
                <div className="space-y-0.5">
                  <div className="font-semibold text-slate-200">
                    {COMPANY_INFO.businessHours}
                  </div>
                  <div className="text-slate-400 text-[11px]">
                    {COMPANY_INFO.businessDays}
                  </div>
                </div>
                <span className="text-emerald-400 block text-[11px] font-medium pt-0.5">
                  • Fast response during business hours
                </span>
              </div>
            </div>
          </div>

          {/* Social Profiles & Channels */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-200">
                Official Profiles & Channels
              </span>
              <span className="text-[10px] font-mono text-slate-500">
                Click to open
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <a
                href={COMPANY_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-lg bg-slate-900 hover:bg-blue-600/20 hover:border-blue-500/40 text-slate-300 hover:text-white border border-slate-800 text-xs transition-all"
                title="Pixevo Technologies LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span className="truncate">LinkedIn</span>
              </a>
              <a
                href={COMPANY_INFO.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-lg bg-slate-900 hover:bg-slate-800 hover:border-slate-700 text-slate-300 hover:text-white border border-slate-800 text-xs transition-all"
                title="Pixevo Technologies GitHub"
              >
                <Github className="w-3.5 h-3.5 text-slate-300" />
                <span className="truncate">GitHub</span>
              </a>
              <a
                href={COMPANY_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-lg bg-slate-900 hover:bg-pink-600/20 hover:border-pink-500/40 text-slate-300 hover:text-white border border-slate-800 text-xs transition-all"
                title="Pixevo Technologies Instagram"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <span className="truncate">Instagram</span>
              </a>
              <a
                href={COMPANY_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-lg bg-slate-900 hover:bg-blue-700/20 hover:border-blue-600/40 text-slate-300 hover:text-white border border-slate-800 text-xs transition-all"
                title="Pixevo Technologies Facebook"
              >
                <Facebook className="w-3.5 h-3.5 text-blue-500" />
                <span className="truncate">Facebook</span>
              </a>
            </div>
          </div>

          {/* NDA & IP Protection Guarantee */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>Confidentiality & Non-Disclosure Agreement</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              We sign mutual NDAs before reviewing sensitive business workflows, source code, or proprietary data.
            </p>
          </div>
        </div>

        {/* Right Column: Interactive Form & Call Booking */}
        <div className="lg:col-span-7 bg-slate-950 rounded-xl border border-slate-800 p-5 sm:p-7 shadow-inner">
          {/* Mode Switcher: Written Inquiry vs Book Discovery Call */}
          <div className="flex items-center gap-2 pb-5 border-b border-slate-800 mb-5">
            <button
              onClick={() => setActiveTab('inquiry')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'inquiry'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-900/20'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Project Inquiry Form</span>
            </button>

            <button
              onClick={() => setActiveTab('call')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'call'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-900/20'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Discovery Call</span>
            </button>
          </div>

          {submitted ? (
            <div className="py-8 text-center space-y-5">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold">
                  <span>Delivered to {COMPANY_INFO.email}</span>
                </div>
                <h3 className="text-2xl font-bold font-['Outfit'] text-white">
                  Thank You, {formData.fullName || 'Partner'}!
                </h3>
                <p className="text-xs font-mono text-slate-400">
                  Tracking Reference ID: <strong className="text-blue-400">{inquiryId}</strong>
                </p>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-left text-xs space-y-2 max-w-lg mx-auto">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Target Service:</span>
                  <span className="font-semibold text-white">{formData.serviceRequired}</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Budget Range:</span>
                  <span className="font-semibold text-emerald-400">{formData.budget}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Follow-up Destination:</span>
                  <span className="font-semibold text-blue-400 truncate max-w-[200px]">{formData.email}</span>
                </div>
              </div>

              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Your inquiry has been dispatched to our engineering architecture leads. We will review your technical requirements and contact you within 24 hours.
              </p>

              {/* Direct Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={generateDirectMailtoUrl({
                    fullName: formData.fullName,
                    company: formData.company,
                    email: formData.email,
                    phone: formData.phone,
                    serviceRequired: formData.serviceRequired,
                    budget: formData.budget,
                    projectDetails: formData.projectDetails,
                    timeline: formData.timeline,
                    callDate: activeTab === 'call' ? callDate : undefined,
                    callTime: activeTab === 'call' ? callTime : undefined,
                  })}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-500/30 text-xs font-semibold transition-all cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Open Direct Copy in Mail App</span>
                </a>

                <a
                  href={generateWhatsAppInquiryUrl({
                    fullName: formData.fullName,
                    company: formData.company,
                    email: formData.email,
                    serviceRequired: formData.serviceRequired,
                    budget: formData.budget,
                    projectDetails: formData.projectDetails,
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold transition-all cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Instant WhatsApp Follow-up</span>
                </a>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      company: '',
                      email: '',
                      phone: '',
                      serviceRequired: 'Custom Software Development',
                      budget: '$15k – $35k',
                      projectDetails: '',
                      timeline: 'Within 1 - 2 Months',
                    });
                  }}
                  className="text-xs text-slate-400 hover:text-slate-200 underline cursor-pointer"
                >
                  Submit Another Project Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs flex items-start gap-2">
                  <Mail className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}
              {activeTab === 'call' && (
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3 mb-4">
                  <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider block">
                    Discovery Call Schedule Slot
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={callDate}
                        onChange={(e) => setCallDate(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">
                        Preferred Time Slot (UTC)
                      </label>
                      <select
                        value={callTime}
                        onChange={(e) => setCallTime(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white"
                      >
                        <option value="10:00 UTC">10:00 AM UTC (Morning)</option>
                        <option value="14:00 UTC">02:00 PM UTC (Afternoon)</option>
                        <option value="17:00 UTC">05:00 PM UTC (Late Afternoon)</option>
                        <option value="20:00 UTC">08:00 PM UTC (Evening)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Full Name <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-900 border border-slate-800 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Company / Organization <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    placeholder="e.g. Apex Dynamics Ltd."
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-900 border border-slate-800 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Business Email <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="sarah@apexdynamics.com"
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-900 border border-slate-800 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-900 border border-slate-800 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Service Required & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Primary Service Required <span className="text-blue-400">*</span>
                  </label>
                  <select
                    value={formData.serviceRequired}
                    onChange={(e) =>
                      setFormData({ ...formData, serviceRequired: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-900 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  >
                    {SERVICES_DATA.map((srv) => (
                      <option key={srv.id} value={srv.title}>
                        {srv.title}
                      </option>
                    ))}
                    <option value="Multiple Services / Comprehensive Build">
                      Multiple Services / Comprehensive Build
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Estimated Budget Range <span className="text-blue-400">*</span>
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-900 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  >
                    {budgetRanges.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Project Details */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Project Scope & Technical Details <span className="text-blue-400">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.projectDetails}
                  onChange={(e) =>
                    setFormData({ ...formData, projectDetails: e.target.value })
                  }
                  placeholder="Describe your project goals, key features, target users, or existing software to integrate..."
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-900 border border-slate-800 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 font-sans"
                />
              </div>

              {/* Submission Row */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-[11px] text-slate-400">
                  🔒 Information held in strict confidence under mutual NDA.
                </span>
                <button
                  type="submit"
                  id="submit-project-inquiry-btn"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:opacity-60 rounded-full shadow-lg shadow-blue-900/20 transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Dispatching to pixevotechnologies@gmail.com...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Project Inquiry</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
