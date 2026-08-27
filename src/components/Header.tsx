import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { PixevoMark } from './PixevoLogo';
import {
  Menu,
  X,
  ArrowRight,
  Code2,
  Sparkles,
  ChevronDown,
  Phone,
  Mail,
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

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'industries', label: 'Industries' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'process', label: 'Process' },
    { id: 'careers', label: 'Careers' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
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
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all whitespace-nowrap ${
                    isActive
                      ? 'text-blue-400 bg-blue-500/10 border border-blue-500/20 font-semibold'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Large Screen CTA & Quick Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              id="header-estimator-btn"
              onClick={onOpenEstimator}
              className="hidden 2xl:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-full transition-all"
              title="Estimate your project timeline & scope"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Project Estimator</span>
            </button>

            <button
              id="header-start-project-btn"
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-900/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              id="mobile-start-project-pill"
              onClick={() => handleNavClick('contact')}
              className="sm:inline-flex hidden px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-full shadow-sm"
            >
              Start Project
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          className="xl:hidden bg-slate-950 border-b border-slate-800/80 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top duration-200"
        >
          <div className="grid grid-cols-2 gap-1.5 pt-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`mobile-nav-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between px-3.5 py-2.5 text-sm font-medium rounded-lg text-left transition-all ${
                    isActive
                      ? 'text-blue-400 bg-blue-500/10 border border-blue-500/20'
                      : 'text-slate-400 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  <span>{link.label}</span>
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
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-200 bg-slate-900 hover:bg-slate-850 border border-slate-800 rounded-full"
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>Interactive Project Estimator</span>
            </button>

            <button
              id="mobile-drawer-start-btn"
              onClick={() => handleNavClick('contact')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-full shadow-lg shadow-blue-900/20"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-between pt-2 px-1 text-xs text-slate-400">
              <a
                href="mailto:hello@pixevotech.com"
                className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>hello@pixevotech.com</span>
              </a>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400">Global Tech Partner</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
