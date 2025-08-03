import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTrendingMovies } from '../utils/movieSlice';

const useTrendingMovies = () => {
  const dispatch = useDispatch();

  const getTrendingMovies = async () => { 
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log("Trending movies fetched:", json.results);
    dispatch(addTrendingMovies(json.results));
  };

  useEffect(() => {
    getTrendingMovies(); 
  }, []);
};

export default useTrendingMovies;
