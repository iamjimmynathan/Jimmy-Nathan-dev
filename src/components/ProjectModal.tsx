import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Cpu, BarChart3, Layers } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenDemo: (project: Project) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenDemo }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-5 sm:px-8 border-b border-slate-800 bg-slate-900/95 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-medium text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-1 rounded">
              {project.categoryLabel}
            </span>
            <span className="text-xs text-slate-400 font-mono">Case Study</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Hero Banner inside modal */}
          <div className="relative aspect-video sm:aspect-[21/9] w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {project.title}
              </h3>
              <p className="text-sm text-cyan-300 font-medium mt-1">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => {
                onClose();
                onOpenDemo(project);
              }}
              className="flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 rounded-xl hover:brightness-105 active:scale-[0.98] transition-all shadow-md shadow-cyan-500/20"
            >
              <span>Launch Interactive Preview</span>
              <ExternalLink className="w-4 h-4" />
            </button>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700 rounded-xl border border-slate-700 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>
          </div>

          {/* Problem vs Solution Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/90">
              <div className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold mb-2">
                The Engineering Challenge
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/90">
              <div className="text-xs font-mono uppercase tracking-wider text-teal-400 font-semibold mb-2">
                Architectural Solution
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture Highlights */}
          <div>
            <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>Key Technical Highlights & Implementation</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.architectureHighlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-950/40 border border-slate-800 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics & Performance Strip */}
          {project.metrics && (
            <div className="p-5 rounded-xl bg-gradient-to-r from-cyan-950/30 to-slate-900 border border-cyan-500/20 flex items-center gap-3">
              <BarChart3 className="w-5 h-5 text-cyan-400 shrink-0" />
              <div>
                <div className="text-xs font-mono text-cyan-400 font-medium">Outcome & Performance</div>
                <div className="text-sm font-semibold text-white">{project.metrics}</div>
              </div>
            </div>
          )}

          {/* Tech Stack Unboxed */}
          <div className="pt-4 border-t border-slate-800">
            <div className="text-xs font-mono text-slate-400 mb-2">TECHNOLOGY STACK</div>
            <div className="flex flex-wrap items-center gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium text-slate-200 bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
