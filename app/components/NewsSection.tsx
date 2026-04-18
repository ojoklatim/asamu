const posts = [
  { title: "ASAMU Partners with ACCA for 2026 Exam Prep Series", category: "Association Update", date: "Oct 10, 2025", excerpt: "Exciting new partnership brings discounted ACCA registration and dedicated study workshops to MUBS campus." },
  { title: "Uganda's Accounting Industry Outlook: 2026 Trends", category: "Industry Insights", date: "Oct 5, 2025", excerpt: "IFRS adoption, digital auditing, and ESG reporting are reshaping the profession. Here's what students need to know." },
  { title: "Member Spotlight: Grace Auma on Leading with Purpose", category: "Member Spotlight", date: "Sep 28, 2025", excerpt: "Our Secretary General shares her journey from first-year uncertainty to leading ASAMU's academic initiatives." },
  { title: "Recap: Fall Networking Mixer with Deloitte & BDO", category: "Event Recap", date: "Sep 20, 2025", excerpt: "Over 120 students attended our biggest networking event yet. See highlights and key takeaways." },
  { title: "How Digital Skills Are Changing Audit Careers", category: "Industry Insights", date: "Sep 15, 2025", excerpt: "Data analytics, AI-assisted audit, and blockchain — the skills gap every accounting student should address." },
  { title: "ICPAU Mentorship Program: Applications Now Open", category: "Association Update", date: "Sep 8, 2025", excerpt: "ASAMU members get priority placement in ICPAU's annual mentorship program. Apply before November 1st." },
];

export default function NewsSection() {
  return (
    <section id="news" className="py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-surface">
      <div className="max-w-6xl mx-auto">
        <p className="text-[10px] tracking-[0.4em] uppercase text-primary font-bold mb-4">
          Stay Informed
        </p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-on-surface mb-6 tracking-tight">
          News & Blog
        </h2>
        <p className="text-on-surface/60 text-base md:text-lg max-w-2xl mb-16">
          Association updates, industry insights, member spotlights, and event recaps.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.title}
              className="bg-surface-container rounded-lg overflow-hidden hover:bg-surface-high transition-colors group cursor-pointer flex flex-col"
            >
              {/* Image placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary-container/10 flex items-center justify-center">
                <span className="text-primary/30 text-xs tracking-widest uppercase font-bold">{post.category}</span>
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2.5 py-0.5 bg-primary/15 text-primary text-[10px] tracking-[0.15em] uppercase font-bold rounded-full">
                    {post.category}
                  </span>
                  <span className="text-[10px] text-on-surface/40 tracking-wide">{post.date}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-on-surface tracking-tight leading-snug mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-on-surface/60 text-sm leading-relaxed flex-1">{post.excerpt}</p>
                <div className="mt-6 text-primary text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
