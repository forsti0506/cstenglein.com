import { FC } from 'react';
import Contact from '../components/home-page/Contact';
import Hero from '../components/home-page/Hero';
import Projects from '../components/home-page/Projects';
import Skills from '../components/home-page/Skills';
import Footer from '../components/navigation/Footer';

export const HomePage: FC = (props) => {
  return (
    <main className='mt-20 block'>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default HomePage;
