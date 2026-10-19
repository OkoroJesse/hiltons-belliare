"use client";

import React, { useState } from "react";
import { roomsData } from "@/config/roomsData";
import { RoomCard } from "@/components/RoomCard";
import { RoomDetailModal } from "@/components/RoomDetailModal";
import { Room } from "@/types";
import { useBookingModal } from "@/context/BookingContext";
import { ArrowUpRight } from "lucide-react";

export function RoomsSection() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const { openBooking } = useBookingModal();

  const handleOpen = (room: Room) => {
    setSelectedRoom(room);
  };

  const handleClose = () => {
    setSelectedRoom(null);
  };

  return (
    <section id="rooms" className="py-20 sm:py-28 bg-[#F8F5EF] border-t border-[#EAE5DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-champagne" />
            <span className="text-[11px] uppercase tracking-[0.18em] text-champagne-dark font-medium">
              Accommodations
            </span>
            <span className="w-6 h-[1px] bg-champagne" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif text-midnight font-normal tracking-tight">
            Rooms & Suites
          </h2>
          <p className="mt-3.5 text-base sm:text-[17px] text-[#555A60] font-light leading-relaxed">
            Thoughtfully appointed bedrooms featuring quiet air conditioning, bespoke finishes, and restful comfort in Chikakore, Kubwa.
          </p>
        </div>

        {/* Room Grid: 1-col on mobile, 2-col on tablet, 3-col on desktop with 28-32px gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          {roomsData.map((room) => (
            <RoomCard key={room.id} room={room} onOpenDetails={handleOpen} />
          ))}
        </div>

        {/* Bottom Editorial Assistance Banner (clean, minimal styling, no heavy shadows) */}
        <div className="mt-14 sm:mt-18 p-7 sm:p-8 rounded-[8px] bg-white border border-[#E4DFD5] flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-serif text-xl text-midnight font-normal">
              Planning Your Stay in Abuja?
            </h3>
            <p className="text-sm text-[#5C6167] font-light">
              Live room availability and seasonal rates are verified directly across our booking partners.
            </p>
          </div>
          <button
            type="button"
            onClick={() => openBooking()}
            className="px-6 py-3 rounded-[5px] bg-champagne text-midnight text-xs font-medium uppercase tracking-[0.08em] hover:bg-champagne-light transition-colors flex items-center gap-2 shrink-0"
          >
            <span>View Booking Options</span>
            <ArrowUpRight className="w-4 h-4 stroke-[1.75]" />
          </button>
        </div>

        {/* Room Detail Modal */}
        {selectedRoom && (
          <RoomDetailModal room={selectedRoom} onClose={handleClose} />
        )}
      </div>
    </section>
  );
}
