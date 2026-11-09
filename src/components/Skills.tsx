import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import {
  Code2,
  Server,
  Smartphone,
  Database,
  Cpu,
  CheckCircle,
  Sparkles
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const tabIcons: Record<string, React.ElementType> = {
    all: Sparkles,
    frontend: Code2,
    backend: Server,
    mobile: Smartphone,
    'database-tools': Database,
    other: Cpu,
  };

  const tabs = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'mobile', label: 'Mobile (React Native)' },
    { id: 'database-tools', label: 'Databases & Tools' },
    { id: 'other', label: 'Engineering Practices' },
  ];

  const displayedCategories =
    activeTab === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
            02. Technical Arsenal
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive Skills & Frameworks
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            A battle-tested technology stack spanning responsive client systems, robust backend logic, and native cross-platform mobile apps.
          </p>
        </div>

        {/* Interactive Filter Tabs (Functional segmented buttons per guidelines) */}
        <div className="flex items-center gap-1.5 p-1.5 bg-slate-900/90 border border-slate-800 rounded-xl overflow-x-auto max-w-full mb-12">
          {tabs.map((tab) => {
            const IconComponent = tabIcons[tab.id] || Sparkles;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500/20 to-teal-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                <IconComponent className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Categories Grid */}
        <div className="space-y-12">
          {displayedCategories.map((category) => (
            <div key={category.id} className="space-y-4">
              {/* Category Title & Description */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-800 gap-2">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">{category.description}</p>
                </div>
                <div className="text-xs font-mono text-cyan-400">
                  {category.skills.length} core competencies
                </div>
              </div>

              {/* Skill Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/90 hover:border-cyan-500/30 hover:bg-slate-900/80 transition-all group"
                  >
                    {/* Header: Skill Name & Percentage */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                        <span>{skill.years}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-cyan-300 font-bold tabular-nums">{skill.level}%</span>
                      </div>
                    </div>

                    {/* Progress Bar with Cyan/Teal Gradient */}
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden my-3">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-teal-400 rounded-full transition-all duration-700 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>

                    {/* Clean unboxed metadata for specific competencies */}
                    <p className="text-xs text-slate-400 leading-normal">
                      {skill.highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Focus Summary Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-cyan-950/20 via-slate-900/80 to-teal-950/20 border border-cyan-500/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-white">
              End-to-End Architectural Capability
            </h4>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
              Every project I build adheres to strict separation of concerns, defensive validation, type safety, and responsive design systems. No gaps between frontend interactions, backend logic, and native device functionality.
            </p>
          </div>
          <a
            href="#projects"
            className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-md"
          >
            Explore Projects
          </a>
        </div>
      </div>
    </section>
  );
};
