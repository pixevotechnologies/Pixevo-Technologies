import React from 'react';
import { BlogPost } from '../types';
import {
  X,
  Calendar,
  Clock,
  User,
  Share2,
  Bookmark,
  Sparkles,
  CheckCircle2,
  Tag,
} from 'lucide-react';

interface ArticleModalProps {
  article: BlogPost | null;
  onClose: () => void;
  onSelectCategory?: (category: string) => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onSelectCategory,
}) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="article-title"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-900 transition-all cursor-pointer"
          aria-label="Close article modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Article Meta */}
        <div className="space-y-3 pr-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              {article.category}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              <span>{article.readTime}</span>
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              <span>{article.publishedDate}</span>
            </span>
          </div>

          <h2
            id="article-title"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Outfit'] text-white leading-tight"
          >
            {article.title}
          </h2>

          <div className="flex items-center gap-3 pt-1 text-xs text-slate-400">
            <div className="w-7 h-7 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-300 font-bold">
              {article.author.name.charAt(0)}
            </div>
            <div>
              <span className="font-semibold text-slate-200">{article.author.name}</span>
              <span className="block text-[11px] text-slate-400">{article.author.role}</span>
            </div>
          </div>
        </div>

        {/* Excerpt Box */}
        <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-slate-300 text-sm italic">
          "{article.excerpt}"
        </div>

        {/* Article Body Content */}
        <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
          {article.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Key Takeaways */}
        <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 font-mono flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Key Executive Takeaways</span>
          </h4>
          <ul className="space-y-2">
            {article.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-slate-800">
          <Tag className="w-3.5 h-3.5 text-slate-400 mr-1" />
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 text-xs text-slate-300 bg-slate-900 border border-slate-800 rounded-md font-mono"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            Published by Pixevo Technologies Insights
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-850 rounded-full border border-slate-800 transition-all cursor-pointer"
          >
            Done Reading
          </button>
        </div>
      </div>
    </div>
  );
};
