"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { galleryData } from "@/config/galleryData";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { staggerContainer, fadeUp, sectionLabel, backdropVariant, modalVariant } from "@/lib/motion";

const categories = [
  { id: "all", label: "All Photographs" },
  { id: "rooms", label: "Rooms & Suites" },
  { id: "dining", label: "Dining & Culinary" },
  { id: "lounge", label: "Lounge & Bar" },
  { id: "exterior", label: "Exterior & Grounds" },
];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const shouldReduce = useReducedMotion();

  const filteredItems =
    activeCategory === "all"
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

  const close = () => setOpenIdx(null);

  const prevImage = () => {
    if (openIdx !== null) {
      setOpenIdx((openIdx - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const nextImage = () => {
    if (openIdx !== null) {
      setOpenIdx((openIdx + 1) % filteredItems.length);
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (openIdx === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    if (openIdx !== null) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [openIdx, filteredItems.length]);

  const viewport = { once: true, amount: 0.12 };
  const headerStagger = staggerContainer(0.1, 0);
  const gridStagger = staggerContainer(0.06, 0.05);
  const reduced = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } };

  return (
    <section id="gallery" className="py-20 sm:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="max-w-2xl mx-auto text-center mb-10 sm:mb-12"
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
            <span className="text-[11px] uppercase tracking-luxury text-champagne-dark font-medium">
              Visual Tour
            </span>
            <span className="w-6 h-[1px] bg-champagne" />
          </motion.div>
          <motion.h2
            variants={shouldReduce ? reduced : fadeUp}
            className="text-3xl sm:text-4xl font-serif text-midnight font-normal tracking-tight"
          >
            Property Gallery
          </motion.h2>
          <motion.p
            variants={shouldReduce ? reduced : fadeUp}
            className="mt-3 text-sm sm:text-base text-warmgrey-dark font-light leading-relaxed"
          >
            Real photography of Hiltons Bellaire, showcasing our accommodations, guest spaces, and culinary hospitality.
          </motion.p>
        </motion.div>

        {/* Filter Categories */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12"
          variants={shouldReduce ? reduced : fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`relative px-4 py-2 rounded-full text-xs font-medium uppercase tracking-luxury transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-midnight text-champagne shadow-sm"
                  : "bg-white/80 border border-warmgrey/20 text-warmgrey-dark hover:border-champagne hover:text-midnight"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Image Grid with stagger and smooth layout shifts */}
        <motion.div
          key={activeCategory}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5"
          variants={gridStagger}
          initial="hidden"
          animate="show"
        >
          {filteredItems.map((item, idx) => (
            <motion.button
              key={item.id}
              variants={shouldReduce ? reduced : fadeUp}
              type="button"
              onClick={() => setOpenIdx(idx)}
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-midnight border border-warmgrey/15 shadow-sm hover:shadow-card transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-champagne"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-left">
                <span className="text-[10px] uppercase tracking-luxury text-champagne font-medium">
                  {item.categoryLabel}
                </span>
                <p className="font-serif text-sm text-ivory line-clamp-1">{item.title}</p>
                <div className="mt-1 flex items-center gap-1 text-[11px] text-ivory/80">
                  <Maximize2 className="w-3 h-3 text-champagne" />
                  <span>Enlarge photograph</span>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Lightbox Modal with AnimatePresence */}
        <AnimatePresence>
          {openIdx !== null && filteredItems[openIdx] && (
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Enlarged gallery photograph"
              className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md"
              variants={backdropVariant}
              initial="hidden"
              animate="show"
              exit="exit"
              onClick={close}
            >
              <motion.div
                className="relative max-w-5xl w-full max-h-[92vh] flex flex-col bg-midnight-surface border border-champagne/30 rounded-2xl shadow-modal text-ivory overflow-hidden"
                variants={modalVariant}
                initial="hidden"
                animate="show"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Lightbox Topbar */}
                <div className="px-5 py-3.5 border-b border-warmgrey/20 bg-midnight flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-luxury text-champagne font-medium block">
                      {filteredItems[openIdx].categoryLabel}
                    </span>
                    <h3 className="font-serif text-base text-ivory font-normal">
                      {filteredItems[openIdx].title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs text-warmgrey px-2 py-1 rounded bg-midnight-light">
                      {openIdx + 1} / {filteredItems.length}
                    </span>
                    <button
                      type="button"
                      onClick={close}
                      aria-label="Close photograph"
                      className="p-1.5 rounded-lg text-warmgrey hover:text-ivory hover:bg-midnight-light transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Lightbox Image Container */}
                <div className="relative flex-1 min-h-[300px] sm:min-h-[460px] bg-black flex items-center justify-center overflow-hidden">
                  <Image
                    key={filteredItems[openIdx].image}
                    src={filteredItems[openIdx].image}
                    alt={filteredItems[openIdx].alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    className="object-contain transition-opacity duration-200"
                    priority
                  />

                  {/* Left/Right controls */}
                  <button
                    type="button"
                    onClick={prevImage}
                    aria-label="Previous photograph"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-midnight text-ivory flex items-center justify-center border border-white/20 transition-colors shadow-lg"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={nextImage}
                    aria-label="Next photograph"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-midnight text-ivory flex items-center justify-center border border-white/20 transition-colors shadow-lg"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Lightbox Caption */}
                <div className="px-5 py-3.5 border-t border-warmgrey/20 bg-midnight text-center">
                  <p className="text-xs sm:text-sm text-ivory/80 font-light max-w-xl mx-auto">
                    {filteredItems[openIdx].description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
