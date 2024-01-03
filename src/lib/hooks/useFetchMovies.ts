import { useEffect, useState } from 'react';
import { MovieList } from 'lib/types';

export const useFetchMovies = (query: string) => {
  const [movieList, setMovieList] = useState<MovieList[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const KEY = import.meta.env.VITE_KEY;
    const controller = new AbortController();

    const fetchMovieList = async () => {
      try {
        setIsLoading(true);
        setErrorMessage('');
        const res = await fetch(`https://www.omdbapi.com/?apikey=${KEY}&s=${query}`, {
          signal: controller.signal
        });
        if (!res.ok) throw new Error('Sth went wrong');

        const { Search: search, response }: { Search: MovieList[]; response: string } =
          await res.json();
        if (response === 'False') throw new Error('Sth went wrong');

        setMovieList(search || []);

        setIsLoading(true);
      } catch (error) {
        setIsLoading(false);
        error instanceof Error && error.name !== 'AbortError' && setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    if (query.length <= 3) {
      setIsLoading(false);
      setErrorMessage('');
      return;
    }

    fetchMovieList();
    return () => controller.abort();
  }, [query]);

  return { movieList, isLoading, errorMessage };
};
