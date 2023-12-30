import { FC } from 'react';
import { MovieList } from 'lib/types';
import NoPhotoIcon from 'assets/no-image.svg?react';
import styles from './MovieItem.module.scss';

interface MovieItemProps {
  movie: MovieList;
}

export const MovieItem: FC<MovieItemProps> = ({ movie }) => {
  const { Poster: poster, Title: title, Year: year } = movie;

  return (
    <div className={styles.movieItem}>
      {poster !== 'N/A' ? <img src={poster} alt='' /> : <NoPhotoIcon />}
      <h2>{title}</h2>
      <p>{year}</p>
    </div>
  );
};
