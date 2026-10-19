"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { useBookingModal } from "@/context/BookingContext";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openBooking } = useBookingModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-midnight/95 backdrop-blur-md h-[76px] sm:h-[80px] border-b border-champagne/15 shadow-subtle"
            : "bg-midnight/35 backdrop-blur-[2px] h-[76px] sm:h-[84px] border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Wordmark & Monogram */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-1 focus:ring-champagne rounded-lg py-1"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-champagne/40 overflow-hidden bg-midnight shrink-0 group-hover:border-champagne transition-colors shadow-sm">
              <Image
                src="/images/hotel/logo-mark.jpg"
                alt="Hiltons Bellaire Monogram"
                width={40}
                height={40}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl tracking-tight text-ivory group-hover:text-champagne transition-colors leading-tight">
                Hiltons Bellaire
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-luxury text-champagne/90 font-medium">
                Abuja · Nigeria
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs lg:text-sm font-sans tracking-wide text-ivory/85 hover:text-champagne transition-colors focus:outline-none focus:ring-1 focus:ring-champagne rounded-sm px-1 py-0.5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              type="button"
              onClick={() => openBooking()}
              className="px-4 lg:px-5 py-2.5 rounded-full bg-champagne text-midnight font-medium text-xs uppercase tracking-luxury hover:bg-champagne-light transition-all duration-200 shadow-gold focus:outline-none focus:ring-2 focus:ring-champagne/50"
            >
              <span className="flex items-center gap-1.5">
                Book Your Stay
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            className="md:hidden p-2 rounded-lg text-ivory hover:text-champagne focus:outline-none focus:ring-1 focus:ring-champagne"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-50 md:hidden bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="absolute top-0 right-0 w-full max-w-xs h-full bg-midnight-surface border-l border-champagne/20 shadow-modal flex flex-col p-6 animate-slideIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-5 border-b border-warmgrey/20">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full border border-champagne/40 overflow-hidden bg-midnight shrink-0">
                  <Image
                    src="/images/hotel/logo-mark.jpg"
                    alt="Hiltons Bellaire"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-base text-ivory">Hiltons Bellaire</span>
                  <span className="text-[9px] uppercase tracking-luxury text-champagne">Abuja · Nigeria</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close navigation menu"
                className="p-1.5 rounded-lg text-warmgrey hover:text-ivory hover:bg-midnight-light transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 py-6 flex flex-col space-y-4">
              {siteConfig.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-lg text-ivory/90 hover:text-champagne transition-colors py-1.5 border-b border-warmgrey/10"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-5 border-t border-warmgrey/20 space-y-3">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openBooking();
                }}
                className="w-full py-3 rounded-full bg-champagne text-midnight font-medium text-xs uppercase tracking-luxury text-center flex items-center justify-center gap-2 shadow-gold"
              >
                Book Your Stay
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-center text-warmgrey">
                Chikakore, Kubwa · Abuja, Nigeria
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
