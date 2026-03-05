"use client";

import { useState } from "react";
import { ProductGrid, ProductFilters } from "@/components/product";
import { ChevronRight, SlidersHorizontal, ChevronDown } from "lucide-react";
import Link from "next/link";
import type { Product } from "@/types";

// Mock data — replace with API call
const allProducts: Product[] = [
  {
    id: "1",
    name: "Gradient Graphic T-shirt",
    description: "A stylish gradient graphic t-shirt",
    price: 145,
    stock: 50,
    images: ["https://images.unsplash.com/photo-1562157873-818bc0726f68?w=480&q=80"],
    categoryId: "1",
    rating: 3.5,
    reviewCount: 56,
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    name: "Polo with Tipping Details",
    description: "Classic polo with tipping details",
    price: 180,
    stock: 30,
    images: ["https://images.unsplash.com/photo-1625910513413-5fc421e0b6b3?w=480&q=80"],
    categoryId: "2",
    rating: 4.5,
    reviewCount: 42,
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    name: "Black Striped T-shirt",
    description: "A black striped t-shirt for casual wear",
    price: 120,
    originalPrice: 150,
    discount: 30,
    stock: 40,
    images: ["https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=480&q=80"],
    categoryId: "1",
    rating: 5.0,
    reviewCount: 120,
    createdAt: new Date().toISOString(),
  },
  {
    id: "4",
    name: "Skinny Fit Jeans",
    description: "Comfortable skinny fit jeans",
    price: 240,
    originalPrice: 260,
    discount: 20,
    stock: 25,
    images: ["https://images.unsplash.com/photo-1542272604-787c3835535d?w=480&q=80"],
    categoryId: "2",
    rating: 3.5,
    reviewCount: 87,
    createdAt: new Date().toISOString(),
  },
  {
    id: "5",
    name: "Checkered Shirt",
    description: "A checkered pattern shirt",
    price: 180,
    stock: 20,
    images: ["https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=480&q=80"],
    categoryId: "1",
    rating: 4.5,
    reviewCount: 78,
    createdAt: new Date().toISOString(),
  },
  {
    id: "6",
    name: "Sleeve Striped T-shirt",
    description: "T-shirt with sleeve stripes",
    price: 130,
    originalPrice: 160,
    discount: 30,
    stock: 35,
    images: ["https://images.unsplash.com/photo-1503341504253-dff4f37b0280?w=480&q=80"],
    categoryId: "1",
    rating: 4.5,
    reviewCount: 63,
    createdAt: new Date().toISOString(),
  },
  {
    id: "7",
    name: "Vertical Striped Shirt",
    description: "A vertical striped casual shirt",
    price: 212,
    originalPrice: 232,
    stock: 60,
    images: ["https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=480&q=80"],
    categoryId: "3",
    rating: 5.0,
    reviewCount: 35,
    createdAt: new Date().toISOString(),
  },
  {
    id: "8",
    name: "Courage Graphic T-shirt",
    description: "Graphic tee with a courage design",
    price: 145,
    stock: 15,
    images: ["https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=480&q=80"],
    categoryId: "1",
    rating: 4.0,
    reviewCount: 92,
    createdAt: new Date().toISOString(),
  },
  {
    id: "9",
    name: "Loose Fit Bermuda Shorts",
    description: "Comfortable bermuda shorts",
    price: 80,
    stock: 45,
    images: ["https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=480&q=80"],
    categoryId: "3",
    rating: 3.0,
    reviewCount: 28,
    createdAt: new Date().toISOString(),
  },
];

export default function ProductsPage() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8 md:py-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-sm text-white/40 mb-8 font-medium">
        <Link href="/" className="hover:text-white transition-colors">
          Home
        </Link>
        <ChevronRight size={14} className="text-white/20" />
        <span className="text-white font-semibold">Casual</span>
      </div>

      <div className="flex gap-8 items-start">
        {/* Filters sidebar — desktop */}
        <div className="hidden lg:block w-[280px] xl:w-[295px] flex-shrink-0 sticky top-28">
          <ProductFilters />
        </div>

        {/* Mobile filter toggle */}
        <div className="lg:hidden fixed bottom-6 right-6 z-40">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="btn-gradient rounded-full p-4 shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:scale-105 active:scale-95 transition-all"
          >
            <SlidersHorizontal size={22} />
          </button>
        </div>

        {/* Mobile filter overlay */}
        {showFilters && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div
              className="absolute inset-0 bg-[#0a0a1a]/60 backdrop-blur-sm transition-opacity"
              onClick={() => setShowFilters(false)}
            />
            <div className="absolute right-0 top-0 bottom-0 w-[320px] glass-dark overflow-y-auto p-5 shadow-2xl transition-transform">
              <ProductFilters />
            </div>
          </div>
        )}

        {/* Products */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <h1 className="text-3xl md:text-[36px] font-black text-white tracking-tight">Casual</h1>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-white/40 hidden md:block">
                Showing 1-{allProducts.length} of {allProducts.length} Products
              </span>
              <div className="relative group">
                <select className="appearance-none text-sm glass text-white font-semibold rounded-full pl-5 pr-10 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-500/40 transition-all cursor-pointer hover:bg-white/10">
                  <option className="bg-[#1a1a2e]">Most Popular</option>
                  <option className="bg-[#1a1a2e]">Newest</option>
                  <option className="bg-[#1a1a2e]">Price: Low to High</option>
                  <option className="bg-[#1a1a2e]">Price: High to Low</option>
                </select>
                <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none group-hover:text-white" />
              </div>
            </div>
          </div>

          <ProductGrid products={allProducts} columns={3} />

          {/* Pagination */}
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/10">
            <button className="flex items-center gap-2 glass rounded-xl px-5 py-2.5 text-sm font-semibold hover:bg-white/10 transition-all active:scale-[0.98] text-white/70 hover:text-white">
              ← Previous
            </button>
            <div className="hidden md:flex items-center gap-1.5">
              {[1, 2, 3, "...", 8, 9, 10].map((page, i) => (
                <button
                  key={i}
                  className={`w-10 h-10 rounded-xl text-sm font-bold transition-all ${page === 1
                      ? "glass text-white"
                      : "text-white/40 hover:bg-white/5 hover:text-white"
                    }`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button className="flex items-center gap-2 glass rounded-xl px-4 md:px-5 py-2.5 text-sm font-semibold hover:bg-white/10 transition-all active:scale-[0.98] text-white/70 hover:text-white">
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
