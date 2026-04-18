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
    <section id="resources" className="py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-surface">
      <div className="max-w-6xl mx-auto">
        <p className="text-[10px] tracking-[0.4em] uppercase text-primary font-bold mb-4">
          Study Smarter
        </p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-on-surface mb-6 tracking-tight">
          Academic Resources
        </h2>
        <p className="text-on-surface/60 text-base md:text-lg max-w-2xl mb-16">
          Access exam preparation materials, past papers, study group schedules, and academic clinic sessions.
        </p>

        {/* Downloadable Materials */}
        <div className="mb-16">
          <h3 className="font-display text-2xl font-bold text-on-surface mb-8 tracking-tight">
            Downloadable Materials
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.map((r) => (
              <div
                key={r.title}
                className="bg-surface-container p-5 md:p-6 rounded-lg hover:bg-surface-high transition-colors flex items-start justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 bg-primary/15 text-primary text-[10px] tracking-[0.15em] uppercase font-bold rounded">
                      {r.type}
                    </span>
                    <span className="text-[10px] text-on-surface/40 tracking-wide uppercase">
                      {r.format} · {r.size}
                    </span>
                  </div>
                  <h4 className="font-display text-base font-bold text-on-surface tracking-tight">
                    {r.title}
                  </h4>
                </div>
                <button className="shrink-0 w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center hover:bg-primary/30 transition-colors group">
                  <svg className="w-5 h-5 text-primary group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 18h16" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Study Groups & Clinics side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Study Groups */}
          <div>
            <h3 className="font-display text-2xl font-bold text-on-surface mb-6 tracking-tight">
              Study Group Schedule
            </h3>
            <div className="space-y-3">
              {studyGroups.map((sg) => (
                <div key={sg.subject} className="bg-surface-container p-4 md:p-5 rounded-lg flex items-center gap-4">
                  <div className="bg-primary/15 rounded-lg p-3 text-center min-w-[60px]">
                    <div className="text-[10px] font-bold text-primary uppercase tracking-widest">{sg.day.slice(0, 3)}</div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display text-sm font-bold text-on-surface">{sg.subject}</h4>
                    <p className="text-on-surface/50 text-xs mt-0.5">{sg.time} · {sg.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Clinics */}
          <div>
            <h3 className="font-display text-2xl font-bold text-on-surface mb-6 tracking-tight">
              Upcoming Academic Clinics
            </h3>
            <div className="space-y-3">
              {clinics.map((c) => (
                <div key={c.topic} className="bg-surface-container p-4 md:p-5 rounded-lg flex items-center gap-4">
                  <div className="bg-white rounded-lg p-3 text-center min-w-[60px]">
                    <div className="text-xs font-black text-black leading-none">{c.date}</div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display text-sm font-bold text-on-surface">{c.topic}</h4>
                    <p className="text-on-surface/50 text-xs mt-0.5">Facilitated by {c.facilitator}</p>
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
