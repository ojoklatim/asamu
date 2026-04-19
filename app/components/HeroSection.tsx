"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import LogoMarquee from "./LogoMarquee";

export default function HeroSection() {
  const [text, setText] = useState("");
  const fullText = "Empowering the next generation of accounting leaders.";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const isVisible = (start: number) => {
    return text.length >= start;
  };

  const getSlice = (start: number, end?: number) => {
    return text.slice(start, end);
  };

  return (
    <section
      id="about"
      className="relative pt-32 sm:pt-40 md:pt-48 pb-20 sm:pb-24 md:pb-32 px-4 sm:px-6 md:px-8 flex flex-col items-start hero-gradient min-h-[90vh] justify-center overflow-hidden"
    >
      <div className="max-w-6xl w-full mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <img 
            src="https://mubs.ac.ug/wp-content/uploads/2025/07/makerere-university-business-school-mubs-seeklogo-97x94.png" 
            alt="MUBS Logo" 
            className="w-12 h-12 object-contain"
          />
          <p className="text-xs tracking-[0.4em] uppercase text-accent font-bold">
            Makerere University Business School
          </p>
        </div>
        <h1 className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold leading-[0.85] tracking-tighter text-foreground mb-8 min-h-[3em]">
          {getSlice(0, 19)}
          {isVisible(20) && <br />}
          <em className="italic text-primary">{getSlice(20, 30)}</em>
          {getSlice(30, 33)}
          {isVisible(34) && <br />}
          {getSlice(34)}
          {text.length < fullText.length && (
            <span className="animate-pulse inline-block w-2 h-[0.8em] bg-primary ml-1 align-middle" />
          )}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
          ASAMU bridges academia and professional accounting by connecting
          students with industry leaders, certifications, and career pathways
          through ACCA, ICPAU, and Big Four partnerships.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
          <Link
            href="/membership"
            className="w-full sm:w-auto text-center px-10 py-4 bg-primary text-primary-text font-bold rounded-full shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all text-lg"
          >
            Join ASAMU
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto text-center px-10 py-4 bg-transparent border-[1.5px] border-accent text-foreground font-bold rounded-full hover:bg-accent/5 transition-all text-lg"
          >
            Contact Us
          </Link>
        </div>

        {/* Quick stats bar */}
        <div className="mt-24 p-8 sm:p-12 bg-stats-bg rounded-3xl border border-subtle-border grid grid-cols-2 sm:grid-cols-4 gap-12">
          {[
            { value: "500+", label: "Active Members" },
            { value: "7", label: "Corporate Partners" },
            { value: "20+", label: "Events / Year" },
            { value: "95%", label: "Career Placement" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
                {stat.value}
              </div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-accent font-bold mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <LogoMarquee />
      </div>
    </section>
  );
}
