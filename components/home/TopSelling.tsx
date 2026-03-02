import Link from "next/link";
import ProductGrid from "@/components/product/ProductGrid";
import type { Product } from "@/types";

const topSelling: Product[] = [
  {
    id: "5",
    name: "Vertical Striped Shirt",
    description: "",
    price: 212,
    originalPrice: 232,
    discount: 20,
    stock: 20,
    images: ["/images/products/vertical-striped-shirt.png"],
    categoryId: "1",
    rating: 5.0,
    reviewCount: 78,
    createdAt: new Date().toISOString(),
  },
  {
    id: "6",
    name: "Courage Graphic T-shirt",
    description: "",
    price: 145,
    stock: 35,
    images: ["/images/products/courage-tshirt.png"],
    categoryId: "1",
    rating: 4.0,
    reviewCount: 63,
    createdAt: new Date().toISOString(),
  },
  {
    id: "7",
    name: "Loose Fit Bermuda Shorts",
    description: "",
    price: 80,
    stock: 60,
    images: ["/images/products/bermuda-shorts.png"],
    categoryId: "3",
    rating: 3.0,
    reviewCount: 35,
    createdAt: new Date().toISOString(),
  },
  {
    id: "8",
    name: "Faded Skinny Jeans",
    description: "",
    price: 210,
    stock: 15,
    images: ["/images/products/faded-jeans.png"],
    categoryId: "2",
    rating: 4.5,
    reviewCount: 92,
    createdAt: new Date().toISOString(),
  },
];

export default function TopSelling() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 lg:px-6 py-20 lg:py-28 border-t border-white/5">
      <h2
        className="text-4xl md:text-5xl font-black text-center uppercase mb-12 tracking-tight text-gradient"
        style={{ fontFamily: "var(--font-display), sans-serif" }}
      >
        TOP SELLING
      </h2>
      <ProductGrid products={topSelling} />
      <div className="text-center mt-12">
        <Link
          href="/products?sort=popular"
          className="inline-flex items-center justify-center border border-white/20 text-white/80 rounded-full px-12 py-3.5 text-[15px] font-semibold hover:bg-white/10 hover:border-white/30 hover:text-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 backdrop-blur-sm"
        >
          View All
        </Link>
      </div>
    </section>
  );
}
