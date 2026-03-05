import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Fragment } from "react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav className={cn("flex flex-wrap items-center gap-1.5 md:gap-2 text-sm text-white/50 mb-6 md:mb-8 font-medium", className)}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <Fragment key={index}>
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className={cn(isLast ? "text-white font-medium" : "text-white/50")}>
                {item.label}
              </span>
            )}
            
            {!isLast && (
              <ChevronRight size={14} className="text-white/30 flex-shrink-0" />
            )}
          </Fragment>
        );
      })}
    </nav>
  );
}
