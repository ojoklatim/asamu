"use client";

import Link from "next/link";

export default function UpcomingEventHighlight() {
  const nextEvent = {
    month: "Oct",
    day: "26",
    title: "Fall Networking Mixer",
    time: "6:00 PM - 8:00 PM",
    desc: "Network with professionals from Deloitte and BDO Uganda. Bring your CV!",
    type: "Networking",
    image: "/next-event.jpg" // Placeholder for manual upload
  };

  return (
    <section className="py-12 px-4 sm:px-6 md:px-8 bg-stats-bg border-y border-subtle-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col sm:flex-row items-center gap-6 w-full md:w-auto">
          {/* Image Attachment Allowance */}
          <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-2xl bg-white border border-subtle-border overflow-hidden shrink-0 shadow-sm group">
            <img 
              src={nextEvent.image} 
              alt={nextEvent.title}
              className="w-full h-full object-cover transition-transform group-hover:scale-110"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
                (e.target as HTMLImageElement).parentElement!.classList.add('flex', 'items-center', 'justify-center');
              }}
            />
            <div className="hidden group-[.flex]:block text-[10px] text-accent/30 font-bold uppercase tracking-widest text-center px-2">
              Event Image
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="bg-white rounded-2xl p-4 text-center min-w-[80px] border border-subtle-border shadow-sm">
              <div className="text-[10px] font-bold text-accent uppercase tracking-widest leading-none">
                {nextEvent.month}
              </div>
              <div className="text-3xl font-black text-foreground leading-none mt-1">
                {nextEvent.day}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-[10px] tracking-[0.2em] uppercase text-accent font-bold">
                  Next Upcoming Event
                </span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground tracking-tight leading-tight">
                {nextEvent.title}
              </h3>
              <div className="text-sm text-muted-foreground mt-2 font-medium">
                {nextEvent.time} • <span className="text-primary font-bold">{nextEvent.type}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto shrink-0">
          <Link
            href="/events"
            className="w-full md:w-auto px-8 py-3 bg-white border border-subtle-border text-foreground font-bold rounded-full hover:bg-stats-bg transition-colors text-center text-sm shadow-sm"
          >
            View Calendar
          </Link>
          <button className="w-full md:w-auto px-8 py-3 bg-primary text-primary-text font-bold rounded-full shadow-lg shadow-primary/10 hover:scale-105 transition-all text-center text-sm">
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
}

