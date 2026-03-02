"use client";

import { useState } from "react";
import { Plus, Pencil, Trash2, Search } from "lucide-react";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";

const mockProducts = [
  { id: "1", name: "T-shirt with Tape Details", price: 120, stock: 50, image: "/images/products/tshirt-tape.png", category: "T-shirts" },
  { id: "2", name: "Skinny Fit Jeans", price: 240, stock: 30, image: "/images/products/skinny-jeans.png", category: "Jeans" },
  { id: "3", name: "Checkered Shirt", price: 180, stock: 40, image: "/images/products/checkered-shirt.png", category: "Shirts" },
  { id: "4", name: "Sleeve Striped T-shirt", price: 130, stock: 25, image: "/images/products/striped-tshirt.png", category: "T-shirts" },
  { id: "5", name: "Vertical Striped Shirt", price: 212, stock: 20, image: "/images/products/vertical-striped-shirt.png", category: "Shirts" },
];

export default function AdminProductsPage() {
  const [search, setSearch] = useState("");

  const filtered = mockProducts.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-white">Products</h1>
        <button className="flex items-center gap-2 btn-gradient rounded-full px-5 py-2.5 text-sm font-medium transition-all hover:scale-[1.02]">
          <Plus size={16} />
          Add Product
        </button>
      </div>

      {/* Search */}
      <div className="relative max-w-md mb-6">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full glass-input rounded-full pl-10 pr-4 py-2.5 text-sm"
        />
      </div>

      {/* Table */}
      <div className="glass rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-white/5">
              <tr className="text-left">
                <th className="px-5 py-3 font-medium text-white/40">Product</th>
                <th className="px-5 py-3 font-medium text-white/40">Category</th>
                <th className="px-5 py-3 font-medium text-white/40">Price</th>
                <th className="px-5 py-3 font-medium text-white/40">Stock</th>
                <th className="px-5 py-3 font-medium text-white/40">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((product) => (
                <tr key={product.id} className="border-t border-white/5">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 glass-light rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                          sizes="40px"
                        />
                      </div>
                      <span className="font-medium text-white">{product.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-white/50">{product.category}</td>
                  <td className="px-5 py-3 font-medium text-white">{formatPrice(product.price)}</td>
                  <td className="px-5 py-3">
                    <span
                      className={`${
                        product.stock < 30
                          ? "text-amber-400"
                          : "text-emerald-400"
                      }`}
                    >
                      {product.stock}
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 hover:bg-white/5 rounded-lg transition-colors" aria-label="Edit">
                        <Pencil size={15} className="text-white/40" />
                      </button>
                      <button className="p-1.5 hover:bg-red-500/10 rounded-lg transition-colors" aria-label="Delete">
                        <Trash2 size={15} className="text-red-400" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
