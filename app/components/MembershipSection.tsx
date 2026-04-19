"use client";

import { useState } from "react";
import { BookOpen, Briefcase, GraduationCap, Network, Trophy, Users } from "lucide-react";

const benefits = [
  { icon: <GraduationCap className="w-8 h-8 text-primary" />, title: "ACCA & ICPAU Prep", desc: "Free exam preparation workshops and study materials for professional certifications." },
  { icon: <Users className="w-8 h-8 text-primary" />, title: "Big Four Access", desc: "Direct networking with Deloitte, BDO, Forvis Mazars and other top firms." },
  { icon: <Briefcase className="w-8 h-8 text-primary" />, title: "Internship Pipeline", desc: "Priority access to internship postings from our corporate partners." },
  { icon: <BookOpen className="w-8 h-8 text-primary" />, title: "Academic Support", desc: "Past papers, study groups, and academic clinic sessions with senior students." },
  { icon: <Trophy className="w-8 h-8 text-primary" />, title: "Leadership Development", desc: "Opportunities to lead committees, organize events, and build your CV." },
  { icon: <Network className="w-8 h-8 text-primary" />, title: "Alumni Network", desc: "Connect with ASAMU alumni working across Uganda and internationally." },
];

const steps = [
  { step: "01", title: "Fill Application", desc: "Complete the online membership form with your student details." },
  { step: "02", title: "Pay Membership Fee", desc: "UGX 20,000 per semester via mobile money or bank transfer." },
  { step: "03", title: "Get Verified", desc: "Our team verifies your MUBS enrollment within 48 hours." },
  { step: "04", title: "Access Everything", desc: "Get your member ID, join the portal, and start attending events." },
];

export default function MembershipSection() {
  const [activeTab, setActiveTab] = useState<"benefits" | "join" | "fees">("benefits");

  return (
    <section id="membership" className="py-20 md:py-32 px-4 sm:px-6 md:px-8 bg-stats-bg">
      <div className="max-w-6xl mx-auto">
        <p className="text-[10px] tracking-[0.4em] uppercase text-accent font-bold mb-4">
          Become a Member
        </p>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tighter">
          Membership
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
          Join a community of ambitious accounting students committed to academic excellence and professional growth.
        </p>

        {/* Tabs */}
        <div className="flex gap-4 mb-16 flex-wrap">
          {(["benefits", "join", "fees"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all capitalize border-[1.5px] ${
                activeTab === tab
                  ? "bg-primary text-primary-text border-primary shadow-xl shadow-primary/20 scale-105"
                  : "bg-white text-foreground border-subtle-border hover:border-accent hover:text-accent"
              }`}
            >
              {tab === "join" ? "How to Join" : tab === "fees" ? "Fees & Plans" : tab}
            </button>
          ))}
        </div>

        {/* Benefits */}
        {activeTab === "benefits" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-white p-8 md:p-10 rounded-3xl border border-subtle-border hover:border-accent hover:shadow-2xl hover:shadow-accent/5 transition-all group"
              >
                <div className="p-4 bg-stats-bg w-fit rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                  {b.icon}
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4 tracking-tight">
                  {b.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* How to Join */}
        {activeTab === "join" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="bg-white p-8 md:p-10 rounded-3xl border border-subtle-border relative overflow-hidden group">
                <div className="font-display text-7xl font-black text-stats-bg absolute -top-4 -right-4 group-hover:text-accent/10 transition-colors">
                  {s.step}
                </div>
                <div className="relative z-10">
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Fees */}
        {activeTab === "fees" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <div className="bg-white p-8 sm:p-12 rounded-3xl border border-subtle-border shadow-sm hover:shadow-md transition-shadow">
              <div className="text-[10px] tracking-[0.3em] uppercase text-accent font-bold mb-4">
                Semester Plan
              </div>
              <div className="font-display text-5xl font-extrabold text-foreground mb-2">
                UGX 20,000
              </div>
              <p className="text-muted-foreground text-sm mb-8">Per semester, renewable</p>
              <ul className="space-y-4 text-sm text-foreground/80 mb-10">
                <li className="flex items-center gap-3"><span className="w-5 h-5 flex items-center justify-center bg-accent/20 text-accent rounded-full text-xs">✓</span> All events access</li>
                <li className="flex items-center gap-3"><span className="w-5 h-5 flex items-center justify-center bg-accent/20 text-accent rounded-full text-xs">✓</span> Study materials</li>
                <li className="flex items-center gap-3"><span className="w-5 h-5 flex items-center justify-center bg-accent/20 text-accent rounded-full text-xs">✓</span> Networking sessions</li>
                <li className="flex items-center gap-3"><span className="w-5 h-5 flex items-center justify-center bg-accent/20 text-accent rounded-full text-xs">✓</span> Member portal</li>
              </ul>
              <button className="w-full py-4 bg-white border-2 border-accent text-foreground font-bold rounded-full hover:bg-accent hover:text-white transition-all">
                Select Semester
              </button>
            </div>
            <div className="bg-white p-8 sm:p-12 rounded-3xl border-2 border-accent shadow-2xl shadow-accent/10 relative overflow-hidden scale-105">
              <div className="absolute top-6 right-6 px-4 py-1.5 bg-accent text-white text-[10px] tracking-[0.2em] uppercase font-bold rounded-full">
                Most Popular
              </div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-accent font-bold mb-4">
                Annual Plan
              </div>
              <div className="font-display text-5xl font-extrabold text-foreground mb-2">
                UGX 35,000
              </div>
              <p className="text-muted-foreground text-sm mb-8">Full academic year</p>
              <ul className="space-y-4 text-sm text-foreground/80 mb-10">
                <li className="flex items-center gap-3"><span className="w-5 h-5 flex items-center justify-center bg-accent text-white rounded-full text-xs">✓</span> Everything in Semester</li>
                <li className="flex items-center gap-3"><span className="w-5 h-5 flex items-center justify-center bg-accent text-white rounded-full text-xs">✓</span> Priority internship alerts</li>
                <li className="flex items-center gap-3"><span className="w-5 h-5 flex items-center justify-center bg-accent text-white rounded-full text-xs">✓</span> Certificate of membership</li>
                <li className="flex items-center gap-3"><span className="w-5 h-5 flex items-center justify-center bg-accent text-white rounded-full text-xs">✓</span> Annual gala invitation</li>
              </ul>
              <button className="w-full py-4 bg-primary text-primary-text font-bold rounded-full hover:scale-[1.02] transition-all shadow-xl shadow-primary/20">
                Join Now (Annual)
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
