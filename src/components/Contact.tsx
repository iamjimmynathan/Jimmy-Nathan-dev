import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Copy,
  ExternalLink,
  MessageSquare,
  Sparkles,
  Clock
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  initialSubject?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialSubject = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: initialSubject || 'Full-Stack Web Development',
    message: '',
  });

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (initialSubject) {
      setFormData((prev) => ({ ...prev, service: initialSubject }));
    }
  }, [initialSubject]);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        service: 'Full-Stack Web Development',
        message: '',
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="text-xs font-mono text-sky-400 uppercase tracking-widest mb-2">
            05. Initiation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let’s Build Something Exceptional
          </h2>
          <p className="mt-3 text-slate-300 max-w-2xl text-base sm:text-lg">
            Whether you have a specific mobile app or web platform in mind, need to optimize an existing system, or want to discuss full-time contract opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info & Channels */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-8 rounded-2xl bg-slate-900/70 border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-2">Direct Channels</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Feel free to reach out directly via email or WhatsApp. I usually respond within a few hours.
              </p>

              <div className="space-y-4">
                {/* Email Item */}
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-sky-500/30 transition-all flex items-center justify-between group">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-xs text-slate-400 font-mono">Email Address</p>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-sm font-semibold text-white hover:text-sky-300 truncate block"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                    className="p-2 text-slate-400 hover:text-sky-400 hover:bg-slate-800 rounded-lg transition-colors shrink-0"
                    title="Copy email to clipboard"
                    aria-label="Copy email"
                  >
                    {copiedField === 'email' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* WhatsApp Item */}
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-emerald-500/30 transition-all flex items-center justify-between group">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-xs text-slate-400 font-mono">WhatsApp (Direct)</p>
                      <a
                        href={PERSONAL_INFO.socialLinks.whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-semibold text-white hover:text-emerald-400 truncate block"
                      >
                        {PERSONAL_INFO.whatsappFormatted}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.whatsappFormatted, 'whatsapp')}
                    className="p-2 text-slate-400 hover:text-emerald-400 hover:bg-slate-800 rounded-lg transition-colors shrink-0"
                    title="Copy phone to clipboard"
                    aria-label="Copy WhatsApp number"
                  >
                    {copiedField === 'whatsapp' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location Item */}
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-mono">Location & Timezone</p>
                    <p className="text-sm font-semibold text-white">Nigeria (West Africa Standard Time · UTC+1)</p>
                  </div>
                </div>
              </div>

              {/* Working Hours / Availability Notice */}
              <div className="mt-6 pt-5 border-t border-slate-800 flex items-center gap-2.5 text-xs text-slate-400 font-mono">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Currently accepting contracts & full-time roles</span>
              </div>
            </div>

            {/* Quick WhatsApp Chat Banner */}
            <a
              href={PERSONAL_INFO.socialLinks.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/40 to-slate-900 border border-emerald-500/30 hover:border-emerald-400/50 transition-all flex items-center justify-between group shadow-sm hover:shadow-lg hover:shadow-emerald-500/5"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                    Need an immediate response?
                  </div>
                  <div className="text-xs text-slate-400">
                    Start a WhatsApp conversation now
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill in the details below and I'll get back to you promptly.
              </p>

              {submitSuccess ? (
                <div className="p-8 rounded-xl bg-sky-950/40 border border-sky-500/40 text-center animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-sky-500/20 text-sky-400 mx-auto flex items-center justify-center mb-4">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                  <p className="mt-2 text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out. I have received your message and will review your project details promptly.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-6 px-5 py-2 text-xs font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors font-medium shadow-md shadow-sky-500/20"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-red-950/50 border border-red-500/40 text-red-300 text-xs">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                      Service / Project Scope
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-sky-400 transition-colors"
                    >
                      <option value="Full-Stack Web Development">Full-Stack Web Development</option>
                      <option value="Mobile App Development (iOS & Android)">Mobile App Development (iOS & Android)</option>
                      <option value="Modern Frontend Engineering">Modern Frontend Engineering</option>
                      <option value="Backend & API Engineering">Backend & API Engineering</option>
                      <option value="UI Implementation & Optimization">UI Implementation & Optimization</option>
                      <option value="Full-Time Contract / Hire">Full-Time Contract / Hire</option>
                      <option value="Other Consultation">Other Consultation</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                      Project Details / Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your product requirements, timeline, or current challenges..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold text-slate-950 bg-gradient-to-r from-sky-400 via-sky-300 to-blue-400 rounded-xl shadow-lg shadow-sky-500/20 hover:shadow-sky-500/35 hover:brightness-105 active:scale-[0.99] transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message / Hire Me</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
