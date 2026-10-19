import { SiteContact } from "@/types";

export const siteConfig = {
  name: "Hiltons Bellaire Hotel Abuja",
  shortName: "Hiltons Bellaire",
  tagline: "A More Refined Stay in Abuja",
  shortLocation: "Chikakore · Kubwa · Abuja",
  description:
    "Contemporary comfort and thoughtful hospitality in Chikakore, Kubwa, Abuja. Boutique accommodations, 24-hour reception, air-conditioned rooms, and genuine Nigerian hospitality.",
  
  contact: {
    hotelName: "Hiltons Bellaire Hotel Abuja",
    address: "No. 1 Converner Street, Chikakore",
    area: "Kubwa",
    city: "Abuja",
    state: "FCT 900108",
    country: "Nigeria",
    fullAddress: "No. 1 Converner Street, Chikakore, Kubwa, Abuja, FCT 900108, Nigeria.",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hiltons+Bellaire+Hotel+Abuja",
    receptionHours: "24-Hour Front Desk",
    
    // PRIMARY PHONE CANDIDATE: +234 704 493 9020
    // ALTERNATIVE (UNCONFIRMED - NOT DISPLAYED): +234 903 987 1660
    //
    // Set `isPhoneConfirmed` to true once hotel management confirms +234 704 493 9020.
    // When true, clickable tel: and WhatsApp links activate automatically.
    isPhoneConfirmed: false,
    primaryPhone: "+2347044939020",
    phoneDisplay: "+234 704 493 9020",
    
    // Official direct email: Not yet verified. Left undefined to prevent fake links.
    email: undefined as string | undefined,
    whatsapp: undefined as string | undefined,
  } as SiteContact & {
    hotelName?: string;
    isPhoneConfirmed: boolean;
    primaryPhone: string;
  },

  navLinks: [
    { label: "Rooms", href: "#rooms" },
    { label: "Experience", href: "#experience" },
    { label: "Gallery", href: "#gallery" },
    { label: "About", href: "#about" },
    { label: "Location", href: "#location" },
  ],

  highlights: [
    { label: "Prime Kubwa Location", detail: "Chikakore, Abuja FCT" },
    { label: "24-Hour Front Desk", detail: "Attentive Guest Reception" },
    { label: "Air-Conditioned Comfort", detail: "Modern In-Room Climate" },
    { label: "Secure On-Site Parking", detail: "Complimentary for Guests" },
  ],

  disclaimer:
    "Hiltons Bellaire Hotel Abuja is an independent boutique hospitality property located at No. 1 Converner Street, Chikakore, Kubwa, Abuja, Nigeria. Not affiliated with Hilton Hotels & Resorts or Transcorp Hilton Abuja. Rates, availability, and confirmed policies are subject to confirmation on our verified booking partner platforms.",
};
