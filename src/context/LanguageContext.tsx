import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  COMPANY_INFO,
  TRUST_PILLARS,
  WHY_PIXEVO_POINTS,
  SERVICES_DATA,
  SOLUTIONS_DATA,
  INDUSTRIES_DATA,
  PROCESS_STEPS,
  ENGAGEMENT_MODELS,
  CORE_VALUES,
  FAQS_DATA,
  TESTIMONIALS_DATA,
} from '../data/siteData';
import {
  COMPANY_INFO_AR,
  TRUST_PILLARS_AR,
  WHY_PIXEVO_POINTS_AR,
  SERVICES_DATA_AR,
  SOLUTIONS_DATA_AR,
  INDUSTRIES_DATA_AR,
  PROCESS_STEPS_AR,
  ENGAGEMENT_MODELS_AR,
  CORE_VALUES_AR,
  FAQS_DATA_AR,
  TESTIMONIALS_DATA_AR,
} from '../data/siteDataAr';
import {
  ServiceItem,
  SolutionItem,
  IndustryItem,
  ProcessStep,
  FAQItem,
  TestimonialItem,
} from '../types';

export type Language = 'en' | 'ar';
export type Direction = 'ltr' | 'rtl';

interface LocalizedData {
  company: typeof COMPANY_INFO;
  trustPillars: typeof TRUST_PILLARS;
  whyPixevo: typeof WHY_PIXEVO_POINTS;
  services: ServiceItem[];
  solutions: SolutionItem[];
  industries: IndustryItem[];
  processSteps: ProcessStep[];
  engagementModels: typeof ENGAGEMENT_MODELS;
  coreValues: typeof CORE_VALUES;
  faqs: FAQItem[];
  testimonials: TestimonialItem[];
}

