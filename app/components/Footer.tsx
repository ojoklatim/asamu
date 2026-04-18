"use client";

import { useState } from "react";
import Link from "next/link";

const quickLinks = [
  { label: "About Us", href: "/" },
  { label: "Membership", href: "/membership" },
  { label: "Leadership", href: "/leadership" },
  { label: "Events", href: "/events" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Resources", href: "/resources" },
  { label: "Careers", href: "/careers" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use", href: "#" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="bg-surface-lowest pt-16 pb-8 px-4 sm:px-6 md:px-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-7 flex items-center justify-center overflow-hidden" style={{ clipPath: "ellipse(48% 45% at 50% 50%)" }}>
                <img 
                  src="/logo.png" 
                  alt="ASAMU Logo" 
                  className="absolute inset-0 w-full h-full object-cover scale-[1.1]"
                />
              </div>
              <span className="font-display font-bold text-lg text-on-surface tracking-wide">ASAMU</span>
            </div>
            <p className="text-on-surface/50 text-sm leading-relaxed mb-6">
              Accounting Students&apos; Association of Makerere University Business School. Empowering future accounting leaders since 2010.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                "M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zm-4 11a3 3 0 110-6 3 3 0 010 6z",
                "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z",
                "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
              ].map((path, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center hover:bg-primary/20 transition-colors group"
                >
                  <svg className="w-4 h-4 text-on-surface/50 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-on-surface/40 font-bold mb-4">
              Quick Links
            </h4>
            <div className="space-y-2.5">
              {quickLinks.slice(0, 6).map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-on-surface/60 hover:text-on-surface transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-on-surface/40 font-bold mb-4">
              More
            </h4>
            <div className="space-y-2.5">
              {quickLinks.slice(6).map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-on-surface/60 hover:text-on-surface transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-on-surface/40 font-bold mb-4">
              Newsletter
            </h4>
            <p className="text-on-surface/50 text-sm mb-4 leading-relaxed">
              Get weekly updates on events, job postings, and resources.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-4 py-2.5 bg-surface-container rounded-lg text-on-surface placeholder-on-surface/30 outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm min-w-0"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-opacity shrink-0 text-sm"
              >
                {subscribed ? "✓" : "→"}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-on-surface/40">
          <span>© {new Date().getFullYear()} ASAMU – Accounting Students&apos; Association, MUBS. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-on-surface/70 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-on-surface/70 transition-colors">Terms</Link>
            <span>asamu@mubs.ac.ug</span>
            <span>+256 414 338 100</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
