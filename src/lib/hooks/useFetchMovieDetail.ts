import { MovieDetail } from 'lib/types';
import { useEffect, useState } from 'react';

export const useFetchMovieDetail = (id: string) => {
  const [movieDetail, setMovieDetail] = useState<MovieDetail | Record<string, never>>({});

  useEffect(() => {
    const KEY: string = import.meta.env.VITE_KEY;
    const fetchMovieDetail = async () => {
      const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${id}`);
      const data: MovieDetail = await res.json();
      setMovieDetail(data);
    };

    fetchMovieDetail();
  }, [id]);

  return { movieDetail };
};
