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
    <section id="leadership" className="py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-surface-container/30">
      <div className="max-w-6xl mx-auto">
        <p className="text-[10px] tracking-[0.4em] uppercase text-primary font-bold mb-4">
          Our Team
        </p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-on-surface mb-6 tracking-tight">
          Leadership Team
        </h2>
        <p className="text-on-surface/60 text-lg max-w-2xl mb-16">
          Meet the dedicated students steering ASAMU towards academic and professional excellence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="bg-surface-container p-6 md:p-8 rounded-lg hover:bg-surface-high transition-colors group"
            >
              {/* Photo placeholder */}
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                <span className="font-display text-2xl font-extrabold text-primary">
                  {leader.name.split(" ").map(n => n[0]).join("")}
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-on-surface tracking-tight">
                {leader.name}
              </h3>
              <div className="text-[10px] tracking-[0.2em] uppercase text-primary font-bold mt-1 mb-3">
                {leader.title}
              </div>
              <p className="text-on-surface/60 text-sm leading-relaxed mb-3">
                {leader.bio}
              </p>
              <div className="text-[10px] tracking-[0.15em] uppercase text-on-surface/40 font-medium">
                Tenure: {leader.tenure}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
