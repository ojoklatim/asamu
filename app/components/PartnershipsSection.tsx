const partners = [
  {
    name: "Crown Beverages Limited",
    short: "CB",
    logoUrl: "https://logo.clearbit.com/pepsi.com",
    desc: "Uganda's leading beverage manufacturer. Partners with ASAMU for annual internship programs in their finance and audit departments.",
    internships: "Finance Intern, Internal Audit Intern",
    recruiting: true,
  },
  {
    name: "ACCA",
    short: "ACCA",
    logoUrl: "https://logo.clearbit.com/accaglobal.com",
    desc: "The Association of Chartered Certified Accountants. Provides discounted student registrations and exam prep workshops for ASAMU members.",
    internships: "Global Accounting Apprenticeships",
    recruiting: true,
  },
  {
    name: "ICPAU",
    short: "ICPAU",
    logoUrl: "https://logo.clearbit.com/icpau.co.ug",
    desc: "Institute of Certified Public Accountants of Uganda. Co-hosts academic clinics and offers mentorship through practicing CPAs.",
    internships: "CPA Mentorship Program",
    recruiting: false,
  },
  {
    name: "Deloitte",
    short: "DT",
    logoUrl: "https://logo.clearbit.com/deloitte.com",
    desc: "Global Big Four firm with a strong Uganda presence. Recruits top ASAMU talent for audit, tax, and advisory graduate programs.",
    internships: "Audit Intern, Tax Intern, Advisory Intern",
    recruiting: true,
  },
  {
    name: "Forvis Mazars",
    short: "FM",
    logoUrl: "https://logo.clearbit.com/mazars.com",
    desc: "Formerly Mazars Uganda. International audit and advisory firm offering structured internship rotations for accounting students.",
    internships: "Audit Associate Intern, Risk Advisory Intern",
    recruiting: true,
  },
  {
    name: "Uganda Institute of Banking & Financial Services",
    short: "UIBFS",
    logoUrl: "https://logo.clearbit.com/uibfs.or.ug",
    desc: "The professional body for banking in Uganda. Partners with ASAMU on financial services career workshops and certifications.",
    internships: "Banking Operations Intern",
    recruiting: false,
  },
  {
    name: "BDO Uganda",
    short: "BDO",
    logoUrl: "https://logo.clearbit.com/bdo.com",
    desc: "Global mid-tier accounting firm. Actively recruits ASAMU members for audit engagements and provides ACCA sponsorships.",
    internships: "Audit Intern, Accounting Intern",
    recruiting: true,
  },
];

export default function PartnershipsSection() {
  return (
    <section id="partnerships" className="py-20 md:py-32 px-4 sm:px-6 md:px-8 bg-stats-bg">
      <div className="max-w-6xl mx-auto">
        <p className="text-[10px] tracking-[0.4em] uppercase text-accent font-bold mb-4">
          Industry Connections
        </p>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tighter">
          Corporate Partnerships
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-16 leading-relaxed">
          ASAMU partners with leading firms and professional bodies to bring members direct access to careers in accounting and finance.
        </p>

        {/* Partner logo bar */}
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 mb-20 pb-16 border-b border-subtle-border">
          {partners.map((p) => (
            <img key={p.short} src={p.logoUrl} alt={p.name} className="h-8 md:h-10 object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all hover:scale-110" />
          ))}
        </div>

        {/* Partner cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((p) => (
            <div
              key={p.name}
              className="bg-white p-8 md:p-10 rounded-3xl border border-subtle-border hover:border-accent hover:shadow-2xl hover:shadow-accent/5 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-white p-3 flex items-center justify-center shrink-0 shadow-lg border border-subtle-border group-hover:scale-110 transition-transform">
                    <img src={p.logoUrl} alt={p.short} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground tracking-tight leading-tight">
                      {p.name}
                    </h3>
                    {p.recruiting && (
                      <div className="flex items-center gap-1.5 mt-2">
                        <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                        <span className="text-[10px] tracking-[0.1em] uppercase text-accent font-bold">
                          Hiring Now
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{p.desc}</p>
                <div className="bg-stats-bg rounded-2xl p-4 mb-6 border border-subtle-border">
                  <div className="text-[10px] tracking-[0.2em] uppercase text-accent font-bold mb-2">
                    Key Opportunities
                  </div>
                  <div className="text-foreground text-sm font-medium">{p.internships}</div>
                </div>
              </div>
              <button className="w-full py-3 bg-white border-[1.5px] border-accent text-foreground font-bold text-sm rounded-full hover:bg-accent hover:text-white transition-all shadow-sm">
                Partnership Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
