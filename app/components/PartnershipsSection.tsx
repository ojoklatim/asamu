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
    <section id="partnerships" className="py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-surface">
      <div className="max-w-6xl mx-auto">
        <p className="text-[10px] tracking-[0.4em] uppercase text-primary font-bold mb-4">
          Industry Connections
        </p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-on-surface mb-6 tracking-tight">
          Corporate Partnerships
        </h2>
        <p className="text-on-surface/60 text-base md:text-lg max-w-2xl mb-16">
          ASAMU partners with leading firms and professional bodies to bring members direct access to careers in accounting and finance.
        </p>

        {/* Partner logo bar */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-16 pb-16 border-b border-white/5 opacity-50">
          {partners.map((p) => (
            <img key={p.short} src={p.logoUrl} alt={p.name} className="h-8 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
          ))}
        </div>

        {/* Partner cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((p) => (
            <div
              key={p.name}
              className="bg-surface-container p-6 md:p-8 rounded-lg hover:bg-surface-high transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Logo placeholder */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-lg bg-white p-2 flex items-center justify-center shrink-0 shadow-lg">
                    <img src={p.logoUrl} alt={p.short} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-on-surface tracking-tight leading-tight">
                      {p.name}
                    </h3>
                    {p.recruiting && (
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-[10px] tracking-[0.15em] uppercase text-green-400 font-bold">
                          Actively Recruiting
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <p className="text-on-surface/60 text-sm leading-relaxed mb-4">{p.desc}</p>
                <div className="bg-surface/50 rounded-lg p-3 mb-4">
                  <div className="text-[10px] tracking-[0.2em] uppercase text-on-surface/40 font-bold mb-1">
                    Open Positions
                  </div>
                  <div className="text-on-surface/70 text-sm">{p.internships}</div>
                </div>
              </div>
              <button className="w-full py-2.5 bg-primary/15 text-primary font-bold text-sm rounded-lg hover:bg-primary/25 transition-colors">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
