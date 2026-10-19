"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, BedDouble, Images, MapPin, ShieldCheck } from "lucide-react";
import { useBookingModal } from "@/context/BookingContext";

export function Hero() {
  const { openBooking } = useBookingModal();

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-10 sm:pb-12 overflow-hidden bg-midnight">
      {/* Background Hero Image: authentic warm-lit night exterior courtyard */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hotel/exterior-courtyard-night.png"
          alt="Hiltons Bellaire Hotel illuminated architectural exterior at night in Chikakore, Kubwa, Abuja"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%] scale-[1.01]"
        />
        {/* Subtle, balanced dark overlay that keeps architectural warm lighting visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/55 to-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight/80 via-midnight/40 to-transparent" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full pt-10 sm:pt-14">
        <div className="max-w-2xl space-y-5 sm:space-y-6">
          {/* Compact Location Label */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-midnight/85 border border-champagne/30 backdrop-blur-md shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse" />
            <span className="text-[10px] sm:text-xs uppercase tracking-luxury text-champagne font-medium">
              CHIKAKORE · KUBWA · ABUJA
            </span>
          </div>

          {/* Editorial Headline */}
          <h1 className="font-serif text-3.5xl sm:text-5xl lg:text-6xl text-ivory font-normal tracking-tight leading-[1.14]">
            A More Refined Stay <br />
            <span className="italic font-light text-champagne-light">In Abuja</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-ivory/85 leading-relaxed font-sans max-w-xl font-light">
            Contemporary comfort and thoughtful hospitality in Chikakore, Kubwa, Abuja.
          </p>

          {/* Action Row with appropriately sized buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            <a
              href="#rooms"
              className="px-6 py-3 rounded-full bg-champagne text-midnight font-medium text-xs uppercase tracking-luxury hover:bg-champagne-light transition-all duration-200 shadow-gold flex items-center justify-center gap-2 text-center"
            >
              Explore Rooms
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => openBooking()}
              className="px-6 py-3 rounded-full border border-ivory/30 bg-midnight/40 backdrop-blur-sm text-ivory text-xs uppercase tracking-luxury hover:border-champagne hover:text-champagne transition-all duration-200 text-center"
            >
              Book Your Stay
            </button>
          </div>
        </div>
      </div>

      {/* Slim Strip of Verified Highlights Below Hero */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-8 sm:mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-midnight/80 border border-champagne/20 backdrop-blur-md text-ivory shadow-card">
          <a
            href="#rooms"
            className="flex items-center gap-2.5 sm:gap-3 p-2 rounded-xl hover:bg-midnight-light/60 transition-colors group"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg border border-champagne/30 flex items-center justify-center bg-midnight shrink-0 text-champagne group-hover:bg-champagne group-hover:text-midnight transition-colors">
              <BedDouble className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-serif text-ivory group-hover:text-champagne transition-colors">Guest Rooms</p>
              <p className="text-[10px] sm:text-[11px] text-warmgrey-light">Air-conditioned comfort</p>
            </div>
          </a>

          <a
            href="#gallery"
            className="flex items-center gap-2.5 sm:gap-3 p-2 rounded-xl hover:bg-midnight-light/60 transition-colors group"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg border border-champagne/30 flex items-center justify-center bg-midnight shrink-0 text-champagne group-hover:bg-champagne group-hover:text-midnight transition-colors">
              <Images className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-serif text-ivory group-hover:text-champagne transition-colors">Explore Gallery</p>
              <p className="text-[10px] sm:text-[11px] text-warmgrey-light">Authentic photographs</p>
            </div>
          </a>

          <div className="flex items-center gap-2.5 sm:gap-3 p-2 rounded-xl">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg border border-champagne/30 flex items-center justify-center bg-midnight shrink-0 text-champagne">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-serif text-ivory">24-Hour Front Desk</p>
              <p className="text-[10px] sm:text-[11px] text-warmgrey-light">Attentive guest services</p>
            </div>
          </div>

          <a
            href="#location"
            className="flex items-center gap-2.5 sm:gap-3 p-2 rounded-xl hover:bg-midnight-light/60 transition-colors group"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg border border-champagne/30 flex items-center justify-center bg-midnight shrink-0 text-champagne group-hover:bg-champagne group-hover:text-midnight transition-colors">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-serif text-ivory group-hover:text-champagne transition-colors">Find Us in Kubwa</p>
              <p className="text-[10px] sm:text-[11px] text-warmgrey-light">No. 1 Converner Street</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
