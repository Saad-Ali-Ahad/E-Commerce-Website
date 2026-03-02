import Image from "next/image";
import Link from "next/link";
import { StarRating } from "@/components/ui";
import { formatPrice, calculateDiscount } from "@/lib/utils";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const discount = product.originalPrice
    ? calculateDiscount(product.price, product.originalPrice)
    : 0;

  return (
    <Link href={`/products/${product.id}`} className="group flex flex-col items-start w-full transition-all duration-500">
      <div className="relative w-full glass rounded-[24px] overflow-hidden aspect-square mb-5 group-hover:shadow-glass-hover group-hover:-translate-y-2 transition-all duration-500 ease-out">
        <Image
          src={product.images[0] || "/images/placeholder-product.png"}
          alt={product.name}
          fill
          className="object-cover object-center scale-100 group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        {/* Glass overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        {/* Floating discount badge */}
        {discount > 0 && (
          <div className="absolute top-3 right-3 bg-pink-500/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-pink-400/30 shadow-[0_0_15px_rgba(236,72,153,0.3)]">
            -{discount}%
          </div>
        )}
      </div>
      <h3 className="font-bold text-base md:text-lg text-white truncate w-full tracking-tight">{product.name}</h3>
      <div className="mt-1.5 opacity-90">
        <StarRating rating={product.rating} size={16} />
      </div>
      <div className="flex flex-wrap items-baseline gap-2.5 mt-2.5">
        <span className="font-black text-xl md:text-2xl text-white tracking-tight">
          {formatPrice(product.price)}
        </span>
        {product.originalPrice && product.originalPrice > product.price && (
          <>
            <span className="text-white/30 line-through text-base font-medium">
              {formatPrice(product.originalPrice)}
            </span>
          </>
        )}
      </div>
    </Link>
  );
}
