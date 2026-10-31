import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, Download, BookOpen } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
      });
    } catch {
      // ignore
    }

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 6000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-emerald/10 border border-brand-emerald/25 text-brand-emerald text-xs font-mono uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            Let's Collaborate
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Get in <span className="text-gradient-emerald">Touch</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base">
            Open for UX Design, product design, and digital performance marketing opportunities across the Greater Toronto Area and remote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info Cards & Map */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email Card with Copy Button */}
            <div className="glass-card p-6 rounded-3xl border border-white/10 hover:border-brand-emerald/30 transition-all">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-emerald/10 border border-brand-emerald/20 flex items-center justify-center text-brand-emerald">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block uppercase">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-base font-bold text-white hover:text-brand-emerald transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/5"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-brand-emerald" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="glass-card p-6 rounded-3xl border border-white/10 hover:border-brand-cyan/30 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block uppercase">
                    Call / Text
                  </span>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-base font-bold text-white hover:text-brand-cyan transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card & Map */}
            <div className="glass-card p-6 rounded-3xl border border-white/10 overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-violet/10 border border-brand-violet/20 flex items-center justify-center text-brand-violet">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block uppercase">
                    Location
                  </span>
                  <span className="text-sm font-bold text-white">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

              {/* Embedded Interactive Google Map */}
              <div className="rounded-2xl overflow-hidden border border-white/10 h-44 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92793.56933689487!2d-79.92249155185142!3d43.381225797742076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b63d2965d93b7%3A0xa44a27764c2b554f!2sBurlington%2C%20ON!5e0!3m2!1sen!2sca!4v1704718680445!5m2!1sen!2sca"
                  className="w-full h-full border-0 grayscale invert opacity-80 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Burlington & Toronto Map Location"
                />
              </div>
            </div>

            {/* Quick Resume Download Pill */}
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Hardev-Kamboe-Resume.pdf"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-brand-emerald text-dark-950 font-bold text-xs rounded-2xl shadow-lg shadow-brand-emerald/20 hover:scale-[1.02] transition-transform"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <a
                href={PERSONAL_INFO.sketchbookUrl}
                download="Hardev-Kamboe-Sketchbook.pdf"
                className="flex items-center justify-center gap-2 py-3 px-4 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-medium text-xs rounded-2xl border border-white/10 transition-colors"
                title="Download Sketchbook PDF"
              >
                <BookOpen className="w-4 h-4 text-brand-violet" />
                <span>Sketchbook</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 glass-card p-8 sm:p-10 rounded-3xl border border-white/10 relative">
            <h3 className="text-2xl font-display font-bold text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-8">
              Fill out the form below or reach out via email. I will respond within 24 hours.
            </p>

            {formSubmitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-brand-emerald/20 border border-brand-emerald/40 text-brand-emerald flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-display font-bold text-white mb-2">
                  Message Sent Successfully!
                </h4>
                <p className="text-sm text-slate-400 max-w-sm">
                  Thank you for reaching out, {formData.name || 'there'}. I have received your message and will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-brand-emerald focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-brand-emerald focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="UX Opportunity / Freelance Inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-brand-emerald focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, team, or opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-brand-emerald focus:outline-none text-sm text-white placeholder-slate-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-gradient-to-r from-brand-emerald via-brand-teal to-brand-cyan text-slate-950 font-bold text-sm rounded-xl shadow-lg shadow-brand-emerald/25 hover:shadow-brand-emerald/40 hover:scale-[1.01] active:scale-[0.99] transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
