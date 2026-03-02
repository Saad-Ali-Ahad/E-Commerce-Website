import { cn } from "@/lib/utils";
import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-white/70 mb-1.5 ml-1">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            "w-full rounded-2xl glass-input px-4 py-3.5 text-sm transition-all duration-300",
            error && "border-red-400/50 shadow-[0_0_15px_rgba(239,68,68,0.2)] focus:border-red-400/70 focus:shadow-[0_0_25px_rgba(239,68,68,0.3)]",
            className
          )}
          {...props}
        />
        {error && <p className="mt-1.5 ml-1 text-xs font-medium text-red-400">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
