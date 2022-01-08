import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBNowPlaying} from '../interfaces/MovieDBInterface';

export const useMovies = () => {
  const [loading, setLoading] = useState<Boolean>(true);
  const [peliculasActuales, setPeliculasActuales] = useState<Movie[]>([]);

  const getMoviesNow = async () => {
    const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
    setPeliculasActuales(resp.data.results);
    setLoading(false);
  };

  useEffect(() => {
    getMoviesNow();
  }, []);

  return {
    loading,
    peliculasActuales,
  };
};