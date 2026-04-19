"use client";

const partners = [
  { name: "Crown Beverages", logo: "https://cdn.brandfetch.io/idGhGN0KKe/w/186/h/186/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B" },
  { name: "ACCA", logo: "https://cdn.brandfetch.io/idpHg8V0Ma/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" },
  { name: "ICPAU", logo: "https://cdn.brandfetch.io/idmWYzglhv/w/400/h/400/theme/dark/icon.png?c=1dxbfHSJFAPEGdCLU4o5B" },
  { name: "Deloitte", logo: "https://cdn.brandfetch.io/idIu-Ji9Le/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" },
  { name: "Mazars", logo: "https://cdn.brandfetch.io/ide7sazwRe/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" },
  { name: "UIBFS", logo: "https://cdn.brandfetch.io/idEkpFi-FP/w/2287/h/1987/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B" },
  { name: "BDO", logo: "https://cdn.brandfetch.io/idx6n7rpj8/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" }
];

export default function LogoMarquee() {
  const extendedPartners = [...partners, ...partners];

  return (
    <div className="mt-20 overflow-hidden relative">
      <div className="text-[10px] tracking-[0.4em] uppercase text-accent font-bold mb-8 text-center opacity-50">
        Our Corporate Partners
      </div>
      <div className="flex animate-marquee gap-16 items-center">
        {extendedPartners.map((partner, idx) => (
          <div key={`${partner.name}-${idx}`} className="flex items-center justify-center min-w-[200px]">
            <img 
              src={partner.logo} 
              alt={partner.name} 
              className="h-16 md:h-20 object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all hover:scale-110"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const sibling = target.nextElementSibling as HTMLElement;
                if (sibling) sibling.style.display = 'block';
              }}
            />
            <span className="hidden text-[10px] font-bold text-accent/30 uppercase tracking-widest">
              {partner.name}
            </span>
          </div>
        ))}
      </div>
      {/* Faded edges */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
    </div>
  );
}
