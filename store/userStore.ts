import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User } from "@/types";

interface UserStore {
  user: User | null;
  token: string | null;
  setUser: (user: User) => void;
  setToken: (token: string) => void;
  login: (user: User, token: string) => void;
  logout: () => void;
  isAuthenticated: () => boolean;
  isAdmin: () => boolean;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,

      setUser: (user) => set({ user }),
      setToken: (token) => set({ token }),

      login: (user, token) => {
        set({ user, token });
        if (typeof window !== "undefined") {
          localStorage.setItem("token", token);
        }
      },

      logout: () => {
        set({ user: null, token: null });
        if (typeof window !== "undefined") {
          localStorage.removeItem("token");
        }
      },

      isAuthenticated: () => !!get().token,
      isAdmin: () => get().user?.role === "ADMIN",
    }),
    {
      name: "user-storage",
    }
  )
);
