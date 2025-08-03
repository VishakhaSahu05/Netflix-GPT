import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from '../utils/movieSlice';

const VideoBackground = ({ id }) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useEffect(() => {
    const getMovieVideos = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();
      const trailer = json.results?.find(
        (video) =>
          video.type === "Trailer" &&
          video.site === "YouTube"
      );
      dispatch(addTrailerVideo(trailer));
    };

    if (id) getMovieVideos();
  }, [id, dispatch]);

  if (!trailerVideo) return null;

  return (
    <div className="w-full aspect-video">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo.key}`}
        title="YouTube video player"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  );
};

export default VideoBackground;
