"use client";

import { useCartStore } from "@/store/cartStore";
import type { Product } from "@/types";

export function useCart() {
  const store = useCartStore();

  const addToCart = (product: Product, quantity = 1, size?: string, color?: string) => {
    store.addItem({
      id: `${product.id}-${size || "default"}-${color || "default"}`,
      productId: product.id,
      product: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0] || "",
      },
      quantity,
      size,
      color,
    });
  };

  return {
    items: store.items,
    addToCart,
    removeItem: store.removeItem,
    updateQuantity: store.updateQuantity,
    clearCart: store.clearCart,
    total: store.getTotal(),
    itemCount: store.getItemCount(),
  };
}
