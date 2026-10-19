"use client";

import React from "react";
import { MapPin, Navigation, Clock, ShieldCheck, Phone, MessageSquare } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export function LocationSection() {
  const { contact } = siteConfig;
  const isPhoneActive = contact.isPhoneConfirmed && Boolean(contact.primaryPhone);

  return (
    <section id="location" className="py-20 sm:py-24 bg-midnight text-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-champagne" />
            <span className="text-[11px] uppercase tracking-luxury text-champagne font-medium">
              Directions & Map
            </span>
            <span className="w-6 h-[1px] bg-champagne" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-ivory font-normal tracking-tight">
            Location & Access
          </h2>
          <p className="mt-3 text-sm sm:text-base text-warmgrey-light font-light leading-relaxed">
            Conveniently situated in Chikakore, Kubwa, offering peaceful surroundings with easy transit across Abuja.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Map Container */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-[8px] overflow-hidden border border-champagne/25 bg-midnight-surface">
              {/* Google Maps Embed focused on Hiltons Bellaire Abuja search */}
              <iframe
                title="Hiltons Bellaire Hotel Location Map"
                src="https://maps.google.com/maps?q=Hiltons+Bellaire+Hotel+Abuja&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter contrast-105"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-[6px] bg-midnight-surface border border-warmgrey/15">
              <span className="text-xs text-warmgrey-light text-center sm:text-left">
                Google Maps destination: Hiltons Bellaire Hotel, No. 1 Converner Street, Kubwa
              </span>
              <a
                href={contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-[4px] bg-champagne text-midnight text-xs font-medium uppercase tracking-[0.08em] hover:bg-champagne-light transition-colors flex items-center gap-1.5 shrink-0"
              >
                <span>Get Directions</span>
                <Navigation className="w-3.5 h-3.5 stroke-[1.75]" />
              </a>
            </div>
          </div>

          {/* Location & Verified Address Details */}
          <div className="lg:col-span-5 space-y-5">
            {/* Address Card */}
            <div className="p-6 rounded-[8px] bg-midnight-surface border border-champagne/20 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-[6px] bg-champagne/20 text-champagne flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-luxury text-champagne font-medium block mb-1">
                    Verified Address
                  </span>
                  <p className="font-serif text-lg text-ivory font-normal">
                    {contact.hotelName}
                  </p>
                  <p className="text-sm text-warmgrey-light mt-1.5 leading-relaxed font-light">
                    No. 1 Converner Street,<br />
                    Chikakore, Kubwa,<br />
                    Abuja, FCT 900108,<br />
                    Nigeria.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-warmgrey/15 flex items-center gap-3 text-xs text-warmgrey-light">
                <Clock className="w-4 h-4 text-champagne shrink-0" />
                <span>Front Desk: {contact.receptionHours}</span>
              </div>
            </div>

            {/* Parking & Transportation Card */}
            <div className="p-6 rounded-[8px] bg-midnight-surface border border-warmgrey/20 space-y-2.5">
              <div className="flex items-center gap-2 text-champagne text-xs uppercase tracking-luxury font-medium">
                <ShieldCheck className="w-4 h-4" />
                <span>Arrival & Parking</span>
              </div>
              <p className="text-xs sm:text-sm text-warmgrey-light leading-relaxed font-light">
                Secure gated parking is available on-site for registered guests. The property is accessible via primary Kubwa arterial roads.
              </p>
            </div>

            {/* Direct Contact Status Notice */}
            <div className="p-5 rounded-[8px] bg-midnight-light/40 border border-warmgrey/15 space-y-2">
              <span className="text-[10px] uppercase tracking-luxury text-champagne font-medium block">
                Direct Contact Channels
              </span>
              {isPhoneActive ? (
                <div className="flex flex-wrap gap-2 pt-1">
                  <a
                    href={`tel:${contact.primaryPhone}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[4px] bg-champagne text-midnight text-xs font-medium"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call {contact.phoneDisplay}</span>
                  </a>
                  {contact.whatsapp && (
                    <a
                      href={`https://wa.me/${contact.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[4px] bg-emerald-700 text-ivory text-xs font-medium"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  )}
                </div>
              ) : (
                <p className="text-xs text-warmgrey-light leading-relaxed font-light">
                  Direct telephone lines are pending management verification to ensure accuracy. For verified reservation options, please use our partner booking links.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
