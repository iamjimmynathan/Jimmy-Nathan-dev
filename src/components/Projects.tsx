import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types/portfolio';
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  Layers,
  Smartphone,
  Sparkles,
  Info
} from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
  onOpenDemo: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject, onOpenDemo }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full-Stack' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'frontend', label: 'Frontend & APIs' },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono text-sky-400 uppercase tracking-widest mb-2">
              03. Featured Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Selected Production Works
            </h2>
            <p className="mt-2 text-slate-300 max-w-2xl text-base">
              A curated selection of mobile applications, enterprise full-stack web platforms, and interactive client tools.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto shrink-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as ProjectCategory)}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col rounded-2xl bg-slate-900/60 border border-slate-800/90 overflow-hidden hover:border-sky-500/40 hover:shadow-2xl hover:shadow-sky-500/10 transition-all group"
            >
              {/* Project Image & Interactive Overlay */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-slate-800/80">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Subtle scrim overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                {/* Top unboxed category badge */}
                <div className="absolute top-3 left-3 text-xs font-mono font-medium text-sky-300 bg-slate-900/90 backdrop-blur-md border border-sky-500/30 px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-sm">
                  {project.category === 'mobile' ? (
                    <Smartphone className="w-3.5 h-3.5 text-sky-400" />
                  ) : (
                    <Layers className="w-3.5 h-3.5 text-blue-400" />
                  )}
                  <span>{project.categoryLabel}</span>
                </div>

                {/* Case Study Hover Trigger */}
                <button
                  onClick={() => onSelectProject(project)}
                  className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-sky-500 text-white hover:text-slate-950 text-xs font-semibold backdrop-blur-md border border-slate-700/80 hover:border-sky-400 transition-all flex items-center gap-1 shadow-lg"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Case Study</span>
                </button>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-sky-400/90 mt-1">
                    {project.subtitle}
                  </p>

                  {/* Problem -> Solution Breakdown */}
                  <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-2 text-xs leading-relaxed">
                    <div>
                      <span className="font-semibold text-slate-300">Problem: </span>
                      <span className="text-slate-400">{project.problem}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-sky-300">Solution: </span>
                      <span className="text-slate-300">{project.solution}</span>
                    </div>
                  </div>

                  {/* Clean unboxed tags (No pill candy enclosures) */}
                  <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400">
                    {project.tags.map((tag, i) => (
                      <React.Fragment key={tag}>
                        <span className="text-slate-300 hover:text-sky-300 transition-colors">
                          {tag}
                        </span>
                        {i < project.tags.length - 1 && (
                          <span className="text-slate-600" aria-hidden="true">
                            ·
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Footer Buttons: Live Demo & GitHub */}
                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onOpenDemo(project)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold text-slate-950 bg-gradient-to-r from-sky-400 via-sky-300 to-blue-400 rounded-lg hover:brightness-105 active:scale-[0.98] transition-all shadow-md shadow-sky-500/10"
                  >
                    <span>Live Preview</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/70 hover:bg-slate-700/80 rounded-lg border border-slate-700/70 transition-colors"
                    aria-label={`View GitHub repository for ${project.title}`}
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
