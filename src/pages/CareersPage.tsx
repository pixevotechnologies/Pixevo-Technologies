import React, { useState } from 'react';
import { PageId, JobPosition } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { PageHeader } from '../components/PageHeader';
import {
  Briefcase,
  MapPin,
  Clock,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Code2,
  Heart,
  Globe2,
  Laptop,
  GraduationCap,
} from 'lucide-react';

interface CareersPageProps {
  onNavigate: (page: PageId) => void;
  onApplyJob: (job: JobPosition) => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({
  onNavigate,
  onApplyJob,
}) => {
  const { data, language, t } = useLanguage();
  const [departmentFilter, setDepartmentFilter] = useState<string>('All');

  const departments = language === 'ar'
    ? ['الكل', 'الهندسة والبرمجة', 'التصميم وتجربة المستخدم', 'الاستشارات المعمارية']
    : ['All', 'Engineering', 'Design', 'Consulting'];

  const filteredJobs =
    departmentFilter === 'All' || departmentFilter === 'الكل'
      ? data.careers
      : data.careers.filter((j) => j.department === departmentFilter);

  const perks = language === 'ar' ? [
    {
      title: 'ثقافة العمل عن بُعد أولاً',
      description: 'اعمل من أي مكان بساعات مرنة وتواصل حديث غير تزامني.',
      icon: Laptop,
    },
    {
      title: 'أحدث الحزم والتقنيات البرمجية',
      description: 'اعمل بأحدث إصدارات TypeScript و React و Next.js و Node.js و Python والمنصات السحابية.',
      icon: Code2,
    },
    {
      title: 'التعلم المستمر والنمو المهني',
      description: 'ميزانية سنوية للتعلم والشهادات الاحترافية للكتب والمسارات والمؤتمرات التقنية.',
      icon: GraduationCap,
    },
    {
      title: 'مشاريع عالمية ذات أثر ملموس',
      description: 'ابنِ برمجيات حيوية لشركات ناشئة ومؤسسات ومشاريع رائدة حول العالم.',
      icon: Globe2,
    },
  ] : [
    {
      title: 'Remote-First Culture',
      description: 'Work from anywhere with flexible hours and modern asynchronous communication.',
      icon: Laptop,
    },
    {
      title: 'Modern Tech Stack',
      description: 'Work with modern TypeScript, React, Next.js, Node.js, Python, and cloud platforms.',
      icon: Code2,
    },
    {
      title: 'Continuous Learning',
      description: 'Annual learning and certification budget for books, courses, and technical conferences.',
      icon: GraduationCap,
    },
    {
      title: 'Global High-Impact Projects',
      description: 'Build mission-critical software for international startups, SMEs, and modern enterprises.',
      icon: Globe2,
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      <PageHeader
        category={language === 'ar' ? 'الوظائف والفرص في بيكسيفو' : 'Careers at Pixevo Technologies'}
        title={language === 'ar' ? 'ابنِ منتجات رقمية متقدمة مع فريق هندسي عالمي' : 'Build High-Impact Digital Products with a Global Engineering Team'}
        description={language === 'ar' ? 'انضم إلى فريقنا الدولي من مهندسي البرمجيات والمعماريين ومصممي الواجهات لبناء حلول تقنية قابلة للتوسع.' : 'Join our international team of software engineers, system architects, and UI/UX designers building scalable technology solutions for modern businesses.'}
        currentPageName={t('nav.careers')}
        onNavigateHome={() => onNavigate('home')}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Why Join Section */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider">
              {language === 'ar' ? 'بيئة العمل في بيكسيفو' : 'Life at Pixevo'}
            </span>
            <h2 className="text-3xl font-bold font-['Outfit'] text-white">
              {language === 'ar' ? 'لماذا يختار المطورون والمصممون بيكسيفو؟' : 'Why Engineers & Designers Choose Pixevo'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold font-['Outfit'] text-white">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Open Positions List */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider block">
                {language === 'ar' ? 'الفرص الحالية المتاحة' : 'Current Opportunities'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-white">
                {language === 'ar'
                  ? `الشواغر الهندسية والتصميمية المتاحة (${data.careers.length})`
                  : `Open Engineering & Design Positions (${data.careers.length})`}
              </h2>
            </div>

            {/* Department filters */}
            <div className="flex flex-wrap gap-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setDepartmentFilter(dept)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    departmentFilter === dept || (departmentFilter === 'All' && dept === 'الكل') || (departmentFilter === 'الكل' && dept === 'All')
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-900/20'
                      : 'bg-slate-950 text-slate-300 hover:bg-slate-900 border border-slate-800'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                id={`job-${job.id}`}
                className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-6 hover:border-slate-700 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {job.department}
                      </span>
                      <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {job.type}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{job.location}</span>
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold font-['Outfit'] text-white">
                      {job.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => onApplyJob(job)}
                    className="px-6 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-full shadow-md shadow-blue-900/20 transition-all whitespace-nowrap cursor-pointer"
                  >
                    {language === 'ar' ? 'التقديم على هذه الوظيفة' : 'Apply for this Role'}
                  </button>
                </div>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {job.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Responsibilities */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block">
                      {language === 'ar' ? 'المسؤوليات الرئيسية' : 'Primary Responsibilities'}
                    </span>
                    <ul className="space-y-1.5">
                      {job.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Requirements */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block">
                      {language === 'ar' ? 'المتطلبات والخبرات' : 'Requirements & Experience'}
                    </span>
                    <ul className="space-y-1.5">
                      {job.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <span className="text-blue-400">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Benefits */}
                <div className="pt-3 border-t border-slate-800 flex flex-wrap gap-2 items-center">
                  <span className="text-xs font-mono text-slate-400 mr-2">
                    {language === 'ar' ? 'المزايا:' : 'Benefits:'}
                  </span>
                  {job.benefits.map((b) => (
                    <span
                      key={b}
                      className="px-2.5 py-0.5 text-xs font-mono bg-slate-950 text-slate-300 rounded border border-slate-800"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* General Application Banner */}
        <section className="p-8 sm:p-10 rounded-2xl bg-slate-900/40 border border-slate-800 text-center space-y-4">
          <h3 className="text-2xl font-bold font-['Outfit'] text-white">
            {language === 'ar' ? 'لم تجد وظيفة تطابق خبرتك الحالية بالضبط؟' : "Don't See an Exact Match for Your Skills?"}
          </h3>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            {language === 'ar'
              ? 'يسعدنا دائماً التواصل والتعرف على مهندسي برمجيات ومعماريين ومصممي واجهات موهوبين وشغوفين.'
              : 'We are always interested in connecting with passionate full-stack engineers, cloud architects, and UI/UX designers.'}
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-2.5 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-900 rounded-full border border-slate-800 transition-all cursor-pointer"
          >
            {language === 'ar' ? 'إرسال طلب عام عبر صفحة التواصل' : 'Send a General Application via Contact'}
          </button>
        </section>
      </div>
    </div>
  );
};
