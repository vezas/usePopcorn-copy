import { useState } from 'react';
import { MovieItem } from 'lib/components/ui/MovieItem';
import { Box, Layout, Loadable, MovieDetail } from 'lib/components/ui';
import { useFetchMovies } from 'lib/hooks';

export const App = () => {
  const [query, setQuery] = useState('interstellar');
  const [selectedMovieId, setSelectedMovieId] = useState('');

  const { movieList, isLoading, errorMessage } = useFetchMovies(query);

  const handleQuery = (query: string) => setQuery(query);

  const handleChooseMovie = (id: string) => setSelectedMovieId(id);

  return (
    <Layout handleQuery={handleQuery}>
      <Box>
        <>
          {isLoading ? (
            <Loadable message='Loading...' />
          ) : !isLoading && errorMessage ? (
            <Loadable message={errorMessage} />
          ) : (
            movieList.map((movie) => (
              <MovieItem key={movie.imdbID} movie={movie} handleChooseMovie={handleChooseMovie} />
            ))
          )}
        </>
      </Box>
      <Box>{selectedMovieId && <MovieDetail selectedMovieId={selectedMovieId} />}</Box>
    </Layout>
  );
};
