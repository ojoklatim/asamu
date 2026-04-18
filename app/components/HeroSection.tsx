import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="about"
      className="relative pt-32 sm:pt-40 md:pt-48 pb-20 sm:pb-24 md:pb-32 px-4 sm:px-6 md:px-8 flex flex-col items-start hero-gradient min-h-[75vh] justify-center overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl w-full mx-auto relative z-10">
        <p className="text-[10px] tracking-[0.4em] uppercase text-primary font-bold mb-6 animate-pulse">
          Makerere University Business School
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.9] tracking-tighter text-on-surface mb-8">
          Empowering the next
          <br />
          <em className="not-italic text-primary">generation</em> of
          <br />
          accounting leaders
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-on-surface/70 max-w-2xl mb-12 leading-relaxed">
          ASAMU bridges academia and professional accounting by connecting
          students with industry leaders, certifications, and career pathways
          through ACCA, ICPAU, and Big Four partnerships.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="#membership"
            className="w-full sm:w-auto text-center px-8 py-3.5 bg-gradient-to-r from-primary to-primary-container text-white font-bold rounded-lg shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02] transition-all"
          >
            Join ASAMU
          </Link>
          <Link
            href="#contact"
            className="w-full sm:w-auto text-center px-8 py-3.5 bg-transparent border border-on-surface/20 text-on-surface font-bold rounded-lg hover:bg-white/5 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Quick stats */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {[
            { value: "500+", label: "Active Members" },
            { value: "7", label: "Corporate Partners" },
            { value: "20+", label: "Events / Year" },
            { value: "95%", label: "Career Placement" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl md:text-4xl font-extrabold text-primary tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs tracking-[0.2em] uppercase text-on-surface/50 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
