const jobs = [
  { title: "Audit Associate", company: "Deloitte Uganda", type: "Graduate", deadline: "Nov 15, 2025", location: "Kampala" },
  { title: "Finance Intern", company: "Crown Beverages", type: "Internship", deadline: "Oct 30, 2025", location: "Kampala" },
  { title: "Tax Intern", company: "BDO Uganda", type: "Internship", deadline: "Nov 20, 2025", location: "Kampala" },
  { title: "Risk Advisory Intern", company: "Forvis Mazars", type: "Internship", deadline: "Dec 1, 2025", location: "Kampala" },
  { title: "Accounts Assistant", company: "UIBFS", type: "Part-time", deadline: "Ongoing", location: "Kampala" },
  { title: "Internal Audit Intern", company: "Crown Beverages", type: "Internship", deadline: "Jan 10, 2026", location: "Kampala" },
];

const articles = [
  { title: "How to Pass ACCA on Your First Attempt", category: "Career Dev", readTime: "5 min" },
  { title: "Networking Tips for Introverted Accountants", category: "Career Dev", readTime: "4 min" },
  { title: "From MUBS to Big Four: An Alumni Story", category: "Success Story", readTime: "6 min" },
];

const alumni = [
  { name: "Diana Akello", role: "Senior Auditor, Deloitte", year: "'20", quote: "ASAMU gave me the network and skills that landed my first job." },
  { name: "Ronald Kato", role: "Finance Manager, Crown Beverages", year: "'18", quote: "The leadership experience in ASAMU prepared me for corporate management." },
  { name: "Patience Amuge", role: "Tax Consultant, BDO", year: "'21", quote: "ACCA prep workshops through ASAMU saved me a year of study time." },
];

export default function CareerSection() {
  return (
    <section id="careers" className="py-20 md:py-32 px-4 sm:px-6 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <p className="text-[10px] tracking-[0.4em] uppercase text-accent font-bold mb-4">
          Your Future
        </p>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tighter">
          Career Resources
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-16 leading-relaxed">
          Browse job and internship listings from our partners, read career development articles, and learn from alumni success stories.
        </p>

        {/* Job Board */}
        <div className="mb-24 p-8 md:p-12 bg-stats-bg rounded-3xl border border-subtle-border">
          <h3 className="font-display text-2xl font-bold text-foreground mb-10 tracking-tight flex items-center gap-3">
            Job & Internship Board
            <span className="h-[2px] flex-1 bg-accent/20"></span>
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-left">
              <thead>
                <tr className="border-b-2 border-accent/20">
                  <th className="text-[10px] tracking-[0.2em] uppercase text-accent font-bold pb-6 pr-6">Position</th>
                  <th className="text-[10px] tracking-[0.2em] uppercase text-accent font-bold pb-6 pr-6">Company</th>
                  <th className="text-[10px] tracking-[0.2em] uppercase text-accent font-bold pb-6 pr-6 hidden md:table-cell">Type</th>
                  <th className="text-[10px] tracking-[0.2em] uppercase text-accent font-bold pb-6 pr-6 hidden lg:table-cell">Deadline</th>
                  <th className="text-[10px] tracking-[0.2em] uppercase text-accent font-bold pb-6"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-subtle-border">
                {jobs.map((job) => (
                  <tr key={job.title + job.company} className="hover:bg-white/50 transition-colors group">
                    <td className="py-5 pr-4 md:py-6 md:pr-6">
                      <div className="font-display font-bold text-foreground text-base group-hover:text-primary transition-colors">{job.title}</div>
                      <div className="text-muted-foreground text-xs mt-1 md:hidden">{job.company}</div>
                    </td>
                    <td className="py-5 pr-4 md:py-6 md:pr-6 text-foreground/80 text-sm hidden md:table-cell font-medium">{job.company}</td>
                    <td className="py-5 pr-4 md:py-6 md:pr-6 hidden md:table-cell">
                      <span className={`px-3 py-1 text-[10px] tracking-[0.1em] uppercase font-bold rounded-md ${
                        job.type === "Internship" ? "bg-primary text-primary-text" :
                        job.type === "Graduate" ? "bg-accent text-white" :
                        "bg-white border border-subtle-border text-foreground"
                      }`}>
                        {job.type}
                      </span>
                    </td>
                    <td className="py-5 pr-4 md:py-6 md:pr-6 text-muted-foreground text-sm hidden lg:table-cell">{job.deadline}</td>
                    <td className="py-5 md:py-6 text-right">
                      <button className="px-6 py-2 bg-primary text-primary-text font-bold text-xs rounded-full hover:scale-105 transition-all shadow-md shadow-primary/10">
                        Apply
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Career Articles & Alumni Stories side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Articles */}
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-10 tracking-tight flex items-center gap-3">
              Career Development
              <span className="h-[2px] flex-1 bg-accent/20"></span>
            </h3>
            <div className="space-y-6">
              {articles.map((a) => (
                <div key={a.title} className="bg-white p-6 md:p-8 rounded-2xl border border-subtle-border hover:border-accent hover:shadow-xl hover:shadow-accent/5 transition-all cursor-pointer group">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2.5 py-1 bg-stats-bg text-accent text-[10px] tracking-[0.1em] uppercase font-bold rounded">
                      {a.category}
                    </span>
                    <span className="text-[10px] text-muted-foreground tracking-wide font-medium">{a.readTime} read</span>
                  </div>
                  <h4 className="font-display text-lg font-bold text-foreground tracking-tight group-hover:text-primary transition-colors leading-snug">
                    {a.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Alumni Stories */}
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-10 tracking-tight flex items-center gap-3">
              Alumni Success
              <span className="h-[2px] flex-1 bg-accent/20"></span>
            </h3>
            <div className="space-y-6">
              {alumni.map((a) => (
                <div key={a.name} className="bg-white p-6 md:p-8 rounded-2xl border border-subtle-border shadow-sm">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                      <span className="font-display text-sm font-extrabold text-primary-text">
                        {a.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                    <div>
                      <div className="font-display font-bold text-foreground text-base">{a.name}</div>
                      <div className="text-[10px] tracking-[0.15em] uppercase text-accent font-bold">{a.role} · Class of {a.year}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-base leading-relaxed italic">&ldquo;{a.quote}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
