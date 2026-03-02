"use client";

import { useState } from "react";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { StarRating } from "@/components/ui";
import { formatPrice, calculateDiscount, cn } from "@/lib/utils";
import { useCart } from "@/hooks/useCart";
import type { Product } from "@/types";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]?.hex || "");
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || "");
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const discount = product.originalPrice
    ? calculateDiscount(product.price, product.originalPrice)
    : 0;

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize, selectedColor);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 pt-6 pb-16">
      {/* Images */}
      <div className="flex flex-col-reverse md:flex-row gap-5">
        {/* Thumbnails */}
        <div className="flex md:flex-col gap-4 overflow-x-auto scrollbar-hide pb-2 md:pb-0 snap-x">
          {product.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelectedImage(i)}
              className={cn(
                "relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border-2 flex-shrink-0 transition-all duration-300 snap-start",
                selectedImage === i ? "border-purple-400 shadow-[0_0_15px_rgba(167,139,250,0.3)]" : "border-white/10 hover:border-white/30"
              )}
            >
              <Image src={img} alt="" fill className="object-cover object-center" sizes="96px" />
            </button>
          ))}
        </div>

        {/* Main image */}
        <div className="relative flex-1 glass rounded-[32px] md:rounded-[40px] overflow-hidden aspect-square">
          <Image
            src={product.images[selectedImage] || "/images/placeholder-product.png"}
            alt={product.name}
            fill
            className="object-cover object-center scale-100 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-col">
        <h1
          className="text-3xl md:text-[44px] font-black uppercase leading-[1.1] tracking-tight text-white"
          style={{ fontFamily: "var(--font-display), sans-serif" }}
        >
          {product.name}
        </h1>

        <div className="mt-4 flex items-center gap-3">
          <StarRating rating={product.rating} size={18} />
          <span className="text-sm font-medium text-white/40 pt-0.5">{product.rating} / 5</span>
        </div>

        <div className="flex flex-wrap items-baseline gap-3 mt-6">
          <span className="text-3xl md:text-[36px] font-black text-white tracking-tight">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && product.originalPrice > product.price && (
            <>
              <span className="text-xl md:text-[28px] text-white/25 line-through font-bold">
                {formatPrice(product.originalPrice)}
              </span>
              <span className="bg-pink-500/20 border border-pink-400/30 text-pink-300 text-[15px] font-bold px-4 py-1 rounded-full ml-1">
                -{discount}%
              </span>
            </>
          )}
        </div>

        <p className="text-white/50 text-[15px] md:text-base mt-6 leading-relaxed font-medium">
          {product.description}
        </p>

        <hr className="my-8 border-white/10" />

        {/* Colors */}
        {product.colors && product.colors.length > 0 && (
          <div className="mb-8">
            <p className="text-[15px] font-medium text-white/60 mb-4">Select Colors</p>
            <div className="flex gap-4">
              {product.colors.map((color) => (
                <button
                  key={color.hex}
                  onClick={() => setSelectedColor(color.hex)}
                  className={cn(
                    "w-11 h-11 rounded-full border transition-all flex items-center justify-center ring-offset-2 ring-offset-[#0a0a1a] hover:scale-110",
                    selectedColor === color.hex
                      ? "ring-2 ring-purple-400 scale-110 border-white/30 shadow-[0_0_15px_rgba(167,139,250,0.3)]"
                      : "border-white/20"
                  )}
                  style={{ backgroundColor: color.hex }}
                  aria-label={color.name}
                >
                  {selectedColor === color.hex && (
                    <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8L6.5 11.5L13 4.5"
                        stroke={color.hex === "#FFFFFF" || color.hex === "#F5DD06" ? "#000" : "#FFF"}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        <hr className="my-8 border-white/10" />

        {/* Sizes */}
        {product.sizes && product.sizes.length > 0 && (
          <div className="mb-8">
            <p className="text-[15px] font-medium text-white/60 mb-4">Choose Size</p>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={cn(
                    "px-6 py-3 rounded-full text-[15px] font-semibold transition-all duration-300 border",
                    selectedSize === size
                      ? "btn-gradient border-transparent shadow-[0_0_20px_rgba(124,58,237,0.3)]"
                      : "glass text-white/60 hover:bg-white/10 hover:text-white"
                  )}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        <hr className="my-8 border-white/10" />

        {/* Quantity + Add to Cart */}
        <div className="flex flex-col sm:flex-row items-center gap-5 mt-auto">
          <div className="flex items-center glass rounded-full w-full sm:w-auto p-1.5">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-3 w-12 h-12 flex justify-center items-center hover:bg-white/10 rounded-full transition-all text-white bg-transparent"
              aria-label="Decrease quantity"
            >
              <Minus size={20} strokeWidth={2.5} />
            </button>
            <span className="w-12 text-center font-bold text-lg text-white">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-3 w-12 h-12 flex justify-center items-center hover:bg-white/10 rounded-full transition-all text-white bg-transparent"
              aria-label="Increase quantity"
            >
              <Plus size={20} strokeWidth={2.5} />
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className="flex-1 w-full btn-gradient rounded-full py-4 px-8 text-base font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 tracking-wide"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
