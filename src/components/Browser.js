import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browser = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();

  return (
    <div className="bg-black text-white">
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browser;
