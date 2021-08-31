import { FC } from 'react';
import CTA from '../components/home-page/CTA';
import Hero from '../components/home-page/Hero';
import Intro from '../components/home-page/Intro';
import Skills from '../components/home-page/Skills';

export const HomePage: FC = () => {
  return (
    <main className='pt-20'>
      <Hero />
      <Intro />
      <Skills />
      <CTA />
    </main>
  );
};

export default HomePage;
