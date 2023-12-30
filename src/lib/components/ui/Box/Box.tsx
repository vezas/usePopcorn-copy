import { FC, ReactNode } from 'react';
import styles from './Box.module.scss';

interface BoxProps {
  children: ReactNode;
}

export const Box: FC<BoxProps> = ({ children }) => {
  return <section className={styles.box}>{children}</section>;
};
