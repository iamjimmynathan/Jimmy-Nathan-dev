import React, { useState } from 'react';
import {
  FileText,
  Download,
  Loader2,
  MapPin,
  CheckCircle2,
  Code2,
  Smartphone,
  Server,
  Zap,
  Globe,
  Award
} from 'lucide-react';
import { PERSONAL_INFO, STATS, EXPERIENCE_TIMELINE } from '../data/portfolioData';
import { downloadResumePdf } from '../utils/generatePdf';

interface AboutProps {
  onOpenCV: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenCV }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadPdf = async () => {
    setIsDownloading(true);
    try {
      await downloadResumePdf();
    } catch (e) {
      console.error('Failed to download resume PDF', e);
    } finally {
      setIsDownloading(false);
    }
  };
  const coreStrengths = [
    {
      title: 'Full-Stack Fluidity',
      desc: 'Seamlessly moving between React UI state, Node.js controllers, and optimized SQL queries without context loss.',
      icon: Code2,
    },
    {
      title: 'Native-Feel Mobile Apps',
      desc: 'Crafting responsive iOS and Android apps using React Native and Expo with high-fidelity 60fps animations.',
      icon: Smartphone,
    },
    {
      title: 'Scalable API Architecture',
      desc: 'Designing clean REST endpoints, bulletproof JWT authentication, and resilient database schemas.',
      icon: Server,
    },
    {
      title: 'Self-Taught Resourcefulness',
      desc: 'Autonomous problem-solver accustomed to breaking down intricate technical challenges from first principles.',
      icon: Zap,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="text-xs font-mono text-sky-400 uppercase tracking-widest mb-2">
            01. Background & Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Across the Complete Stack
          </h2>
          <p className="mt-3 text-slate-300 max-w-2xl text-base sm:text-lg">
            I believe modern software shouldn't stop at the browser window. Real products require bulletproof backends, responsive client apps, and native mobile presence.
          </p>
        </div>

        {/* Narrative & Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Story & Highlights */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/90 leading-relaxed text-slate-300">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-800/80">
                <img
                  src={PERSONAL_INFO.portraitImage}
                  alt="Jimmy Nathan"
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 rounded-2xl object-cover object-[center_12%] border-2 border-sky-400/40 shadow-lg shadow-sky-500/10 shrink-0"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">Jimmy Nathan</h3>
                  <p className="text-xs text-sky-300 font-mono">Full-Stack & Mobile Developer · Lagos, Nigeria</p>
                </div>
              </div>

              <h4 className="text-lg font-bold text-white mb-3">
                From Self-Taught Curiosity to High-Impact Production Code
              </h4>
              <p className="mb-4 text-base text-slate-300">
                I am a self-taught software engineer living in <span className="text-sky-300 font-medium">Nigeria</span>. Early on, I realized that true engineering mastery comes from understanding how every layer of the system talks to each other — from the database lock to the UI frame rate.
              </p>
              <p className="mb-4 text-base text-slate-300">
                Rather than confining myself to frontend styling, I deliberately built deep expertise across <span className="text-sky-300 font-medium">Node.js backend architectures</span>, <span className="text-blue-300 font-medium">PostgreSQL/MongoDB database modeling</span>, and <span className="text-sky-300 font-medium">React Native cross-platform mobile apps</span>.
              </p>
              <p className="text-base text-slate-300">
                Whether partnering with early-stage startups to launch their Minimum Viable Product or hardening enterprise web dashboards against high concurrency, I bring end-to-end accountability, rigorous attention to detail, and a relentless focus on shipping.
              </p>

              {/* Location and Origin Info */}
              <div className="mt-6 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-sky-400" />
                  <span>Nigeria · West Africa Standard Time (UTC+1)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span>Open to Remote Contracts & Relocation</span>
                </div>
              </div>
            </div>

            {/* Core Strengths Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {coreStrengths.map((strength) => {
                const IconComponent = strength.icon;
                return (
                  <div
                    key={strength.title}
                    className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-sky-500/30 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-3">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-semibold text-white">{strength.title}</h4>
                    <p className="mt-1 text-xs text-slate-400 leading-relaxed">{strength.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Key Stats & Career Milestones */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Stat Highlight Card */}
            <div className="p-7 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-900/40 border border-sky-500/20 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono uppercase text-sky-400">At a Glance</span>
                <span className="text-xs text-slate-400">Updated 2026</span>
              </div>

              <div className="space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                  <span className="text-sm text-slate-400">Experience</span>
                  <span className="text-lg font-bold text-white font-mono">4+ Years</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                  <span className="text-sm text-slate-400">Shipped Projects</span>
                  <span className="text-lg font-bold text-white font-mono">28+ Apps</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                  <span className="text-sm text-slate-400">Client Organizations</span>
                  <span className="text-lg font-bold text-white font-mono">15+ Companies</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                  <span className="text-sm text-slate-400">Primary Mobile Tech</span>
                  <span className="text-sm font-semibold text-sky-300">React Native / Expo</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Primary Stack</span>
                  <span className="text-sm font-semibold text-blue-300">React · Node · Postgres</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleDownloadPdf}
                  disabled={isDownloading}
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-sky-400 via-sky-300 to-blue-400 hover:brightness-105 active:scale-[0.98] transition-all shadow-md shadow-sky-500/15 disabled:opacity-60"
                  title="Download PDF directly to your device"
                >
                  {isDownloading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Generating PDF...</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      <span>Download CV (.PDF)</span>
                    </>
                  )}
                </button>

                <button
                  onClick={onOpenCV}
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 hover:text-white border border-slate-700/80 transition-all shadow-sm"
                >
                  <FileText className="w-4 h-4 text-sky-400" />
                  <span>Inspect Resume</span>
                </button>
              </div>
            </div>

            {/* Career Timeline Summary */}
            <div className="p-7 rounded-2xl bg-slate-900/50 border border-slate-800">
              <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-5 flex items-center gap-2">
                <Award className="w-4 h-4 text-sky-400" />
                <span>Experience Snapshot</span>
              </h3>
              <div className="space-y-6">
                {EXPERIENCE_TIMELINE.map((exp) => (
                  <div key={exp.period} className="relative pl-6 border-l border-slate-800 last:border-0 pb-4">
                    <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-sky-400" />
                    <div className="text-xs font-mono text-sky-400">{exp.period}</div>
                    <div className="text-sm font-semibold text-white mt-0.5">{exp.role}</div>
                    <div className="text-xs text-slate-400">{exp.company} · {exp.location}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
