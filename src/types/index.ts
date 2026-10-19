export interface Room {
  id: string;
  name: string;
  category: string;
  badge?: string;
  description: string;
  shortDescription: string;
  features: string[];
  image: string;
  gallery?: string[];
  verifiedListing: boolean; // Flag if confirmed or third-party listed
  specs?: {
    bed?: string;
    capacity?: string;
    size?: string;
    view?: string;
  };
  notice?: string;
}

export interface BookingPlatform {
  id: string;
  name: string;
  label: string;
  url: string;
  tagline: string;
  featured?: boolean;
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  icon: string;
  status: "verified" | "reported_listing" | "property_space";
  category: "comfort" | "service" | "connectivity" | "spaces";
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "rooms" | "exterior" | "dining" | "lounge" | "facilities";
  categoryLabel: string;
  image: string;
  alt: string;
  description?: string;
}

export interface SiteContact {
  address: string;
  area: string;
  city: string;
  country: string;
  googleMapsUrl: string;
  // Contact details are kept in configuration and updated when hotel management confirms official numbers
  phone?: string;
  phoneDisplay?: string;
  email?: string;
  whatsapp?: string;
  receptionHours: string;
}
