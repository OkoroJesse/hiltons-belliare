import { BookingPlatform } from "@/types";

export const bookingPlatforms: BookingPlatform[] = [
  {
    id: "expedia",
    name: "Expedia",
    label: "View rooms and availability",
    url: "https://www.expedia.com/Abuja-Hotels-Hiltons-Bellaire.h112172823.Hotel-Information",
    tagline: "Verified hotel listing on Expedia",
    featured: true,
  },
  {
    id: "hotels-com",
    name: "Hotels.com",
    label: "Explore rooms and rates",
    url: "https://www.hotels.com/ho3590530336/",
    tagline: "Official listing on Hotels.com",
    featured: false,
  },
  {
    id: "trip-com",
    name: "Trip.com",
    label: "Check dates and booking details",
    url: "https://www.trip.com/hotels/bwari-1-hotel-detail-125767772/hiltons-bellaire/",
    tagline: "Worldwide booking listing on Trip.com",
    featured: false,
  },
];
