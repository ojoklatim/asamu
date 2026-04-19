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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b-2 border-accent">
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 sm:py-5 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-8 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-110" style={{ clipPath: "ellipse(48% 45% at 50% 50%)" }}>
            <img 
              src="/logo.png" 
              alt="ASAMU Logo" 
              className="absolute inset-0 w-full h-full object-cover scale-[1.1]"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl tracking-wide leading-none text-foreground">
              ASAMU
            </span>
            <span className="text-[10px] tracking-[0.3em] text-muted-foreground mt-0.5 uppercase hidden sm:block">
              Accounting Students&apos; Association
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/80 hover:text-primary transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
            </Link>
          ))}
          <Link
            href="#membership"
            className="ml-2 px-6 py-2.5 bg-primary text-primary-text font-bold rounded-full shadow-lg hover:bg-primary/90 hover:scale-105 transition-all"
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
            className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 pb-8 pt-2 flex flex-col gap-4 bg-background border-t border-accent/20">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-foreground/80 hover:text-primary transition-colors text-base font-semibold py-1"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#membership"
            onClick={() => setMobileOpen(false)}
            className="mt-2 px-6 py-3 bg-primary text-primary-text font-bold rounded-full text-center"
          >
            Join Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
