import api from "@/lib/api";
import type { Product, ProductFilters, ProductsResponse, Review } from "@/types";

export const productService = {
  getProducts: async (filters?: ProductFilters): Promise<ProductsResponse> => {
    const { data } = await api.get<ProductsResponse>("/products", {
      params: filters,
    });
    return data;
  },

  getProduct: async (id: string): Promise<Product> => {
    const { data } = await api.get<Product>(`/products/${id}`);
    return data;
  },

  getReviews: async (productId: string): Promise<Review[]> => {
    const { data } = await api.get<Review[]>(`/products/${productId}/reviews`);
    return data;
  },

  createProduct: async (product: FormData): Promise<Product> => {
    const { data } = await api.post<Product>("/products", product, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return data;
  },

  updateProduct: async (id: string, product: FormData): Promise<Product> => {
    const { data } = await api.patch<Product>(`/products/${id}`, product, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return data;
  },

  deleteProduct: async (id: string): Promise<void> => {
    await api.delete(`/products/${id}`);
  },
};
