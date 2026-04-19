"use client";

const leaders = [
  { name: "Nakamya Sarah", title: "President", image: "/leadership/sarah.jpg", bio: "Final year BAF student. ACCA affiliate with internship experience at Deloitte Uganda.", tenure: "2025–2026" },
  { name: "Okello David", title: "Vice President", image: "/leadership/david.jpg", bio: "Third year accounting student. ICPAU student member and former Crown Beverages intern.", tenure: "2025–2026" },
  { name: "Auma Grace", title: "General Secretary", image: "/leadership/grace.jpg", bio: "Final year BAF student. Active in ACCA study groups and academic clinic facilitation.", tenure: "2025–2026" },
  { name: "TBD", title: "Asst. General Secretary", image: "/leadership/asst-gen-sec.jpg", bio: "Position to be filled.", tenure: "2025–2026" },
  { name: "Mugisha Brian", title: "Financial Controller", image: "/leadership/brian.jpg", bio: "Third year finance major. BDO Uganda intern with strong financial reporting skills.", tenure: "2025–2026" },
  { name: "TBD", title: "Asst. Financial Controller", image: "/leadership/asst-fin-controller.jpg", bio: "Position to be filled.", tenure: "2025–2026" },
  { name: "TBD", title: "Speaker", image: "/leadership/speaker.jpg", bio: "Position to be filled.", tenure: "2025–2026" },
  { name: "Ssemanda Paul", title: "Project Manager", image: "/leadership/paul.jpg", bio: "Third year BAF student. Organized 15+ networking events with Big Four firms.", tenure: "2025–2026" },
  { name: "TBD", title: "Asst. Project Manager", image: "/leadership/asst-project-mgr.jpg", bio: "Position to be filled.", tenure: "2025–2026" },
  { name: "Atim Rebecca", title: "Head of Corporate Affairs", image: "/leadership/rebecca.jpg", bio: "Final year student. Manages relationships with ACCA, ICPAU, and corporate sponsors.", tenure: "2025–2026" },
  { name: "TBD", title: "Asst. Head of Corporate Affairs", image: "/leadership/asst-head-corp-affairs.jpg", bio: "Position to be filled.", tenure: "2025–2026" },
  { name: "Namubiru Faith", title: "Program Coordinator", image: "/leadership/faith.jpg", bio: "Final year student. Coordinates exam prep workshops and maintains study material archives.", tenure: "2025–2026" },
  { name: "TBD", title: "Auditor", image: "/leadership/auditor.jpg", bio: "Position to be filled.", tenure: "2025–2026" },
  { name: "TBD", title: "Head of Facilitators", image: "/leadership/head-facilitators.jpg", bio: "Position to be filled.", tenure: "2025–2026" },
  { name: "TBD", title: "Asst. Head of Facilitators", image: "/leadership/asst-head-facilitators.jpg", bio: "Position to be filled.", tenure: "2025–2026" },
  { name: "TBD", title: "Chief Mobiliser", image: "/leadership/chief-mobiliser.jpg", bio: "Position to be filled.", tenure: "2025–2026" },
  { name: "TBD", title: "Asst. Chief Mobiliser", image: "/leadership/asst-chief-mobiliser.jpg", bio: "Position to be filled.", tenure: "2025–2026" },
  { name: "Kabugo Martin", title: "Public Relations Officer", image: "/leadership/martin.jpg", bio: "Third year media and accounting student. Leads ASAMU's digital presence and newsletters.", tenure: "2025–2026" },
  { name: "TBD", title: "Asst. Public Relations Officer", image: "/leadership/asst-pro.jpg", bio: "Position to be filled.", tenure: "2025–2026" },
  { name: "TBD", title: "Head of Class Representatives", image: "/leadership/head-class-reps.jpg", bio: "Position to be filled.", tenure: "2025–2026" },
  { name: "TBD", title: "Class Representative", image: "/leadership/class-rep.jpg", bio: "Position to be filled.", tenure: "2025–2026" },
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
              key={leader.name + leader.title}
              className="bg-white p-8 rounded-3xl border border-subtle-border hover:border-accent hover:shadow-2xl hover:shadow-accent/5 transition-all group"
            >
              {/* Photo Container */}
              <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center mb-8 group-hover:rotate-6 transition-all shadow-lg shadow-primary/20 overflow-hidden relative">
                {leader.image ? (
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                ) : null}
                <span className="font-display text-2xl font-extrabold text-primary-text absolute">
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
