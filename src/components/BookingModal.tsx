"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { X, ExternalLink, ShieldCheck, CheckCircle2 } from "lucide-react";
import { bookingPlatforms } from "@/config/bookingPlatforms";
import { useBookingModal } from "@/context/BookingContext";

export function BookingModal() {
  const { isOpen, closeBooking, selectedRoom } = useBookingModal();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close on Escape key & trap focus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeBooking();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      // auto focus close button for accessibility
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, closeBooking]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={(e) => {
        if (dialogRef.current && !dialogRef.current.contains(e.target as Node)) {
          closeBooking();
        }
      }}
    >
      <div
        ref={dialogRef}
        className="relative w-full max-w-[540px] max-h-[85dvh] md:max-h-[min(80vh,680px)] bg-midnight-surface border border-champagne/30 rounded-2xl shadow-modal text-ivory flex flex-col overflow-hidden transition-all duration-300"
        style={{ width: "calc(100vw - 24px)", maxWidth: "540px" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle decorative gold line at top */}
        <div className="h-0.5 bg-gradient-to-r from-transparent via-champagne to-transparent shrink-0" />

        {/* Modal Header */}
        <div className="px-5 sm:px-7 pt-5 sm:pt-6 pb-4 border-b border-warmgrey/15 flex items-start justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-champagne/40 flex items-center justify-center overflow-hidden bg-midnight shrink-0">
              <Image
                src="/images/hotel/logo-mark.jpg"
                alt="Hiltons Bellaire"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-luxury text-champagne font-medium block">
                Hiltons Bellaire
              </span>
              <h2
                id="booking-modal-title"
                className="text-lg sm:text-xl font-serif text-ivory font-normal leading-snug"
              >
                Choose How to Book
              </h2>
            </div>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeBooking}
            aria-label="Close booking modal"
            className="p-1.5 -mr-1 rounded-lg text-warmgrey hover:text-ivory hover:bg-midnight-light transition-colors focus:outline-none focus:ring-1 focus:ring-champagne"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto px-5 sm:px-7 py-4 sm:py-5 flex-1 space-y-4">
          {/* Selected Room Context (if opened from a room card) */}
          {selectedRoom && (
            <div className="px-3.5 py-2 rounded-lg bg-midnight-light/80 border border-champagne/20 flex items-center gap-2 text-xs text-ivory/90">
              <CheckCircle2 className="w-4 h-4 text-champagne shrink-0" />
              <span>
                Selected room:{" "}
                <strong className="text-champagne font-medium">{selectedRoom}</strong>
              </span>
            </div>
          )}

          {/* Short Supporting Text */}
          <p className="text-xs sm:text-sm text-ivory/75 leading-relaxed font-sans">
            Check current rates and availability on your preferred booking platform.
          </p>

          {/* Booking Provider Rows: 76-88px tall each, 12-16px gap */}
          <div className="space-y-3 pt-1">
            {bookingPlatforms.map((platform) => (
              <a
                key={platform.id}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 sm:p-4 min-h-[76px] sm:min-h-[82px] rounded-xl border border-warmgrey/25 bg-midnight hover:border-champagne hover:bg-midnight-light/90 transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-champagne"
              >
                <div className="space-y-0.5 pr-2">
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-base sm:text-lg text-ivory group-hover:text-champagne transition-colors">
                      {platform.name}
                    </span>
                    {platform.featured && (
                      <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-champagne/20 text-champagne border border-champagne/30">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] sm:text-xs text-warmgrey-light group-hover:text-ivory/80 transition-colors line-clamp-1">
                    {platform.label}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs font-medium text-champagne hidden sm:inline group-hover:text-champagne-light transition-colors">
                    Book Online
                  </span>
                  <div className="w-8 h-8 rounded-full border border-champagne/40 bg-midnight-light flex items-center justify-center text-champagne group-hover:bg-champagne group-hover:text-midnight transition-colors shadow-sm">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Short Single-line Disclaimer */}
          <div className="pt-2 text-[11px] text-warmgrey flex items-center gap-1.5 leading-normal">
            <ShieldCheck className="w-3.5 h-3.5 text-champagne shrink-0" />
            <span>Rates, availability and booking policies are confirmed by the selected platform.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
