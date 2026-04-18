"use client";

import Link from "next/link";

export default function UpcomingEventHighlight() {
  const nextEvent = {
    month: "Oct",
    day: "26",
    title: "Fall Networking Mixer",
    time: "6:00 PM - 8:00 PM",
    desc: "Network with professionals from Deloitte and BDO Uganda. Bring your CV!",
    type: "Networking"
  };

  return (
    <section className="py-12 px-4 sm:px-6 md:px-8 bg-surface-container/50 border-y border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5 w-full md:w-auto">
          <div className="bg-primary/20 rounded-xl p-3 text-center min-w-[70px] border border-primary/30">
            <div className="text-[10px] font-bold text-primary uppercase tracking-widest">
              {nextEvent.month}
            </div>
            <div className="text-2xl font-black text-on-surface leading-none mt-1">
              {nextEvent.day}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-[10px] tracking-[0.2em] uppercase text-on-surface/50 font-bold">
                Next Upcoming Event
              </span>
            </div>
            <h3 className="font-display text-lg sm:text-xl font-bold text-on-surface tracking-tight leading-tight">
              {nextEvent.title}
            </h3>
            <div className="text-sm text-on-surface/60 mt-1">
              {nextEvent.time} • {nextEvent.type}
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4 w-full md:w-auto shrink-0">
          <Link
            href="/events"
            className="w-full md:w-auto px-6 py-3 bg-surface-container hover:bg-surface-high border border-white/10 text-on-surface font-bold rounded-lg transition-colors text-center text-sm"
          >
            View All Events
          </Link>
          <button className="w-full md:w-auto px-6 py-3 bg-primary text-white font-bold rounded-lg shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity text-center text-sm">
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
}
