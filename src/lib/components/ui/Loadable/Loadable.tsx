import { FC } from 'react';
import styles from './Loadable.module.scss';

interface LoadableProps {
  message: string;
}

export const Loadable: FC<LoadableProps> = ({ message }) => {
  return <p className={styles.message}>{message}</p>;
};
