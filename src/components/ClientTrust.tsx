import React, { useState, useRef } from 'react';
import { motion, useAnimationControls } from 'motion/react';
import {
  Landmark,
  Activity,
  Truck,
  Sparkles,
  ShoppingBag,
  Zap,
  Building2,
  GraduationCap,
  ShieldCheck,
  Cpu,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export interface SectorItem {
  id: string;
  name: string;
  nameAr: string;
  category: 'finance' | 'health' | 'retail' | 'saas' | 'industry';
  ticker: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  accentBg: string;
  metrics: string;
  metricsAr: string;
  sampleDeliverables: string;
  sampleDeliverablesAr: string;
  compliance: string;
}

const SECTORS: SectorItem[] = [
  {
    id: 'fintech',
    name: 'Fintech & Digital Banking',
    nameAr: 'التكنولوجيا المالية والخدمات المصرفية',
    category: 'finance',
    ticker: 'FIN-TECH',
    icon: Landmark,
    accentColor: 'text-blue-500 group-hover:text-blue-600 dark:group-hover:text-blue-400',
    accentBg: 'bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/30',
    metrics: '$4.8B+ Volume Processed',
    metricsAr: 'أكثر من 4.8 مليار دولار مدفوعات',
    sampleDeliverables: 'PCI-DSS Core Banking, Micro-investment & Payment Gateways',
    sampleDeliverablesAr: 'بوابات دفع مصرفية واستثمار مصغر متوافقة مع PCI-DSS',
    compliance: 'PCI-DSS • ISO 27001',
  },
  {
    id: 'healthtech',
    name: 'HealthTech & MedTech',
    nameAr: 'تكنولوجيا الرعاية الصحية والطبية',
    category: 'health',
    ticker: 'MED-CORE',
    icon: Activity,
    accentColor: 'text-emerald-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400',
    accentBg: 'bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/30',
    metrics: '2.4M+ Patient Portals',
    metricsAr: 'أكثر من 2.4 مليون سجل مريض',
    sampleDeliverables: 'HIPAA-compliant Telemedicine, Diagnostic AI & EHR Systems',
    sampleDeliverablesAr: 'منصات طب عن بُعد وأنظمة تشخيصية متوافقة مع HIPAA',
    compliance: 'HIPAA • HL7 FHIR',
  },
  {
    id: 'logistics',
    name: 'Global Logistics & Supply Chain',
    nameAr: 'الخدمات اللوجستية وسلاسل الإمداد',
    category: 'industry',
    ticker: 'LOGIX-NET',
    icon: Truck,
    accentColor: 'text-amber-500 group-hover:text-amber-600 dark:group-hover:text-amber-400',
    accentBg: 'bg-amber-50 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/30',
    metrics: '850K+ Daily Deliveries',
    metricsAr: 'أكثر من 850 ألف شحنة يومياً',
    sampleDeliverables: 'Fleet Telematics, Dynamic Route Optimization & Warehouse ERP',
    sampleDeliverablesAr: 'تتبع الأساطيل وتحسين مسارات النقل وإدارة المستودعات',
    compliance: 'IoT Telemetry • SOC2',
  },
  {
    id: 'saas',
    name: 'Enterprise AI & Cloud SaaS',
    nameAr: 'الذكاء الاصطناعي السحابي والبرمجيات كخدمة',
    category: 'saas',
    ticker: 'AI-SCALE',
    icon: Sparkles,
    accentColor: 'text-purple-500 group-hover:text-purple-600 dark:group-hover:text-purple-400',
    accentBg: 'bg-purple-50 dark:bg-purple-500/10 border-purple-200 dark:border-purple-500/30',
    metrics: '99.99% Cloud Uptime',
    metricsAr: 'جاهزية سحابية بنسبة 99.99%',
    sampleDeliverables: 'LLM Agentic Pipelines, Vector Indexing & Multi-tenant SaaS',
    sampleDeliverablesAr: 'حلول وكلاء الذكاء الاصطناعي وقواعد البيانات المتجهة',
    compliance: 'SOC2 Type II • GDPR',
  },
  {
    id: 'ecommerce',
    name: 'Headless E-Commerce & Retail',
    nameAr: 'التجارة الإلكترونية المتقدمة والتجزئة',
    category: 'retail',
    ticker: 'COMMERCE-HQ',
    icon: ShoppingBag,
    accentColor: 'text-cyan-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-400',
    accentBg: 'bg-cyan-50 dark:bg-cyan-500/10 border-cyan-200 dark:border-cyan-500/30',
    metrics: '3.4x Conversion Growth',
    metricsAr: 'زيادة التحويلات 3.4 أضعاف',
    sampleDeliverables: 'Omnichannel Storefronts, Real-time Inventory & Stipe Connect',
    sampleDeliverablesAr: 'واجهات تسوق متعددة القنوات وإدارة مخزون لحظية',
    compliance: 'High Concurrency • CDN',
  },
  {
    id: 'energy',
    name: 'Clean Energy & Smart Grid',
    nameAr: 'الطاقة النظيفة والشبكات الذكية',
    category: 'industry',
    ticker: 'GRID-ENERGY',
    icon: Zap,
    accentColor: 'text-yellow-500 group-hover:text-yellow-600 dark:group-hover:text-yellow-400',
    accentBg: 'bg-yellow-50 dark:bg-yellow-500/10 border-yellow-200 dark:border-yellow-500/30',
    metrics: '1.2GW Capacity Monitored',
    metricsAr: 'مراقبة طاقة بقدرة 1.2 غيغاواط',
    sampleDeliverables: 'SCADA Telemetry Visualizers, Predictive Solar Yield Systems',
    sampleDeliverablesAr: 'أنظمة مراقبة SCADA وتحليلات تنبؤية للطاقة الشمسية',
    compliance: 'IEC 62443 • MQTT',
  },
  {
    id: 'proptech',
    name: 'PropTech & Real Estate',
    nameAr: 'تكنولوجيا العقارات والمدن الذكية',
    category: 'industry',
    ticker: 'ESTATE-TECH',
    icon: Building2,
    accentColor: 'text-teal-500 group-hover:text-teal-600 dark:group-hover:text-teal-400',
    accentBg: 'bg-teal-50 dark:bg-teal-500/10 border-teal-200 dark:border-teal-500/30',
    metrics: '14,000+ Units Managed',
    metricsAr: 'إدارة أكثر من 14 ألف وحدة عقارية',
    sampleDeliverables: 'Tenant Experience Portals, Automated Leasing & Digital Twins',
    sampleDeliverablesAr: 'بوابات المستأجرين وأتمتة التأجير والتوائم الرقمية',
    compliance: 'ISO 27001 • SLA 99.9%',
  },
  {
    id: 'edtech',
    name: 'EdTech & Training Platforms',
    nameAr: 'تكنولوجيا التعليم والتدريب المؤسسي',
    category: 'saas',
    ticker: 'LEARN-SYS',
    icon: GraduationCap,
    accentColor: 'text-indigo-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400',
    accentBg: 'bg-indigo-50 dark:bg-indigo-500/10 border-indigo-200 dark:border-indigo-500/30',
    metrics: '620K+ Active Learners',
    metricsAr: 'أكثر من 620 ألف متعلم نشط',
    sampleDeliverables: 'Adaptive Testing Engines, Real-time Live Classrooms & LMS',
    sampleDeliverablesAr: 'محركات اختبارات متكيفة وفصول دراسية رقمية حية',
    compliance: 'SCORM • LTI 1.3',
  },
  {
    id: 'cyber',
    name: 'GovTech & Defense Security',
    nameAr: 'التكنولوجيا الحكومية والأمن الرقمي',
    category: 'finance',
    ticker: 'GOV-SHIELD',
    icon: ShieldCheck,
    accentColor: 'text-rose-500 group-hover:text-rose-600 dark:group-hover:text-rose-400',
    accentBg: 'bg-rose-50 dark:bg-rose-500/10 border-rose-200 dark:border-rose-500/30',
    metrics: 'Zero-Trust Architecture',
    metricsAr: 'معمارية أمنية معتمدة على الثقة الصفرية',
    sampleDeliverables: 'Biometric Identity Verification, Audit Vaults & Cryptographic Keys',
    sampleDeliverablesAr: 'التحقق البيومتري وخزائن التدقيق والتشفير المتقدم',
    compliance: 'FIPS 140-3 • FedRAMP-ready',
  },
  {
    id: 'iot',
    name: 'Industrial IoT & Robotics',
    nameAr: 'إنترنت الأشياء الصناعي والروبوتات',
    category: 'industry',
    ticker: 'AUTO-ROBOTIC',
    icon: Cpu,
    accentColor: 'text-blue-600 group-hover:text-blue-700 dark:group-hover:text-blue-400',
    accentBg: 'bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/30',
    metrics: '40ms Edge Inference',
    metricsAr: 'استجابة حافة الشبكة خلال 40 مللي ثانية',
    sampleDeliverables: 'PLC Hardware Gateways, Vision Inspection & Predictive Maintenance',
    sampleDeliverablesAr: 'بوابات PLC وفحص بصري آلي وصيانة استباقية',
    compliance: 'OPC UA • Edge AI',
  },
];

export const ClientTrust: React.FC = () => {
  const { isRtl } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isPaused, setIsPaused] = useState(false);
  const [activeSectorIndex, setActiveSectorIndex] = useState<number | null>(null);
  const marqueeContainerRef = useRef<HTMLDivElement>(null);

  const filteredSectors = selectedCategory === 'all'
    ? SECTORS
    : SECTORS.filter((s) => s.category === selectedCategory);

  // Duplicate list to create a flawless infinite ticker loop
  const marqueeItems = [...filteredSectors, ...filteredSectors, ...filteredSectors];

  const handleScrollManual = (direction: 'left' | 'right') => {
    if (marqueeContainerRef.current) {
      const scrollAmount = 340;
      marqueeContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="client-trust-section"
      className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
      aria-label="Partner Industries and Sectors Served"
    >
      {/* Header with Title & Live Credibility Badges */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{isRtl ? 'ثقة المؤسسات والصناعات' : 'TRUSTED ACROSS ENTERPRISE SECTORS'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-['Outfit'] text-slate-900 dark:text-white tracking-tight">
            {isRtl
              ? 'صناعات وقطاعات حيوية تعمل بحلول بيكسيفو'
              : 'Industries & Enterprise Sectors Powered by Pixevo'}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
            {isRtl
              ? 'نقوم بهندسة وبناء برمجيات متقدمة تلبي متطلبات الدقة، الأمان، والتوافق التنظيمي لمؤسسات رائدة عالمياً.'
              : 'Engineering mission-critical digital systems engineered for high-concurrency, strict regulatory compliance, and verifiable ROI.'}
          </p>
        </div>

        {/* Carousel Action Controls: Category filter chips & Play/Pause & Arrows */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {/* Play/Pause Marquee Toggle */}
          <button
            onClick={() => setIsPaused((prev) => !prev)}
            className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all cursor-pointer shadow-xs"
            title={isPaused ? (isRtl ? 'استئناف الحركة' : 'Resume carousel') : (isRtl ? 'إيقاف مؤقت' : 'Pause carousel')}
            aria-label="Toggle Carousel Movement"
          >
            {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
          </button>

          {/* Manual Scroll Prev */}
          <button
            onClick={() => handleScrollManual(isRtl ? 'right' : 'left')}
            className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all cursor-pointer shadow-xs"
            title={isRtl ? 'السابق' : 'Previous sector'}
            aria-label="Previous Sector"
          >
            <ChevronLeft className="w-4 h-4 rtl:rotate-180" />
          </button>

          {/* Manual Scroll Next */}
          <button
            onClick={() => handleScrollManual(isRtl ? 'left' : 'right')}
            className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all cursor-pointer shadow-xs"
            title={isRtl ? 'التالي' : 'Next sector'}
            aria-label="Next Sector"
          >
            <ChevronRight className="w-4 h-4 rtl:rotate-180" />
          </button>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-4 scrollbar-none text-xs">
        {[
          { id: 'all', label: isRtl ? 'جميع القطاعات' : 'All Sectors' },
          { id: 'finance', label: isRtl ? 'المالية والأمن' : 'Finance & Regulated' },
          { id: 'health', label: isRtl ? 'الصحة والطب' : 'HealthTech' },
          { id: 'saas', label: isRtl ? 'الذكاء الاصطناعي والـ SaaS' : 'AI & Cloud SaaS' },
          { id: 'industry', label: isRtl ? 'الصناعة واللوجستيات' : 'Logistics & Industry' },
          { id: 'retail', label: isRtl ? 'التجارة الرقمية' : 'Retail & Commerce' },
        ].map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3.5 py-1.5 rounded-full font-medium whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-blue-600 text-white shadow-xs font-semibold'
                : 'bg-white dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200/80 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Carousel Track Container with Edge Gradient Fades */}
      <div
        className="relative overflow-hidden rounded-2xl bg-slate-50/50 dark:bg-slate-950/40 border border-slate-200/80 dark:border-slate-800/80 p-3 sm:p-5"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Ambient Gradient Side Masks */}
        <div className="absolute top-0 left-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-slate-50/90 dark:from-slate-950/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-slate-50/90 dark:from-slate-950/90 to-transparent z-10 pointer-events-none" />

        {/* Scrolling Strip */}
        <div
          ref={marqueeContainerRef}
          className="overflow-x-auto scrollbar-none scroll-smooth flex"
        >
          <motion.div
            className="flex items-center gap-3 sm:gap-4 shrink-0"
            animate={{
              x: isPaused ? 0 : [0, -1800],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 35,
                ease: 'linear',
              },
            }}
          >
            {marqueeItems.map((sector, index) => {
              const Icon = sector.icon;
              const isCardActive = activeSectorIndex === index;

              return (
                <div
                  key={`${sector.id}-${index}`}
                  onClick={() => setActiveSectorIndex(isCardActive ? null : index)}
                  className={`group relative w-[270px] sm:w-[310px] p-4 sm:p-5 rounded-xl border transition-all duration-300 cursor-pointer shrink-0 select-none flex flex-col justify-between ${
                    isCardActive
                      ? 'bg-white dark:bg-slate-900 border-blue-500 shadow-md ring-2 ring-blue-500/20'
                      : 'bg-white dark:bg-slate-900/60 border-slate-200/90 dark:border-slate-800/90 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md hover:bg-white dark:hover:bg-slate-900'
                  }`}
                >
                  {/* Top Sector Header with Grayscale Logo Symbol that turns vibrant on hover */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      {/* Logo Icon Box - Grayscale by default, colorizes on hover */}
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300 filter grayscale contrast-125 opacity-75 group-hover:grayscale-0 group-hover:opacity-100 dark:opacity-70 dark:group-hover:opacity-100 ${sector.accentBg}`}
                      >
                        <Icon className={`w-5 h-5 transition-colors ${sector.accentColor}`} />
                      </div>

                      <div>
                        {/* Sector Code Badge */}
                        <div className="text-[10px] font-mono uppercase tracking-widest text-slate-600 dark:text-slate-400 font-semibold">
                          {sector.ticker}
                        </div>
                        {/* Sector Name */}
                        <h3 className="text-sm font-bold font-['Outfit'] text-slate-900 dark:text-white transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-1">
                          {isRtl ? sector.nameAr : sector.name}
                        </h3>
                      </div>
                    </div>

                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors shrink-0 mt-1" />
                  </div>

                  {/* Impact Metric & Technical Scope */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/70">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200 font-['Outfit']">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{isRtl ? sector.metricsAr : sector.metrics}</span>
                    </div>

                    <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {isRtl ? sector.sampleDeliverablesAr : sector.sampleDeliverables}
                    </p>
                  </div>

                  {/* Compliance Standard Badge */}
                  <div className="mt-3 pt-2 flex items-center justify-between text-[10px] font-mono text-slate-400 dark:text-slate-500">
                    <span>{sector.compliance}</span>
                    <span className="text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
                      {isRtl ? 'استعراض' : 'Verify'}
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Status Bar */}
        <div className="mt-3 pt-3 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>
              {isRtl
                ? 'شعارات القطاعات التوضيحية تُعرض بتدرج رمادي عالي التباين مع تنشيط لوني تفاعلي'
                : 'Sector trust marks presented in high-contrast grayscale with interactive live telemetry.'}
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span>SOC2 • ISO 27001 • HIPAA</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-medium">100% On-Schedule Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
};
