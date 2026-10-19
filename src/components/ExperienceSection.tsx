"use client";

import React from "react";
import Image from "next/image";
import { experienceHighlights } from "@/config/experienceData";
import { Coffee, Wifi, Clock, Wind, Car, Laptop, Refrigerator, Bath } from "lucide-react";

// Robust icon map with genuine Lucide icons
const iconMap: Record<string, React.ReactNode> = {
  Coffee: <Coffee className="w-5 h-5" />,
  Wifi: <Wifi className="w-5 h-5" />,
  Clock: <Clock className="w-5 h-5" />,
  Wind: <Wind className="w-5 h-5" />,
  Car: <Car className="w-5 h-5" />,
  Laptop: <Laptop className="w-5 h-5" />,
  Refrigerator: <Refrigerator className="w-5 h-5" />,
  Bath: <Bath className="w-5 h-5" />,
};

// Genuine curated spaces with real hotel photographs
const spaces = [
  {
    title: "Lounge & Bar",
    category: "Social Space",
    image: "/images/hotel/lounge-vip-booths-night.png",
    description: "Intimate evening lounge and bar with bespoke booth seating and selected refreshments.",
  },
  {
    title: "Culinary & Dining",
    category: "Dining Service",
    image: "/images/hotel/dining-continental-breakfast-platter.png",
    description: "Complimentary continental breakfast and freshly prepared authentic Nigerian dishes.",
  },
  {
    title: "Ensuite Bathrooms",
    category: "In-Room Comfort",
    image: "/images/hotel/bathroom-ensuite-led-mirror.png",
    description: "Contemporary private bathrooms with illuminated circular LED mirrors and modern showers.",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 sm:py-24 bg-midnight text-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-champagne" />
            <span className="text-[11px] uppercase tracking-luxury text-champagne font-medium">
              Guest Services
            </span>
            <span className="w-6 h-[1px] bg-champagne" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-ivory font-normal tracking-tight">
            Experience & Amenities
          </h2>
          <p className="mt-3 text-sm sm:text-base text-warmgrey-light font-light leading-relaxed">
            Thoughtful conveniences tailored for a seamless, comfortable stay in Kubwa.
          </p>
        </div>

        {/* Feature Cards Grid: Clean minimal cards without drop shadows or artificial gradients */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 mb-16">
          {spaces.map((space) => (
            <div
              key={space.title}
              className="group rounded-[6px] overflow-hidden bg-midnight-surface border border-warmgrey/20 flex flex-col hover:border-champagne/40 transition-colors duration-200"
            >
              {/* Natural photo presentation: no heavy gradient overlays */}
              <div className="relative aspect-[16/10] overflow-hidden bg-midnight">
                <Image
                  src={space.image}
                  alt={space.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                />
                <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-[4px] bg-midnight/90 text-champagne border border-champagne/30 font-medium">
                  {space.category}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between bg-midnight-surface">
                <h3 className="font-serif text-lg text-ivory mb-2 font-normal group-hover:text-champagne transition-colors">
                  {space.title}
                </h3>
                <p className="text-xs sm:text-[13.5px] text-warmgrey-light font-light leading-relaxed">
                  {space.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Amenities Highlights Grid: Clean, flat cards with no shadows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4.5">
          {experienceHighlights.map((amen) => (
            <div
              key={amen.id}
              className="flex items-start gap-3.5 p-4 rounded-[6px] bg-midnight-surface border border-warmgrey/15 hover:border-champagne/30 transition-colors"
            >
              <div className="w-9 h-9 flex items-center justify-center rounded-[4px] bg-champagne/15 text-champagne shrink-0">
                {iconMap[amen.icon] ?? <Wifi className="w-4 h-4" />}
              </div>
              <div>
                <h3 className="font-serif text-sm sm:text-[15px] text-ivory mb-1 font-normal">{amen.title}</h3>
                <p className="text-xs text-warmgrey-light leading-relaxed font-light">{amen.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
