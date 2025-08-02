import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = () => {
  const dispatch = useDispatch();
  const mainMovie = useSelector((store) => store.movies?.nowPlayingMovies?.[0]);

  useEffect(() => {
    const getMovieVideos = async () => {
      if (!mainMovie) return;

      try {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${mainMovie.id}/videos?language=en-US`,
          API_OPTIONS
        );
        const json = await data.json();

        const trailer = json.results.find(
          (video) => video.name === "Official Trailer" && video.site === "YouTube"
        );

        if (trailer) dispatch(addTrailerVideo(trailer));
      } catch (err) {
        console.error("Failed to fetch trailer:", err);
      }
    };

    getMovieVideos();
  }, [mainMovie, dispatch]);
};

export default useMovieTrailer;
