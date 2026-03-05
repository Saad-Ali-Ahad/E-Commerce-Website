import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-20 lg:pb-24">
      {/* Background orbs */}
      <div className="orb orb-purple w-[500px] h-[500px] top-0 -left-40 absolute"></div>
      <div className="orb orb-blue w-[400px] h-[400px] top-20 right-0 absolute"></div>
      <div className="orb orb-pink w-[300px] h-[300px] bottom-0 left-1/3 absolute"></div>

      <div className="max-w-7xl mx-auto px-4 lg:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Left column */}
          <div className="flex-1 text-center lg:text-left">
            <h1
              className="text-[40px] sm:text-6xl lg:text-[76px] font-black leading-[1.05] uppercase tracking-tighter text-gradient"
              style={{ fontFamily: "var(--font-display), sans-serif" }}
            >
              FIND CLOTHES
              <br />
              THAT MATCHES
              <br />
              <span className="text-white">YOUR STYLE</span>
            </h1>
            <p className="text-white/50 mt-6 mb-10 max-w-lg mx-auto lg:mx-0 text-base leading-relaxed font-medium">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense of
              style.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center justify-center btn-gradient rounded-full px-12 py-4 text-[15px] font-semibold hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
            >
              Shop Now
            </Link>

            {/* Stats - Glass cards */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-6 mt-16 max-w-2xl mx-auto lg:mx-0">
              {[
                { value: "200+", label: "International Brands" },
                { value: "2,000+", label: "High-Quality Products" },
                { value: "30,000+", label: "Happy Customers" },
              ].map((stat) => (
                <div key={stat.label} className="glass rounded-2xl px-6 py-4 text-center lg:text-left hover:-translate-y-1 transition-all duration-500">
                  <p className="text-3xl sm:text-[40px] font-black text-white tracking-tight">{stat.value}</p>
                  <p className="text-sm font-medium text-white/40 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — hero image */}
          <div className="relative flex-1 w-full min-h-[450px] lg:min-h-[600px] flex items-center justify-center pt-8 lg:pt-0">
            {/* Glowing orbs behind model */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] bg-purple-500/20 rounded-full blur-[100px] animate-pulse-glow"></div>
            <div className="absolute top-1/3 left-1/3 w-[200px] h-[200px] bg-blue-500/15 rounded-full blur-[60px] animate-float-slow"></div>

            {/* Hero image */}
            <div className="relative w-full h-full flex items-end justify-center z-10">
              <Image
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80"
                alt="Fashion models wearing stylish clothes"
                width={600}
                height={600}
                className="object-contain object-bottom drop-shadow-[0_20px_60px_rgba(139,92,246,0.3)]"
                priority
              />
            </div>

            {/* Floating glass decorative elements */}
            <div className="absolute top-20 right-10 glass rounded-2xl px-4 py-3 animate-float hidden lg:block">
              <p className="text-xs font-bold text-white/70">✨ New Season</p>
            </div>
            <div className="absolute bottom-32 left-5 glass rounded-2xl px-4 py-3 animate-float-slow hidden lg:block">
              <p className="text-xs font-bold text-white/70">🔥 Trending</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
