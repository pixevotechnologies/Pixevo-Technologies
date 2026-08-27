import React, { useState } from 'react';
import { PageId, BlogPost } from '../types';
import { BLOG_POSTS } from '../data/siteData';
import { PageHeader } from '../components/PageHeader';
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Search,
  Tag,
  Sparkles,
  BookOpen,
} from 'lucide-react';

interface BlogPageProps {
  onNavigate: (page: PageId) => void;
  onSelectArticle: (article: BlogPost) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  onNavigate,
  onSelectArticle,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'AI & Automation',
    'Software Architecture',
    'Mobile & Cross-Platform',
    'UI/UX & Product Design',
  ];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      <PageHeader
        category="Engineering Insights & Knowledge"
        title="Technology, Architecture & Software Guides"
        description="Practical analysis, architectural strategies, and technical insights from the engineering team at Pixevo Technologies."
        currentPageName="Blog & Insights"
        onNavigateHome={() => onNavigate('home')}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Search & Category Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/40 border border-slate-800">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-900/20'
                    : 'bg-slate-950 text-slate-300 hover:bg-slate-900 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles or tags..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-950 border border-slate-800 rounded-full text-white placeholder:text-slate-500 focus:outline-none focus:border-slate-700"
            />
          </div>
        </div>

        {/* Articles Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 space-y-3">
            <BookOpen className="w-10 h-10 text-slate-600 mx-auto" />
            <p className="text-slate-400 text-sm">
              No articles found matching "{searchQuery}". Try selecting another category or clearing your query.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                id={`blog-post-${post.id}`}
                className="rounded-2xl bg-slate-900/40 border border-slate-800 p-7 space-y-5 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                onClick={() => onSelectArticle(post)}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-500" />
                        <span>{post.readTime}</span>
                      </span>
                      <span>•</span>
                      <span>{post.publishedDate}</span>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold font-['Outfit'] text-white group-hover:text-blue-300 transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center font-bold text-blue-300 text-[10px]">
                      {post.author.name.charAt(0)}
                    </div>
                    <span className="text-slate-300 font-medium">{post.author.name}</span>
                  </div>

                  <span className="font-semibold text-blue-400 group-hover:text-blue-300 flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
