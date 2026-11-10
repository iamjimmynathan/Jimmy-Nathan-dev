import React from 'react';
import { SERVICES } from '../data/portfolioData';
import {
  Code2,
  Smartphone,
  Layers,
  Server,
  Cpu,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Service } from '../types/portfolio';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const iconMap: Record<string, React.ElementType> = {
    Code2,
    Smartphone,
    Layers,
    Server,
    Cpu,
  };

  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="text-xs font-mono text-sky-400 uppercase tracking-widest mb-2">
            04. Services & Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What I Deliver for Clients & Startups
          </h2>
          <p className="mt-3 text-slate-300 max-w-2xl text-base sm:text-lg">
            High-standard engineering engagements tailored to launch your next MVP, scale an existing system, or deliver high-performance mobile apps.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.iconName] || Code2;
            return (
              <div
                key={service.id}
                className="flex flex-col justify-between p-7 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-sky-500/40 hover:bg-slate-900/90 transition-all group shadow-sm hover:shadow-xl hover:shadow-sky-500/5"
              >
                <div>
                  {/* Service Icon */}
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-6 group-hover:scale-105 group-hover:bg-sky-500/20 transition-all">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {service.fullDesc}
                  </p>

                  {/* Deliverables List */}
                  <div className="mt-6 pt-5 border-t border-slate-800 space-y-2.5">
                    <div className="text-xs font-mono text-sky-400 font-medium uppercase tracking-wider">
                      Key Deliverables
                    </div>
                    {service.deliverables.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer with CTA & Tech Stack */}
                <div className="mt-8 pt-5 border-t border-slate-800/80 flex items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-1 text-[11px] font-mono text-slate-400">
                    {service.techStack.slice(0, 3).map((tech, i) => (
                      <span key={tech}>
                        {tech}
                        {i < 2 ? ' ·' : ''}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-sky-400 hover:text-sky-300 group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Request</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
