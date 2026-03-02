"use client";

import { useState } from "react";
import { SlidersHorizontal, ChevronDown, ChevronUp, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface FilterSection {
  title: string;
  options: string[];
}

const filterSections: FilterSection[] = [
  {
    title: "T-shirts",
    options: ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"],
  },
];

const colors = [
  "#00C12B", "#F50606", "#F5DD06", "#F57906",
  "#06CAF5", "#063AF5", "#7D06F5", "#F506A4",
  "#FFFFFF", "#000000",
];

const sizes = ["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"];

interface ProductFiltersProps {
  className?: string;
}

export default function ProductFilters({ className }: ProductFiltersProps) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    categories: true,
    price: true,
    colors: true,
    size: true,
    style: true,
  });

  const [priceRange, setPriceRange] = useState<[number, number]>([50, 200]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleColor = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  return (
    <aside className={cn("glass rounded-[24px] p-6 space-y-6", className)}>
      <div className="flex items-center justify-between mb-2">
        <h2 className="font-bold text-xl text-white tracking-tight">Filters</h2>
        <SlidersHorizontal size={20} className="text-white/40" />
      </div>

      <hr className="border-white/10" />

      {/* Categories */}
      <div>
        <button
          onClick={() => toggleSection("categories")}
          className="flex items-center justify-between w-full font-semibold text-base mb-4 text-white hover:text-white/70 transition-colors"
        >
          <span>Categories</span>
          {openSections.categories ? <ChevronUp size={18} className="text-white/40" /> : <ChevronDown size={18} className="text-white/40" />}
        </button>
        {openSections.categories && (
          <ul className="space-y-3">
            {filterSections[0].options.map((opt) => (
              <li key={opt}>
                <button className="flex items-center justify-between w-full text-sm text-white/50 hover:text-white font-medium transition-colors py-0.5 group">
                  <span>{opt}</span>
                  <ChevronDown size={14} className="rotate-[-90deg] text-white/20 group-hover:text-white/50 transition-colors" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <hr className="border-white/10" />

      {/* Price range */}
      <div>
        <button
          onClick={() => toggleSection("price")}
          className="flex items-center justify-between w-full font-semibold text-base mb-4 text-white hover:text-white/70 transition-colors"
        >
          <span>Price</span>
          {openSections.price ? <ChevronUp size={18} className="text-white/40" /> : <ChevronDown size={18} className="text-white/40" />}
        </button>
        {openSections.price && (
          <div className="px-2">
            <input
              type="range"
              min={0}
              max={500}
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([priceRange[0], parseInt(e.target.value)])
              }
              className="w-full accent-purple-500 h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-[13px] font-semibold text-white mt-3 font-mono">
              <span className="glass px-2 py-1 rounded">${priceRange[0]}</span>
              <span className="glass px-2 py-1 rounded">${priceRange[1]}</span>
            </div>
          </div>
        )}
      </div>

      <hr className="border-white/10" />

      {/* Colors */}
      <div>
        <button
          onClick={() => toggleSection("colors")}
          className="flex items-center justify-between w-full font-semibold text-base mb-4 text-white hover:text-white/70 transition-colors"
        >
          <span>Colors</span>
          {openSections.colors ? <ChevronUp size={18} className="text-white/40" /> : <ChevronDown size={18} className="text-white/40" />}
        </button>
        {openSections.colors && (
          <div className="flex flex-wrap gap-2.5">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => toggleColor(color)}
                className={cn(
                  "w-10 h-10 rounded-full border border-white/20 transition-all flex items-center justify-center ring-offset-2 ring-offset-[#0a0a1a] hover:scale-110",
                  selectedColors.includes(color)
                    ? "ring-2 ring-purple-400 scale-110 shadow-[0_0_12px_rgba(167,139,250,0.3)]"
                    : ""
                )}
                style={{ backgroundColor: color }}
                aria-label={`Color ${color}`}
              >
                {selectedColors.includes(color) && (
                  <Check size={16} color={color === "#FFFFFF" || color === "#F5DD06" ? "#000" : "#FFF"} />
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      <hr className="border-white/10" />

      {/* Sizes */}
      <div>
        <button
          onClick={() => toggleSection("size")}
          className="flex items-center justify-between w-full font-semibold text-base mb-4 text-white hover:text-white/70 transition-colors"
        >
          <span>Size</span>
          {openSections.size ? <ChevronUp size={18} className="text-white/40" /> : <ChevronDown size={18} className="text-white/40" />}
        </button>
        {openSections.size && (
          <div className="flex flex-wrap gap-2.5">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => toggleSize(size)}
                className={cn(
                  "px-4 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-300 border",
                  selectedSizes.includes(size)
                    ? "btn-gradient border-transparent shadow-[0_0_15px_rgba(124,58,237,0.3)]"
                    : "glass text-white/60 hover:bg-white/10 hover:text-white"
                )}
              >
                {size}
              </button>
            ))}
          </div>
        )}
      </div>

      <hr className="border-white/10" />

      {/* Dress style */}
      <div>
        <button
          onClick={() => toggleSection("style")}
          className="flex items-center justify-between w-full font-semibold text-base mb-4 text-white hover:text-white/70 transition-colors"
        >
          <span>Dress Style</span>
          {openSections.style ? <ChevronUp size={18} className="text-white/40" /> : <ChevronDown size={18} className="text-white/40" />}
        </button>
        {openSections.style && (
          <ul className="space-y-3">
            {["Casual", "Formal", "Party", "Gym"].map((style) => (
              <li key={style}>
                <button className="flex items-center justify-between w-full text-sm text-white/50 hover:text-white font-medium transition-colors py-0.5 group">
                  <span>{style}</span>
                  <ChevronDown size={14} className="rotate-[-90deg] text-white/20 group-hover:text-white/50 transition-colors" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <button className="w-full btn-gradient rounded-full py-4 text-[15px] font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
        Apply Filter
      </button>
    </aside>
  );
}
