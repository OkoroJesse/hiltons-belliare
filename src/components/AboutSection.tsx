"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import { ShieldCheck, Sparkles, MapPin } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-24 bg-ivory border-t border-b border-warmgrey/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Photos Composition */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card border border-champagne/20">
                <Image
                  src="/images/hotel/exterior-dusk-view.jpg"
                  alt="Hiltons Bellaire Hotel architecture at dusk in Chikakore, Kubwa"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>

              {/* Inset corner card */}
              <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 w-44 sm:w-52 p-3 sm:p-4 rounded-xl bg-midnight text-ivory border border-champagne/30 shadow-modal">
                <p className="text-[10px] uppercase tracking-luxury text-champagne font-medium">Boutique Stay</p>
                <p className="font-serif text-sm sm:text-base text-ivory mt-0.5">Hiltons Bellaire</p>
                <p className="text-[10px] sm:text-[11px] text-warmgrey-light mt-1">Chikakore, Kubwa, Abuja</p>
              </div>
            </div>
          </div>

          {/* Copy Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-[1px] bg-champagne" />
              <span className="text-[11px] uppercase tracking-luxury text-champagne-dark font-medium">
                About the Hotel
              </span>
            </div>

            <h2 className="text-2xl sm:text-3.5xl lg:text-4xl font-serif text-midnight font-normal leading-[1.2] tracking-tight">
              Comfortable Accommodation for Business & Leisure in Kubwa
            </h2>

            <div className="space-y-4 text-warmgrey-dark text-sm sm:text-base leading-relaxed font-light">
              <p>
                Located along Converner Street in Chikakore, Kubwa, Hiltons Bellaire provides contemporary hospitality in a tranquil district of Nigeria's Federal Capital Territory. We welcome corporate visitors, couples, families, and guests traveling through the greater Abuja metropolis.
              </p>
              <p>
                With 24-hour front desk reception, air-conditioned rooms, complimentary morning continental breakfast, and secure on-site parking, our aim is to ensure your visit to Abuja is pleasant, restful, and hassle-free.
              </p>
            </div>

            {/* Core Values / Features */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-warmgrey/15 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-champagne/15 text-champagne-dark flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-sm text-midnight font-medium">24/7 Guest Care</h4>
                  <p className="text-[11px] text-warmgrey-dark">Attentive front desk team always on site.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-warmgrey/15 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-champagne/15 text-champagne-dark flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-sm text-midnight font-medium">Residential Peace</h4>
                  <p className="text-[11px] text-warmgrey-dark">Set in Chikakore away from highway noise.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
