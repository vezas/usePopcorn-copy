import { FC, useState } from 'react';
import { useFetchMovieDetail } from 'lib/hooks';
import styles from './MovieDetail.module.scss';
import { StarRating } from 'lib/components';

interface MovieDetailProps {
  selectedMovieId: string;
}

export const MovieDetail: FC<MovieDetailProps> = ({ selectedMovieId }) => {
  const [rate, setRate] = useState(0);

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
        <StarRating stars={10} rate={rate} setRate={setRate} />
        <p>{plot}</p>
        <p>{actors}</p>
        <p>{director}</p>
      </div>
    </div>
  );
};
