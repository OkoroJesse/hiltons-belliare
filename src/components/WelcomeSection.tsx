"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useBookingModal } from "@/context/BookingContext";

export function WelcomeSection() {
  const { openBooking } = useBookingModal();

  return (
    <section className="py-20 sm:py-24 bg-ivory text-charcoal border-b border-warmgrey/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Editorial Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-[1px] bg-champagne" />
              <span className="text-[11px] uppercase tracking-luxury text-champagne-dark font-medium">
                Welcome to Hiltons Bellaire
              </span>
            </div>

            <h2 className="text-2xl sm:text-3.5xl lg:text-4xl font-serif text-midnight font-normal leading-[1.2] tracking-tight">
              A Quiet Haven of Hospitality Set Apart in Chikakore
            </h2>

            <div className="space-y-4 text-warmgrey-dark text-sm sm:text-base leading-relaxed font-light">
              <p>
                Hiltons Bellaire offers a calming, boutique hospitality experience in the residential heart of Chikakore, Kubwa. Designed for guests seeking comfort away from busy city corridors, our property blends modern architectural finishes with warm, attentive Nigerian hospitality.
              </p>
              <p>
                Whether you are visiting Abuja for government engagements, commercial business in Kubwa, or a relaxing weekend getaway, enjoy tranquil air-conditioned rooms, 24-hour reception assistance, and complimentary continental breakfast.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-6">
              <a
                href="#rooms"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-luxury font-medium text-midnight hover:text-champagne-dark transition-colors group"
              >
                <span>View Accommodations</span>
                <ArrowUpRight className="w-4 h-4 text-champagne-dark transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#location"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-luxury font-medium text-warmgrey hover:text-midnight transition-colors"
              >
                <span>Getting to Kubwa</span>
              </a>
            </div>
          </div>

          {/* Complementary Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card border border-champagne/20">
              <Image
                src="/images/hotel/exterior-dusk-view.jpg"
                alt="Hiltons Bellaire Hotel architectural dusk facade in Chikakore, Kubwa"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-midnight/80 backdrop-blur-sm border border-champagne/20 text-ivory">
                <p className="text-[11px] font-serif text-champagne-light">Chikakore, Kubwa</p>
                <p className="text-[10px] text-warmgrey-light">Quiet residential location with secure on-site parking</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
