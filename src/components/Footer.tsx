import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Instagram, MessageSquare, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 bg-[#05080F] pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand & Identity */}
          <div className="space-y-2">
            <a
              href="#hero"
              className="text-lg font-bold text-white tracking-tight hover:text-sky-400 transition-colors flex items-center gap-2"
            >
              <span>Jimmy Nathan</span>
              <span className="text-[10px] font-mono text-sky-400 bg-sky-950/60 border border-sky-500/30 px-1.5 py-0.5 rounded">
                Portfolio
              </span>
            </a>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Full-Stack Developer & Mobile App Developer based in Nigeria. Building scalable web architectures, modern APIs, and cross-platform mobile apps for forward-thinking clients worldwide.
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-slate-300">
            <a href="#about" className="hover:text-sky-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-sky-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-sky-400 transition-colors">Projects</a>
            <a href="#services" className="hover:text-sky-400 transition-colors">Services</a>
            <a href="#contact" className="hover:text-sky-400 transition-colors">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub (@iamjimmynathan)"
              className="p-2 text-slate-400 hover:text-sky-400 hover:bg-slate-900 rounded-lg transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn (@hejimmynathan)"
              className="p-2 text-slate-400 hover:text-sky-400 hover:bg-slate-900 rounded-lg transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socialLinks.twitter}
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter/X (@iamjimmynathan)"
              className="p-2 text-slate-400 hover:text-sky-400 hover:bg-slate-900 rounded-lg transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socialLinks.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram (@iamjimmynathan)"
              className="p-2 text-slate-400 hover:text-sky-400 hover:bg-slate-900 rounded-lg transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socialLinks.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="p-2 text-slate-400 hover:text-emerald-400 hover:bg-slate-900 rounded-lg transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} Jimmy Nathan. All rights reserved. Crafted with precision in Nigeria.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-sky-400 border border-slate-800 hover:border-sky-500/30 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-sky-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
