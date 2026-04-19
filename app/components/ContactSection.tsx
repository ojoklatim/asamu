"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <p className="text-[10px] tracking-[0.4em] uppercase text-accent font-bold mb-4">
          Get in Touch
        </p>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tighter">
          Contact & Support
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-12 md:mb-16 leading-relaxed">
          Have questions about membership, events, or partnerships? We&apos;d love to hear from you.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-8 p-8 md:p-12 bg-stats-bg rounded-3xl border border-subtle-border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="contact-name" className="block text-[10px] tracking-[0.2em] uppercase text-accent font-bold mb-3">
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-6 py-4 bg-white border border-subtle-border rounded-xl text-foreground placeholder-muted-foreground outline-none focus:ring-2 focus:ring-primary/50 transition-all text-base shadow-sm"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-[10px] tracking-[0.2em] uppercase text-accent font-bold mb-3">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-6 py-4 bg-white border border-subtle-border rounded-xl text-foreground placeholder-muted-foreground outline-none focus:ring-2 focus:ring-primary/50 transition-all text-base shadow-sm"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-[10px] tracking-[0.2em] uppercase text-accent font-bold mb-3">
                  How can we help?
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-6 py-4 bg-white border border-subtle-border rounded-xl text-foreground placeholder-muted-foreground outline-none focus:ring-2 focus:ring-primary/50 transition-all text-base resize-none shadow-sm"
                  placeholder="Tell us about your inquiry..."
                />
              </div>
              <button
                type="submit"
                className="w-full md:w-auto px-10 py-4 bg-primary text-primary-text font-bold rounded-full shadow-xl shadow-primary/20 hover:scale-105 transition-all text-lg"
              >
                {submitted ? "✓ Message Sent!" : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-subtle-border shadow-sm">
              <h3 className="font-display text-2xl font-bold text-foreground mb-8 tracking-tight">
                Connect with Us
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-stats-bg border border-subtle-border flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.2em] uppercase text-accent font-bold mb-1">Email</div>
                    <div className="text-foreground font-semibold text-base">asamu@mubs.ac.ug</div>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-stats-bg border border-subtle-border flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.2em] uppercase text-accent font-bold mb-1">Phone</div>
                    <div className="text-foreground font-semibold text-base">+256 414 338 100</div>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-stats-bg border border-subtle-border flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.2em] uppercase text-accent font-bold mb-1">Office</div>
                    <div className="text-foreground font-semibold text-sm leading-relaxed">
                      Plot 21A, Old Portbell Road, Kampala
                      <br />
                      MUBS Main Block, Room B204
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-subtle-border shadow-sm">
              <h3 className="font-display text-xl font-bold text-foreground mb-6 tracking-tight">
                Follow ASAMU
              </h3>
              <div className="flex flex-wrap gap-4">
                {[
                  { name: "Instagram", icon: "M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zm-4 11a3 3 0 110-6 3 3 0 010 6zm4.5-7.5a1 1 0 110-2 1 1 0 010 2z" },
                  { name: "LinkedIn", icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z" },
                  { name: "Twitter", icon: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="w-12 h-12 rounded-full bg-stats-bg border border-subtle-border flex items-center justify-center hover:bg-primary hover:text-primary-text hover:border-primary transition-all group"
                    aria-label={social.name}
                  >
                    <svg className="w-5 h-5 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
