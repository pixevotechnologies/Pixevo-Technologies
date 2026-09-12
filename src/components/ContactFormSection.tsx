import React, { useState, useEffect } from 'react';
import { ContactFormData } from '../types';
import { COMPANY_INFO, SERVICES_DATA } from '../data/siteData';
import { useTheme } from '../context/ThemeContext';
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
  AlertCircle,
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
  Code2,
  Globe,
  Smartphone,
  Bot,
  Palette,
  Cloud,
  Layers,
  Briefcase,
} from 'lucide-react';

interface ContactFormSectionProps {
  prefill?: Partial<ContactFormData>;
  headline?: string;
  subheadline?: string;
}

interface FormErrors {
  fullName?: string;
  company?: string;
  email?: string;
  phone?: string;
  projectDetails?: string;
  callDate?: string;
}

type FormTouched = {
  [K in keyof FormErrors]?: boolean;
};

// RFC 5322 compliant regex for reliable business email validation
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PHONE_REGEX = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,}$/;

export const validateContactField = (
  field: keyof FormErrors,
  value: string,
  extraData?: { activeTab?: 'inquiry' | 'call' }
): string | undefined => {
  const trimmed = value ? value.trim() : '';

  switch (field) {
    case 'fullName':
      if (!trimmed) return 'Full name is required';
      if (trimmed.length < 2) return 'Full name must be at least 2 characters';
      return undefined;

    case 'company':
      if (!trimmed) return 'Company or organization name is required';
      if (trimmed.length < 2) return 'Company name must be at least 2 characters';
      return undefined;

    case 'email':
      if (!trimmed) return 'Business email is required';
      if (!EMAIL_REGEX.test(trimmed)) {
        if (!trimmed.includes('@')) {
          return 'Email must include "@" symbol';
        }
        const parts = trimmed.split('@');
        if (!parts[1] || !parts[1].includes('.')) {
          return 'Email must include a valid domain (e.g. company.com)';
        }
        return 'Please enter a valid email format (e.g. sarah@company.com)';
      }
      return undefined;

    case 'phone':
      if (trimmed && !PHONE_REGEX.test(trimmed)) {
        return 'Please enter a valid phone number with country/area code or leave blank';
      }
      return undefined;

    case 'projectDetails':
      if (!trimmed) return 'Project requirements and technical scope are required';
      if (trimmed.length < 20) {
        return `Please provide a bit more context (${trimmed.length}/20 minimum characters required)`;
      }
      return undefined;

    case 'callDate':
      if (extraData?.activeTab === 'call') {
        if (!trimmed) return 'Please select a date for your discovery call';
        const selected = new Date(trimmed + 'T00:00:00');
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (selected < today) return 'Discovery call date cannot be in the past';
      }
      return undefined;

    default:
      return undefined;
  }
};

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

  const todayStr = new Date().toISOString().split('T')[0];
  const [activeTab, setActiveTab] = useState<'inquiry' | 'call'>('inquiry');
  const [callDate, setCallDate] = useState<string>(todayStr);
  const [callTime, setCallTime] = useState<string>('14:00 UTC');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inquiryId, setInquiryId] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Client-side real-time validation state
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<FormTouched>({});

  const { isDark } = useTheme();

  const selectOptionStyle: React.CSSProperties = {
    backgroundColor: isDark ? '#0f172a' : '#ffffff',
    color: isDark ? '#f8fafc' : '#0f172a',
  };

  const quickServices = [
    { title: 'Custom Software Development', label: 'Custom Software', icon: Code2 },
    { title: 'Web Development', label: 'Web Development', icon: Globe },
    { title: 'Mobile App Development', label: 'Mobile Apps', icon: Smartphone },
    { title: 'AI & Automation Solutions', label: 'AI & Automation', icon: Bot },
    { title: 'Cloud & API Integration', label: 'Cloud & APIs', icon: Cloud },
    { title: 'UI/UX Design', label: 'UI/UX Design', icon: Palette },
  ];

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

  const handleBlur = (field: keyof FormErrors) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    let val = '';
    if (field === 'callDate') val = callDate;
    else if (field in formData) val = (formData as any)[field] || '';

    const err = validateContactField(field, val, { activeTab });
    setErrors((prev) => ({ ...prev, [field]: err }));
  };

  const handleFieldChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Instant real-time validation if field has been touched or for email format guidance
    if (touched[field as keyof FormErrors] || (field === 'email' && value.includes('@'))) {
      const err = validateContactField(field as keyof FormErrors, value, { activeTab });
      setErrors((prev) => ({ ...prev, [field]: err }));
    }
  };

  const handleCallDateChange = (val: string) => {
    setCallDate(val);
    if (touched.callDate) {
      const err = validateContactField('callDate', val, { activeTab });
      setErrors((prev) => ({ ...prev, callDate: err }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validate all required fields
    const newErrors: FormErrors = {
      fullName: validateContactField('fullName', formData.fullName),
      company: validateContactField('company', formData.company),
      email: validateContactField('email', formData.email),
      phone: validateContactField('phone', formData.phone),
      projectDetails: validateContactField('projectDetails', formData.projectDetails),
      callDate: activeTab === 'call' ? validateContactField('callDate', callDate, { activeTab }) : undefined,
    };

    // Mark all as touched to display errors if any
    setTouched({
      fullName: true,
      company: true,
      email: true,
      phone: true,
      projectDetails: true,
      callDate: activeTab === 'call',
    });

    const errorKeys = (Object.keys(newErrors) as (keyof FormErrors)[]).filter(
      (key) => newErrors[key] !== undefined
    );

    if (errorKeys.length > 0) {
      setErrors(newErrors);
      setErrorMessage(
        'Please review and complete all required fields with valid details before submitting.'
      );
      const firstInvalid = errorKeys[0];
      const targetInput = document.getElementById(`contact-${firstInvalid}`);
      if (targetInput) {
        targetInput.focus();
        targetInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        type: activeTab,
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        company: formData.company.trim(),
        phone: formData.phone.trim(),
        serviceRequired: formData.serviceRequired,
        budget: formData.budget,
        projectDetails: formData.projectDetails.trim(),
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
              type="button"
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
              type="button"
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

              <div className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-xl p-4 text-left text-xs space-y-2 max-w-lg mx-auto">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
                  <span className="text-slate-600 dark:text-slate-400">Target Service:</span>
                  <span className="font-semibold text-slate-900 dark:text-white">{formData.serviceRequired}</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
                  <span className="text-slate-600 dark:text-slate-400">Budget Range:</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">{formData.budget}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 dark:text-slate-400">Follow-up Destination:</span>
                  <span className="font-semibold text-blue-600 dark:text-blue-400 truncate max-w-[200px]">{formData.email}</span>
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
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/30 text-rose-700 dark:text-rose-300 text-xs flex items-start gap-2.5 animate-fadeIn">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600 dark:text-rose-400" />
                  <span className="font-medium">{errorMessage}</span>
                </div>
              )}

              {activeTab === 'call' && (
                <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 mb-4 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block">
                      Discovery Call Schedule Slot
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      30-Min Technical Video Session
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="contact-callDate" className="block text-[11px] font-semibold text-slate-700 dark:text-slate-400 mb-1">
                        Preferred Date <span className="text-blue-500">*</span>
                      </label>
                      <input
                        id="contact-callDate"
                        type="date"
                        min={todayStr}
                        value={callDate}
                        onChange={(e) => handleCallDateChange(e.target.value)}
                        onBlur={() => handleBlur('callDate')}
                        className={`w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-950 rounded-lg text-slate-900 dark:text-white transition-all focus:outline-none ${
                          touched.callDate && errors.callDate
                            ? 'border border-rose-400 dark:border-rose-500/80 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/15'
                            : 'border border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15'
                        }`}
                      />
                      {touched.callDate && errors.callDate && (
                        <p className="text-xs text-rose-600 dark:text-rose-400 flex items-center gap-1 mt-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.callDate}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="contact-callTime" className="block text-[11px] font-semibold text-slate-700 dark:text-slate-400 mb-1">
                        Preferred Time Slot (UTC)
                      </label>
                      <select
                        id="contact-callTime"
                        value={callTime}
                        onChange={(e) => setCallTime(e.target.value)}
                        style={selectOptionStyle}
                        className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
                      >
                        <option value="10:00 UTC" style={selectOptionStyle}>10:00 AM UTC (Morning)</option>
                        <option value="14:00 UTC" style={selectOptionStyle}>02:00 PM UTC (Afternoon)</option>
                        <option value="17:00 UTC" style={selectOptionStyle}>05:00 PM UTC (Late Afternoon)</option>
                        <option value="20:00 UTC" style={selectOptionStyle}>08:00 PM UTC (Evening)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-fullName" className="block text-xs font-semibold text-slate-800 dark:text-slate-300 mb-1.5">
                    Full Name <span className="text-blue-500 dark:text-blue-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="contact-fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => handleFieldChange('fullName', e.target.value)}
                      onBlur={() => handleBlur('fullName')}
                      placeholder="e.g. Sarah Jenkins"
                      aria-invalid={touched.fullName && !!errors.fullName}
                      aria-describedby={touched.fullName && errors.fullName ? "fullName-error" : undefined}
                      className={`w-full px-3.5 py-2.5 text-sm bg-white dark:bg-slate-900 rounded-lg text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all focus:outline-none pr-9 ${
                        touched.fullName && errors.fullName
                          ? 'border border-rose-400 dark:border-rose-500/80 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/15'
                          : touched.fullName && !errors.fullName && formData.fullName.trim()
                          ? 'border border-emerald-400 dark:border-emerald-500/80 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/15'
                          : 'border border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15'
                      }`}
                    />
                    {touched.fullName && errors.fullName && (
                      <AlertCircle className="w-4 h-4 text-rose-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    )}
                    {touched.fullName && !errors.fullName && formData.fullName.trim() && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    )}
                  </div>
                  {touched.fullName && errors.fullName && (
                    <p id="fullName-error" className="text-xs text-rose-600 dark:text-rose-400 flex items-center gap-1 mt-1.5 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-company" className="block text-xs font-semibold text-slate-800 dark:text-slate-300 mb-1.5">
                    Company / Organization <span className="text-blue-500 dark:text-blue-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => handleFieldChange('company', e.target.value)}
                      onBlur={() => handleBlur('company')}
                      placeholder="e.g. Apex Dynamics Ltd."
                      aria-invalid={touched.company && !!errors.company}
                      aria-describedby={touched.company && errors.company ? "company-error" : undefined}
                      className={`w-full px-3.5 py-2.5 text-sm bg-white dark:bg-slate-900 rounded-lg text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all focus:outline-none pr-9 ${
                        touched.company && errors.company
                          ? 'border border-rose-400 dark:border-rose-500/80 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/15'
                          : touched.company && !errors.company && formData.company.trim()
                          ? 'border border-emerald-400 dark:border-emerald-500/80 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/15'
                          : 'border border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15'
                      }`}
                    />
                    {touched.company && errors.company && (
                      <AlertCircle className="w-4 h-4 text-rose-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    )}
                    {touched.company && !errors.company && formData.company.trim() && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    )}
                  </div>
                  {touched.company && errors.company && (
                    <p id="company-error" className="text-xs text-rose-600 dark:text-rose-400 flex items-center gap-1 mt-1.5 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.company}
                    </p>
                  )}
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-800 dark:text-slate-300">
                      Business Email <span className="text-blue-500 dark:text-blue-400">*</span>
                    </label>
                    <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                      RFC-verified
                    </span>
                  </div>
                  <div className="relative">
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleFieldChange('email', e.target.value)}
                      onBlur={() => handleBlur('email')}
                      placeholder="sarah@company.com"
                      aria-invalid={touched.email && !!errors.email}
                      aria-describedby={touched.email && errors.email ? "email-error" : undefined}
                      className={`w-full px-3.5 py-2.5 text-sm bg-white dark:bg-slate-900 rounded-lg text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all focus:outline-none pr-9 ${
                        touched.email && errors.email
                          ? 'border border-rose-400 dark:border-rose-500/80 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/15'
                          : (touched.email || formData.email.includes('@')) && !errors.email && formData.email.trim()
                          ? 'border border-emerald-400 dark:border-emerald-500/80 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/15'
                          : 'border border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15'
                      }`}
                    />
                    {touched.email && errors.email && (
                      <AlertCircle className="w-4 h-4 text-rose-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    )}
                    {(touched.email || formData.email.includes('@')) && !errors.email && formData.email.trim() && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    )}
                  </div>
                  {touched.email && errors.email ? (
                    <p id="email-error" className="text-xs text-rose-600 dark:text-rose-400 flex items-center gap-1 mt-1.5 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.email}
                    </p>
                  ) : (touched.email || formData.email.includes('@')) && !errors.email && formData.email.trim() ? (
                    <p className="text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1 mt-1.5 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> Valid business email format
                    </p>
                  ) : (
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-1">
                      We'll send project estimates and technical specs here
                    </span>
                  )}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-800 dark:text-slate-300">
                      Phone / WhatsApp Number
                    </label>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400">
                      Optional
                    </span>
                  </div>
                  <div className="relative">
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleFieldChange('phone', e.target.value)}
                      onBlur={() => handleBlur('phone')}
                      placeholder="+1 (555) 000-0000"
                      aria-invalid={touched.phone && !!errors.phone}
                      aria-describedby={touched.phone && errors.phone ? "phone-error" : undefined}
                      className={`w-full px-3.5 py-2.5 text-sm bg-white dark:bg-slate-900 rounded-lg text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all focus:outline-none pr-9 ${
                        touched.phone && errors.phone
                          ? 'border border-rose-400 dark:border-rose-500/80 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/15'
                          : touched.phone && !errors.phone && formData.phone.trim()
                          ? 'border border-emerald-400 dark:border-emerald-500/80 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/15'
                          : 'border border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15'
                      }`}
                    />
                    {touched.phone && errors.phone && (
                      <AlertCircle className="w-4 h-4 text-rose-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    )}
                    {touched.phone && !errors.phone && formData.phone.trim() && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    )}
                  </div>
                  {touched.phone && errors.phone && (
                    <p id="phone-error" className="text-xs text-rose-600 dark:text-rose-400 flex items-center gap-1 mt-1.5 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.phone}
                    </p>
                  )}
                  {!errors.phone && (
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-1">
                      Include country code for direct WhatsApp follow-up
                    </span>
                  )}
                </div>
              </div>

              {/* Service Required & Interactive Service Selection */}
              <div className="space-y-2.5">
                <div className="flex flex-wrap items-center justify-between gap-1.5">
                  <label htmlFor="contact-service" className="block text-xs font-semibold text-slate-800 dark:text-slate-300">
                    Primary Service Required <span className="text-blue-500 dark:text-blue-400">*</span>
                  </label>
                  <span className="text-[11px] font-mono text-blue-600 dark:text-blue-400 font-medium">
                    Active: <strong className="font-semibold">{formData.serviceRequired}</strong>
                  </span>
                </div>

                {/* Visual Quick-Select Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {quickServices.map((srv) => {
                    const isSelected = formData.serviceRequired === srv.title;
                    const IconComp = srv.icon;
                    return (
                      <button
                        key={srv.title}
                        type="button"
                        onClick={() => handleFieldChange('serviceRequired', srv.title)}
                        className={`p-2 rounded-lg border text-left text-xs transition-all flex items-center gap-2 cursor-pointer ${
                          isSelected
                            ? 'bg-blue-50 dark:bg-blue-950/60 border-blue-500 text-blue-700 dark:text-blue-300 font-semibold shadow-sm ring-1 ring-blue-500/30'
                            : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-850'
                        }`}
                      >
                        <div className={`p-1 rounded shrink-0 ${isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'}`}>
                          <IconComp className="w-3.5 h-3.5" />
                        </div>
                        <span className="truncate">{srv.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Dropdown for All Services & Custom Scope */}
                <select
                  id="contact-service"
                  value={formData.serviceRequired}
                  onChange={(e) => handleFieldChange('serviceRequired', e.target.value)}
                  style={selectOptionStyle}
                  className="w-full px-3.5 py-2.5 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15 transition-all cursor-pointer font-medium"
                >
                  <optgroup label="Core Engineering Services" style={selectOptionStyle}>
                    {SERVICES_DATA.map((srv) => (
                      <option key={srv.id} value={srv.title} style={selectOptionStyle}>
                        {srv.title}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Comprehensive Packages" style={selectOptionStyle}>
                    <option value="Multiple Services / Comprehensive Build" style={selectOptionStyle}>
                      Multiple Services / Comprehensive Build
                    </option>
                  </optgroup>
                </select>
              </div>

              {/* Budget Range & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-budget" className="block text-xs font-semibold text-slate-800 dark:text-slate-300 mb-1.5">
                    Estimated Budget Range <span className="text-blue-500 dark:text-blue-400">*</span>
                  </label>
                  <select
                    id="contact-budget"
                    value={formData.budget}
                    onChange={(e) => handleFieldChange('budget', e.target.value)}
                    style={selectOptionStyle}
                    className="w-full px-3.5 py-2.5 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15 transition-all cursor-pointer font-medium"
                  >
                    {budgetRanges.map((b) => (
                      <option key={b} value={b} style={selectOptionStyle}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-timeline" className="block text-xs font-semibold text-slate-800 dark:text-slate-300 mb-1.5">
                    Expected Timeline <span className="text-blue-500 dark:text-blue-400">*</span>
                  </label>
                  <select
                    id="contact-timeline"
                    value={formData.timeline}
                    onChange={(e) => handleFieldChange('timeline', e.target.value)}
                    style={selectOptionStyle}
                    className="w-full px-3.5 py-2.5 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15 transition-all cursor-pointer font-medium"
                  >
                    {timelineOptions.map((t) => (
                      <option key={t} value={t} style={selectOptionStyle}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Project Details */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="contact-projectDetails" className="block text-xs font-semibold text-slate-800 dark:text-slate-300">
                    Project Scope & Technical Details <span className="text-blue-500 dark:text-blue-400">*</span>
                  </label>
                  <span
                    className={`text-[11px] font-mono font-medium transition-colors ${
                      formData.projectDetails.trim().length >= 20
                        ? 'text-emerald-600 dark:text-emerald-400 font-semibold'
                        : 'text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {formData.projectDetails.trim().length} / 20 min characters
                  </span>
                </div>
                <textarea
                  id="contact-projectDetails"
                  name="projectDetails"
                  required
                  rows={4}
                  value={formData.projectDetails}
                  onChange={(e) => handleFieldChange('projectDetails', e.target.value)}
                  onBlur={() => handleBlur('projectDetails')}
                  placeholder="Describe your project goals, key features, target users, or existing software to integrate (at least 20 characters)..."
                  aria-invalid={touched.projectDetails && !!errors.projectDetails}
                  aria-describedby={touched.projectDetails && errors.projectDetails ? "projectDetails-error" : undefined}
                  className={`w-full px-3.5 py-2.5 text-sm bg-white dark:bg-slate-900 rounded-lg text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all focus:outline-none font-sans ${
                    touched.projectDetails && errors.projectDetails
                      ? 'border border-rose-400 dark:border-rose-500/80 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/15'
                      : touched.projectDetails && !errors.projectDetails && formData.projectDetails.trim().length >= 20
                      ? 'border border-emerald-400 dark:border-emerald-500/80 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/15'
                      : 'border border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15'
                  }`}
                />
                <div className="flex items-center justify-between mt-1">
                  {touched.projectDetails && errors.projectDetails ? (
                    <p id="projectDetails-error" className="text-xs text-rose-600 dark:text-rose-400 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.projectDetails}
                    </p>
                  ) : (
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      Include target platforms, desired launch window, or technical stack preferences
                    </span>
                  )}
                  {formData.projectDetails.trim().length >= 20 && (
                    <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Sufficient technical detail
                    </span>
                  )}
                </div>
              </div>

              {/* Submission Row */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-[11px] text-slate-500 dark:text-slate-400">
                  🔒 Information held in strict confidence under mutual NDA.
                </span>
                <button
                  type="submit"
                  id="submit-project-inquiry-btn"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:opacity-60 rounded-full shadow-lg shadow-blue-500/20 transition-all cursor-pointer"
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
