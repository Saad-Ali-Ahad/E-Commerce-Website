export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export const ORDER_STATUSES = {
  PENDING: "Pending",
  CONFIRMED: "Confirmed",
  PROCESSING: "Processing",
  SHIPPED: "Shipped",
  DELIVERED: "Delivered",
  CANCELLED: "Cancelled",
} as const;

export const ROLES = {
  USER: "USER",
  ADMIN: "ADMIN",
} as const;

export const DRESS_STYLES = [
  { name: "Casual", slug: "casual", image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=800&q=80" },
  { name: "Formal", slug: "formal", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80" },
  { name: "Party", slug: "party", image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=800&q=80" },
  { name: "Gym", slug: "gym", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80" },
] as const;

export const NAV_LINKS = [
  { label: "Shop", href: "/products", hasDropdown: true },
  { label: "On Sale", href: "/products?sort=sale", hasDropdown: false },
  { label: "New Arrivals", href: "/products?sort=newest", hasDropdown: false },
  { label: "Brands", href: "/products?sort=brands", hasDropdown: false },
] as const;

export const BRAND_LOGOS = [
  { name: "Versace", src: "/images/brands/versace.svg" },
  { name: "Zara", src: "/images/brands/zara.svg" },
  { name: "Gucci", src: "/images/brands/gucci.svg" },
  { name: "Prada", src: "/images/brands/prada.svg" },
  { name: "Calvin Klein", src: "/images/brands/calvin-klein.svg" },
] as const;
