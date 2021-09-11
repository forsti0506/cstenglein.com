import '../styles/globals.css';
import '../styles/animations.css';

import type { AppProps } from 'next/app';
import Layout from '../components/navigation/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
