import { generateStarArray } from "@/lib/utils";
import { Star, StarHalf } from "lucide-react";

interface StarRatingProps {
  rating: number;
  size?: number;
  showValue?: boolean;
}

export default function StarRating({ rating, size = 18, showValue = true }: StarRatingProps) {
  const stars = generateStarArray(rating);

  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {stars.map((type, i) => {
          if (type === "full")
            return (
              <Star
                key={i}
                size={size}
                className="fill-amber-400 text-amber-400 drop-shadow-[0_0_4px_rgba(251,191,36,0.4)]"
              />
            );
          if (type === "half")
            return (
              <StarHalf
                key={i}
                size={size}
                className="fill-amber-400 text-amber-400 drop-shadow-[0_0_4px_rgba(251,191,36,0.4)]"
              />
            );
          return (
            <Star key={i} size={size} className="fill-white/10 text-white/20" />
          );
        })}
      </div>
      {showValue && (
        <span className="text-sm text-white/90 ml-1">
          {rating}
          <span className="text-white/40">/5</span>
        </span>
      )}
    </div>
  );
}
