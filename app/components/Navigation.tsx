"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/membership", label: "Membership" },
  { href: "/leadership", label: "Leadership" },
  { href: "/events", label: "Events" },
  { href: "/partnerships", label: "Partnerships" },
  { href: "/resources", label: "Resources" },
  { href: "/careers", label: "Careers" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl border-b border-white/5">
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 sm:py-5 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-12 h-8 flex items-center justify-center overflow-hidden" style={{ clipPath: "ellipse(48% 45% at 50% 50%)" }}>
            <img 
              src="/logo.png" 
              alt="ASAMU Logo" 
              className="absolute inset-0 w-full h-full object-cover scale-[1.1]"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl tracking-wide leading-none text-on-surface">
              ASAMU
            </span>
            <span className="text-[10px] tracking-[0.3em] text-on-surface/60 mt-0.5 uppercase hidden sm:block">
              Accounting Students&apos; Association
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-on-surface/70 hover:text-on-surface transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#membership"
            className="ml-2 px-6 py-2.5 bg-gradient-to-r from-primary to-primary-container text-white font-bold rounded-lg shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity"
          >
            Join Now
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-on-surface transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`w-6 h-0.5 bg-on-surface transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-6 h-0.5 bg-on-surface transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 pb-8 pt-2 flex flex-col gap-4 bg-surface/95 backdrop-blur-2xl border-t border-white/5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-on-surface/80 hover:text-on-surface transition-colors text-base font-medium py-1"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#membership"
            onClick={() => setMobileOpen(false)}
            className="mt-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-container text-white font-bold rounded-lg text-center"
          >
            Join Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
