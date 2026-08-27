import React from 'react';
import { ProjectItem } from '../types';
import {
  X,
  Layers,
  Code2,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Database,
  Cloud,
  Cpu,
  Monitor,
} from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onStartSimilarProject: (projectName: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onStartSimilarProject,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-900 transition-all cursor-pointer"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              {project.category}
            </span>
            <span className="px-2.5 py-0.5 text-xs font-mono font-semibold rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
              {project.badge}
            </span>
          </div>

          <h2
            id="project-modal-title"
            className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-white"
          >
            {project.name}
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {project.fullOverview}
          </p>
        </div>

        {/* Challenge vs Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4.5 rounded-xl bg-slate-900/40 border border-slate-800 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-rose-400 font-mono">
              The Operational Problem
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="p-4.5 rounded-xl bg-slate-900/40 border border-slate-800 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono">
              The Engineered Solution
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Features & Architecture Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Features */}
          <div className="lg:col-span-6 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Core Functional Highlights</span>
            </h3>
            <ul className="space-y-2">
              {project.features.map((feat, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 p-2.5 rounded-lg bg-slate-900/40 border border-slate-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Blueprint */}
          <div className="lg:col-span-6 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-indigo-400" />
              <span>Architecture Blueprint</span>
            </h3>
            <div className="space-y-2 bg-slate-900/40 p-3.5 rounded-xl border border-slate-800 text-xs font-mono">
              <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block text-[10px]">Frontend UI Layer:</span>
                <span className="text-blue-300 font-semibold">{project.architecture.frontend}</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block text-[10px]">Backend Service:</span>
                <span className="text-indigo-300 font-semibold">{project.architecture.backend}</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block text-[10px]">Database & Storage:</span>
                <span className="text-emerald-300 font-semibold">{project.architecture.database}</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block text-[10px]">Cloud Infrastructure:</span>
                <span className="text-purple-300 font-semibold">{project.architecture.cloud}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Technologies Tags */}
        <div className="space-y-2 pt-2 border-t border-slate-800">
          <span className="text-xs font-mono text-slate-400">Technologies Employed:</span>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-mono text-slate-300 bg-slate-900 border border-slate-800 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-400 text-center sm:text-left">
            Need a similar custom solution built for your business?
          </span>
          <button
            onClick={() => {
              onClose();
              onStartSimilarProject(project.name);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-full shadow-md shadow-blue-900/20 transition-all cursor-pointer"
          >
            <span>Discuss a Similar Build</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
