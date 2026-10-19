"use client";

import React from "react";
import Image from "next/image";
import { experienceHighlights } from "@/config/experienceData";
import { Coffee, Wifi, Clock, Wind, Car, Laptop, Refrigerator, Bath } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer, fadeUp, sectionLabel, cardReveal } from "@/lib/motion";

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
  const shouldReduce = useReducedMotion();
  const viewport = { once: true, amount: 0.15 };
  const headerStagger = staggerContainer(0.1, 0);
  const spacesStagger = staggerContainer(0.12, 0.05);
  const amenitiesStagger = staggerContainer(0.06, 0.1);
  const reduced = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } };

  return (
    <section id="experience" className="py-20 sm:py-24 bg-midnight text-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="max-w-2xl mx-auto text-center mb-14 sm:mb-16"
          variants={headerStagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <motion.div
            variants={shouldReduce ? reduced : sectionLabel}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="w-6 h-[1px] bg-champagne" />
            <span className="text-[11px] uppercase tracking-luxury text-champagne font-medium">
              Guest Services
            </span>
            <span className="w-6 h-[1px] bg-champagne" />
          </motion.div>
          <motion.h2
            variants={shouldReduce ? reduced : fadeUp}
            className="text-3xl sm:text-4xl font-serif text-ivory font-normal tracking-tight"
          >
            Experience &amp; Amenities
          </motion.h2>
          <motion.p
            variants={shouldReduce ? reduced : fadeUp}
            className="mt-3 text-sm sm:text-base text-warmgrey-light font-light leading-relaxed"
          >
            Thoughtful conveniences tailored for a seamless, comfortable stay in Kubwa.
          </motion.p>
        </motion.div>

        {/* Feature Cards Grid: Clean minimal cards with subtle hover zoom */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 mb-16"
          variants={spacesStagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {spaces.map((space) => (
            <motion.div
              key={space.title}
              variants={shouldReduce ? reduced : cardReveal}
              className="group rounded-[6px] overflow-hidden bg-midnight-surface border border-warmgrey/20 flex flex-col hover:border-champagne/40 transition-colors duration-200"
            >
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
            </motion.div>
          ))}
        </motion.div>

        {/* Amenities Highlights Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4.5"
          variants={amenitiesStagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {experienceHighlights.map((amen) => (
            <motion.div
              key={amen.id}
              variants={shouldReduce ? reduced : fadeUp}
              className="flex items-start gap-3.5 p-4 rounded-[6px] bg-midnight-surface border border-warmgrey/15 hover:border-champagne/30 transition-colors"
            >
              <div className="w-9 h-9 flex items-center justify-center rounded-[4px] bg-champagne/15 text-champagne shrink-0">
                {iconMap[amen.icon] ?? <Wifi className="w-4 h-4" />}
              </div>
              <div>
                <h3 className="font-serif text-sm sm:text-[15px] text-ivory mb-1 font-normal">{amen.title}</h3>
                <p className="text-xs text-warmgrey-light leading-relaxed font-light">{amen.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
