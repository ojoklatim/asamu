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
    <section id="events" className="py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-[#1d4ed8]">
      <div className="max-w-6xl mx-auto">
        <p className="text-[10px] tracking-[0.4em] uppercase text-white/70 font-bold mb-4">
          Stay Engaged
        </p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Events & Activities
        </h2>
        <p className="text-white/70 text-base md:text-lg max-w-2xl mb-12 md:mb-16">
          From networking mixers to intensive bootcamps, ASAMU events are designed to accelerate your career.
        </p>

        {/* Events Calendar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 md:mb-20">
          {upcomingEvents.map((event) => (
            <div
              key={event.title}
              className="bg-surface-container p-6 md:p-8 rounded-lg hover:bg-surface-high transition-colors group flex flex-col justify-between min-h-[300px]"
            >
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="bg-white rounded-lg p-2.5 text-center min-w-[56px]">
                    <div className="text-[10px] font-bold text-black uppercase tracking-widest">
                      {event.month}
                    </div>
                    <div className="text-xl font-black text-black leading-none mt-0.5">
                      {event.day}
                    </div>
                  </div>
                  <div>
                    <span className="px-2.5 py-0.5 bg-white/10 text-white/80 text-[10px] tracking-[0.15em] uppercase font-bold rounded-full">
                      {event.type}
                    </span>
                    <div className="text-sm text-on-surface/60 mt-1">{event.time}</div>
                  </div>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-on-surface tracking-tight leading-tight mb-3">
                  {event.title}
                </h3>
                <p className="text-on-surface/60 text-sm leading-relaxed">{event.desc}</p>
              </div>
              <button className="mt-6 w-full py-3 bg-white text-surface font-bold rounded-lg opacity-90 group-hover:opacity-100 transition-opacity">
                Register
              </button>
            </div>
          ))}
        </div>

        {/* Past Event Gallery Placeholders */}
        <div className="mb-16 md:mb-20">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-6 md:mb-8 tracking-tight">
            Past Event Gallery
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {["Networking Mixer '24", "ACCA Workshop", "Annual Gala", "Career Fair '24", "Tax Seminar", "Leadership Summit", "Alumni Reunion", "Orientation Week"].map((name) => (
              <div
                key={name}
                className="aspect-square bg-surface-container rounded-lg flex items-center justify-center group hover:bg-surface-high transition-colors overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-on-surface/30 text-[10px] sm:text-xs tracking-widest uppercase font-bold text-center px-2 sm:px-4 group-hover:text-white group-hover:relative group-hover:z-10 transition-colors">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-6 md:mb-8 tracking-tight">
            Member Testimonials
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-surface-container p-6 md:p-8 rounded-lg">
                <svg className="w-8 h-8 text-primary/50 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-on-surface/80 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="font-display font-bold text-on-surface text-sm">{t.name}</div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-on-surface/50 mt-0.5">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
