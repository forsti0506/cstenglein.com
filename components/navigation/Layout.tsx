import Head from 'next/head';
import { FC } from 'react';
import Header from './Header';

const Layout: FC = (props) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Header />
      {props.children}
    </>
  );
};

export default Layout;
