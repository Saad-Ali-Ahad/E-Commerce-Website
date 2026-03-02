"use client";

import { useUserStore } from "@/store/userStore";
import { authService } from "@/services/authService";
import type { LoginPayload, RegisterPayload } from "@/types";

export function useAuth() {
  const { user, login: storeLogin, logout: storeLogout, isAuthenticated, isAdmin } =
    useUserStore();

  const login = async (payload: LoginPayload) => {
    const { user, token } = await authService.login(payload);
    storeLogin(user, token);
    return user;
  };

  const register = async (payload: RegisterPayload) => {
    const { user, token } = await authService.register(payload);
    storeLogin(user, token);
    return user;
  };

  const logout = async () => {
    try {
      await authService.logout();
    } finally {
      storeLogout();
    }
  };

  return {
    user,
    login,
    register,
    logout,
    isAuthenticated: isAuthenticated(),
    isAdmin: isAdmin(),
  };
}
