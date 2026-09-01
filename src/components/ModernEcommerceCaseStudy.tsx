import React, { useState } from 'react';
import {
  ShoppingCart,
  Zap,
  Smartphone,
  CheckCircle2,
  TrendingUp,
  Layers,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Star,
  Search,
  SlidersHorizontal,
  CreditCard,
  Lock,
  ChevronRight,
  ExternalLink,
  Laptop,
  Tablet,
  RotateCcw,
  BarChart3,
  Flame,
  Check,
  Eye,
  Heart,
  Package,
  Activity,
  Maximize2,
  Clock,
  Globe2,
} from 'lucide-react';
import { PageId } from '../types';

interface ModernEcommerceCaseStudyProps {
  onNavigate?: (page: PageId) => void;
  onOpenEstimator?: () => void;
}

type ScreenTab = 'storefront' | 'product' | 'checkout' | 'analytics';
type DeviceMode = 'desktop' | 'mobile' | 'tablet';

export const ModernEcommerceCaseStudy: React.FC<ModernEcommerceCaseStudyProps> = ({
  onNavigate,
  onOpenEstimator,
}) => {
  const [activeTab, setActiveTab] = useState<ScreenTab>('storefront');
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('desktop');
  const [selectedColor, setSelectedColor] = useState<'midnight' | 'emerald' | 'amber'>('midnight');
  const [cartCount, setCartCount] = useState<number>(2);
  const [isAddedToast, setIsAddedToast] = useState<boolean>(false);
  const [checkoutStep, setCheckoutStep] = useState<1 | 2>(1);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [showEnlargedModal, setShowEnlargedModal] = useState<boolean>(false);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
    setIsAddedToast(true);
    setTimeout(() => setIsAddedToast(false), 2400);
  };

  return (
    <section id="ecommerce-case-study" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* SECTION HEADER & CLIENT ATTRACTION BADGE */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider font-mono">
            <ShoppingCart className="w-3.5 h-3.5" />
            <span>Featured Client Showcase • Case Study</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-white tracking-tight">
            Modern E-Commerce Platform
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            How we re-architected a high-growth digital commerce platform into a sub-second headless storefront with mobile-first checkout and auto-scaling infrastructure.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          {onOpenEstimator && (
            <button
              onClick={onOpenEstimator}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-full shadow-lg shadow-blue-900/20 transition-all cursor-pointer hover:scale-105"
            >
              <Sparkles className="w-4 h-4" />
              <span>Estimate Similar Store</span>
            </button>
          )}
          {onNavigate && (
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-full transition-all cursor-pointer"
            >
              <span>Speak with Architect</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* CORE CASE STUDY GRID: CHALLENGE, SOLUTION, RESULT */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 1. CHALLENGE */}
        <div className="rounded-2xl bg-slate-900/40 border border-rose-500/20 p-6 sm:p-7 space-y-4 relative overflow-hidden group hover:border-rose-500/40 transition-all">
          <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider px-2.5 py-1 rounded bg-rose-500/10 border border-rose-500/20">
              01 • Challenge
            </span>
            <div className="w-8 h-8 rounded-lg bg-rose-500/10 text-rose-400 flex items-center justify-center">
              <RotateCcw className="w-4 h-4" />
            </div>
          </div>

          <h3 className="text-lg font-bold font-['Outfit'] text-white">
            The client needed a faster and more scalable online shopping experience.
          </h3>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            The existing legacy monolith suffered from 4.8s mobile load times, high cart drop-offs, and critical server crashes during high-traffic seasonal sales.
          </p>

          <div className="space-y-2 pt-2 border-t border-slate-800">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
              <span>4.8s initial page load time</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
              <span>68% mobile cart abandonment rate</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
              <span>Database timeouts during flash sales</span>
            </div>
          </div>
        </div>

        {/* 2. SOLUTION */}
        <div className="rounded-2xl bg-slate-900/40 border border-blue-500/20 p-6 sm:p-7 space-y-4 relative overflow-hidden group hover:border-blue-500/40 transition-all">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20">
              02 • Solution
            </span>
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>

          <h3 className="text-lg font-bold font-['Outfit'] text-white">
            We designed and developed a responsive e-commerce platform with edge architecture.
          </h3>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Engineered a headless, high-conversion web platform featuring Next.js server components, instant autocomplete search, and one-tap checkout.
          </p>

          <div className="space-y-2 pt-2 border-t border-slate-800">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>Edge-rendered Next.js + Tailwind storefront</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>Instant catalog filtering & product cache</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>Frictionless 2-step Apple/Google Pay flow</span>
            </div>
          </div>
        </div>

        {/* 3. RESULT */}
        <div className="rounded-2xl bg-slate-900/40 border border-emerald-500/20 p-6 sm:p-7 space-y-4 relative overflow-hidden group hover:border-emerald-500/40 transition-all">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
              03 • Result
            </span>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>

          <h3 className="text-lg font-bold font-['Outfit'] text-white">
            Measurable speed, higher conversions, and zero-downtime scaling.
          </h3>

          <div className="grid grid-cols-2 gap-2.5 pt-1">
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-emerald-500/20">
              <div className="flex items-center gap-1 text-emerald-400 font-bold text-xs">
                <Zap className="w-3 h-3" />
                <span>Faster UX</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5 font-mono">0.65s Page Load (86% faster)</p>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-emerald-500/20">
              <div className="flex items-center gap-1 text-emerald-400 font-bold text-xs">
                <Smartphone className="w-3 h-3" />
                <span>Mobile-First</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5 font-mono">+42% Mobile Orders</p>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-emerald-500/20">
              <div className="flex items-center gap-1 text-emerald-400 font-bold text-xs">
                <CreditCard className="w-3 h-3" />
                <span>Simple Checkout</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5 font-mono">-38% Abandonment</p>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-emerald-500/20">
              <div className="flex items-center gap-1 text-emerald-400 font-bold text-xs">
                <Layers className="w-3 h-3" />
                <span>Scalable Stack</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5 font-mono">25k+ Concurrent Users</p>
            </div>
          </div>
        </div>
      </div>

      {/* SCREENSHOTS & INTERACTIVE MOCKUP SHOWCASE */}
      <div className="rounded-3xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl">
        {/* Mockup Toolbar Header */}
        <div className="p-4 sm:p-5 bg-slate-900/80 border-b border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mr-2 hidden sm:inline">
              Interactive Views:
            </span>

            <button
              onClick={() => setActiveTab('storefront')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'storefront'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-900/30'
                  : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              <span>1. Storefront & Catalog</span>
            </button>

            <button
              onClick={() => setActiveTab('product')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'product'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-900/30'
                  : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>2. Product Detail & Configurator</span>
            </button>

            <button
              onClick={() => setActiveTab('checkout')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'checkout'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-900/30'
                  : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <CreditCard className="w-3.5 h-3.5" />
              <span>3. 2-Step Mobile Checkout</span>
            </button>

            <button
              onClick={() => setActiveTab('analytics')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'analytics'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-900/30'
                  : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>4. Merchant Analytics</span>
            </button>
          </div>

          {/* Right Toolbar Controls: Device mode & Enlarge */}
          <div className="flex items-center justify-between lg:justify-end gap-3 pt-2 lg:pt-0 border-t lg:border-t-0 border-slate-800">
            {/* Device Switcher */}
            <div className="flex items-center bg-slate-950 p-1 rounded-lg border border-slate-800">
              <button
                onClick={() => setDeviceMode('desktop')}
                title="Desktop View"
                className={`p-1.5 rounded text-xs transition-all cursor-pointer ${
                  deviceMode === 'desktop' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Laptop className="w-4 h-4" />
              </button>
              <button
                onClick={() => setDeviceMode('tablet')}
                title="Tablet View"
                className={`p-1.5 rounded text-xs transition-all cursor-pointer ${
                  deviceMode === 'tablet' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Tablet className="w-4 h-4" />
              </button>
              <button
                onClick={() => setDeviceMode('mobile')}
                title="Mobile View"
                className={`p-1.5 rounded text-xs transition-all cursor-pointer ${
                  deviceMode === 'mobile' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Smartphone className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>99/100 Lighthouse</span>
              </span>

              <button
                onClick={() => setShowEnlargedModal(true)}
                title="Enlarge View"
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all cursor-pointer"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* MOCKUP DISPLAY CANVAS */}
        <div className="p-4 sm:p-8 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950 flex justify-center items-center min-h-[580px]">
          <div
            className={`w-full transition-all duration-300 ${
              deviceMode === 'mobile'
                ? 'max-w-sm rounded-[36px] border-[8px] border-slate-800 shadow-2xl overflow-hidden'
                : deviceMode === 'tablet'
                ? 'max-w-2xl rounded-2xl border-[6px] border-slate-800 shadow-2xl overflow-hidden'
                : 'max-w-5xl rounded-xl border border-slate-800 shadow-2xl overflow-hidden'
            }`}
          >
            {/* Simulated Browser Bar (Desktop/Tablet) or Phone Speaker Bar (Mobile) */}
            {deviceMode === 'mobile' ? (
              <div className="bg-slate-900 px-6 py-2 flex items-center justify-between border-b border-slate-800 text-[10px] text-slate-400">
                <span>9:41</span>
                <div className="w-16 h-4 bg-slate-950 rounded-full mx-auto" />
                <div className="flex items-center gap-1">
                  <span>5G</span>
                  <div className="w-4 h-2 rounded-sm border border-slate-400" />
                </div>
              </div>
            ) : (
              <div className="bg-slate-900 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-400 w-72 justify-center">
                  <Lock className="w-3 h-3 text-emerald-400" />
                  <span className="text-slate-300">https://aura-store.com/shop</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                  <span className="text-emerald-400">0.65s</span>
                </div>
              </div>
            )}

            {/* SCREEN CONTENT BY TAB */}
            <div className="bg-slate-950 text-white min-h-[480px] p-4 sm:p-6 select-none">
              {/* TAB 1: STOREFRONT & CATALOG */}
              {activeTab === 'storefront' && (
                <div className="space-y-6">
                  {/* Store Header Bar */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-xs text-white">
                        A
                      </div>
                      <span className="font-bold text-sm tracking-wider font-['Outfit']">AURA COMMERCE</span>
                    </div>

                    <div className="hidden sm:flex items-center gap-4 text-xs text-slate-400">
                      <span className="text-white font-medium cursor-pointer">New Arrivals</span>
                      <span className="hover:text-white cursor-pointer">Apparel</span>
                      <span className="hover:text-white cursor-pointer">Footwear</span>
                      <span className="hover:text-white cursor-pointer">Accessories</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <button
                          onClick={() => setActiveTab('checkout')}
                          className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 relative cursor-pointer"
                        >
                          <ShoppingCart className="w-4 h-4" />
                          {cartCount > 0 && (
                            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-blue-600 text-white text-[9px] font-bold flex items-center justify-center">
                              {cartCount}
                            </span>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Promo Banner */}
                  <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-purple-900/40 border border-blue-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest">
                        SEASONAL RELEASE 2026
                      </span>
                      <h4 className="text-base sm:text-lg font-bold font-['Outfit'] text-white">
                        Performance Techwear & Footwear
                      </h4>
                      <p className="text-xs text-slate-300">
                        Sub-second checkout • Global express delivery • 30-day returns
                      </p>
                    </div>
                    <button
                      onClick={() => setActiveTab('product')}
                      className="px-4 py-2 rounded-full bg-white text-slate-950 font-bold text-xs hover:bg-slate-100 transition-all cursor-pointer shrink-0"
                    >
                      Shop Featured Product
                    </button>
                  </div>

                  {/* Category Pills & Search */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
                      {['All', 'Footwear', 'Jackets', 'Accessories'].map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setActiveCategory(cat)}
                          className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap cursor-pointer transition-all ${
                            activeCategory === cat
                              ? 'bg-blue-600 text-white'
                              : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>

                    <div className="relative">
                      <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        readOnly
                        value="Matrix Runner Pro"
                        className="pl-8 pr-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 w-full sm:w-48 font-mono focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Product Cards Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Item 1 (Hero) */}
                    <div
                      onClick={() => setActiveTab('product')}
                      className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/50 transition-all space-y-3 cursor-pointer group"
                    >
                      <div className="h-36 rounded-lg bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden border border-slate-800/80">
                        <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 font-mono text-[9px] font-bold">
                          BESTSELLER
                        </div>
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-all">
                          <Package className="w-10 h-10" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="text-xs font-bold text-white group-hover:text-blue-300 transition-colors">
                            Matrix Carbon Runner Pro
                          </h5>
                          <p className="text-[11px] text-slate-400">Ultralight responsive sneaker</p>
                        </div>
                        <span className="text-xs font-mono font-bold text-white">$185.00</span>
                      </div>
                      <div className="flex items-center justify-between pt-1 text-[10px] text-slate-400">
                        <span className="text-emerald-400 font-mono">In Stock (Next-day shipping)</span>
                        <span className="text-blue-400 font-semibold group-hover:underline">Inspect →</span>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div
                      onClick={() => setActiveTab('product')}
                      className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all space-y-3 cursor-pointer group"
                    >
                      <div className="h-36 rounded-lg bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden border border-slate-800/80">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-all">
                          <ShieldCheck className="w-10 h-10" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="text-xs font-bold text-white">AeroShield Storm Shell</h5>
                          <p className="text-[11px] text-slate-400">Waterproof breathable jacket</p>
                        </div>
                        <span className="text-xs font-mono font-bold text-white">$240.00</span>
                      </div>
                      <div className="flex items-center justify-between pt-1 text-[10px] text-slate-400">
                        <span className="text-emerald-400 font-mono">3 Colors available</span>
                        <span className="text-slate-400 group-hover:text-slate-200">View →</span>
                      </div>
                    </div>

                    {/* Item 3 */}
                    <div
                      onClick={() => setActiveTab('product')}
                      className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all space-y-3 cursor-pointer group hidden sm:block"
                    >
                      <div className="h-36 rounded-lg bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden border border-slate-800/80">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-all">
                          <Sparkles className="w-10 h-10" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="text-xs font-bold text-white">Quantum Ergonomic Pack</h5>
                          <p className="text-[11px] text-slate-400">Modular commuter backpack</p>
                        </div>
                        <span className="text-xs font-mono font-bold text-white">$120.00</span>
                      </div>
                      <div className="flex items-center justify-between pt-1 text-[10px] text-slate-400">
                        <span className="text-amber-400 font-mono">Low stock (Only 4)</span>
                        <span className="text-slate-400 group-hover:text-slate-200">View →</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: PRODUCT DETAIL & CONFIGURATOR */}
              {activeTab === 'product' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  {/* Left: Product Visual Stage */}
                  <div className="rounded-2xl bg-slate-900 p-6 flex flex-col items-center justify-center border border-slate-800 relative min-h-[340px]">
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold">
                        98% POSITIVE REVIEWS
                      </span>
                    </div>

                    <div
                      className={`w-36 h-36 rounded-3xl flex items-center justify-center text-white shadow-2xl transition-all duration-300 ${
                        selectedColor === 'midnight'
                          ? 'bg-gradient-to-tr from-slate-900 via-blue-950 to-blue-700 ring-4 ring-blue-500/30'
                          : selectedColor === 'emerald'
                          ? 'bg-gradient-to-tr from-slate-900 via-emerald-950 to-emerald-600 ring-4 ring-emerald-500/30'
                          : 'bg-gradient-to-tr from-slate-900 via-amber-950 to-amber-600 ring-4 ring-amber-500/30'
                      }`}
                    >
                      <Package className="w-16 h-16" />
                    </div>

                    <div className="mt-6 flex items-center gap-2">
                      <span className="text-[10px] font-mono text-slate-400">Selected Finish:</span>
                      <span className="text-xs font-bold text-white capitalize">{selectedColor} Edition</span>
                    </div>
                  </div>

                  {/* Right: Product Details & Purchase Engine */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-1.5 text-amber-400 text-xs">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} className="w-3.5 h-3.5 fill-amber-400" />
                          ))}
                        </div>
                        <span className="text-slate-400 font-mono">(4.9/5 • 428 reviews)</span>
                      </div>

                      <h3 className="text-xl font-bold font-['Outfit'] text-white mt-1">
                        Matrix Carbon Runner Pro
                      </h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-lg font-mono font-bold text-white">$185.00</span>
                        <span className="text-xs line-through text-slate-500 font-mono">$220.00</span>
                        <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                          Save $35 (15% OFF)
                        </span>
                      </div>
                    </div>

                    {/* Color Swatch Picker */}
                    <div className="space-y-2">
                      <span className="text-xs font-medium text-slate-300">Select Colorway</span>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setSelectedColor('midnight')}
                          className={`w-7 h-7 rounded-full bg-blue-700 border-2 cursor-pointer transition-all ${
                            selectedColor === 'midnight' ? 'border-white scale-110' : 'border-slate-800'
                          }`}
                        />
                        <button
                          onClick={() => setSelectedColor('emerald')}
                          className={`w-7 h-7 rounded-full bg-emerald-600 border-2 cursor-pointer transition-all ${
                            selectedColor === 'emerald' ? 'border-white scale-110' : 'border-slate-800'
                          }`}
                        />
                        <button
                          onClick={() => setSelectedColor('amber')}
                          className={`w-7 h-7 rounded-full bg-amber-600 border-2 cursor-pointer transition-all ${
                            selectedColor === 'amber' ? 'border-white scale-110' : 'border-slate-800'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Size Selector */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-300 font-medium">Select Size (US)</span>
                        <span className="text-blue-400 cursor-pointer">Size Guide</span>
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        {['8.5', '9.0', '9.5', '10.0'].map((sz, idx) => (
                          <button
                            key={sz}
                            className={`py-1.5 rounded-lg text-xs font-mono font-semibold border cursor-pointer transition-all ${
                              idx === 2
                                ? 'bg-blue-600 border-blue-500 text-white'
                                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                            }`}
                          >
                            {sz}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-2 space-y-2">
                      <button
                        onClick={handleAddToCart}
                        className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-900/40 transition-all cursor-pointer hover:scale-[1.02]"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        <span>Add To Bag • $185.00</span>
                      </button>

                      <button
                        onClick={() => setActiveTab('checkout')}
                        className="w-full py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                      >
                        <Zap className="w-3.5 h-3.5 text-blue-600" />
                        <span>Instant 1-Click Checkout</span>
                      </button>
                    </div>

                    {isAddedToast && (
                      <div className="p-2.5 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs flex items-center justify-between animate-fadeIn">
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4" />
                          <span>Added to Cart! Subtotal: ${(cartCount * 185).toFixed(2)}</span>
                        </div>
                        <button
                          onClick={() => setActiveTab('checkout')}
                          className="font-bold underline text-white"
                        >
                          Checkout →
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* TAB 3: 2-STEP MOBILE CHECKOUT */}
              {activeTab === 'checkout' && (
                <div className="max-w-xl mx-auto space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-emerald-400" />
                      <span className="text-xs font-bold font-['Outfit'] text-white">
                        256-BIT ENCRYPTED CHECKOUT
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono">
                      <span
                        className={`px-2 py-0.5 rounded ${
                          checkoutStep === 1 ? 'bg-blue-600 text-white font-bold' : 'text-slate-400'
                        }`}
                      >
                        1. Shipping
                      </span>
                      <ChevronRight className="w-3 h-3 text-slate-600" />
                      <span
                        className={`px-2 py-0.5 rounded ${
                          checkoutStep === 2 ? 'bg-blue-600 text-white font-bold' : 'text-slate-400'
                        }`}
                      >
                        2. Payment
                      </span>
                    </div>
                  </div>

                  {/* Express 1-Tap Options */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono text-slate-400 block text-center">
                      EXPRESS 1-TAP PAYMENT
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setCheckoutStep(2)}
                        className="py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
                      >
                        <span> Apple Pay</span>
                      </button>
                      <button
                        onClick={() => setCheckoutStep(2)}
                        className="py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
                      >
                        <span>Google Pay</span>
                      </button>
                    </div>
                  </div>

                  <div className="relative flex items-center justify-center">
                    <div className="border-t border-slate-800 w-full" />
                    <span className="bg-slate-950 px-3 text-[10px] text-slate-500 font-mono uppercase absolute">
                      Or continue below
                    </span>
                  </div>

                  {/* Form Step 1 vs 2 */}
                  {checkoutStep === 1 ? (
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <label className="text-xs text-slate-300 font-medium">Contact Email</label>
                        <input
                          type="email"
                          readOnly
                          value="alex.turner@enterprise.com"
                          className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <label className="text-xs text-slate-300 font-medium">First Name</label>
                          <input
                            type="text"
                            readOnly
                            value="Alex"
                            className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs text-slate-300 font-medium">Last Name</label>
                          <input
                            type="text"
                            readOnly
                            value="Turner"
                            className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs text-slate-300 font-medium">Shipping Address</label>
                        <input
                          type="text"
                          readOnly
                          value="742 Evergreen Terrace, Suite 400"
                          className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono"
                        />
                      </div>

                      <button
                        onClick={() => setCheckoutStep(2)}
                        className="w-full mt-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                      >
                        <span>Continue to Payment</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                        <div className="flex justify-between text-xs text-slate-300">
                          <span>Card Number</span>
                          <span className="font-mono text-slate-400">•••• •••• •••• 4242</span>
                        </div>
                        <div className="flex justify-between text-xs text-slate-400">
                          <span>Expires: 12/28</span>
                          <span>CVC: •••</span>
                        </div>
                      </div>

                      {/* Order Summary */}
                      <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800 space-y-1.5 text-xs">
                        <div className="flex justify-between text-slate-400">
                          <span>Subtotal ({cartCount} items)</span>
                          <span className="font-mono">${(cartCount * 185).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-slate-400">
                          <span>Express Shipping</span>
                          <span className="font-mono text-emerald-400">FREE</span>
                        </div>
                        <div className="flex justify-between text-slate-200 font-bold pt-1 border-t border-slate-800">
                          <span>Total Amount</span>
                          <span className="font-mono text-emerald-400">${(cartCount * 185).toFixed(2)}</span>
                        </div>
                      </div>

                      <div className="flex gap-2 pt-1">
                        <button
                          onClick={() => setCheckoutStep(1)}
                          className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-semibold cursor-pointer"
                        >
                          Back
                        </button>
                        <button
                          onClick={() => {
                            alert('Demo Checkout Simulated! Payment succeeded with sub-second confirmation.');
                          }}
                          className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-emerald-900/30"
                        >
                          <Lock className="w-3.5 h-3.5" />
                          <span>Complete Order (${(cartCount * 185).toFixed(2)})</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 4: MERCHANT ANALYTICS & SCALABILITY */}
              {activeTab === 'analytics' && (
                <div className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-xs font-mono font-bold text-white uppercase">
                        Live Commerce Telemetry & Scaling
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      Auto-scaling 8 Nodes Active
                    </span>
                  </div>

                  {/* Top Stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                      <span className="text-[10px] text-slate-400 font-mono">Today's Revenue</span>
                      <p className="text-base sm:text-lg font-bold font-mono text-emerald-400 mt-0.5">$148,920</p>
                      <span className="text-[10px] text-emerald-400 font-mono">+34% vs last week</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                      <span className="text-[10px] text-slate-400 font-mono">Conversion Rate</span>
                      <p className="text-base sm:text-lg font-bold font-mono text-blue-400 mt-0.5">4.82%</p>
                      <span className="text-[10px] text-blue-400 font-mono">+1.6% industry avg</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                      <span className="text-[10px] text-slate-400 font-mono">Avg Checkout Time</span>
                      <p className="text-base sm:text-lg font-bold font-mono text-purple-400 mt-0.5">24.2s</p>
                      <span className="text-[10px] text-purple-400 font-mono">2-Step one tap flow</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                      <span className="text-[10px] text-slate-400 font-mono">Active Concurrents</span>
                      <p className="text-base sm:text-lg font-bold font-mono text-white mt-0.5">3,420</p>
                      <span className="text-[10px] text-emerald-400 font-mono">0.00% Error Rate</span>
                    </div>
                  </div>

                  {/* Conversion Funnel Bar */}
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                    <span className="text-xs font-bold text-white font-['Outfit'] block">
                      Checkout Funnel Optimization Breakdown
                    </span>
                    <div className="grid grid-cols-4 gap-2 text-center text-[11px] font-mono pt-1">
                      <div className="p-2 rounded bg-slate-950 border border-slate-800">
                        <span className="text-slate-400 block text-[9px]">Store Visitors</span>
                        <span className="text-white font-bold">100% (71.2k)</span>
                      </div>
                      <div className="p-2 rounded bg-slate-950 border border-slate-800">
                        <span className="text-slate-400 block text-[9px]">Added to Bag</span>
                        <span className="text-blue-400 font-bold">38.4% (27.3k)</span>
                      </div>
                      <div className="p-2 rounded bg-slate-950 border border-slate-800">
                        <span className="text-slate-400 block text-[9px]">Started Checkout</span>
                        <span className="text-indigo-400 font-bold">29.1% (20.7k)</span>
                      </div>
                      <div className="p-2 rounded bg-slate-950 border border-emerald-500/30 bg-emerald-950/20">
                        <span className="text-emerald-400 block text-[9px]">Completed Payment</span>
                        <span className="text-emerald-300 font-bold">4.82% (3.43k)</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* BOTTOM CASE STUDY SPECS & CLIENT CONVERSION BAR */}
        <div className="p-5 sm:p-6 bg-slate-900/90 border-t border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="text-slate-500 font-mono">Tech Stack:</span>
              <span className="text-slate-200 font-semibold">Next.js 14, TypeScript, Tailwind, Stripe, PostgreSQL, Redis</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-500 font-mono">Delivery Time:</span>
              <span className="text-slate-200 font-semibold">6-Week Turnaround</span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            {onOpenEstimator && (
              <button
                onClick={onOpenEstimator}
                className="w-full md:w-auto px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-900/20 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Calculate Your Store Cost</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ENLARGED FULL-SCREEN MODAL */}
      {showEnlargedModal && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setShowEnlargedModal(false)}
        >
          <div
            className="bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-bold font-['Outfit'] text-white">
                  Modern E-Commerce Storefront Blueprint
                </h3>
              </div>
              <button
                onClick={() => setShowEnlargedModal(false)}
                className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300"
              >
                Close Preview
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                  <h4 className="text-sm font-bold text-blue-400">Headless Architecture Highlights</h4>
                  <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                    <li>Edge caching for sub-100ms global TTFB (Time to First Byte)</li>
                    <li>GraphQL microservices layer connecting Stripe & ERP inventories</li>
                    <li>Progressive Web App (PWA) with instant offline product browsing</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                  <h4 className="text-sm font-bold text-emerald-400">Business & ROI Results</h4>
                  <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                    <li>42% increase in mobile completed transactions</li>
                    <li>38% drop in checkout cart abandonment rate</li>
                    <li>Zero downtime during 25,000+ shopper flash promotions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
