"use client";

import { use } from "react";
import { ProductDetail } from "@/components/product";
import { ProductGrid } from "@/components/product";
import { Breadcrumbs } from "@/components/ui";
import { Star, BadgeCheck } from "lucide-react";
import Link from "next/link";
import type { Product, Review } from "@/types";

// Mock product data — replace with API call
const mockProduct: Product = {
  id: "1",
  name: "One Life Graphic T-shirt",
  description:
    "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
  price: 260,
  originalPrice: 300,
  discount: 40,
  stock: 50,
  images: [
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=480&q=80",
    "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=480&q=80",
    "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=480&q=80",
  ],
  categoryId: "1",
  rating: 4.5,
  reviewCount: 120,
  sizes: ["Small", "Medium", "Large", "X-Large"],
  colors: [
    { name: "Brown", hex: "#4F4631" },
    { name: "Green", hex: "#314F4A" },
    { name: "Navy", hex: "#31344F" },
  ],
  createdAt: new Date().toISOString(),
};

const mockReviews: Review[] = [
  {
    id: "r1",
    userId: "u1",
    userName: "Samantha D.",
    productId: "1",
    rating: 5,
    comment:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    verified: true,
    createdAt: "2023-08-14T00:00:00.000Z",
  },
  {
    id: "r2",
    userId: "u2",
    userName: "Alex M.",
    productId: "1",
    rating: 4,
    comment:
      "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I googled the googled design and it's googly good.",
    verified: true,
    createdAt: "2023-08-15T00:00:00.000Z",
  },
  {
    id: "r3",
    userId: "u3",
    userName: "Ethan R.",
    productId: "1",
    rating: 5,
    comment:
      "This t-shirt is a must-have for anyone who appreciates good design. The fit is perfect and the fabric is so soft. I've already ordered two more in different colors!",
    verified: true,
    createdAt: "2023-08-16T00:00:00.000Z",
  },
];

const relatedProducts: Product[] = [
  {
    id: "10",
    name: "Polo with Contrast Trims",
    description: "",
    price: 212,
    originalPrice: 242,
    stock: 30,
    images: ["https://images.unsplash.com/photo-1625910513413-5fc421e0b6b3?w=480&q=80"],
    categoryId: "1",
    rating: 4.0,
    reviewCount: 56,
    createdAt: new Date().toISOString(),
  },
  {
    id: "11",
    name: "Gradient Graphic T-shirt",
    description: "",
    price: 145,
    stock: 50,
    images: ["https://images.unsplash.com/photo-1562157873-818bc0726f68?w=480&q=80"],
    categoryId: "1",
    rating: 3.5,
    reviewCount: 42,
    createdAt: new Date().toISOString(),
  },
  {
    id: "12",
    name: "Polo with Tipping Details",
    description: "",
    price: 180,
    stock: 40,
    images: ["https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=480&q=80"],
    categoryId: "1",
    rating: 4.5,
    reviewCount: 87,
    createdAt: new Date().toISOString(),
  },
  {
    id: "13",
    name: "Black Striped T-shirt",
    description: "",
    price: 120,
    originalPrice: 150,
    stock: 25,
    images: ["https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=480&q=80"],
    categoryId: "1",
    rating: 5.0,
    reviewCount: 92,
    createdAt: new Date().toISOString(),
  },
];

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  // In a real app, fetch product by id. For now, use mock data.
  const product = { ...mockProduct, id };

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6">
      <Breadcrumbs 
        items={[
          { label: "Home", href: "/" },
          { label: "Shop", href: "/products" },
          { label: product.name }
        ]} 
      />

      {/* Product detail */}
      <ProductDetail product={product} />

      {/* Tabs: Reviews */}
      <div className="mt-12">
        <div className="flex border-b border-white/10">
          <button className="px-6 py-3 border-b-2 border-purple-400 text-sm font-medium text-white">
            Product Details
          </button>
          <button className="px-6 py-3 text-sm font-medium text-white/30 hover:text-white/50 transition-colors">
            Rating & Reviews
          </button>
          <button className="px-6 py-3 text-sm font-medium text-white/30 hover:text-white/50 transition-colors">
            FAQs
          </button>
        </div>

        {/* Reviews section */}
        <div className="py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">
              All Reviews{" "}
              <span className="text-white/30 font-normal text-sm">
                ({mockReviews.length})
              </span>
            </h2>
            <div className="flex items-center gap-3">
              <select className="text-sm glass rounded-full px-4 py-2 font-medium focus:outline-none text-white">
                <option className="bg-[#1a1a2e]">Latest</option>
                <option className="bg-[#1a1a2e]">Highest Rating</option>
                <option className="bg-[#1a1a2e]">Lowest Rating</option>
              </select>
              <button className="btn-gradient rounded-full px-5 py-2 text-sm font-medium transition-all hover:scale-[1.02]">
                Write a Review
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {mockReviews.map((review) => (
              <div
                key={review.id}
                className="glass rounded-[20px] p-6"
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={
                        i < review.rating
                          ? "fill-amber-400 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.4)]"
                          : "fill-white/10 text-white/10"
                      }
                    />
                  ))}
                </div>
                <div className="flex items-center gap-1.5 mb-2">
                  <h3 className="font-bold text-base text-white">{review.userName}</h3>
                  {review.verified && (
                    <BadgeCheck
                      size={18}
                      className="text-green-500 fill-green-500"
                    />
                  )}
                </div>
                <p className="text-sm text-white/50 leading-relaxed">
                  &ldquo;{review.comment}&rdquo;
                </p>
                <p className="text-sm text-white/30 mt-3">
                  Posted on{" "}
                  {new Date(review.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* You might also like */}
      <section className="py-16">
        <h2
          className="text-3xl md:text-5xl font-black text-center uppercase mb-10 text-gradient"
          style={{ fontFamily: "var(--font-display), sans-serif" }}
        >
          YOU MIGHT ALSO LIKE
        </h2>
        <ProductGrid products={relatedProducts} />
      </section>
    </div>
  );
}
