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
    <section id="careers" className="py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-surface-container/30">
      <div className="max-w-6xl mx-auto">
        <p className="text-[10px] tracking-[0.4em] uppercase text-primary font-bold mb-4">
          Your Future
        </p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-on-surface mb-6 tracking-tight">
          Career Resources
        </h2>
        <p className="text-on-surface/60 text-base md:text-lg max-w-2xl mb-16">
          Browse job and internship listings from our partners, read career development articles, and learn from alumni success stories.
        </p>

        {/* Job Board */}
        <div className="mb-16">
          <h3 className="font-display text-2xl font-bold text-on-surface mb-8 tracking-tight">
            Job & Internship Board
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px] text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-[10px] tracking-[0.2em] uppercase text-on-surface/40 font-bold pb-4 pr-6">Position</th>
                  <th className="text-[10px] tracking-[0.2em] uppercase text-on-surface/40 font-bold pb-4 pr-6">Company</th>
                  <th className="text-[10px] tracking-[0.2em] uppercase text-on-surface/40 font-bold pb-4 pr-6 hidden md:table-cell">Type</th>
                  <th className="text-[10px] tracking-[0.2em] uppercase text-on-surface/40 font-bold pb-4 pr-6 hidden lg:table-cell">Deadline</th>
                  <th className="text-[10px] tracking-[0.2em] uppercase text-on-surface/40 font-bold pb-4"></th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job) => (
                  <tr key={job.title + job.company} className="border-b border-white/5 hover:bg-surface-container/50 transition-colors">
                    <td className="py-3 pr-4 md:py-4 md:pr-6">
                      <div className="font-display font-bold text-on-surface text-sm">{job.title}</div>
                      <div className="text-on-surface/50 text-xs mt-0.5 md:hidden">{job.company}</div>
                    </td>
                    <td className="py-3 pr-4 md:py-4 md:pr-6 text-on-surface/70 text-sm hidden md:table-cell">{job.company}</td>
                    <td className="py-3 pr-4 md:py-4 md:pr-6 hidden md:table-cell">
                      <span className={`px-2.5 py-1 text-[10px] tracking-[0.1em] uppercase font-bold rounded-full ${
                        job.type === "Internship" ? "bg-primary/15 text-primary" :
                        job.type === "Graduate" ? "bg-green-400/15 text-green-400" :
                        "bg-yellow-400/15 text-yellow-400"
                      }`}>
                        {job.type}
                      </span>
                    </td>
                    <td className="py-3 pr-4 md:py-4 md:pr-6 text-on-surface/50 text-sm hidden lg:table-cell">{job.deadline}</td>
                    <td className="py-3 md:py-4">
                      <button className="px-3 py-1.5 md:px-4 md:py-2 bg-primary/15 text-primary font-bold text-xs rounded-lg hover:bg-primary/25 transition-colors">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Articles */}
          <div>
            <h3 className="font-display text-2xl font-bold text-on-surface mb-8 tracking-tight">
              Career Development
            </h3>
            <div className="space-y-4">
              {articles.map((a) => (
                <div key={a.title} className="bg-surface-container p-5 md:p-6 rounded-lg hover:bg-surface-high transition-colors cursor-pointer group">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 bg-primary/15 text-primary text-[10px] tracking-[0.15em] uppercase font-bold rounded">
                      {a.category}
                    </span>
                    <span className="text-[10px] text-on-surface/40 tracking-wide">{a.readTime} read</span>
                  </div>
                  <h4 className="font-display text-base font-bold text-on-surface tracking-tight group-hover:text-primary transition-colors">
                    {a.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Alumni Stories */}
          <div>
            <h3 className="font-display text-2xl font-bold text-on-surface mb-8 tracking-tight">
              Alumni Success Stories
            </h3>
            <div className="space-y-4">
              {alumni.map((a) => (
                <div key={a.name} className="bg-surface-container p-5 md:p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="font-display text-sm font-extrabold text-primary">
                        {a.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                    <div>
                      <div className="font-display font-bold text-on-surface text-sm">{a.name}</div>
                      <div className="text-[10px] tracking-[0.15em] uppercase text-on-surface/50">{a.role} · Class of {a.year}</div>
                    </div>
                  </div>
                  <p className="text-on-surface/60 text-sm leading-relaxed italic">&ldquo;{a.quote}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
