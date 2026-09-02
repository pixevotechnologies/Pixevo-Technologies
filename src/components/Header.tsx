import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/siteData';
import { PixevoMark } from './PixevoLogo';
import { useLanguage } from '../context/LanguageContext';
import {
  Menu,
  X,
  ArrowRight,
  Code2,
  Sparkles,
  ChevronDown,
  Phone,
  Mail,
  Globe,
  Check,
} from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId, hash?: string) => void;
  onOpenEstimator: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenEstimator,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const { language, setLanguage, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; labelKey: string; defaultLabel: string }[] = [
    { id: 'home', labelKey: 'nav.home', defaultLabel: 'Home' },
    { id: 'about', labelKey: 'nav.about', defaultLabel: 'About' },
    { id: 'services', labelKey: 'nav.services', defaultLabel: 'Services' },
    { id: 'solutions', labelKey: 'nav.solutions', defaultLabel: 'Solutions' },
    { id: 'industries', labelKey: 'nav.industries', defaultLabel: 'Industries' },
    { id: 'portfolio', labelKey: 'nav.portfolio', defaultLabel: 'Portfolio' },
    { id: 'process', labelKey: 'nav.process', defaultLabel: 'Process' },
    { id: 'careers', labelKey: 'nav.careers', defaultLabel: 'Careers' },
    { id: 'blog', labelKey: 'nav.blog', defaultLabel: 'Blog' },
    { id: 'contact', labelKey: 'nav.contact', defaultLabel: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3'
          : 'bg-slate-950/50 backdrop-blur-md border-b border-slate-800/50 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1 text-left cursor-pointer"
            aria-label="Pixevo Technologies Home"
          >
            <div className="group-hover:scale-105 transition-transform duration-200">
              <PixevoMark size={30} />
            </div>
            <div className="flex items-center gap-1.5 font-['Outfit']">
              <span className="text-lg font-bold tracking-tight text-white uppercase group-hover:text-blue-400 transition-colors">
                Pixevo
              </span>
              <span className="text-lg font-light tracking-tight text-blue-400 uppercase">
                Technologies
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav
            id="desktop-navigation"
            className="hidden xl:flex items-center gap-1"
            aria-label="Primary Navigation"
          >
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              const label = t(link.labelKey) || link.defaultLabel;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'text-blue-400 bg-blue-500/10 border border-blue-500/20 font-semibold'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </nav>

          {/* Large Screen CTA & Quick Actions */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Desktop Language Toggle */}
            <div
              id="desktop-language-switcher"
              className="flex items-center p-0.5 rounded-full bg-slate-900/80 border border-slate-800"
              role="group"
              aria-label="Language Selector"
            >
              <button
                id="lang-btn-en"
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-full text-xs font-mono font-medium transition-all cursor-pointer flex items-center gap-1 ${
                  language === 'en'
                    ? 'bg-blue-600 text-white shadow-sm font-bold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
                title="Switch to English"
                aria-pressed={language === 'en'}
              >
                <span>EN</span>
              </button>
              <button
                id="lang-btn-ar"
                onClick={() => setLanguage('ar')}
                className={`px-2.5 py-1 rounded-full text-xs font-sans font-medium transition-all cursor-pointer flex items-center gap-1 ${
                  language === 'ar'
                    ? 'bg-blue-600 text-white shadow-sm font-bold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
                title="التبديل إلى اللغة العربية"
                aria-pressed={language === 'ar'}
              >
                <span>العربية</span>
              </button>
            </div>

            <button
              id="header-estimator-btn"
              onClick={onOpenEstimator}
              className="hidden 2xl:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-full transition-all cursor-pointer"
              title={t('header.estimator')}
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>{t('header.estimator')}</span>
            </button>

            <button
              id="header-start-project-btn"
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-900/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 cursor-pointer"
            >
              <span>{t('header.startProject')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Actions (Language Toggle + Start CTA + Hamburger) */}
          <div className="flex items-center gap-2 xl:hidden">
            {/* Quick Mobile Language Toggle Button */}
            <button
              id="mobile-quick-lang-toggle"
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-medium bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all cursor-pointer"
              title={language === 'en' ? 'التبديل إلى العربية' : 'Switch to English'}
              aria-label="Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-blue-400" />
              <span className="font-mono font-semibold text-[11px]">
                {language === 'en' ? 'عربي' : 'EN'}
              </span>
            </button>

            <button
              id="mobile-start-project-pill"
              onClick={() => handleNavClick('contact')}
              className="sm:inline-flex hidden px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-full shadow-sm cursor-pointer"
            >
              {t('header.startProject')}
            </button>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="xl:hidden bg-slate-950 border-b border-slate-800/80 px-4 pt-3 pb-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-200"
        >
          {/* Mobile Language Switcher Bar */}
          <div className="flex items-center justify-between p-2 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Globe className="w-4 h-4 text-blue-400" />
              <span className="font-medium">{t('header.language')}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                id="drawer-lang-en"
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer flex items-center gap-1 ${
                  language === 'en'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-800/80 text-slate-400 hover:text-white'
                }`}
              >
                <span>English</span>
                {language === 'en' && <Check className="w-3 h-3" />}
              </button>
              <button
                id="drawer-lang-ar"
                onClick={() => setLanguage('ar')}
                className={`px-3 py-1 rounded-lg text-xs font-sans font-semibold transition-all cursor-pointer flex items-center gap-1 ${
                  language === 'ar'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-800/80 text-slate-400 hover:text-white'
                }`}
              >
                <span>العربية</span>
                {language === 'ar' && <Check className="w-3 h-3" />}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-1.5 pt-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              const label = t(link.labelKey) || link.defaultLabel;
              return (
                <button
                  key={link.id}
                  id={`mobile-nav-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between px-3.5 py-2.5 text-sm font-medium rounded-lg text-left transition-all cursor-pointer ${
                    isActive
                      ? 'text-blue-400 bg-blue-500/10 border border-blue-500/20'
                      : 'text-slate-400 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  <span>{label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2.5">
            <button
              id="mobile-drawer-estimator-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimator();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-200 bg-slate-900 hover:bg-slate-850 border border-slate-800 rounded-full cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>{t('header.interactiveEstimator')}</span>
            </button>

            <button
              id="mobile-drawer-start-btn"
              onClick={() => handleNavClick('contact')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-full shadow-lg shadow-blue-900/20 cursor-pointer"
            >
              <span>{t('header.startProject')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-between pt-2 px-1 text-xs text-slate-400">
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span className="truncate">{COMPANY_INFO.email}</span>
              </a>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400 whitespace-nowrap">{t('header.globalRemote')}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
