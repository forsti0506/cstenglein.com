import { FC } from 'react';
import Contact from '../components/home-page/Contact';
import Hero from '../components/home-page/Hero';
import Intro from '../components/home-page/Intro';
import Skills from '../components/home-page/Skills';
import Footer from '../components/navigation/Footer';

export const HomePage: FC = () => {
  return (
    <main className='mt-20 block'>
      <Hero />
      <Intro />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
};

export default HomePage;
