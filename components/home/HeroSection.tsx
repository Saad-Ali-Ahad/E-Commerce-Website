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
            <div className="grid grid-cols-2 sm:grid-cols-3 flex-wrap items-stretch gap-4 mt-12 lg:mt-16 w-full max-w-2xl mx-auto lg:mx-0">
              {[
                { value: "200+", label: "International Brands" },
                { value: "2,000+", label: "High-Quality Products" },
                { value: "30,000+", label: "Happy Customers", className: "col-span-2 sm:col-span-1" },
              ].map((stat) => (
                <div key={stat.label} className={`glass rounded-2xl px-5 py-4 text-center hover:-translate-y-1 hover:shadow-glass-hover transition-all duration-500 flex flex-col justify-center ${stat.className || ''}`}>
                  <p className="text-3xl md:text-[36px] font-black text-white tracking-tight leading-none">{stat.value}</p>
                  <p className="text-xs md:text-sm font-medium text-white/50 mt-2 leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — hero image border */}
          <div className="relative flex-1 w-full min-h-[450px] lg:min-h-[600px] flex items-center justify-center lg:justify-end pt-12 lg:pt-0 pb-10 lg:pb-0">
            {/* Glowing orbs behind model */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-purple-500/20 rounded-full blur-[100px] animate-pulse-glow"></div>
            <div className="absolute top-1/3 left-1/3 w-[200px] h-[200px] bg-blue-500/15 rounded-full blur-[60px] animate-float-slow"></div>

            {/* Hero image card */}
            <div className="relative w-full max-w-[420px] lg:max-w-[480px] aspect-[4/5] z-10 glass-strong p-3 md:p-4 rounded-[40px] md:rounded-[48px] shadow-[0_20px_60px_rgba(0,0,0,0.4)] transform hover:scale-[1.02] transition-transform duration-700">
              <div className="relative w-full h-full rounded-[32px] md:rounded-[36px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80"
                  alt="Fashion models wearing stylish clothes"
                  fill
                  className="object-cover object-center"
                  priority
                />
                {/* Internal gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
