import { Box, Layout } from 'lib/components/ui';
import { MovieItem } from 'lib/components/ui/MovieItem';
import { useEffect, useState } from 'react';

const KEY = 'efab1932';

export const App = () => {
  const [query, setQuery] = useState('');
  const [movieList, setMovieList] = useState([]);

  const handleQuery = (query: string) => setQuery(query);

  useEffect(() => {
    const controller = new AbortController();

    const fetchMovieList = async () => {
      const res = await fetch(`https://www.omdbapi.com/?apikey=${KEY}&s=${query}`, {
        signal: controller.signal
      });
      const data = await res.json();
      setMovieList(data.Search);
    };

    fetchMovieList();

    return () => controller.abort();
  }, [query]);

  return (
    <Layout handleQuery={handleQuery}>
      <Box>
        {movieList.map((movie) => (
          <MovieItem movie={movie} />
        ))}
      </Box>
      <Box>box2</Box>
    </Layout>
  );
};
