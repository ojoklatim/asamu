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
    <section id="membership" className="py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-surface">
      <div className="max-w-6xl mx-auto">
        <p className="text-[10px] tracking-[0.4em] uppercase text-primary font-bold mb-4">
          Become a Member
        </p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-on-surface mb-6 tracking-tight">
          Membership
        </h2>
        <p className="text-on-surface/60 text-lg max-w-2xl mb-12">
          Join a community of ambitious accounting students committed to academic excellence and professional growth.
        </p>

        {/* Tabs */}
        <div className="flex gap-2 mb-12 flex-wrap">
          {(["benefits", "join", "fees"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 sm:px-6 sm:py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all capitalize ${
                activeTab === tab
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "bg-surface-container text-on-surface/60 hover:text-on-surface hover:bg-surface-high"
              }`}
            >
              {tab === "join" ? "How to Join" : tab === "fees" ? "Fees & Plans" : tab}
            </button>
          ))}
        </div>

        {/* Benefits */}
        {activeTab === "benefits" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-surface-container p-6 md:p-8 rounded-lg hover:bg-surface-high transition-colors group"
              >
                <div className="text-3xl mb-4">{b.icon}</div>
                <h3 className="font-display text-xl font-bold text-on-surface mb-2 tracking-tight">
                  {b.title}
                </h3>
                <p className="text-on-surface/60 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* How to Join */}
        {activeTab === "join" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="bg-surface-container p-6 md:p-8 rounded-lg relative">
                <div className="font-display text-5xl font-extrabold text-primary/20 mb-4">
                  {s.step}
                </div>
                <h3 className="font-display text-lg font-bold text-on-surface mb-2">
                  {s.title}
                </h3>
                <p className="text-on-surface/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* Fees */}
        {activeTab === "fees" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            <div className="bg-surface-container p-6 sm:p-8 md:p-10 rounded-lg border border-white/5">
              <div className="text-[10px] tracking-[0.3em] uppercase text-on-surface/50 font-bold mb-2">
                Semester
              </div>
              <div className="font-display text-4xl font-extrabold text-on-surface mb-1">
                UGX 20,000
              </div>
              <p className="text-on-surface/50 text-sm mb-6">Per semester, renewable</p>
              <ul className="space-y-3 text-sm text-on-surface/70">
                <li className="flex items-center gap-2"><span className="text-primary">✓</span> All events access</li>
                <li className="flex items-center gap-2"><span className="text-primary">✓</span> Study materials</li>
                <li className="flex items-center gap-2"><span className="text-primary">✓</span> Networking sessions</li>
                <li className="flex items-center gap-2"><span className="text-primary">✓</span> Member portal</li>
              </ul>
              <button className="mt-8 w-full py-3 bg-gradient-to-r from-primary to-primary-container text-white font-bold rounded-lg hover:opacity-90 transition-opacity">
                Join Now
              </button>
            </div>
            <div className="bg-surface-container p-6 sm:p-8 md:p-10 rounded-lg border border-primary/30 relative overflow-hidden">
              <div className="absolute top-4 right-4 px-3 py-1 bg-primary/20 text-primary text-[10px] tracking-[0.2em] uppercase font-bold rounded-full">
                Best Value
              </div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-on-surface/50 font-bold mb-2">
                Annual
              </div>
              <div className="font-display text-4xl font-extrabold text-on-surface mb-1">
                UGX 35,000
              </div>
              <p className="text-on-surface/50 text-sm mb-6">Full academic year</p>
              <ul className="space-y-3 text-sm text-on-surface/70">
                <li className="flex items-center gap-2"><span className="text-primary">✓</span> Everything in Semester</li>
                <li className="flex items-center gap-2"><span className="text-primary">✓</span> Priority internship alerts</li>
                <li className="flex items-center gap-2"><span className="text-primary">✓</span> Certificate of membership</li>
                <li className="flex items-center gap-2"><span className="text-primary">✓</span> Annual gala invitation</li>
              </ul>
              <button className="mt-8 w-full py-3 bg-white text-surface font-bold rounded-lg hover:bg-on-surface transition-colors">
                Join Now
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
