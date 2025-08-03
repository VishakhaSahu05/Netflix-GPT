import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath, title }) => {
  if (!posterPath) return null;

  return (
    <div className="min-w-[180px] md:min-w-[200px] text-white">
      <img
        src={IMG_CDN + posterPath}
        alt={title}
        className="w-full h-[280px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
      />
      <p className="mt-2 text-sm text-center line-clamp-2">{title}</p>
    </div>
  );
};

export default MovieCard;
