import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none active:scale-[0.97] cursor-pointer",
          {
            "btn-gradient text-white hover:scale-[1.02] hover:shadow-[0_8px_40px_rgba(124,58,237,0.5)] focus:ring-2 focus:ring-purple-400/50":
              variant === "primary",
            "bg-white/10 backdrop-blur-xl text-white border border-white/20 hover:bg-white/15 hover:border-white/30 hover:shadow-glass focus:ring-2 focus:ring-white/30":
              variant === "secondary",
            "border border-white/20 bg-transparent text-white/90 hover:bg-white/10 hover:border-white/30 backdrop-blur-sm focus:ring-2 focus:ring-white/20":
              variant === "outline",
            "bg-transparent text-white/70 hover:bg-white/10 hover:text-white focus:ring-2 focus:ring-white/20":
              variant === "ghost",
            "bg-red-500/80 backdrop-blur-sm border border-red-400/30 text-white hover:bg-red-500/90 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)] focus:ring-2 focus:ring-red-400/50":
              variant === "destructive",
          },
          {
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-sm": size === "md",
            "px-8 py-4 text-base": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
