import React, { useState } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Globe, Linkedin, CheckCircle2, Loader2 } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE_TIMELINE } from '../data/portfolioData';
import { downloadResumePdf } from '../utils/generatePdf';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = async () => {
    setIsDownloading(true);
    try {
      await downloadResumePdf();
    } catch (err) {
      console.error('Failed to generate PDF', err);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col text-slate-200 print:bg-white print:text-black print:max-h-none print:shadow-none print:border-none print:m-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Bar (hidden during print) */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-4 sm:px-8 border-b border-slate-800 bg-slate-900/95 backdrop-blur-md print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-medium text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded">
              Curriculum Vitae
            </span>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline">Jimmy_Nathan_CV.pdf</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleDownloadPdf}
              disabled={isDownloading}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 rounded-lg hover:brightness-105 active:scale-[0.98] transition-all shadow-md shadow-cyan-500/15 disabled:opacity-60"
              title="Download PDF directly to your device"
            >
              {isDownloading ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Generating...</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>Download .PDF</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors"
              title="Print resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Close CV preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document */}
        <div className="p-6 sm:p-12 space-y-8 bg-slate-900 print:bg-white print:text-black print:p-6">
          {/* Header Lockup */}
          <div className="border-b border-slate-800 print:border-slate-300 pb-6 flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white print:text-black tracking-tight">
                Jimmy Nathan
              </h1>
              <p className="text-lg font-semibold text-cyan-400 print:text-cyan-700 mt-1">
                Full-Stack Developer & Mobile App Developer
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400 print:text-slate-700 font-mono">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  Nigeria (West Africa Standard Time · UTC+1)
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  jimmynathan11@gmail.com
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  +234 90 699 52829
                </span>
                <span className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-teal-400" />
                  github.com/iamjimmynathan
                </span>
                <span className="flex items-center gap-1.5">
                  <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
                  linkedin.com/in/hejimmynathan
                </span>
              </div>
            </div>

            <img
              src={PERSONAL_INFO.portraitImage}
              alt="Jimmy Nathan"
              referrerPolicy="no-referrer"
              className="w-24 h-24 rounded-2xl object-cover object-[center_12%] border-2 border-cyan-400/40 shadow-lg shadow-cyan-500/10 shrink-0 print:w-20 print:h-20 print:border-slate-300"
            />
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 print:text-cyan-800 font-bold mb-2">
              Professional Summary
            </h2>
            <p className="text-sm leading-relaxed text-slate-300 print:text-slate-800">
              Self-taught Full-Stack Developer and Mobile App Developer based in Nigeria with 4+ years of hands-on experience building high-throughput web applications, scalable REST APIs, and native-grade iOS & Android mobile apps using React Native. Proven history of shipping 28+ projects across fintech, real-time social platforms, e-commerce, and collaborative SaaS dashboards. Passionate about clean architecture, performance optimization, and pragmatic product delivery.
            </p>
          </div>

          {/* Core Technical Capabilities */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 print:text-cyan-800 font-bold mb-3">
              Technical Proficiencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-950/60 print:bg-slate-100 border border-slate-800 print:border-slate-300">
                <strong className="text-white print:text-black block mb-1">Frontend Engineering:</strong>
                <span className="text-slate-400 print:text-slate-700">
                  React.js, Next.js, JavaScript (ES6+), TypeScript, Tailwind CSS, Bootstrap, Semantic HTML5, CSS3 Grid/Flexbox
                </span>
              </div>
              <div className="p-3 rounded-lg bg-slate-950/60 print:bg-slate-100 border border-slate-800 print:border-slate-300">
                <strong className="text-white print:text-black block mb-1">Mobile Development:</strong>
                <span className="text-slate-400 print:text-slate-700">
                  React Native, Expo CLI/EAS, Cross-Platform iOS & Android, Native Device APIs, Offline State Synchronization
                </span>
              </div>
              <div className="p-3 rounded-lg bg-slate-950/60 print:bg-slate-100 border border-slate-800 print:border-slate-300">
                <strong className="text-white print:text-black block mb-1">Backend & APIs:</strong>
                <span className="text-slate-400 print:text-slate-700">
                  Node.js, Express.js, RESTful Architecture, JWT Authentication, WebSockets (Socket.io), Rate Limiting
                </span>
              </div>
              <div className="p-3 rounded-lg bg-slate-950/60 print:bg-slate-100 border border-slate-800 print:border-slate-300">
                <strong className="text-white print:text-black block mb-1">Databases & Tools:</strong>
                <span className="text-slate-400 print:text-slate-700">
                  PostgreSQL, MongoDB, Firebase Firestore, Git/GitHub, Postman, Figma, Docker, Paystack/Stripe APIs
                </span>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 print:text-cyan-800 font-bold mb-4">
              Work Experience & Major Projects
            </h2>
            <div className="space-y-6">
              {EXPERIENCE_TIMELINE.map((item) => (
                <div key={item.period} className="border-l-2 border-slate-800 print:border-slate-300 pl-4 space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h3 className="text-base font-bold text-white print:text-black">
                      {item.role}
                    </h3>
                    <span className="text-xs font-mono text-cyan-400 print:text-slate-600">
                      {item.period}
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 print:text-slate-700">
                    {item.company} · {item.location}
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-300 print:text-slate-800 space-y-1 pt-1">
                    {item.description.map((bullet, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Featured Accomplishments */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 print:text-cyan-800 font-bold mb-3">
              Selected Production Implementations
            </h2>
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-950/60 print:bg-slate-50 border border-slate-800 print:border-slate-200">
                <span className="font-bold text-white print:text-black">ApexPay Mobile Banking & Fintech API:</span>
                <p className="text-slate-400 print:text-slate-700 mt-0.5">
                  Engineered cross-platform React Native app handling biometric approvals, transaction logs in PostgreSQL with row-level locks, and sub-400ms endpoint response times.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-slate-950/60 print:bg-slate-50 border border-slate-800 print:border-slate-200">
                <span className="font-bold text-white print:text-black">Velocity E-Commerce & Merchant Engine:</span>
                <p className="text-slate-400 print:text-slate-700 mt-0.5">
                  Integrated Paystack & Stripe webhook verification, reducing abandoned checkout latency by 45% and maintaining 98/100 Lighthouse performance.
                </p>
              </div>
            </div>
          </div>

          {/* Education & Values */}
          <div className="pt-4 border-t border-slate-800 print:border-slate-300 text-xs text-slate-400 print:text-slate-600 flex flex-col sm:flex-row justify-between gap-4">
            <div>
              <span className="font-bold text-slate-300 print:text-slate-800 block mb-0.5">Education & Background:</span>
              Self-Taught Computer Science & Software Engineering Foundations (Algorithms, Data Structures, System Design).
            </div>
            <div>
              <span className="font-bold text-slate-300 print:text-slate-800 block mb-0.5">Availability:</span>
              Immediately available for contract engineering, full-stack retainers, and full-time remote developer roles.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
