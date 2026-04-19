"use client";

import { useState } from "react";

const images = [
  { id: 1, src: "/gallery/event1.jpg", title: "Networking Mixer 2024", category: "Networking" },
  { id: 2, src: "/gallery/event2.jpg", title: "ACCA Workshop", category: "Workshops" },
  { id: 3, src: "/gallery/event3.jpg", title: "Leadership Summit", category: "Academic" },
  { id: 4, src: "/gallery/event4.jpg", title: "Career Fair", category: "Networking" },
  { id: 5, src: "/gallery/event5.jpg", title: "Annual General Meeting", category: "Social" },
  { id: 6, src: "/gallery/event6.jpg", title: "Orientation Week", category: "Social" },
  { id: 7, src: "/gallery/event7.jpg", title: "Tax Seminar", category: "Workshops" },
  { id: 8, src: "/gallery/event8.jpg", title: "Alumni Reunion", category: "Social" },
];

const categories = ["All", "Networking", "Workshops", "Academic", "Social"];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-20 md:py-32 px-4 sm:px-6 md:px-8 bg-stats-bg">
      <div className="max-w-6xl mx-auto">
        <p className="text-[10px] tracking-[0.4em] uppercase text-accent font-bold mb-4">
          Visual Highlights
        </p>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tighter">
          ASAMU Gallery
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
          A collection of moments from our events, workshops, and student activities throughout the academic year.
        </p>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                activeCategory === cat
                  ? "bg-primary text-primary-text shadow-lg shadow-primary/20 scale-105"
                  : "bg-white text-accent border border-subtle-border hover:border-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className="relative rounded-3xl overflow-hidden border border-subtle-border bg-white group cursor-pointer"
            >
              <img 
                src={image.src} 
                alt={image.title} 
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-6 text-center">
                <span className="text-primary-text font-display font-bold text-lg tracking-tight">
                  {image.title}
                </span>
              </div>
              {/* Fallback for missing images */}
              <div className="p-12 text-center hidden group-only:block bg-white">
                <div className="w-12 h-12 bg-stats-bg rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-accent/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-accent/50 font-bold">
                  {image.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
