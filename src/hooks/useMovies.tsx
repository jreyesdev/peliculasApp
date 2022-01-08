import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDbResponse} from '../interfaces/MovieDBInterface';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upComing: Movie[];
}

export const useMovies = () => {
  const [loading, setLoading] = useState<Boolean>(true);
  const [moviesState, setMovies] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upComing: [],
  });

  const getMovies = async () => {
    const resp = await Promise.all([
      movieDB.get<MovieDbResponse>('/now_playing'),
      movieDB.get<MovieDbResponse>('/popular'),
      movieDB.get<MovieDbResponse>('/top_rated'),
      movieDB.get<MovieDbResponse>('/upcoming'),
    ]);
    setMovies({
      nowPlaying: resp[0].data.results,
      popular: resp[1].data.results,
      topRated: resp[2].data.results,
      upComing: resp[3].data.results,
    });
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    ...moviesState,
    loading,
  };
};
