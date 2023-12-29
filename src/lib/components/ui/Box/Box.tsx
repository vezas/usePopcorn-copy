import { FC } from 'react';
import styles from './Box.module.scss';

interface BoxProps {}

export const Box: FC<BoxProps> = () => {
  return <section className={styles.box}></section>;
};
