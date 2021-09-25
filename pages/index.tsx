import Head from 'next/head';
import { FC } from 'react';
import Contact from '../components/home-page/Contact';
import Hero from '../components/home-page/Hero';
import Projects from '../components/home-page/Projects';
import Skills from '../components/home-page/Skills';
import Footer from '../components/navigation/Footer';

export const HomePage: FC = () => {
  return (
    <main className='mt-20 block'>
      <Head>
        <title>Christoph Stenglein - Full Stack Developer</title>
      </Head>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default HomePage;