interface LanguageContextType {
  language: Language;
  direction: Direction;
  isRtl: boolean;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
  data: LocalizedData;
}

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Brand & Header
    'brand.name': 'Pixevo',
    'brand.technologies': 'Technologies',
    'brand.tagline': 'Digital Transformation & Software Engineering',
    'header.startProject': 'Start a Project',
    'header.estimator': 'Project Estimator',
    'header.interactiveEstimator': 'Interactive Project Estimator',
    'header.language': 'Language',
    'header.en': 'English',
    'header.ar': 'العربية',
    'header.globalRemote': 'Global Remote',

    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.solutions': 'Solutions',
    'nav.industries': 'Industries',
    'nav.portfolio': 'Portfolio',
    'nav.process': 'Process',
    'nav.careers': 'Careers',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',

    // Hero Section
    'hero.badge': 'Digital Transformation Experts',
    'hero.title.pre': 'Building Digital Solutions That ',
    'hero.title.highlight': 'Move Your Business Forward.',
    'hero.description':
      'Pixevo Technologies delivers modern software, AI, and automation solutions designed to help businesses grow and operate smarter.',
    'hero.cta.services': 'Explore Our Services',
    'hero.cta.portfolio': 'View Portfolio',
    'hero.badge.fullstack': 'Full-Stack',
    'hero.badge.fullstack.desc': 'End-to-End Delivery',
    'hero.badge.enterprise': 'Enterprise',
    'hero.badge.enterprise.desc': 'TypeScript & Cloud',
    'hero.badge.agile': 'Agile',
    'hero.badge.agile.desc': 'Continuous Sprints',

    // Why Pixevo / Pillars
    'why.badge': 'Core Architectural Values',
    'why.title': 'Engineering Excellence Built on Proven Principles',
    'why.desc':
      'We combine engineering discipline, modern technologies, and dedicated communication to deliver dependable business software.',

    // Services Section
    'services.badge': 'Core Capabilities',
    'services.title': 'End-to-End Software & Digital Services',
    'services.desc':
      'Comprehensive engineering services to modernize operations, accelerate time-to-market, and build reliable digital products.',
    'services.cta.all': 'Explore All Services',
    'services.cta.contact': 'Discuss Your Project Requirements',

    // Solutions Section
    'solutions.badge': 'Business Systems',
    'solutions.title': 'Pre-Engineered & Custom Business Solutions',
    'solutions.desc':
      'Modular architectures designed to solve specific operational bottlenecks across core business functions.',
    'solutions.cta.all': 'Explore All Solutions',
    'solutions.modules': 'Modules Included',
    'solutions.view': 'View Solution',

    // Industries Section
    'industries.badge': 'Domain Specialization',
    'industries.title': 'Engineered for Industry-Specific Requirements',
    'industries.desc':
      'Tailored software architecture addressing specific operational challenges across key commercial sectors.',
    'industries.explore': 'Explore Solutions',

    // Process Section
    'process.badge': 'Structured Methodology',
    'process.title': 'Our 5-Step Delivery Lifecycle',
    'process.desc':
      'A disciplined, transparent agile lifecycle ensuring predictable delivery, high code quality, and zero launch surprises.',

    // Portfolio Section
    'portfolio.badge': 'Architecture Blueprints',
    'portfolio.title': 'Featured Systems & Engineering Concepts',
    'portfolio.desc':
      'Explore real-world software architectures, interactive prototypes, and production blueprints designed by Pixevo.',
    'portfolio.cta.all': 'View Full Portfolio',
    'portfolio.inspect': 'Inspect Architecture Blueprint',

    // Engagement Models
    'engagement.badge': 'Collaboration Framework',
    'engagement.title': 'Flexible Engagement Models',
    'engagement.desc':
      'Choose the engagement model that best suits your project timeline, internal team composition, and roadmap agility.',
    'engagement.suitedFor': 'Best Suited For:',
    'engagement.inquire': 'Inquire About This Model',

    // Testimonials
    'testimonials.badge': 'Client Feedback',
    'testimonials.title': 'Trusted by Growing Businesses Worldwide',
    'testimonials.desc':
      'Read what leaders, founders, and CTOs say about working with Pixevo Technologies.',

    // Blog / Insights
    'blog.badge': 'Engineering Insights',
    'blog.title': 'Latest Perspectives on Tech & Software',
    'blog.desc':
      'Articles, architecture reviews, and engineering best practices from the Pixevo team.',
    'blog.cta.all': 'Explore All Articles',
    'blog.read': 'Read Full Article',

    // Bottom Contact & CTA
    'contact.cta.title': 'Start Your Project With Pixevo Technologies',
    'contact.cta.desc':
      'Ready to build reliable software or modernize your existing digital infrastructure? Our engineering leads are here to help.',
    'footer.cta.badge': 'Ready to Transform Your Digital Infrastructure?',
    'footer.cta.title': 'Let’s Build Something Exceptional Together.',
    'footer.cta.desc':
      'Whether you need custom software, mobile engineering, AI automation, or technical advisory, our engineering team is ready to help you plan and execute.',
    'footer.cta.inquire': 'Start a Project Inquiry',
    'footer.cta.estimate': 'Estimate Project Timeline',
    'footer.social.badge': 'Connect & Follow Pixevo',
    'footer.social.title': 'Follow Our Engineering Journey & Company Updates',
    'footer.social.subtitle': 'Official Social Channels · Active Weekly',
    'footer.rights': 'All rights reserved.',
    'footer.scrollTop': 'Back to top',

    // Common UI
    'common.viewAll': 'View All',
    'common.details': 'Details',
    'common.learnMore': 'Learn More',
    'common.exploreMore': 'Explore More',
    'common.getInTouch': 'Get in Touch',
    'common.freeConsultation': 'Schedule Consultation',
  },
  ar: {
    // Brand & Header
    'brand.name': 'بيكسيفو',
    'brand.technologies': 'للتقنية',
    'brand.tagline': 'التحول الرقمي وهندسة البرمجيات المتقدمة',
    'header.startProject': 'ابدأ مشروعك',
    'header.estimator': 'حاسبة التكلفة',
    'header.interactiveEstimator': 'حاسبة المشروع التفاعلية',
    'header.language': 'اللغة',
    'header.en': 'English',
    'header.ar': 'العربية',
    'header.globalRemote': 'فريق عمل عالمي عن بُعد',

    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'خدماتنا',
    'nav.solutions': 'الحلول التقنية',
    'nav.industries': 'القطاعات',
    'nav.portfolio': 'أعمالنا',
    'nav.process': 'منهجية العمل',
    'nav.careers': 'الوظائف',
    'nav.blog': 'المدونة',
    'nav.contact': 'اتصل بنا',

    // Hero Section
    'hero.badge': 'خبراء التحول الرقمي وهندسة البرمجيات',
    'hero.title.pre': 'نبني حلولاً رقمية تدفع ',
    'hero.title.highlight': 'أعمالك نحو المستقبل والنمو.',
    'hero.description':
      'تقدم بيكسيفو للتقنية حلولاً برمجية حديثة، وتطبيقات متقدمة، وأنظمة ذكاء اصطناعي وأتمتة مصممة لمساعدة الشركات على التوسع والعمل بكفاءة أعلى.',
    'hero.cta.services': 'استكشف خدماتنا البرمجية',
    'hero.cta.portfolio': 'استعرض أعمالنا',
    'hero.badge.fullstack': 'تطوير متكامل',
    'hero.badge.fullstack.desc': 'تسليم شامل من البداية للنهاية',
    'hero.badge.enterprise': 'معايير مؤسسية',
    'hero.badge.enterprise.desc': 'أحدث التقنيات السحابية',
    'hero.badge.agile': 'تطوير رشيق (Agile)',
    'hero.badge.agile.desc': 'تسليم مرحلي سريع ومستمر',

    // Why Pixevo / Pillars
    'why.badge': 'قيمنا الهندسية الراسخة',
    'why.title': 'تميز برمجي مبني على أسس علمية وموثوقة',
    'why.desc':
      'نجمع بين الانضباط الهندسي، وأحدث التقنيات السحابية، والتواصل الشفاف لبناء أنظمة رقمية متينة تحقق أهدافك.',

    // Services Section
    'services.badge': 'قدراتنا وخدماتنا الأساسية',
    'services.title': 'خدمات برمجية ورقمية متكاملة',
    'services.desc':
      'حلول هندسية شاملة لتحديث العمليات، وتسريع إطلاق المنتجات، وبناء برمجيات قوية تعتمد عليها لسنوات.',
    'services.cta.all': 'استكشف جميع الخدمات',
    'services.cta.contact': 'ناقش متطلبات مشروعك معنا',

    // Solutions Section
    'solutions.badge': 'الأنظمة والحلول المؤسسية',
    'solutions.title': 'حلول برمجية مخصصة وجاهزة للأعمال',
    'solutions.desc':
      'بنى برمجية معيارية مصممة للقضاء على الاختناقات التشغيلية عبر مختلف أقسام وإدارات شركتك.',
    'solutions.cta.all': 'استكشف كافة الحلول',
    'solutions.modules': 'وحدات مدمجة',
    'solutions.view': 'عرض تفاصيل الحل',

    // Industries Section
    'industries.badge': 'التخصص القطاعي',
    'industries.title': 'مهندسة خصيصاً لتلبية متطلبات قطاعك',
    'industries.desc':
      'هندسة برمجية متخصصة تعالج التحديات التشغيلية الفريدة في مختلف القطاعات التجارية الحيوية.',
    'industries.explore': 'استكشف الحلول',

    // Process Section
    'process.badge': 'منهجية عمل احترافية',
    'process.title': 'دورة تسليم المشاريع في ٥ خطوات',
    'process.desc':
      'منهجية تطوير رشيقة وشفافة تضمن التسليم في الوقت المحدد، وجودة برمجية فائقة دون أي مفاجآت.',

    // Portfolio Section
    'portfolio.badge': 'المخططات الهندسية',
    'portfolio.title': 'نماذج المشاريع والبنى المعمارية المطورة',
    'portfolio.desc':
      'استعرض تصاميم البرمجيات الحقيقية، والنماذج التفاعلية، والمخططات البرمجية المصممة من قبل فريق بيكسيفو.',
    'portfolio.cta.all': 'استعرض كامل المعرض',
    'portfolio.inspect': 'فحص المخطط المعماري للنظام',

    // Engagement Models
    'engagement.badge': 'نماذج التعاقد والشراكة',
    'engagement.title': 'خيارات تعاون مرنة تناسب نموذج عملك',
    'engagement.desc':
      'اختر نموذج التعاقد الأنسب لجدول مشروعك الزمني، وحجم فريقك الداخلي، وأهدافك الاستراتيجية.',
    'engagement.suitedFor': 'الأنسب لـ:',
    'engagement.inquire': 'استفسر عن هذا النموذج',

    // Testimonials
    'testimonials.badge': 'آراء الشركاء والعملاء',
    'testimonials.title': 'موثوقون من قبل شركات ورواد أعمال حول العالم',
    'testimonials.desc':
      'تعرف على تجارب المؤسسين والرؤساء التنفيذيين والتقنيين في العمل مع بيكسيفو للتقنية.',

    // Blog / Insights
    'blog.badge': 'رؤى تقنية ومقالات',
    'blog.title': 'أحدث المقالات في هندسة البرمجيات والذكاء الاصطناعي',
    'blog.desc':
      'مقالات متخصصة، ومراجعات للبنى الهندسية، وأفضل الممارسات التقنية من فريق بيكسيفو.',
    'blog.cta.all': 'استعرض كافة المقالات',
    'blog.read': 'اقرأ المقال كاملاً',

    // Bottom Contact & CTA
    'contact.cta.title': 'ابدأ مشروعك الآن مع بيكسيفو للتقنية',
    'contact.cta.desc':
      'هل أنت جاهز لبناء برمجيات متينة أو تحديث بنيتك التحتية الرقمية؟ مهندسونا مستعدون لمساعدتك في التخطيط والتنفيذ.',
    'footer.cta.badge': 'هل أنت جاهز لتطوير بنيتك الرقمية؟',
    'footer.cta.title': 'دعنا نبني معاً حلولاً استثنائية.',
    'footer.cta.desc':
      'سواء كنت بحاجة إلى برمجيات مخصصة، أو تطبيقات جوال، أو أتمتة بالذكاء الاصطناعي، أو استشارات تقنية، فريقنا الهندسي جاهز للتنفيذ.',
    'footer.cta.inquire': 'طلب استشارة مشروع جديد',
    'footer.cta.estimate': 'حساب التكلفة والجدول الزمني',
    'footer.social.badge': 'تواصل وتابع بيكسيفو',
    'footer.social.title': 'تابع رحلتنا الهندسية وآخر أخبار الشركة',
    'footer.social.subtitle': 'قنواتنا الرسمية المعتمدة · تحديثات مستمرة',
    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.scrollTop': 'العودة للأعلى',

    // Common UI
    'common.viewAll': 'عرض الكل',
    'common.details': 'التفاصيل',
    'common.learnMore': 'اعرف المزيد',
    'common.exploreMore': 'استكشف المزيد',
    'common.getInTouch': 'تواصل معنا',
    'common.freeConsultation': 'حجز استشارة تقنية',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('pixevo_language');
      if (saved === 'en' || saved === 'ar') return saved;
    }
    return 'en';
  });

  const direction: Direction = language === 'ar' ? 'rtl' : 'ltr';
  const isRtl = language === 'ar';

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
      document.documentElement.dir = direction;
      localStorage.setItem('pixevo_language', language);
    }
  }, [language, direction]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  const localizedData: LocalizedData = {
    company: (language === 'ar' ? COMPANY_INFO_AR : COMPANY_INFO) as typeof COMPANY_INFO,
    trustPillars: (language === 'ar' ? TRUST_PILLARS_AR : TRUST_PILLARS) as typeof TRUST_PILLARS,
    whyPixevo: (language === 'ar' ? WHY_PIXEVO_POINTS_AR : WHY_PIXEVO_POINTS) as typeof WHY_PIXEVO_POINTS,
    services: language === 'ar' ? SERVICES_DATA_AR : SERVICES_DATA,
    solutions: language === 'ar' ? SOLUTIONS_DATA_AR : SOLUTIONS_DATA,
    industries: language === 'ar' ? INDUSTRIES_DATA_AR : INDUSTRIES_DATA,
    processSteps: language === 'ar' ? PROCESS_STEPS_AR : PROCESS_STEPS,
    engagementModels: (language === 'ar' ? ENGAGEMENT_MODELS_AR : ENGAGEMENT_MODELS) as typeof ENGAGEMENT_MODELS,
    coreValues: (language === 'ar' ? CORE_VALUES_AR : CORE_VALUES) as typeof CORE_VALUES,
    faqs: language === 'ar' ? FAQS_DATA_AR : FAQS_DATA,
    testimonials: language === 'ar' ? TESTIMONIALS_DATA_AR : TESTIMONIALS_DATA,
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        direction,
        isRtl,
        setLanguage,
        toggleLanguage,
        t,
        data: localizedData,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
