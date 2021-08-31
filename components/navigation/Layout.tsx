import { FC } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout: FC = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
