import { useState } from 'react';
import { MovieItem } from 'lib/components/ui/MovieItem';
import { Box, Layout, Loadable } from 'lib/components/ui';
import { useFetchMovies } from 'lib/hooks';

export const App = () => {
  const [query, setQuery] = useState('');

  const { movieList, isLoading, errorMessage } = useFetchMovies(query);

  const handleQuery = (query: string) => setQuery(query);

  return (
    <Layout handleQuery={handleQuery}>
      <Box>
        <>
          {isLoading ? (
            <Loadable message='Loading...' />
          ) : !isLoading && errorMessage ? (
            <Loadable message={errorMessage} />
          ) : (
            movieList.map((movie) => <MovieItem key={movie.imdbID} movie={movie} />)
          )}
        </>
      </Box>
      <Box>
        <></>
      </Box>
    </Layout>
  );
};
