import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;
  console.log("Rendering MovieList: ", title);

  return (         
    <div className="px-4 py-6 bg-black">
      <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
        {title}
      </h2>
      <div className="flex overflow-x-auto gap-4 scrollbar-hide">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            posterPath={movie.poster_path}
            title={movie.title || movie.original_title}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
