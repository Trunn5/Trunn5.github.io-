import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    // className={styles.container}
    <div >
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
