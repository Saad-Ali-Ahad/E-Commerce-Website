"use client";

import { useState, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, BadgeCheck } from "lucide-react";

interface CustomerReview {
  id: string;
  name: string;
  rating: number;
  text: string;
  verified: boolean;
}

const reviews: CustomerReview[] = [
  {
    id: "1",
    name: "Sarah M.",
    rating: 5,
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    verified: true,
  },
  {
    id: "2",
    name: "Alex K.",
    rating: 5,
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    verified: true,
  },
  {
    id: "3",
    name: "James L.",
    rating: 5,
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    verified: true,
  },
  {
    id: "4",
    name: "Mooen",
    rating: 5,
    text: "I'm absolutely delighted with every purchase I've made from Shop.co. The quality is outstanding, and the customer service team is always ready to help. Truly a 5-star experience!",
    verified: true,
  },
  {
    id: "5",
    name: "Linda W.",
    rating: 4,
    text: "Shop.co has become my go-to for all fashion needs. The clothes are trendy, well-made, and always arrive on time. Couldn't be happier with the experience!",
    verified: true,
  },
];

export default function CustomerReviews() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 380;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
    setTimeout(checkScroll, 350);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-6 py-20 lg:py-28">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 lg:mb-14 gap-6">
        <h2
          className="text-4xl md:text-5xl font-black uppercase tracking-tight text-gradient"
          style={{ fontFamily: "var(--font-display), sans-serif" }}
        >
          OUR HAPPY CUSTOMERS
        </h2>
        <div className="flex gap-3">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="w-12 h-12 flex items-center justify-center rounded-full glass disabled:opacity-30 disabled:hover:scale-100 hover:bg-white/15 hover:scale-105 active:scale-95 transition-all duration-300"
            aria-label="Previous reviews"
          >
            <ChevronLeft size={22} className="text-white" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="w-12 h-12 flex items-center justify-center rounded-full glass disabled:opacity-30 disabled:hover:scale-100 hover:bg-white/15 hover:scale-105 active:scale-95 transition-all duration-300"
            aria-label="Next reviews"
          >
            <ChevronRight size={22} className="text-white" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-6 overflow-x-auto scrollbar-hide pb-6 pt-2 -mx-4 px-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {reviews.map((review) => (
          <div
            key={review.id}
            className="flex-shrink-0 w-[340px] md:w-[410px] glass rounded-[28px] p-7 md:p-9 snap-start transition-all duration-500 hover:-translate-y-2 hover:shadow-glass-hover"
          >
            {/* Stars */}
            <div className="flex gap-1.5 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={
                    i < review.rating
                      ? "fill-amber-400 text-amber-400 drop-shadow-[0_0_4px_rgba(251,191,36,0.4)]"
                      : "fill-white/10 text-white/20"
                  }
                />
              ))}
            </div>
            {/* Name */}
            <div className="flex items-center gap-2 mb-3">
              <h3 className="font-bold text-lg text-white">{review.name}</h3>
              {review.verified && (
                <BadgeCheck size={20} className="text-emerald-400 fill-emerald-400" />
              )}
            </div>
            {/* Text */}
            <p className="text-base text-white/50 leading-relaxed font-medium">"{review.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}
