import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "destructive" | "discount";
  className?: string;
}

export default function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide backdrop-blur-md transition-all duration-300",
        {
          "bg-white/10 text-white/80 border border-white/20": variant === "default",
          "bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 shadow-[0_0_12px_rgba(52,211,153,0.15)]": variant === "success",
          "bg-amber-500/20 text-amber-300 border border-amber-400/30 shadow-[0_0_12px_rgba(251,191,36,0.15)]": variant === "warning",
          "bg-red-500/20 text-red-300 border border-red-400/30 shadow-[0_0_12px_rgba(248,113,113,0.15)]": variant === "destructive",
          "bg-pink-500/20 text-pink-300 border border-pink-400/30 shadow-[0_0_12px_rgba(236,72,153,0.15)]": variant === "discount",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
