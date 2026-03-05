"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { Input, Button, Spinner } from "@/components/ui";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login({ email, password });
      router.push("/");
    } catch {
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 relative">
      <div className="w-full max-w-md glass rounded-[32px] p-8 md:p-10 relative overflow-hidden">
        {/* Decorative orb */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
        
        <h1
          className="text-3xl font-black uppercase text-center mb-2 text-gradient"
          style={{ fontFamily: "var(--font-display), sans-serif" }}
        >
          Welcome Back
        </h1>
        <p className="text-center text-white/50 text-sm mb-8">
          Sign in to your SHOP.CO account
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="bg-red-500/10 border border-red-400/20 text-red-300 text-sm rounded-xl px-4 py-3 backdrop-blur-sm">
              {error}
            </div>
          )}

          <Input
            label="Email Address"
            type="email"
            placeholder="john@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="flex items-center justify-between text-sm pt-1">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded accent-purple-500 bg-white/10 border-white/20 cursor-pointer" />
              <span className="text-white/70 select-none">Remember me</span>
            </label>
            <Link href="/forgot-password" className="text-white/70 hover:text-purple-300 transition-colors">
              Forgot password?
            </Link>
          </div>

          <div className="pt-2">
            <Button type="submit" className="w-full" size="lg" disabled={loading}>
              {loading ? <Spinner className="h-5 w-5" /> : "Sign In"}
            </Button>
          </div>
        </form>

        <p className="text-center text-sm text-white/50 mt-6">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-purple-300 font-medium hover:text-purple-200 transition-colors">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
