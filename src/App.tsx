import { Box, Layout } from 'lib/components/ui';
import { MovieItem } from 'lib/components/ui/MovieItem';
import { MovieList } from 'lib/types';
import { useEffect, useState } from 'react';

const KEY = 'efab1932';

export const App = () => {
  const [query, setQuery] = useState('');
  const [movieList, setMovieList] = useState<MovieList[]>([]);

  const handleQuery = (query: string) => setQuery(query);

  useEffect(() => {
    if (query.length <= 3) return;

    const controller = new AbortController();

    const fetchMovieList = async () => {
      const res = await fetch(`https://www.omdbapi.com/?apikey=${KEY}&s=${query}`, {
        signal: controller.signal
      });
      const { Search: data }: { Search: MovieList[] } = await res.json();
      setMovieList(data || []);
    };

    fetchMovieList();

    return () => controller.abort();
  }, [query]);

  return (
    <Layout handleQuery={handleQuery}>
      <Box>
        {movieList.map((movie) => (
          <MovieItem key={movie.imdbID} movie={movie} />
        ))}
      </Box>
      <Box>box2</Box>
    </Layout>
  );
};
