import { ChangeEvent, FC } from 'react';
import styles from './Header.module.scss';

interface HeaderProps {
  handleQuery: (query: string) => void;
}

export const Header: FC<HeaderProps> = ({ handleQuery }) => {
  const onHandleQuery = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    handleQuery(e.target.value);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.nav__logo}>
        <span role='img'>🍿</span>
        <h1>usePopcorn</h1>
      </div>
      <form className={styles.nav__form}>
        <input placeholder='Search movies...' onChange={onHandleQuery} />
      </form>
      <div className={styles.nav__result}>
        <p>
          Found <span>X</span> results
        </p>
      </div>
    </nav>
  );
};
