import Link from "next/link";
import ProductGrid from "@/components/product/ProductGrid";
import type { Product } from "@/types";

const newArrivals: Product[] = [
  {
    id: "1",
    name: "T-shirt with Tape Details",
    description: "",
    price: 120,
    stock: 50,
    images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=480&q=80"],
    categoryId: "1",
    rating: 4.5,
    reviewCount: 56,
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    name: "Skinny Fit Jeans",
    description: "",
    price: 240,
    originalPrice: 260,
    discount: 20,
    stock: 30,
    images: ["https://images.unsplash.com/photo-1542272604-787c3835535d?w=480&q=80"],
    categoryId: "2",
    rating: 3.5,
    reviewCount: 42,
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    name: "Checkered Shirt",
    description: "",
    price: 180,
    stock: 40,
    images: ["https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=480&q=80"],
    categoryId: "1",
    rating: 4.5,
    reviewCount: 120,
    createdAt: new Date().toISOString(),
  },
  {
    id: "4",
    name: "Sleeve Striped T-shirt",
    description: "",
    price: 130,
    originalPrice: 160,
    discount: 30,
    stock: 25,
    images: ["https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=480&q=80"],
    categoryId: "1",
    rating: 4.5,
    reviewCount: 87,
    createdAt: new Date().toISOString(),
  },
];

export default function NewArrivals() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 lg:px-6 py-20 lg:py-28">
      <h2
        className="text-4xl md:text-5xl font-black text-center uppercase mb-12 tracking-tight text-gradient"
        style={{ fontFamily: "var(--font-display), sans-serif" }}
      >
        NEW ARRIVALS
      </h2>
      <ProductGrid products={newArrivals} />
      <div className="text-center mt-12">
        <Link
          href="/products?sort=newest"
          className="inline-flex items-center justify-center border border-white/20 text-white/80 rounded-full px-12 py-3.5 text-[15px] font-semibold hover:bg-white/10 hover:border-white/30 hover:text-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 backdrop-blur-sm"
        >
          View All
        </Link>
      </div>
    </section>
  );
}
