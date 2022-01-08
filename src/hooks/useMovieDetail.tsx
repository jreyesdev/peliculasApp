import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Cast, CreditsResponse} from '../interfaces/CreditsInterface';
import {MovieFull} from '../interfaces/MovieDBInterface';

interface MovieDetails {
  loading: boolean;
  movieFull?: MovieFull;
  cast: Cast[];
}

const useMovieDetail = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    loading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetail = async () => {
    const [detailResp, castResp] = await Promise.all([
      movieDB.get<MovieFull>(`/${movieId}`),
      movieDB.get<CreditsResponse>(`/${movieId}/credits`),
    ]);
    setState({
      loading: false,
      movieFull: detailResp.data,
      cast: castResp.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {...state};
};

export default useMovieDetail;
