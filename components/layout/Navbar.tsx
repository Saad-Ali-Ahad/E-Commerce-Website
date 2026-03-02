"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, ShoppingCart, User, Menu, X, ChevronDown } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { useCartStore } from "@/store/cartStore";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const itemCount = useCartStore((s) => s.getItemCount());

  return (
    <header className="sticky top-0 z-50 glass-dark transition-all duration-500" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      {/* Top promo bar - Glass gradient */}
      <div className="bg-gradient-to-r from-purple-600/90 via-blue-500/90 to-pink-500/90 text-white text-center text-xs py-2 px-4 backdrop-blur-sm">
        Sign up and get 20% off to your first order.{" "}
        <Link href="/register" className="font-semibold underline underline-offset-2 hover:text-white/80 transition-colors">
          Sign Up Now
        </Link>
      </div>

      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 lg:px-6">
        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-1.5 -ml-1.5 text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/10"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl md:text-[28px] font-black tracking-tight uppercase text-gradient"
          style={{ fontFamily: "var(--font-display), sans-serif" }}
        >
          SHOP.CO
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-8 ml-8">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="flex items-center gap-1.5 text-sm font-medium text-white/60 hover:text-white transition-colors duration-300 group"
              >
                {link.label}
                {link.hasDropdown && <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform duration-200" />}
              </Link>
            </li>
          ))}
        </ul>

        {/* Search bar - Glass */}
        <div className="hidden md:flex flex-1 max-w-md mx-6 lg:mx-8">
          <div className="relative w-full group">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-purple-400 transition-colors duration-300"
            />
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full glass-input rounded-full pl-10 pr-4 py-2.5 text-sm"
            />
          </div>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          <button className="md:hidden p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300" aria-label="Search">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <Link href="/cart" className="relative p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300" aria-label="Cart">
            <ShoppingCart size={20} strokeWidth={1.5} />
            {itemCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-[0_0_10px_rgba(167,139,250,0.5)]">
                {itemCount}
              </span>
            )}
          </Link>
          <Link href="/login" className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300" aria-label="Account">
            <User size={20} strokeWidth={1.5} />
          </Link>
        </div>
      </nav>

      {/* Mobile menu dropdown - Glass */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-4 space-y-4 glass-dark border-t border-white/5">
          {/* Mobile search */}
          <div className="relative md:hidden group">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-purple-400 transition-colors"
            />
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full glass-input rounded-full pl-10 pr-4 py-2.5 text-sm"
            />
          </div>

          <ul className="flex flex-col gap-1 pb-2">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="block px-3 py-2.5 text-sm font-medium text-white/60 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

