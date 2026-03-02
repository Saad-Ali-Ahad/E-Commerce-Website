import { BRAND_LOGOS } from "@/lib/constants";
import Image from "next/image";

export default function BrandsStrip() {
  return (
    <section className="relative py-8 lg:py-10 overflow-hidden glass-dark">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 flex flex-wrap items-center justify-center gap-10 md:gap-20">
        {BRAND_LOGOS.map((brand) => (
          <div key={brand.name} className="flex-shrink-0 group">
            <Image
              src={brand.src}
              alt={brand.name}
              width={140}
              height={36}
              className="h-7 md:h-9 w-auto brightness-0 invert opacity-30 group-hover:opacity-70 transition-all duration-500 group-hover:drop-shadow-[0_0_10px_rgba(167,139,250,0.3)]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
