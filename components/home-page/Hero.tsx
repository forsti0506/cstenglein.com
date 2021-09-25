import { FC } from 'react';
import Image from 'next/image';
import Intro from './Intro';

const Hero: FC = () => {
  return (
    <section className='content-container flex justify-center pt-10 text-center text-white bg-gradient-to-tr from-indigo-600 to-indigo-400'>
      <div className='container mt-20'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-5xl font-extrabold mb-8'>Christoph Stenglein</h1>
          <h2 className='text-2xl'>Frontend - Backend - Web</h2>
        </div>
        <div className='flex justify-center my-10'>
          <Image
            src='/images/me_small.jpg'
            alt='An Image showing Christoph'
            width={270}
            height={270}
            className='rounded-full'
          />
        </div>
        <Intro />
      </div>
    </section>
  );
};

export default Hero;
