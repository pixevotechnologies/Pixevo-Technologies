import React, { useState } from 'react';
import { PageId, ProjectItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { PageHeader } from '../components/PageHeader';
import { ModernEcommerceCaseStudy } from '../components/ModernEcommerceCaseStudy';
import {
  Eye,
  Layers,
  Code2,
  Sparkles,
  ArrowRight,
  Filter,
  CheckCircle2,
  Cpu,
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
        <ModernEcommerceCaseStudy
          onNavigate={onNavigate}
          onOpenEstimator={onOpenEstimator}
        />

        {/* Notice Banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider block">
                {language === 'ar' ? 'استعراض المخططات الهندسية' : 'Engineering Blueprint Showcase'}
              </span>
              <p className="text-xs text-slate-400 mt-0.5">
                {language === 'ar' ? 'جميع المشاريع أدناه هي مفاهيم برمجية ونماذج معمارية توضح معايير التطوير في بيكسيفو تكنولوجيز.' : 'All projects below are functional concepts and architecture demonstrations created by Pixevo Technologies to showcase full-stack patterns.'}
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-full whitespace-nowrap transition-all shadow-md shadow-blue-900/20 cursor-pointer"
          >
            {language === 'ar' ? 'طلب نموذج أولي مخصص' : 'Request Custom Prototype'}
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat || (selectedCategory === 'All' && cat === 'الكل') || (selectedCategory === 'الكل' && cat === 'All')
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-900/20'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`portfolio-${project.id}`}
              className="rounded-2xl bg-slate-900/40 border border-slate-800 p-6 space-y-5 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {project.category}
                  </span>
                  <span className="px-2.5 py-0.5 text-[11px] font-mono rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    {project.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold font-['Outfit'] text-white group-hover:text-blue-300 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1.5 leading-relaxed">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800">
                  {project.metrics.slice(0, 2).map((m, idx) => (
                    <div key={idx} className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-[11px]">
                      <span className="text-slate-400 block">{m.label}:</span>
                      <span className="text-white font-semibold font-mono">{m.value}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <button
                  onClick={() => onSelectProject(project)}
                  className="w-full py-2.5 text-xs font-semibold text-blue-400 bg-slate-950 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>{language === 'ar' ? 'معاينة المخطط والمعمارية' : 'Inspect Blueprint & Architecture'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
