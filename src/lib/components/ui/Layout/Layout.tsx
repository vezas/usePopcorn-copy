import { FC, ReactNode } from 'react';
import { Header } from 'lib/components/ui/Header';
import styles from './Layout.module.scss';

interface LayoutProps {
  children: ReactNode;
  handleQuery: (query: string) => void;
}

export const Layout: FC<LayoutProps> = ({ children, handleQuery }) => {
  return (
    <>
      <Header handleQuery={handleQuery} />
      <main className={styles.main}>{children}</main>
    </>
  );
};
