const resources = [
  { title: "ACCA F1-F3 Prep Guide", type: "Exam Prep", size: "2.4 MB", format: "PDF" },
  { title: "ICPAU Foundation Level Notes", type: "Exam Prep", size: "3.1 MB", format: "PDF" },
  { title: "Financial Accounting Past Papers 2024", type: "Past Papers", size: "1.8 MB", format: "PDF" },
  { title: "Management Accounting Solutions", type: "Past Papers", size: "2.2 MB", format: "PDF" },
  { title: "Auditing & Assurance Study Guide", type: "Study Guide", size: "4.5 MB", format: "PDF" },
  { title: "Tax Computation Templates", type: "Template", size: "0.5 MB", format: "XLSX" },
];

const studyGroups = [
  { subject: "Financial Accounting II", day: "Monday", time: "4:00 PM - 6:00 PM", location: "Room B204" },
  { subject: "ACCA F5 Performance Mgmt", day: "Wednesday", time: "5:00 PM - 7:00 PM", location: "Library Hall" },
  { subject: "Taxation Principles", day: "Thursday", time: "4:00 PM - 6:00 PM", location: "Room C101" },
  { subject: "Cost Accounting", day: "Friday", time: "3:00 PM - 5:00 PM", location: "Room A305" },
];

const clinics = [
  { topic: "IFRS Standards Deep Dive", date: "Oct 30", facilitator: "Prof. Kamya" },
  { topic: "Audit Risk Assessment", date: "Nov 6", facilitator: "Mr. Ssebagala (Deloitte)" },
  { topic: "Corporate Tax Planning", date: "Nov 13", facilitator: "Ms. Achieng (ICPAU)" },
  { topic: "Financial Statement Analysis", date: "Nov 20", facilitator: "Dr. Wamala" },
];

export default function AcademicSection() {
  return (
    <section id="resources" className="py-20 md:py-32 px-4 sm:px-6 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <p className="text-[10px] tracking-[0.4em] uppercase text-accent font-bold mb-4">
          Study Smarter
        </p>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tighter">
          Academic Resources
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-16 leading-relaxed">
          Access premium exam preparation materials, past papers, study group schedules, and academic clinic sessions.
        </p>

        {/* Downloadable Materials */}
        <div className="mb-20">
          <h3 className="font-display text-2xl font-bold text-foreground mb-8 tracking-tight flex items-center gap-3">
            Downloadable Materials
            <span className="h-[2px] flex-1 bg-accent/20"></span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((r) => (
              <div
                key={r.title}
                className="bg-stats-bg/50 p-6 md:p-8 rounded-2xl border border-subtle-border hover:border-accent hover:shadow-xl hover:shadow-accent/5 transition-all group flex items-start justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2.5 py-1 bg-primary text-primary-text text-[10px] tracking-[0.1em] uppercase font-bold rounded-md">
                      {r.type}
                    </span>
                    <span className="text-[10px] text-muted-foreground tracking-wide uppercase font-medium">
                      {r.format} · {r.size}
                    </span>
                  </div>
                  <h4 className="font-display text-lg font-bold text-foreground tracking-tight leading-snug">
                    {r.title}
                  </h4>
                </div>
                <button className="shrink-0 w-12 h-12 rounded-full bg-white border border-subtle-border flex items-center justify-center hover:bg-primary hover:text-primary-text transition-all group shadow-sm">
                  <svg className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 18h16" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Study Groups & Clinics side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Study Groups */}
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-8 tracking-tight flex items-center gap-3">
              Study Groups
              <span className="h-[2px] flex-1 bg-accent/20"></span>
            </h3>
            <div className="space-y-4">
              {studyGroups.map((sg) => (
                <div key={sg.subject} className="bg-white p-5 md:p-6 rounded-2xl border border-subtle-border flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-stats-bg rounded-xl px-4 py-3 text-center min-w-[70px] border border-subtle-border">
                    <div className="text-xs font-bold text-primary uppercase tracking-widest">{sg.day.slice(0, 3)}</div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display text-base font-bold text-foreground">{sg.subject}</h4>
                    <p className="text-muted-foreground text-sm mt-1">{sg.time} · <span className="text-accent font-semibold">{sg.location}</span></p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Clinics */}
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-8 tracking-tight flex items-center gap-3">
              Academic Clinics
              <span className="h-[2px] flex-1 bg-accent/20"></span>
            </h3>
            <div className="space-y-4">
              {clinics.map((c) => (
                <div key={c.topic} className="bg-white p-5 md:p-6 rounded-2xl border border-subtle-border flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-primary rounded-xl px-4 py-3 text-center min-w-[70px]">
                    <div className="text-xs font-black text-primary-text leading-none">{c.date}</div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display text-base font-bold text-foreground">{c.topic}</h4>
                    <p className="text-muted-foreground text-sm mt-1 italic">Facilitated by {c.facilitator}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
