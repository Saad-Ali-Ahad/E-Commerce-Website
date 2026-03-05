"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Input, Button, Spinner, Breadcrumbs } from "@/components/ui";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/lib/utils";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, total, clearCart } = useCart();
  const [loading, setLoading] = useState(false);

  const deliveryFee = total > 0 ? 15 : 0;
  const discount = Math.round(total * 0.2);
  const finalTotal = total - discount + deliveryFee;

  const [form, setForm] = useState({
    fullName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // In a real app, call orderService.createOrder(form)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      clearCart();
      router.push("/orders");
    } catch {
      alert("Checkout failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-24 md:py-32 text-center flex flex-col items-center">
        <div className="w-24 h-24 glass rounded-full flex items-center justify-center mb-8">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/40">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        </div>
        <h1
          className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4"
          style={{ fontFamily: "var(--font-display), sans-serif" }}
        >
          NOTHING TO CHECKOUT
        </h1>
        <p className="text-white/50 mb-10 text-lg font-medium">Add some amazing products to your cart first.</p>
        <Link
          href="/products"
          className="inline-flex items-center justify-center btn-gradient rounded-full px-10 py-4 text-base font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all tracking-wide"
        >
          Return to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8 md:py-10">
      <Breadcrumbs 
        items={[
          { label: "Home", href: "/" },
          { label: "Cart", href: "/cart" },
          { label: "Checkout" }
        ]} 
      />

      <h1
        className="text-4xl md:text-[44px] font-black uppercase mb-8 md:mb-10 tracking-tight text-gradient"
        style={{ fontFamily: "var(--font-display), sans-serif" }}
      >
        CHECKOUT
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Shipping form */}
        <div className="flex-1 w-full glass rounded-[32px] p-6 md:p-8 space-y-5">
          <h2 className="font-bold text-2xl mb-6 tracking-tight text-white">Shipping Address</h2>

          <div className="space-y-4 md:space-y-5">
            <Input
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
              required
            />
            <Input
              name="address"
              placeholder="Street Address"
              value={form.address}
              onChange={handleChange}
              required
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              <Input
                name="city"
                placeholder="City"
                value={form.city}
                onChange={handleChange}
                required
              />
              <Input
                name="state"
                placeholder="State / Province"
                value={form.state}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              <Input
                name="zipCode"
                placeholder="ZIP / Postal Code"
                value={form.zipCode}
                onChange={handleChange}
                required
              />
              <Input
                name="country"
                placeholder="Country"
                value={form.country}
                onChange={handleChange}
                required
              />
            </div>
            <Input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Order summary */}
        <div className="w-full lg:w-[420px] glass rounded-[32px] p-6 lg:p-8 flex-shrink-0 sticky top-28">
          <h2 className="font-bold text-2xl mb-6 tracking-tight text-white">Order Summary</h2>

          <div className="space-y-4 mb-6">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between items-center text-[15px] font-medium">
                <div className="flex items-center gap-3 w-full pr-4">
                  <div className="w-12 h-12 glass-light rounded-lg overflow-hidden flex-shrink-0 relative">
                    <img src={item.product.image || "/images/placeholder-product.png"} alt="" className="object-cover w-full h-full" />
                  </div>
                  <span className="text-white/50 truncate max-w-[200px]">
                    {item.product.name} × {item.quantity}
                  </span>
                </div>
                <span className="font-bold text-white flex-shrink-0">
                  {formatPrice(item.product.price * item.quantity)}
                </span>
              </div>
            ))}
          </div>

          <hr className="border-white/10 my-6" />

          <div className="space-y-4">
            <div className="flex justify-between text-base font-medium">
              <span className="text-white/50">Subtotal</span>
              <span className="font-bold text-white">{formatPrice(total)}</span>
            </div>
            <div className="flex justify-between text-base font-medium">
              <span className="text-white/50">Discount (-20%)</span>
              <span className="font-bold text-pink-300 bg-pink-500/10 px-2 py-0.5 rounded-md border border-pink-400/20">-{formatPrice(discount)}</span>
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

          <button
            type="submit"
            className="flex items-center justify-center gap-2.5 w-full btn-gradient rounded-full py-4 text-base font-semibold mt-8 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 tracking-wide disabled:opacity-70 disabled:hover:scale-100"
            disabled={loading}
          >
            {loading ? <Spinner className="h-5 w-5 border-2 border-r-transparent border-white" /> : "Place Order"}
          </button>
        </div>
      </form>
    </div>
  );
}
