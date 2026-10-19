"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import { bookingPlatforms } from "@/config/bookingPlatforms";
import { ArrowUpRight, Navigation } from "lucide-react";
import { useBookingModal } from "@/context/BookingContext";
import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/motion";

export function Footer() {
  const { openBooking } = useBookingModal();
  const shouldReduce = useReducedMotion();

  const viewport = { once: true, amount: 0.1 };
  const footerStagger = staggerContainer(0.08, 0);
  const reduced = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } };

  return (
    <footer className="bg-midnight-dark text-ivory pt-14 pb-8 border-t border-champagne/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-warmgrey/15"
          variants={footerStagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {/* Brand Column */}
          <motion.div
            className="lg:col-span-5 space-y-4"
            variants={shouldReduce ? reduced : fadeUp}
          >
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-champagne/40 bg-midnight shrink-0 shadow-sm">
                <Image
                  src="/images/hotel/logo-mark.jpg"
                  alt="Hiltons Bellaire"
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif text-ivory tracking-tight">Hiltons Bellaire</span>
                <span className="text-[10px] uppercase tracking-luxury text-champagne">Chikakore · Kubwa · Abuja</span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-warmgrey-light max-w-sm leading-relaxed font-light">
              Contemporary comfort and thoughtful boutique hospitality in Chikakore, Kubwa, Federal Capital Territory, Nigeria.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <motion.button
                type="button"
                onClick={() => openBooking()}
                className="px-4 py-2 rounded-full bg-champagne text-midnight text-xs font-medium uppercase tracking-luxury hover:bg-champagne-light transition-all shadow-gold"
                whileHover={shouldReduce ? {} : { scale: 1.03 }}
                whileTap={shouldReduce ? {} : { scale: 0.97 }}
              >
                Book Your Stay
              </motion.button>
              <a
                href={siteConfig.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-warmgrey hover:text-champagne transition-colors inline-flex items-center gap-1"
              >
                <span>Get Directions</span>
                <Navigation className="w-3 h-3 text-champagne" />
              </a>
            </div>
          </motion.div>

          {/* Quick Navigation Links */}
          <motion.div
            className="lg:col-span-3 space-y-3"
            variants={shouldReduce ? reduced : fadeUp}
          >
            <p className="text-xs uppercase tracking-luxury text-champagne font-medium">Explore</p>
            <nav className="flex flex-col space-y-2">
              {siteConfig.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs sm:text-sm text-warmgrey hover:text-champagne transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Booking Platforms */}
          <motion.div
            className="lg:col-span-4 space-y-3"
            variants={shouldReduce ? reduced : fadeUp}
          >
            <p className="text-xs uppercase tracking-luxury text-champagne font-medium">Verified Booking Partners</p>
            <p className="text-xs text-warmgrey-light">Check real-time calendar availability and confirm rates:</p>
            <div className="flex flex-col space-y-2 pt-1">
              {bookingPlatforms.map((p) => (
                <a
                  key={p.id}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-2.5 rounded-lg bg-midnight/80 border border-warmgrey/15 hover:border-champagne/40 transition-colors text-xs"
                >
                  <span className="font-serif text-ivory group-hover:text-champagne transition-colors">{p.name}</span>
                  <div className="flex items-center gap-1 text-[11px] text-champagne">
                    <span>View Listing</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Address and Legal Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-warmgrey">
          <p className="text-center md:text-left">
            No. 1 Converner Street, Chikakore, Kubwa, Abuja, FCT 900108, Nigeria
          </p>
          <p className="text-center md:text-right">
            &copy; {new Date().getFullYear()} Hiltons Bellaire. All rights reserved.
          </p>
        </div>

        {/* Clear non-affiliation and listing disclaimer */}
        <div className="mt-4 pt-3 border-t border-warmgrey/10 text-[10px] text-warmgrey text-center max-w-4xl mx-auto leading-relaxed">
          {siteConfig.disclaimer}
        </div>
      </div>
    </footer>
  );
}
