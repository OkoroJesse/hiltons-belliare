"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, BedDouble, Users, Maximize2, Sparkles, CheckCircle2 } from "lucide-react";
import { Room } from "@/types";
import { useBookingModal } from "@/context/BookingContext";

interface RoomCardProps {
  room: Room;
  onOpenDetails: (room: Room) => void;
}

export function RoomCard({ room, onOpenDetails }: RoomCardProps) {
  const { openBooking } = useBookingModal();

  return (
    <article className="group flex flex-col bg-white border border-[#E7E2D8] rounded-[6px] overflow-hidden transition-colors duration-200">
      {/* Aspect Ratio 16:10 for a more compact, balanced photograph height */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F2EFE9]">
        <Image
          src={room.image}
          alt={room.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        />

        {/* Badges */}
        {room.badge && (
          <div className="absolute top-2.5 left-2.5 pointer-events-none">
            <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-[3px] bg-white/95 text-midnight border border-[#E2DDD3] font-medium">
              {room.badge}
            </span>
          </div>
        )}

        {room.verifiedListing && (
          <div className="absolute top-2.5 right-2.5 pointer-events-none">
            <span className="flex items-center gap-1 text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-[3px] bg-champagne text-midnight font-medium">
              <CheckCircle2 className="w-2.5 h-2.5" />
              OTA Listed
            </span>
          </div>
        )}
      </div>

      {/* Card Content Body: Compact padding (16-18px) */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between bg-white">
        <div>
          {/* Category label */}
          <span className="text-[10px] uppercase tracking-[0.14em] text-champagne-dark font-medium block mb-1">
            {room.category}
          </span>

          {/* Room Name: 20-21px, clean line-height, tight height footprint */}
          <h3 className="font-serif text-[19px] sm:text-[21px] text-midnight font-normal leading-snug tracking-tight mb-2 min-h-[46px] line-clamp-2">
            {room.name}
          </h3>

          {/* Short description: 13.5px, 2-line clamp to keep card compact */}
          <p className="text-[13px] sm:text-[13.5px] text-[#555A60] leading-relaxed font-light mb-3.5 line-clamp-2">
            {room.shortDescription}
          </p>

          {/* Amenities Row: Compact single line with subtle top border */}
          <div className="flex flex-wrap items-center gap-x-3.5 gap-y-1.5 pt-2.5 pb-3 border-t border-[#EFEBE4] mb-3.5 text-[11px] text-[#63686E]">
            {room.specs?.bed && (
              <div className="flex items-center gap-1">
                <BedDouble className="w-3.5 h-3.5 text-champagne-dark stroke-[1.5] shrink-0" />
                <span>{room.specs.bed}</span>
              </div>
            )}
            {room.specs?.capacity && (
              <div className="flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-champagne-dark stroke-[1.5] shrink-0" />
                <span>{room.specs.capacity}</span>
              </div>
            )}
            {room.specs?.size && (
              <div className="flex items-center gap-1">
                <Maximize2 className="w-3.5 h-3.5 text-champagne-dark stroke-[1.5] shrink-0" />
                <span>{room.specs.size}</span>
              </div>
            )}
            {room.specs?.view && (
              <div className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-champagne-dark stroke-[1.5] shrink-0" />
                <span>{room.specs.view}</span>
              </div>
            )}
          </div>
        </div>

        {/* Compact, refined buttons */}
        <div className="flex items-center gap-2.5 pt-0.5">
          <button
            type="button"
            onClick={() => onOpenDetails(room)}
            className="flex-1 py-2 px-3 rounded-[4px] bg-champagne text-midnight hover:bg-champagne-light text-[11px] font-medium uppercase tracking-[0.06em] transition-colors duration-200 text-center"
          >
            View Room
          </button>

          <button
            type="button"
            onClick={() => openBooking(room.name)}
            className="flex-1 py-2 px-3 rounded-[4px] bg-transparent border border-[#CCC6B8] hover:border-midnight text-midnight text-[11px] font-medium uppercase tracking-[0.06em] transition-colors duration-200 flex items-center justify-center gap-1 text-center"
          >
            <span>Enquire</span>
            <ArrowUpRight className="w-3 h-3 stroke-[1.75]" />
          </button>
        </div>
      </div>
    </article>
  );
}
