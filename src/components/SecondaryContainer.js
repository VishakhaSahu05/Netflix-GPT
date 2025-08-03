import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
       <div className="mt-0 pl-0 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies.TrendingMovies} />
          <MovieList title={"Popular"} movies={movies.PopularMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
