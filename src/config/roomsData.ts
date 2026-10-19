import { Room } from "@/types";

export const roomsData: Room[] = [
  {
    id: "emerald-executive-suite",
    name: "Emerald Executive Suite",
    category: "Executive Suite",
    badge: "Signature Collection",
    image: "/images/hotel/room-emerald-suite-main.jpg",
    gallery: [
      "/images/hotel/room-emerald-suite-main.jpg",
      "/images/hotel/room-emerald-suite-1.png",
      "/images/hotel/room-emerald-suite-2.png",
      "/images/hotel/bathroom-ensuite-led-mirror.png",
    ],
    shortDescription:
      "A sophisticated master suite featuring deep emerald velvet upholstery, gold trim details, and bespoke architectural cove lighting.",
    description:
      "Showcasing rich acoustic wood paneling and an emerald velvet statement headboard, this suite is complemented by an upholstered end-of-bed bench, climate control, dedicated work area, and an ensuite bathroom with an illuminated LED mirror.",
    features: [
      "Plush king-size bed & upholstered bench",
      "Architectural tray ceiling with warm ambient cove lighting",
      "Whisper-quiet air conditioning",
      "Executive vanity & bedside tables",
      "Modern private bathroom with backlit mirror",
    ],
    specs: {
      bed: "King Bed",
      capacity: "Up to 2 Guests",
      view: "Courtyard View",
    },
    verifiedListing: false,
    notice: "Exact room specifications and current rates available upon booking query.",
  },
  {
    id: "economy-room-balcony-city-view",
    name: "Economy Room, Balcony, City View",
    category: "Reported Listing",
    badge: "OTA Listed Category",
    image: "/images/hotel/room-standard-workdesk-1.png",
    gallery: [
      "/images/hotel/room-standard-workdesk-1.png",
      "/images/hotel/room-standard-workdesk-2.png",
    ],
    shortDescription:
      "Comfortable guest room category as detailed on Expedia, featuring balcony access, work area, and city view.",
    description:
      "Reported on third-party listing platforms as an efficient and comfortable room approximately 250 sq ft in size, offering a king bed, private balcony, workspace desk, mini-fridge, and climate control.",
    features: [
      "Reported King bed configuration",
      "Balcony with city outlook",
      "Dedicated workspace desk & chair",
      "In-room mini refrigerator",
      "Independent air conditioning",
    ],
    specs: {
      bed: "King Bed",
      capacity: "Up to 3 Guests (listed)",
      size: "~250 sq ft (listed)",
      view: "City View Balcony",
    },
    verifiedListing: true,
    notice: "Details based on verified Expedia listing; confirm specific floor & balcony layout when booking.",
  },
  {
    id: "charcoal-deluxe-room",
    name: "Charcoal Deluxe Room",
    category: "Deluxe Room",
    badge: "Contemporary Comfort",
    image: "/images/hotel/room-charcoal-deluxe-main.png",
    gallery: [
      "/images/hotel/room-charcoal-deluxe-main.png",
      "/images/hotel/room-charcoal-deluxe-tv.png",
      "/images/hotel/room-charcoal-deluxe-1.png",
    ],
    shortDescription:
      "Modern bedroom featuring deep charcoal button-tufting, crisp white cotton bedding, and an entertainment credenza.",
    description:
      "Designed for restful tranquility with tailored floor-to-ceiling drapes, subtle crimson ambient accent lighting, a large flat-screen display on bespoke shelving, and bedside reading illumination.",
    features: [
      "Deep button-tufted upholstered headboard",
      "Entertainment console with flat-screen television",
      "Layered privacy and blackout drapery",
      "Bedside nightstand with USB/power points",
      "Individual temperature control",
    ],
    specs: {
      bed: "King Bed",
      capacity: "2 Guests",
      view: "Interior / Courtyard",
    },
    verifiedListing: false,
    notice: "Photographed on property; pricing and room assignment subject to booking platform.",
  },
  {
    id: "geometric-acoustic-king",
    name: "Geometric Acoustic King",
    category: "King Room",
    badge: "Bespoke Design",
    image: "/images/hotel/room-geometric-king.png",
    gallery: [
      "/images/hotel/room-geometric-king.png",
      "/images/hotel/room-charcoal-deluxe-tv.png",
    ],
    shortDescription:
      "Striking geometric acoustic wall treatment paired with fluted paneling and plush hospitality bed.",
    description:
      "A calm aesthetic retreat featuring angular padded sound-dampening wall panels, slatted side cladding, bedside nightstands with landline telephone, and horizontal light-filtering blinds.",
    features: [
      "Custom geometric cushioned headboard",
      "Slatted acoustic wall architecture",
      "Dual contemporary nightstands",
      "Adjustable horizontal blinds",
      "In-room air conditioning",
    ],
    specs: {
      bed: "King Bed",
      capacity: "2 Guests",
      view: "Peaceful Aspect",
    },
    verifiedListing: false,
    notice: "Subject to management verification of category title.",
  },
  {
    id: "classic-sitting-suite",
    name: "Classic Sitting Suite",
    category: "Suite with Lounge",
    badge: "Spacious Living",
    image: "/images/hotel/room-classic-sitting-suite.png",
    gallery: [
      "/images/hotel/room-classic-sitting-suite.png",
      "/images/hotel/room-executive-lounge-1.png",
    ],
    shortDescription:
      "Generously proportioned room featuring an integrated sitting area with studded velvet armchair, desk, and mini-fridge.",
    description:
      "Reflecting the reported multi-zone layout with a dedicated lounge space, dining or workspace desk, vanity mirror, private refrigeration unit, and a framed bed alcove with warm drapery.",
    features: [
      "Comfortable studded velvet sofa armchair",
      "Separate work/writing desk with chair",
      "In-room mini-fridge for refreshments",
      "Vanity mirror with grooming station",
      "Air conditioning and ample natural light",
    ],
    specs: {
      bed: "King Bed",
      capacity: "2–3 Guests",
      view: "Quiet Elevation",
    },
    verifiedListing: false,
    notice: "Matches listed room layout with separate sitting section.",
  },
  {
    id: "executive-club-room",
    name: "Executive Club Room",
    category: "Club Room",
    badge: "Relaxation",
    image: "/images/hotel/room-executive-lounge-1.png",
    gallery: [
      "/images/hotel/room-executive-lounge-1.png",
      "/images/hotel/room-cream-comfort-1.png",
    ],
    shortDescription:
      "Thoughtfully appointed guest room featuring twin leather tub chairs, coffee table, and textured 3D wall accents.",
    description:
      "A quiet retreat for relaxing after exploring Abuja or completing business meetings, equipped with warm lighting, seating conversation corner, and quality linens.",
    features: [
      "Twin leather conversation armchairs & table",
      "Textured decorative wall feature",
      "Air conditioning and custom curtains",
      "Tiled marble-effect flooring",
      "Convenient access to hotel facilities",
    ],
    specs: {
      bed: "King Bed",
      capacity: "2 Guests",
      view: "Courtyard View",
    },
    verifiedListing: false,
    notice: "Photographed on property.",
  },
];
