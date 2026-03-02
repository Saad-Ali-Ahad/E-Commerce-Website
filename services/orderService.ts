import api from "@/lib/api";
import type { Order, ShippingAddress } from "@/types";

export const orderService = {
  createOrder: async (shippingAddress: ShippingAddress): Promise<Order> => {
    const { data } = await api.post<Order>("/orders", { shippingAddress });
    return data;
  },

  getOrders: async (): Promise<Order[]> => {
    const { data } = await api.get<Order[]>("/orders");
    return data;
  },

  getOrder: async (id: string): Promise<Order> => {
    const { data } = await api.get<Order>(`/orders/${id}`);
    return data;
  },

  getAllOrders: async (): Promise<Order[]> => {
    const { data } = await api.get<Order[]>("/admin/orders");
    return data;
  },

  updateOrderStatus: async (
    id: string,
    status: string
  ): Promise<Order> => {
    const { data } = await api.patch<Order>(`/orders/${id}/status`, { status });
    return data;
  },
};
