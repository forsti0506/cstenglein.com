import { FC } from 'react';
import Header from './Header';

const Layout: FC = (props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default Layout;
