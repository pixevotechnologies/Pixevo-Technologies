import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, Variants } from 'motion/react';
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Building2,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  MessageSquareQuote,
  ArrowRight,
  Award,
  Zap,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PageId } from '../types';

export interface TestimonialSectionProps {
  onNavigate?: (page: PageId) => void;
  autoPlayInterval?: number;
  className?: string;
}

export const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  onNavigate,
  autoPlayInterval = 6500,
  className = '',
}) => {
  const { data, language, t } = useLanguage();
  const testimonials = data.testimonials || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<number>(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = testimonials.length;
  const isRtl = language === 'ar';

  const goToNext = useCallback(() => {
    if (total === 0) return;
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
    setProgress(0);
  }, [total]);

  const goToPrev = useCallback(() => {
    if (total === 0) return;
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
    setProgress(0);
  }, [total]);

  const goToIndex = useCallback(
    (targetIndex: number) => {
      if (targetIndex === currentIndex || total === 0) return;
      setDirection(targetIndex > currentIndex ? 1 : -1);
      setCurrentIndex(targetIndex);
      setProgress(0);
    },
    [currentIndex, total]
  );

  // Auto-play timer and progress tracking
  useEffect(() => {
    if (total <= 1 || isPaused || isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      return;
    }

    const intervalTime = 50; // Update progress bar every 50ms
    const step = (intervalTime / autoPlayInterval) * 100;

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    timerRef.current = setInterval(() => {
      goToNext();
    }, autoPlayInterval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [total, isPaused, isHovered, autoPlayInterval, goToNext]);

  // Reset progress when index changes
  useEffect(() => {
    setProgress(0);
  }, [currentIndex]);

  if (total === 0) return null;

  const currentTestimonial = testimonials[currentIndex];

  // Motion variants for directional cycling
  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? (isRtl ? -60 : 60) : (isRtl ? 60 : -60),
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 320, damping: 32 },
        opacity: { duration: 0.35 },
        scale: { duration: 0.35 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? (isRtl ? 60 : -60) : (isRtl ? -60 : 60),
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { duration: 0.25 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  const socialProofStats = [
    {
      label: isRtl ? 'متوسط تقييم الشركاء' : 'Average Client Rating',
      value: '4.98 / 5.0',
      icon: Star,
      highlight: true,
    },
    {
      label: isRtl ? 'تسليم في الموعد المحدد' : 'On-Time Milestone SLA',
      value: '100%',
      icon: ShieldCheck,
      highlight: false,
    },
    {
      label: isRtl ? 'دورات تطوير رشيقة' : 'Agile Sprint Velocity',
      value: '2 Weeks',
      icon: Zap,
      highlight: false,
    },
    {
      label: isRtl ? 'نقل كامل للملكية الفكرية' : 'Code & IP Ownership',
      value: '100%',
      icon: Award,
      highlight: false,
    },
  ];

  return (
    <div
      id="testimonial-cycle-section"
      className={`space-y-8 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      tabIndex={0}
      role="region"
      aria-label={isRtl ? 'آراء وتوصيات العملاء' : 'Client Testimonials Carousel'}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') {
          isRtl ? goToNext() : goToPrev();
        } else if (e.key === 'ArrowRight') {
          isRtl ? goToPrev() : goToNext();
        } else if (e.key === ' ') {
          e.preventDefault();
          setIsPaused((p) => !p);
        }
      }}
    >
      {/* Header with Title and Nav Action */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider font-mono">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>{isRtl ? 'آراء وتوصيات العملاء المعتمدة' : 'Verified Client Testimonials'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-white tracking-tight">
            {isRtl ? 'شركاؤنا يتحدثون عن تجربتهم معنا' : 'Trusted by Visionary Founders & Engineering Leaders'}
          </h2>
          <p className="text-slate-400 text-sm">
            {isRtl
              ? 'تجارب واقعية لمؤسسين ومديرين تقنيين وثقوا في بيكسيفو للتقنية لتنفيذ تطبيقاتهم السحابية والمحمولة وأنظمة الذكاء الاصطناعي.'
              : 'Real outcomes from leaders who scaled their web platforms, mobile apps, and automation workflows with Pixevo Technologies.'}
          </p>
        </div>

        {onNavigate && (
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-full shadow-md shadow-blue-900/20 transition-all whitespace-nowrap cursor-pointer shrink-0 self-start md:self-auto"
          >
            <span>{isRtl ? 'ابدأ مشروعك وشارك تجربتك' : 'Partner With Us'}</span>
            <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
          </button>
        )}
      </div>

      {/* Social Proof Stats Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {socialProofStats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              className="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 flex items-center gap-3 shadow-xs dark:shadow-none"
            >
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                  stat.highlight
                    ? 'bg-amber-50 dark:bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-500/30'
                    : 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20'
                }`}
              >
                <Icon className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-['Outfit'] truncate">
                  {stat.value}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                  {stat.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Cycling Card Container with Framer Motion */}
      <div className="relative rounded-3xl bg-white dark:bg-gradient-to-b dark:from-slate-900/90 dark:via-slate-900/60 dark:to-slate-950/90 border border-slate-200/80 dark:border-slate-800 p-6 sm:p-10 shadow-xl dark:shadow-2xl overflow-hidden min-h-[380px] sm:min-h-[340px] flex flex-col justify-between transition-colors">
        {/* Ambient background glows */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/5 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

        {/* Decorative Watermark Quote */}
        <Quote className="w-24 h-24 sm:w-32 sm:h-32 text-slate-200/60 dark:text-slate-800/40 absolute -top-4 right-6 sm:right-10 pointer-events-none select-none z-0" />

        {/* Dynamic Animated Content via Framer Motion AnimatePresence */}
        <div className="relative z-10 flex-1 flex flex-col justify-between">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentTestimonial.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="space-y-6 flex-1 flex flex-col justify-between"
            >
              {/* Header Badges & Rating */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  {/* Star rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(currentTestimonial.rating || 5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400/90 ml-1">
                    5.0
                  </span>

                  {/* Verified badge */}
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{isRtl ? 'مشروع تم تسليمه بنجاح' : 'Verified Engagement'}</span>
                  </span>
                </div>

                {/* Project Scope Pill */}
                {currentTestimonial.projectScope && (
                  <span className="text-[11px] font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-950/80 px-3 py-1 rounded-full border border-slate-200/80 dark:border-slate-800">
                    {currentTestimonial.projectScope}
                  </span>
                )}
              </div>

              {/* Quote Text */}
              <div className="my-auto py-2">
                <blockquote className="text-lg sm:text-xl md:text-2xl font-medium font-['Outfit'] text-slate-800 dark:text-slate-100 leading-relaxed italic">
                  "{currentTestimonial.quote}"
                </blockquote>
              </div>

              {/* Client Profile Row */}
              <div className="pt-5 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-gradient-to-tr dark:from-blue-600/40 dark:to-indigo-600/40 border border-blue-200 dark:border-blue-500/40 flex items-center justify-center text-blue-700 dark:text-white font-bold font-['Outfit'] text-base shadow-inner shrink-0">
                    {currentTestimonial.avatarInitials || currentTestimonial.clientName.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-base font-bold text-slate-900 dark:text-white font-['Outfit']">
                        {currentTestimonial.clientName}
                      </h4>
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {currentTestimonial.title}
                    </div>
                    <div className="text-xs text-blue-600 dark:text-blue-400 font-medium flex items-center gap-1 mt-0.5">
                      <Building2 className="w-3 h-3 shrink-0" />
                      <span>{currentTestimonial.company}</span>
                    </div>
                  </div>
                </div>

                {/* Index Counter */}
                <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400 dark:text-slate-500">
                  <span className="text-slate-700 dark:text-slate-300 font-bold text-sm">
                    {String(currentIndex + 1).padStart(2, '0')}
                  </span>
                  <span>/</span>
                  <span>{String(total).padStart(2, '0')}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Interactive Controls & Progress Footer */}
        <div className="relative z-10 pt-6 mt-4 border-t border-slate-100 dark:border-slate-800/60 flex flex-wrap items-center justify-between gap-4">
          {/* Pagination Indicators with direct jump */}
          <div className="flex items-center gap-2">
            {testimonials.map((item, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => goToIndex(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    isActive
                      ? 'w-8 bg-blue-500 shadow-sm shadow-blue-500/50'
                      : 'w-2 bg-slate-800 hover:bg-slate-700'
                  }`}
                  aria-label={isRtl ? `الانتقال إلى الرأي ${idx + 1}` : `Go to quote ${idx + 1}`}
                  title={item.clientName}
                />
              );
            })}
          </div>

          {/* Autoplay Progress and Cycle Navigation Controls */}
          <div className="flex items-center gap-3">
            {/* Auto-cycle progress bar indicator */}
            <div
              className="w-16 sm:w-24 h-1.5 rounded-full bg-slate-800 overflow-hidden hidden xs:block"
              title={isPaused ? (isRtl ? 'التدوير التلقائي متوقف' : 'Auto-cycle paused') : (isRtl ? 'التدوير التلقائي نشط' : 'Auto-cycling')}
            >
              <div
                className={`h-full bg-blue-500 transition-all duration-75 ${
                  isPaused || isHovered ? 'opacity-50' : 'opacity-100'
                }`}
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Play/Pause Toggle */}
            <button
              onClick={() => setIsPaused((prev) => !prev)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-900 border border-slate-200/80 dark:border-slate-800 transition-all cursor-pointer"
              title={
                isPaused
                  ? isRtl
                    ? 'استئناف التدوير التلقائي'
                    : 'Resume auto-cycle'
                  : isRtl
                  ? 'إيقاف مؤقت للتدوير'
                  : 'Pause auto-cycle'
              }
              aria-label={isPaused ? 'Resume auto-cycle' : 'Pause auto-cycle'}
            >
              {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
            </button>

            {/* Previous Button */}
            <button
              onClick={goToPrev}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-900 border border-slate-200/80 dark:border-slate-800 transition-all cursor-pointer"
              title={isRtl ? 'الرأي السابق' : 'Previous quote'}
              aria-label="Previous quote"
            >
              <ChevronLeft className="w-4 h-4 rtl:rotate-180" />
            </button>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="p-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-500 shadow-md shadow-blue-500/20 transition-all cursor-pointer"
              title={isRtl ? 'الرأي التالي' : 'Next quote'}
              aria-label="Next quote"
            >
              <ChevronRight className="w-4 h-4 rtl:rotate-180" />
            </button>
          </div>
        </div>
      </div>

      {/* Client Selector Thumbnail Strip for Rapid Browsing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {testimonials.map((item, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={item.id}
              onClick={() => goToIndex(idx)}
              className={`p-3.5 rounded-xl text-left rtl:text-right border transition-all cursor-pointer flex items-center gap-3 ${
                isActive
                  ? 'bg-blue-50/70 border-blue-500 dark:bg-slate-900 dark:border-blue-500/50 shadow-sm ring-1 ring-blue-500/30'
                  : 'bg-white dark:bg-slate-900/30 border-slate-200/80 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-900/60 hover:border-slate-300 dark:hover:border-slate-700 shadow-2xs dark:shadow-none'
              }`}
            >
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-bold font-['Outfit'] text-xs shrink-0 transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-400'
                }`}
              >
                {item.avatarInitials || item.clientName.charAt(0)}
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs font-bold text-slate-900 dark:text-white truncate font-['Outfit']">
                  {item.clientName}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                  {item.company}
                </div>
              </div>
              {isActive && (
                <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0 animate-pulse" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TestimonialSection;
