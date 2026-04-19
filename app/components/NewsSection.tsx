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
    <section id="news" className="py-20 md:py-32 px-4 sm:px-6 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <p className="text-[10px] tracking-[0.4em] uppercase text-accent font-bold mb-4">
          Stay Informed
        </p>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tighter">
          News & Blog
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-16 leading-relaxed">
          Association updates, industry insights, member spotlights, and event recaps.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.title}
              className="bg-white rounded-3xl overflow-hidden border border-subtle-border hover:border-accent hover:shadow-2xl hover:shadow-accent/5 transition-all group cursor-pointer flex flex-col"
            >
              {/* Image placeholder */}
              <div className="h-56 bg-stats-bg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-accent/30 text-[10px] tracking-[0.3em] uppercase font-bold px-6 text-center">{post.category}</span>
              </div>
              <div className="p-8 md:p-10 flex flex-col flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-primary text-primary-text text-[10px] tracking-[0.1em] uppercase font-bold rounded-md">
                    {post.category}
                  </span>
                  <span className="text-[10px] text-muted-foreground tracking-wide font-medium">{post.date}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground tracking-tight leading-snug mb-4 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{post.excerpt}</p>
                <div className="mt-8 text-primary text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read Article
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
