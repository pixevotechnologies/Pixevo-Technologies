import React from 'react';
import { PageId } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { PixevoMark } from './PixevoLogo';
import {
  Code2,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowUpRight,
  ChevronUp,
  Linkedin,
  Instagram,
  Facebook,
  Github,
  MessageCircle,
  Shield,
  FileText,
  Sparkles,
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenEstimator?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenEstimator }) => {
  const { t, data, language } = useLanguage();
  const companyInfo = data.company;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-slate-950 text-slate-300 border-t border-slate-800/80">
      {/* Upper Footer CTA Banner */}
      <div className="border-b border-slate-800/80 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="relative rounded-2xl bg-slate-900/50 border border-slate-800 p-8 sm:p-10 lg:p-12 overflow-hidden shadow-2xl">
            {/* Background ambient lighting */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-between">
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{language === 'ar' ? 'جاهز لتطوير بنيتك الرقمية؟' : 'Ready to Transform Your Digital Infrastructure?'}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Outfit'] text-white tracking-tight">
                  {language === 'ar' ? 'دعنا نبني حلولاً استثنائية معاً.' : 'Let’s Build Something Exceptional Together.'}
                </h2>
                <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
                  {language === 'ar'
                    ? 'سواء كنت بحاجة إلى برمجيات مخصصة، تطبيقات هاتف، أتمتة الذكاء الاصطناعي، أو استشارات تقنية، فريقنا الهندسي جاهز لمساعدتك.'
                    : 'Whether you need custom software, mobile engineering, AI automation, or technical advisory, our engineering team is ready to help you plan and execute.'}
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
                <button
                  id="footer-cta-contact-btn"
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-full shadow-lg shadow-blue-900/20 transition-all text-center cursor-pointer"
                >
                  <span>{t('header.contact')}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                {onOpenEstimator && (
                  <button
                    id="footer-cta-estimate-btn"
                    onClick={onOpenEstimator}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700/80 border border-slate-700 rounded-full transition-all text-center cursor-pointer"
                  >
                    <span>{t('header.estimator')}</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Social Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">
        {/* Social Media Presence & Follow Cards */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-800/80">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{language === 'ar' ? 'تواصل وتابع بيكسيفو' : 'Connect & Follow Pixevo'}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-['Outfit'] text-white">
                {language === 'ar' ? 'تابع مسيرتنا الهندسية وتحديثات الشركة' : 'Follow Our Engineering Journey & Company Updates'}
              </h3>
            </div>
            <span className="text-xs text-slate-400 font-mono">
              {language === 'ar' ? 'القنوات الرسمية · نشاط أسبوعي' : 'Official Social Channels · Active Weekly'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {/* LinkedIn Card */}
            <a
              href={companyInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-xl bg-slate-900/50 hover:bg-slate-900 border border-slate-800 hover:border-blue-500/40 transition-all flex flex-col justify-between space-y-3 relative overflow-hidden"
              aria-label="Follow Pixevo Technologies on LinkedIn"
            >
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-lg bg-[#0A66C2]/15 text-[#0A66C2] group-hover:bg-[#0A66C2] group-hover:text-white flex items-center justify-center transition-all">
                  <Linkedin className="w-4 h-4" />
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-blue-400 group-hover:text-white">
                  <span>{language === 'ar' ? 'متابعة' : 'Follow'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
              <div className="space-y-0.5">
                <div className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                  LinkedIn
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {language === 'ar' ? 'دراسات الحالة المؤسسية، الرؤى التقنية وفرص التوظيف.' : 'Enterprise case studies, technical insights & hiring updates.'}
                </p>
              </div>
              <div className="pt-2 border-t border-slate-800/80 text-[11px] font-mono text-slate-500 group-hover:text-slate-400">
                @pixevo-technologies
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={companyInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-xl bg-slate-900/50 hover:bg-slate-900 border border-slate-800 hover:border-slate-600 transition-all flex flex-col justify-between space-y-3 relative overflow-hidden"
              aria-label="Explore Pixevo Technologies on GitHub"
            >
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-lg bg-slate-800 text-slate-200 group-hover:bg-slate-100 group-hover:text-slate-900 flex items-center justify-center transition-all">
                  <Github className="w-4 h-4" />
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-300 group-hover:text-white">
                  <span>{language === 'ar' ? 'متابعة ومشروع' : 'Star & Follow'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
              <div className="space-y-0.5">
                <div className="text-sm font-bold text-white group-hover:text-slate-200 transition-colors">
                  GitHub
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {language === 'ar' ? 'المخططات المعمارية مفتوحة المصدر وحزم واجهات المستخدم.' : 'Open-source architecture blueprints, codebases & UI packages.'}
                </p>
              </div>
              <div className="pt-2 border-t border-slate-800/80 text-[11px] font-mono text-slate-500 group-hover:text-slate-400">
                @pixevotechnologies
              </div>
            </a>

            {/* Instagram Card */}
            <a
              href={companyInfo.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-xl bg-slate-900/50 hover:bg-slate-900 border border-slate-800 hover:border-pink-500/40 transition-all flex flex-col justify-between space-y-3 relative overflow-hidden"
              aria-label="Follow Pixevo Technologies on Instagram"
            >
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-lg bg-pink-500/15 text-pink-400 group-hover:bg-gradient-to-tr group-hover:from-[#f09433] group-hover:via-[#dc2743] group-hover:to-[#bc1888] group-hover:text-white flex items-center justify-center transition-all">
                  <Instagram className="w-4 h-4" />
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-pink-400 group-hover:text-white">
                  <span>{language === 'ar' ? 'متابعة' : 'Follow'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
              <div className="space-y-0.5">
                <div className="text-sm font-bold text-white group-hover:text-pink-300 transition-colors">
                  Instagram
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {language === 'ar' ? 'كواليس العمل الهندسي، تصميم الواجهات وثقافة الفريق.' : 'Behind-the-scenes engineering sprints, UI design & tech culture.'}
                </p>
              </div>
              <div className="pt-2 border-t border-slate-800/80 text-[11px] font-mono text-slate-500 group-hover:text-slate-400">
                @pixevotechnologies
              </div>
            </a>

            {/* Facebook Card */}
            <a
              href={companyInfo.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-xl bg-slate-900/50 hover:bg-slate-900 border border-slate-800 hover:border-blue-600/40 transition-all flex flex-col justify-between space-y-3 relative overflow-hidden"
              aria-label="Follow Pixevo Technologies on Facebook"
            >
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-lg bg-[#1877F2]/15 text-[#1877F2] group-hover:bg-[#1877F2] group-hover:text-white flex items-center justify-center transition-all">
                  <Facebook className="w-4 h-4" />
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-blue-400 group-hover:text-white">
                  <span>{language === 'ar' ? 'إعجاب وانضمام' : 'Join & Like'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
              <div className="space-y-0.5">
                <div className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                  Facebook
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {language === 'ar' ? 'إعلانات المجتمع التقني، مقالات الصناعة وأبرز المشاريع.' : 'Community announcements, industry roundups & project highlights.'}
                </p>
              </div>
              <div className="pt-2 border-t border-slate-800/80 text-[11px] font-mono text-slate-500 group-hover:text-slate-400">
                @PixevoTechnologies
              </div>
            </a>
          </div>
        </div>

        {/* 4-Column Navigation Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Company Info */}
          <div className="lg:col-span-4 space-y-5">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3.5 text-left focus:outline-none cursor-pointer group"
              aria-label="Pixevo Technologies Home"
            >
              <div className="group-hover:scale-105 transition-transform duration-200">
                <PixevoMark size={38} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold font-['Outfit'] tracking-tight text-white group-hover:text-blue-400 transition-colors uppercase">
                  {companyInfo.name} <span className="text-blue-400 font-light">{language === 'ar' ? '' : 'Technologies'}</span>
                </span>
                <span className="text-[10px] tracking-wider uppercase font-semibold text-slate-400 font-mono">
                  {companyInfo.tagline}
                </span>
              </div>
            </button>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {companyInfo.aboutSummary || companyInfo.subheadline}
            </p>

            <div className="space-y-2.5 text-xs text-slate-400 pt-1">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="hover:text-blue-400 transition-colors truncate"
                >
                  {companyInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={`tel:${companyInfo.phoneRaw}`}
                  className="hover:text-blue-400 transition-colors font-medium text-slate-300"
                >
                  {companyInfo.phone}
                </a>
                <a
                  href={companyInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors"
                >
                  <MessageCircle className="w-3 h-3" />
                  <span>WhatsApp</span>
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{companyInfo.location}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="block text-slate-300">{companyInfo.businessHours}</span>
                  <span className="block text-[11px] text-slate-500">{companyInfo.businessDays}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Company Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 font-['Outfit']">
              {language === 'ar' ? 'الشركة' : 'Company'}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {t('nav.about')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {t('nav.services')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('solutions')}
                  className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {t('nav.solutions')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('industries')}
                  className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {t('nav.industries')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {t('nav.portfolio')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('careers')}
                  className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  <span>{t('nav.careers')}</span>
                  <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-blue-500/20 text-blue-400 rounded">
                    {language === 'ar' ? 'توظيف' : 'Hiring'}
                  </span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Services */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 font-['Outfit']">
              {t('nav.services')}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {data.services.slice(0, 6).map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer text-left"
                  >
                    {srv.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources & Legal */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 font-['Outfit']">
              {language === 'ar' ? 'المصادر والروابط' : 'Resources & Insights'}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('blog')}
                  className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {t('nav.blog')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('process')}
                  className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {t('nav.process')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {t('nav.contact')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('privacy')}
                  className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('terms')}
                  className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {language === 'ar' ? 'شروط الخدمة' : 'Terms of Service'}
                </button>
              </li>
            </ul>

            {/* Social Links */}
            <div className="pt-3">
              <span className="text-xs font-semibold text-slate-300 block mb-2.5">
                {language === 'ar' ? 'تواصل معنا' : 'Connect With Us'}
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={companyInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-blue-600 hover:text-white flex items-center justify-center text-slate-400 transition-all border border-slate-800"
                  aria-label="Pixevo Technologies LinkedIn Company Page"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={companyInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-slate-700 hover:text-white flex items-center justify-center text-slate-400 transition-all border border-slate-800"
                  aria-label="Pixevo Technologies GitHub Repository"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={companyInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-pink-600 hover:text-white flex items-center justify-center text-slate-400 transition-all border border-slate-800"
                  aria-label="Pixevo Technologies Instagram Profile"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={companyInfo.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-blue-700 hover:text-white flex items-center justify-center text-slate-400 transition-all border border-slate-800"
                  aria-label="Pixevo Technologies Facebook Page"
                  title="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={companyInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-emerald-600 hover:text-white flex items-center justify-center text-slate-400 transition-all border border-slate-800"
                  aria-label="Chat with Pixevo Technologies on WhatsApp"
                  title="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Back to Top */}
      <div className="border-t border-slate-800/80 bg-slate-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <span>© 2026 {companyInfo.name}. {language === 'ar' ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}</span>
            <span className="hidden sm:inline">•</span>
            <span>{language === 'ar' ? 'صُمم للمؤسسات الحديثة والشركات الناشئة' : 'Built for Modern Enterprises & Startups'}</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('privacy')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              {language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </button>
            <button
              onClick={() => onNavigate('terms')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              {language === 'ar' ? 'شروط الخدمة' : 'Terms of Service'}
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-blue-400 transition-colors ml-2 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 cursor-pointer"
              aria-label="Scroll back to top of page"
            >
              <span>{language === 'ar' ? 'أعلى' : 'Top'}</span>
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
