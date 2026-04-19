const leaders = [
  { name: "Nakamya Sarah", title: "President", bio: "Final year BAF student. ACCA affiliate with internship experience at Deloitte Uganda.", tenure: "2025–2026" },
  { name: "Okello David", title: "Vice President", bio: "Third year accounting student. ICPAU student member and former Crown Beverages intern.", tenure: "2025–2026" },
  { name: "Auma Grace", title: "Secretary General", bio: "Final year BAF student. Active in ACCA study groups and academic clinic facilitation.", tenure: "2025–2026" },
  { name: "Mugisha Brian", title: "Treasurer", bio: "Third year finance major. BDO Uganda intern with strong financial reporting skills.", tenure: "2025–2026" },
  { name: "Namubiru Faith", title: "Academic Affairs", bio: "Final year student. Coordinates exam prep workshops and maintains study material archives.", tenure: "2025–2026" },
  { name: "Ssemanda Paul", title: "Events Coordinator", bio: "Third year BAF student. Organized 15+ networking events with Big Four firms.", tenure: "2025–2026" },
  { name: "Atim Rebecca", title: "Partnerships Lead", bio: "Final year student. Manages relationships with ACCA, ICPAU, and corporate sponsors.", tenure: "2025–2026" },
  { name: "Kabugo Martin", title: "Communications", bio: "Third year media and accounting student. Leads ASAMU's digital presence and newsletters.", tenure: "2025–2026" },
];

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-20 md:py-32 px-4 sm:px-6 md:px-8 bg-stats-bg">
      <div className="max-w-6xl mx-auto">
        <p className="text-[10px] tracking-[0.4em] uppercase text-accent font-bold mb-4">
          Our Team
        </p>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tighter">
          Leadership Team
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-16 leading-relaxed">
          Meet the dedicated students steering ASAMU towards academic and professional excellence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="bg-white p-8 rounded-3xl border border-subtle-border hover:border-accent hover:shadow-2xl hover:shadow-accent/5 transition-all group"
            >
              {/* Photo placeholder */}
              <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform shadow-lg shadow-primary/20">
                <span className="font-display text-2xl font-extrabold text-primary-text">
                  {leader.name.split(" ").map(n => n[0]).join("")}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground tracking-tight leading-none mb-2">
                {leader.name}
              </h3>
              <div className="text-[10px] tracking-[0.2em] uppercase text-accent font-bold mb-5">
                {leader.title}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {leader.bio}
              </p>
              <div className="pt-4 border-t border-subtle-border text-[10px] tracking-[0.15em] uppercase text-muted-foreground font-bold">
                Tenure: {leader.tenure}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
