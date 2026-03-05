"use client";

import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui";
import { Trash2, Minus, Plus, Tag } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/lib/utils";

export default function CartPage() {
  const { items, removeItem, updateQuantity, total, itemCount } = useCart();

  const deliveryFee = total > 0 ? 15 : 0;
  const discount = Math.round(total * 0.2);
  const finalTotal = total - discount + deliveryFee;

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-24 md:py-32 text-center flex flex-col items-center">
        <div className="w-24 h-24 glass rounded-full flex items-center justify-center mb-8">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/40">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </div>
        <h1
          className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4"
          style={{ fontFamily: "var(--font-display), sans-serif" }}
        >
          YOUR CART IS EMPTY
        </h1>
        <p className="text-white/50 mb-10 text-lg font-medium">Looks like you haven't added anything to your cart yet.</p>
        <Link
          href="/products"
          className="inline-flex items-center justify-center btn-gradient rounded-full px-10 py-4 text-base font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all tracking-wide"
        >
          Explore Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8 md:py-10">
      <Breadcrumbs 
        items={[
          { label: "Home", href: "/" },
          { label: "Cart" }
        ]} 
      />

      <h1
        className="text-4xl md:text-[44px] font-black uppercase mb-8 md:mb-10 tracking-tight text-gradient"
        style={{ fontFamily: "var(--font-display), sans-serif" }}
      >
        YOUR CART
      </h1>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Cart items */}
        <div className="flex-1 w-full glass rounded-[32px] overflow-hidden">
          {items.map((item, idx) => (
            <div
              key={item.id}
              className={`flex flex-col sm:flex-row gap-5 p-5 md:p-7 ${idx !== items.length - 1 ? "border-b border-white/5" : ""
                }`}
            >
              {/* Product image */}
              <div className="relative w-28 h-28 md:w-36 md:h-36 glass-light rounded-2xl overflow-hidden flex-shrink-0">
                <Image
                  src={item.product.image || "/images/placeholder-product.png"}
                  alt={item.product.name}
                  fill
                  className="object-cover object-center"
                  sizes="144px"
                />
              </div>

              {/* Details */}
              <div className="flex-1 flex flex-col justify-between pt-1 sm:pt-0">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-lg text-white">{item.product.name}</h3>
                    {item.size && (
                      <p className="text-[13px] font-medium text-white/40 mt-1.5">
                        Size: <span className="text-white/70">{item.size}</span>
                      </p>
                    )}
                    {item.color && (
                      <p className="text-[13px] font-medium text-white/40 mt-0.5">
                        Color: <span className="text-white/70">{item.color}</span>
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-rose-400 bg-rose-500/10 p-2.5 rounded-full hover:bg-rose-500/20 transition-colors border border-rose-400/20"
                    aria-label="Remove item"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>

                <div className="flex items-center justify-between mt-5 sm:mt-auto">
                  <span className="font-black text-2xl text-white tracking-tight">
                    {formatPrice(item.product.price)}
                  </span>
                  <div className="flex items-center glass rounded-full p-1">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      className="p-1.5 w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-full transition-all text-white"
                      aria-label="Decrease"
                    >
                      <Minus size={16} strokeWidth={2.5} />
                    </button>
                    <span className="w-8 flex items-center justify-center text-[15px] font-bold text-white">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                      className="p-1.5 w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-full transition-all text-white"
                      aria-label="Increase"
                    >
                      <Plus size={16} strokeWidth={2.5} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order summary */}
        <div className="w-full lg:w-[420px] glass rounded-[32px] p-6 lg:p-8 flex-shrink-0 sticky top-28">
          <h2 className="font-bold text-2xl mb-6 tracking-tight text-white">Order Summary</h2>

          <div className="space-y-4">
            <div className="flex justify-between text-base font-medium">
              <span className="text-white/50">Subtotal</span>
              <span className="font-bold text-white">{formatPrice(total)}</span>
            </div>
            <div className="flex justify-between text-base font-medium">
              <span className="text-white/50">Discount (-20%)</span>
              <span className="font-bold text-pink-300 bg-pink-500/10 px-2 py-0.5 rounded-md border border-pink-400/20">
                -{formatPrice(discount)}
              </span>
            </div>
            <div className="flex justify-between text-base font-medium">
              <span className="text-white/50">Delivery Fee</span>
              <span className="font-bold text-white">{formatPrice(deliveryFee)}</span>
            </div>
            <hr className="border-white/10 border-dashed my-6" />
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg text-white">Total</span>
              <span className="text-3xl font-black tracking-tight text-white">{formatPrice(finalTotal)}</span>
            </div>
          </div>

          {/* Promo code */}
          <div className="flex gap-3 mt-8">
            <div className="relative flex-1 group">
              <Tag
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-purple-300 transition-colors"
              />
              <input
                type="text"
                placeholder="Add promo code"
                className="w-full glass-input rounded-full pl-11 pr-4 py-3.5 text-[15px] font-medium font-mono"
              />
            </div>
            <button className="btn-gradient rounded-full px-8 text-[15px] font-semibold active:scale-[0.98] transition-all">
              Apply
            </button>
          </div>

          <Link
            href="/checkout"
            className="flex items-center justify-center gap-2.5 w-full btn-gradient rounded-full py-4 text-base font-semibold mt-8 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 tracking-wide"
          >
            Go to Checkout
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
