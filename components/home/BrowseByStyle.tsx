import Link from "next/link";
import { DRESS_STYLES } from "@/lib/constants";

const styles = DRESS_STYLES.map((ds, i) => ({
  ...ds,
  span: ["col-span-1", "col-span-2", "col-span-2", "col-span-1"][i],
}));

export default function BrowseByStyle() {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-6 py-10 lg:py-16">
      <div className="glass-strong rounded-[40px] md:rounded-[48px] px-6 py-12 md:px-16 md:py-20 lg:py-24 overflow-hidden relative">
        {/* Decorative orbs */}
        <div className="orb orb-purple w-80 h-80 -top-20 -right-20 absolute"></div>
        <div className="orb orb-blue w-60 h-60 bottom-0 left-0 absolute"></div>

        <h2
          className="text-3xl md:text-5xl font-black text-center uppercase mb-12 lg:mb-16 tracking-tight text-gradient relative z-10"
          style={{ fontFamily: "var(--font-display), sans-serif" }}
        >
          BROWSE BY DRESS STYLE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 relative z-10">
          {styles.map((style) => (
            <Link
              key={style.slug}
              href={`/products?category=${style.slug}`}
              className={`relative rounded-[24px] md:rounded-[32px] overflow-hidden glass min-h-[220px] md:min-h-[300px] group hover:shadow-glass-hover hover:-translate-y-2 transition-all duration-500 ease-out ${style.span}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] opacity-60 group-hover:opacity-80"
                style={{
                  backgroundImage: `url(${style.image})`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/40 transition-colors duration-500"></div>
              <div className="relative z-10 p-7 md:p-9 pt-8 md:pt-10 h-full flex flex-col justify-end">
                <h3 className="text-[28px] md:text-4xl font-bold tracking-tight text-white drop-shadow-lg">{style.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
