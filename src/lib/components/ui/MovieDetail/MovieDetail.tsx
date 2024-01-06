import { FC } from 'react';
import { useFetchMovieDetail } from 'lib/hooks';
import styles from './MovieDetail.module.scss';

interface MovieDetailProps {
  selectedMovieId: string;
}

export const MovieDetail: FC<MovieDetailProps> = ({ selectedMovieId }) => {
  const {
    movieDetail: {
      Title: title,
      Poster: poster,
      Released: released,
      Runtime: runTime,
      Genre: genre,
      imdbRating,
      Plot: plot,
      Director: director,
      Actors: actors
    }
  } = useFetchMovieDetail(selectedMovieId);

  return (
    <div className={styles.movieDetail}>
      <div className={styles.top}>
        <button className={styles.backBtn}>&larr;</button>
        <img src={poster} alt={`${title} poster`} />
        <div className={styles.description}>
          <h3>{title}</h3>
          <p className={styles.info}>
            {released}
            <span>&#x2022;</span>
            {runTime}
          </p>
          <p className={styles.genre}>{genre}</p>
          <p className={styles.imdbRating}>
            <span>⭐</span>
            {imdbRating} IMDdb rating
          </p>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>{plot}</p>
        <p>{actors}</p>
        <p>{director}</p>
      </div>
    </div>
  );
};
