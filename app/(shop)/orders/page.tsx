"use client";

import Link from "next/link";
import { ChevronRight, Package } from "lucide-react";
import { Badge } from "@/components/ui";
import { formatPrice, formatDate } from "@/lib/utils";
import type { Order } from "@/types";

// Mock data — replace with API call
const mockOrders: Order[] = [
  {
    id: "ORD-001",
    userId: "u1",
    items: [
      {
        id: "oi1",
        productId: "1",
        productName: "One Life Graphic T-shirt",
        productImage: "/images/products/tshirt-tape.png",
        quantity: 1,
        price: 260,
        size: "Large",
      },
      {
        id: "oi2",
        productId: "2",
        productName: "Skinny Fit Jeans",
        productImage: "/images/products/skinny-jeans.png",
        quantity: 1,
        price: 240,
        size: "Medium",
      },
    ],
    status: "DELIVERED",
    total: 455,
    subtotal: 500,
    discount: 100,
    deliveryFee: 55,
    shippingAddress: {
      fullName: "John Doe",
      address: "123 Main St",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "US",
      phone: "+1234567890",
    },
    createdAt: "2023-08-10T00:00:00.000Z",
  },
  {
    id: "ORD-002",
    userId: "u1",
    items: [
      {
        id: "oi3",
        productId: "3",
        productName: "Checkered Shirt",
        productImage: "/images/products/checkered-shirt.png",
        quantity: 2,
        price: 180,
      },
    ],
    status: "PROCESSING",
    total: 345,
    subtotal: 360,
    discount: 30,
    deliveryFee: 15,
    shippingAddress: {
      fullName: "John Doe",
      address: "123 Main St",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "US",
      phone: "+1234567890",
    },
    createdAt: "2023-09-05T00:00:00.000Z",
  },
];

const statusVariant = (status: string) => {
  switch (status) {
    case "DELIVERED":
      return "success";
    case "CANCELLED":
      return "destructive";
    case "SHIPPED":
    case "PROCESSING":
      return "warning";
    default:
      return "default";
  }
};

export default function OrdersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1 text-sm text-white/40 mb-6">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <ChevronRight size={14} className="text-white/20" />
        <span className="text-white font-medium">My Orders</span>
      </div>

      <h1
        className="text-3xl md:text-4xl font-black uppercase mb-8 text-gradient"
        style={{ fontFamily: "var(--font-display), sans-serif" }}
      >
        MY ORDERS
      </h1>

      {mockOrders.length === 0 ? (
        <div className="text-center py-20">
          <Package size={48} className="mx-auto text-white/20 mb-4" />
          <p className="text-white/50 mb-4">You haven&apos;t placed any orders yet.</p>
          <Link
            href="/products"
            className="inline-flex items-center btn-gradient rounded-full px-8 py-3 text-sm font-medium"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-5">
          {mockOrders.map((order) => (
            <div
              key={order.id}
              className="glass rounded-[20px] p-5 md:p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="font-bold text-base text-white">Order #{order.id}</h2>
                    <Badge variant={statusVariant(order.status) as "success" | "destructive" | "warning" | "default"}>
                      {order.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-white/40 mt-1">
                    Placed on {formatDate(order.createdAt)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-white/40">Total</p>
                  <p className="text-lg font-bold text-white">{formatPrice(order.total)}</p>
                </div>
              </div>

              <hr className="border-white/10 mb-4" />

              <div className="space-y-3">
                {order.items.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <div className="w-14 h-14 glass-light rounded-lg flex-shrink-0" />
                    <div className="flex-1">
                      <p className="font-medium text-sm text-white">{item.productName}</p>
                      <p className="text-xs text-white/40">
                        Qty: {item.quantity}
                        {item.size ? ` · Size: ${item.size}` : ""}
                      </p>
                    </div>
                    <p className="font-medium text-sm text-white">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
