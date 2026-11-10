import React, { useState, useEffect } from 'react';
import {
  ArrowDown,
  FileText,
  Download,
  Loader2,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Sparkles,
  Smartphone,
  Layers,
  Server,
  Code2,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO, STATS } from '../data/portfolioData';
import { downloadResumePdf } from '../utils/generatePdf';

interface HeroProps {
  onOpenCV: () => void;
}

const ROLES = [
  'Full-Stack Developer',
  'Mobile App Developer (iOS & Android)',
  'Backend & API Architect',
  'Building Web & Mobile Experiences'
];

export const Hero: React.FC<HeroProps> = ({ onOpenCV }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [fadeState, setFadeState] = useState<'in' | 'out'>('in');
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState('out');
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
        setFadeState('in');
      }, 300);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Ambient Glows */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none -z-10"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Split: Left Typography, Right Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Location / Status lead */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-sky-500/30 text-xs font-mono text-sky-300 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>Based in Nigeria · Available for Worldwide Contracts</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white text-balance leading-[1.12]">
              Hi, I’m{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-200 to-blue-400">
                Jimmy Nathan
              </span>
            </h1>

            {/* Rotating / Animated Subtitle */}
            <div className="h-10 mt-3 flex items-center">
              <span className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-300">
                <span
                  className={`inline-block transition-all duration-300 text-sky-300 ${
                    fadeState === 'in' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                  }`}
                >
                  {ROLES[roleIndex]}
                </span>
              </span>
            </div>

            {/* Short Powerful Description */}
            <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              I build complete digital solutions — from responsive client interfaces and robust backend APIs
              to fluid cross-platform mobile apps for iOS and Android. Engineered with precision, clean architecture, and bank-grade reliability.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-950 bg-gradient-to-r from-sky-400 via-sky-300 to-blue-400 rounded-xl shadow-lg shadow-sky-500/20 hover:shadow-sky-500/35 hover:brightness-105 active:scale-[0.98] transition-all whitespace-nowrap"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={async () => {
                  setIsDownloading(true);
                  try {
                    await downloadResumePdf();
                  } catch (e) {
                    onOpenCV();
                  } finally {
                    setIsDownloading(false);
                  }
                }}
                disabled={isDownloading}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/80 border border-slate-700/80 hover:border-sky-400/50 hover:text-white rounded-xl shadow-sm hover:bg-slate-800/80 active:scale-[0.98] transition-all whitespace-nowrap disabled:opacity-60"
                title="Download Jimmy Nathan's Resume as PDF"
              >
                {isDownloading ? (
                  <>
                    <Loader2 className="w-4 h-4 text-sky-400 animate-spin" />
                    <span>Generating PDF...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-sky-400" />
                    <span>Download CV (.PDF)</span>
                  </>
                )}
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-sky-400 hover:text-sky-300 rounded-xl hover:bg-sky-950/30 transition-colors whitespace-nowrap"
              >
                <Mail className="w-4 h-4" />
                <span>Let's Talk</span>
              </a>
            </div>

            {/* Social Proof Icons */}
            <div className="mt-10 pt-6 border-t border-slate-800/80 flex items-center gap-6">
              <span className="text-xs font-mono text-slate-400 tracking-wider">
                CONNECT
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2 text-slate-400 hover:text-sky-400 hover:bg-slate-800/60 rounded-lg transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={PERSONAL_INFO.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2 text-slate-400 hover:text-sky-400 hover:bg-slate-800/60 rounded-lg transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={PERSONAL_INFO.socialLinks.twitter}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter/X Profile"
                  className="p-2 text-slate-400 hover:text-sky-400 hover:bg-slate-800/60 rounded-lg transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href={PERSONAL_INFO.socialLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram Profile"
                  className="p-2 text-slate-400 hover:text-sky-400 hover:bg-slate-800/60 rounded-lg transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={PERSONAL_INFO.socialLinks.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp Direct Chat"
                  className="p-2 text-slate-400 hover:text-emerald-400 hover:bg-slate-800/60 rounded-lg transition-colors"
                >
                  <span className="text-xs font-mono font-bold text-emerald-400 border border-emerald-500/30 px-1.5 py-0.5 rounded">
                    WA
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Portrait with Modern Geometric Framing */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[390px] aspect-[4/5] sm:aspect-[4/5]">
              {/* Outer decorative glowing geometric backdrop */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-sky-500/20 via-blue-600/10 to-transparent blur-xl"
              />
              <div
                aria-hidden="true"
                className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-sky-500/30 via-slate-800 to-blue-500/20 opacity-70"
              />

              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-900 border border-sky-500/30 shadow-2xl">
                <img
                  src={PERSONAL_INFO.portraitImage}
                  alt="Jimmy Nathan — Full-Stack & Mobile App Developer"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-[center_12%] hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Subtle gradient scrim at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-transparent opacity-60 pointer-events-none" />

                {/* In-Frame Accent Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/95 backdrop-blur-md border border-slate-700/60 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">Jimmy Nathan</p>
                      <p className="text-[11px] text-slate-400">Full-Stack & Mobile</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-sky-300 bg-sky-950/60 border border-sky-500/30 px-2 py-0.5 rounded">
                    Lagos, NG
                  </span>
                </div>
              </div>

              {/* Floating Orbiting Tech Badges */}
              <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-xl bg-slate-900/95 border border-sky-500/40 text-xs font-medium text-sky-300 shadow-xl flex items-center gap-1.5 animate-bounce [animation-duration:4s]">
                <Smartphone className="w-3.5 h-3.5 text-sky-400" />
                <span>React Native</span>
              </div>
              <div className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-xl bg-slate-900/95 border border-blue-500/40 text-xs font-medium text-blue-300 shadow-xl flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5 text-blue-400" />
                <span>Node.js · Postgres</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Key Metrics Strip (Placed below the hero split per guidelines) */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-sky-500/30 transition-all group"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-300 font-mono tabular-nums">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm font-semibold text-slate-200">
                  {stat.label}
                </div>
                <div className="mt-1 text-xs text-slate-400 line-clamp-2">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
