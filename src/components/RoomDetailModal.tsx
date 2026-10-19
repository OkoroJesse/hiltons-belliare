"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { X, Check, ArrowUpRight, BedDouble, Users, Maximize2, Sparkles, ChevronLeft, ChevronRight, Info } from "lucide-react";
import { Room } from "@/types";
import { useBookingModal } from "@/context/BookingContext";

interface RoomDetailModalProps {
  room: Room | null;
  onClose: () => void;
}

export function RoomDetailModal({ room, onClose }: RoomDetailModalProps) {
  const { openBooking } = useBookingModal();
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  useEffect(() => {
    setActiveImageIdx(0);
  }, [room]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && room) {
        onClose();
      }
    };
    if (room) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [room, onClose]);

  if (!room) return null;

  const images = room.gallery && room.gallery.length > 0 ? room.gallery : [room.image];

  const handleNextImage = () => {
    setActiveImageIdx((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setActiveImageIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="room-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-3xl max-h-[92vh] flex flex-col bg-midnight-surface border border-champagne/30 rounded-2xl shadow-modal text-ivory overflow-hidden">
        {/* Top bar with close button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-warmgrey/20 bg-midnight/90">
          <div className="flex items-center gap-2">
            <span className="text-[11px] uppercase tracking-luxury text-champagne font-medium">
              {room.category}
            </span>
            {room.badge && (
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-champagne/20 text-champagne border border-champagne/30">
                {room.badge}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close room details"
            className="p-1.5 rounded-lg text-warmgrey hover:text-ivory hover:bg-midnight-light transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto flex-1 p-6 space-y-6">
          {/* Main Photo Gallery Carousel */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden bg-midnight border border-warmgrey/20">
            <Image
              src={images[activeImageIdx]}
              alt={`${room.name} photograph ${activeImageIdx + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover transition-opacity duration-300"
            />

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrevImage}
                  aria-label="Previous photograph"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-midnight text-ivory flex items-center justify-center border border-white/20 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNextImage}
                  aria-label="Next photograph"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-midnight text-ivory flex items-center justify-center border border-white/20 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/70 text-[11px] text-ivory/90 border border-white/10">
                  {activeImageIdx + 1} / {images.length}
                </div>
              </>
            )}
          </div>

          {/* Thumbnail Strip */}
          {images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-1">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImageIdx(idx)}
                  className={`relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                    idx === activeImageIdx
                      ? "border-champagne scale-95"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Room Title & Specs */}
          <div>
            <h2
              id="room-modal-title"
              className="text-2xl sm:text-3xl font-serif text-ivory font-normal leading-tight"
            >
              {room.name}
            </h2>

            {/* Room Specs Pill Row */}
            {room.specs && (
              <div className="flex flex-wrap gap-3 mt-3 pt-3 border-t border-warmgrey/20">
                {room.specs.bed && (
                  <div className="flex items-center gap-1.5 text-xs text-warmgrey-light">
                    <BedDouble className="w-4 h-4 text-champagne shrink-0" />
                    <span>{room.specs.bed}</span>
                  </div>
                )}
                {room.specs.capacity && (
                  <div className="flex items-center gap-1.5 text-xs text-warmgrey-light">
                    <Users className="w-4 h-4 text-champagne shrink-0" />
                    <span>{room.specs.capacity}</span>
                  </div>
                )}
                {room.specs.size && (
                  <div className="flex items-center gap-1.5 text-xs text-warmgrey-light">
                    <Maximize2 className="w-4 h-4 text-champagne shrink-0" />
                    <span>{room.specs.size}</span>
                  </div>
                )}
                {room.specs.view && (
                  <div className="flex items-center gap-1.5 text-xs text-warmgrey-light">
                    <Sparkles className="w-4 h-4 text-champagne shrink-0" />
                    <span>{room.specs.view}</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Full Room Description */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-luxury text-champagne font-medium">
              About This Accommodation
            </h3>
            <p className="text-sm text-ivory/80 leading-relaxed font-sans">
              {room.description}
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-luxury text-champagne font-medium">
              Room Amenities & Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {room.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 text-xs text-ivory/90 p-2.5 rounded-lg bg-midnight/70 border border-warmgrey/15"
                >
                  <Check className="w-3.5 h-3.5 text-champagne shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Informational notice */}
          {room.notice && (
            <div className="p-3 rounded-lg bg-midnight-light/60 border border-warmgrey/20 flex items-start gap-2 text-xs text-warmgrey-light">
              <Info className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
              <span>{room.notice}</span>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-warmgrey/20 bg-midnight flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-warmgrey text-center sm:text-left">
            Check real-time rates and available dates across our verified booking platforms.
          </p>
          <button
            type="button"
            onClick={() => {
              onClose();
              openBooking(room.name);
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-champagne text-midnight font-medium text-xs uppercase tracking-luxury hover:bg-champagne-light transition-all flex items-center justify-center gap-1.5 shadow-gold shrink-0"
          >
            Check Availability
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
