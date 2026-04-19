const upcomingEvents = [
  { month: "Oct", day: "26", title: "Fall Networking Mixer", time: "6:00 PM - 8:00 PM", desc: "Network with professionals from Deloitte and BDO Uganda. Bring your CV!", type: "Networking" },
  { month: "Nov", day: "14", title: "Tax Season Workshop", time: "6:00 PM - 8:00 PM", desc: "Hands-on workshop on Uganda tax computation with ICPAU practitioners.", type: "Workshop" },
  { month: "Dec", day: "05", title: "Leadership Panel", time: "4:00 PM - 6:00 PM", desc: "Panel discussion with ASAMU alumni now in senior finance roles.", type: "Panel" },
  { month: "Jan", day: "18", title: "ACCA Prep Bootcamp", time: "9:00 AM - 4:00 PM", desc: "Full-day intensive for F1-F3 papers with Forvis Mazars facilitators.", type: "Bootcamp" },
  { month: "Feb", day: "08", title: "Annual General Meeting", time: "2:00 PM - 5:00 PM", desc: "Review the year, elect new leadership, and plan the road ahead.", type: "Meeting" },
  { month: "Mar", day: "22", title: "Career Fair 2026", time: "10:00 AM - 3:00 PM", desc: "All seven corporate partners present with internship and job openings.", type: "Fair" },
];

const testimonials = [
  { name: "Anisha K.", role: "ASAMU Member '24", quote: "The networking events connected me directly with my internship supervisor at Deloitte." },
  { name: "Joseph M.", role: "ASAMU Member '23", quote: "Study groups helped me pass ACCA F3 on my first attempt. Incredible support system." },
  { name: "Grace N.", role: "ASAMU Alumni '22", quote: "Being Partnerships Lead taught me stakeholder management skills I use daily at BDO." },
];

export default function EventsSection() {
  return (
    <section id="events" className="py-20 md:py-32 px-4 sm:px-6 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <p className="text-[10px] tracking-[0.4em] uppercase text-accent font-bold mb-4">
          Stay Engaged
        </p>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tighter">
          Events & Activities
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-12 md:mb-16 leading-relaxed">
          From networking mixers to intensive bootcamps, ASAMU events are designed to accelerate your career.
        </p>

        {/* Events Calendar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 md:mb-24">
          {upcomingEvents.map((event) => (
            <div
              key={event.title}
              className="bg-white p-8 md:p-10 rounded-3xl border border-subtle-border hover:border-accent hover:shadow-2xl hover:shadow-accent/5 transition-all group flex flex-col justify-between min-h-[350px]"
            >
              <div>
                <div className="flex items-center gap-5 mb-6">
                  <div className="bg-stats-bg rounded-2xl p-4 text-center min-w-[70px] border border-subtle-border">
                    <div className="text-[10px] font-bold text-accent uppercase tracking-widest leading-none">
                      {event.month}
                    </div>
                    <div className="text-2xl font-black text-foreground leading-none mt-1">
                      {event.day}
                    </div>
                  </div>
                  <div>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] tracking-[0.1em] uppercase font-bold rounded-md">
                      {event.type}
                    </span>
                    <div className="text-sm text-muted-foreground mt-2 font-medium">{event.time}</div>
                  </div>
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground tracking-tight leading-tight mb-4">
                  {event.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">{event.desc}</p>
              </div>
              <button className="mt-8 w-full py-3.5 bg-primary text-primary-text font-bold rounded-full hover:scale-[1.02] transition-all shadow-lg shadow-primary/10">
                Register Now
              </button>
            </div>
          ))}
        </div>

        {/* Past Event Gallery */}
        <div className="mb-16 md:mb-24">
          <h3 className="font-display text-2xl font-bold text-foreground mb-10 tracking-tight flex items-center gap-3">
            Past Events
            <span className="h-[2px] flex-1 bg-accent/20"></span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {["Networking Mixer '24", "ACCA Workshop", "Annual Gala", "Career Fair '24", "Tax Seminar", "Leadership Summit", "Alumni Reunion", "Orientation Week"].map((name) => (
              <div
                key={name}
                className="aspect-square bg-stats-bg rounded-2xl flex items-center justify-center group border border-subtle-border hover:border-accent transition-all overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                  <span className="text-primary-text text-xs tracking-widest uppercase font-bold text-center">
                    {name}
                  </span>
                </div>
                <span className="text-accent/40 text-[10px] tracking-widest uppercase font-bold text-center px-4 group-hover:opacity-0 transition-opacity">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="font-display text-2xl font-bold text-foreground mb-10 tracking-tight flex items-center gap-3">
            Member Testimonials
            <span className="h-[2px] flex-1 bg-accent/20"></span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white p-8 md:p-10 rounded-3xl border border-subtle-border shadow-sm">
                <svg className="w-10 h-10 text-accent/30 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-foreground text-base leading-relaxed mb-8 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-stats-bg border border-subtle-border" />
                  <div>
                    <div className="font-display font-bold text-foreground text-sm">{t.name}</div>
                    <div className="text-[10px] tracking-[0.2em] uppercase text-accent font-bold mt-0.5">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
