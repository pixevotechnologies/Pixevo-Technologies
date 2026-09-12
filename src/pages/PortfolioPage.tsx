import React, { useState, useEffect } from 'react';
import { PageId, ProjectItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { PageHeader } from '../components/PageHeader';
import { ModernEcommerceCaseStudy } from '../components/ModernEcommerceCaseStudy';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ScrollReveal';
import { PortfolioSkeleton } from '../components/Skeletons';
import {
  Eye,
  Layers,
  Code2,
  Sparkles,
  ArrowRight,
  Filter,
  CheckCircle2,
  Cpu,
  RefreshCw,
} from 'lucide-react';

interface PortfolioPageProps {
  onNavigate: (page: PageId) => void;
  onSelectProject: (project: ProjectItem) => void;
  onOpenEstimator?: () => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onNavigate,
  onSelectProject,
  onOpenEstimator,
}) => {
  const { data, language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Initial simulated fetch to show skeleton smoothly
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 380);
    return () => clearTimeout(timer);
  }, []);

  const handleSelectCategory = (cat: string) => {
    if (cat === selectedCategory) return;
    setIsLoading(true);
    setSelectedCategory(cat);
    setTimeout(() => {
      setIsLoading(false);
    }, 320);
  };

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 450);
  };

  const categories = language === 'ar'
    ? ['الكل', 'برمجيات مؤسسية', 'تطبيقات ويب', 'تطبيقات هواتف', 'ذكاء اصطناعي وأتمتة', 'تجارة إلكترونية']
    : ['All', 'Enterprise Software', 'Web Application', 'Mobile App', 'AI & Automation', 'E-commerce'];

  const filteredProjects =
    selectedCategory === 'All' || selectedCategory === 'الكل'
      ? data.portfolio
      : data.portfolio.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      <PageHeader
        category={language === 'ar' ? 'معرض المشاريع والمخططات المعمارية' : 'Portfolio & Architectural Concepts'}
        title={language === 'ar' ? 'مشاريع تجريبية ومفاهيم برمجية تطبيقية' : 'Demonstration Builds & Software Concepts'}
        description={language === 'ar' ? 'استعرض مخططاتنا المعمارية والمشاريع الوظيفية التي تُبرز أنظمة التصميم لدينا وبنيتنا البرمجية الكاملة.' : 'Review our engineering blueprints and functional concept projects showcasing our design systems, full-stack architectures, and development standards.'}
        currentPageName={t('nav.portfolio')}
        onNavigateHome={() => onNavigate('home')}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Featured Case Study Spotlight */}
        <ScrollReveal direction="up">
          <ModernEcommerceCaseStudy
            onNavigate={onNavigate}
            onOpenEstimator={onOpenEstimator}
          />
        </ScrollReveal>

        {/* Notice Banner */}
        <ScrollReveal direction="up" delay={100}>
          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800 shadow-sm dark:shadow-none flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block">
                  {language === 'ar' ? 'استعراض المخططات الهندسية' : 'Engineering Blueprint Showcase'}
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                  {language === 'ar' ? 'جميع المشاريع أدناه هي مفاهيم برمجية ونماذج معمارية توضح معايير التطوير في بيكسيفو تكنولوجيز.' : 'All projects below are functional concepts and architecture demonstrations created by Pixevo Technologies to showcase full-stack patterns.'}
                </p>
              </div>
            </div>

            <button
              onClick={() => onNavigate('contact')}
              className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-full whitespace-nowrap transition-all shadow-sm cursor-pointer"
            >
              {language === 'ar' ? 'طلب نموذج أولي مخصص' : 'Request Custom Prototype'}
            </button>
          </div>
        </ScrollReveal>

        {/* Category Filters & Re-fetch control */}
        <ScrollReveal direction="up" delay={150}>
          <div className="flex flex-wrap items-center justify-between gap-3 pb-2">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleSelectCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat || (selectedCategory === 'All' && cat === 'الكل') || (selectedCategory === 'الكل' && cat === 'All')
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white border border-slate-200 dark:border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Quick Simulate Fetch / Refresh Button */}
            <button
              onClick={handleRefresh}
              disabled={isLoading}
              title={language === 'ar' ? 'إعادة تحميل محتوى المشاريع' : 'Simulate fetch & reload projects'}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 dark:text-slate-400 dark:hover:text-white dark:bg-slate-900/60 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-full transition-all cursor-pointer disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin text-blue-600 dark:text-blue-400' : ''}`} />
              <span className="hidden sm:inline">
                {language === 'ar' ? 'تحديث' : 'Refresh'}
              </span>
            </button>
          </div>
        </ScrollReveal>

        {/* Projects Grid or Skeletons */}
        {isLoading ? (
          <PortfolioSkeleton count={6} />
        ) : (
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <StaggerItem key={project.id}>
                <div
                  id={`portfolio-${project.id}`}
                  className="h-full rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800 p-6 space-y-5 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20">
                        {project.category}
                      </span>
                      <span className="px-2.5 py-0.5 text-[11px] font-mono rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 dark:bg-indigo-500/10 dark:text-indigo-300 dark:border-indigo-500/20">
                        {project.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold font-['Outfit'] text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1.5 leading-relaxed">
                        {project.shortDesc}
                      </p>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                      {project.metrics.slice(0, 2).map((m, idx) => (
                        <div key={idx} className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200/70 dark:border-slate-800 text-[11px]">
                          <span className="text-slate-500 dark:text-slate-400 block">{m.label}:</span>
                          <span className="text-slate-900 dark:text-white font-semibold font-mono">{m.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200/80 dark:bg-slate-950 dark:text-slate-300 dark:border-slate-800"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="w-full py-2.5 text-xs font-semibold text-slate-800 hover:text-white bg-slate-100 hover:bg-blue-600 dark:bg-slate-950 dark:hover:bg-slate-900 dark:text-blue-400 dark:hover:text-blue-300 border border-slate-200 dark:border-slate-800 dark:hover:border-slate-700 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                    >
                      <Eye className="w-4 h-4" />
                      <span>{language === 'ar' ? 'معاينة المخطط والمعمارية' : 'Inspect Blueprint & Architecture'}</span>
                    </button>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}
      </div>
    </div>
  );
};
