import { FC } from 'react';
import Image from 'next/image';
import Intro from './Intro';

const Hero: FC = () => {
  return (
    <section className='pt-10 content-container text-center flex justify-center text-white bg-gradient-to-tr from-indigo-700 to-indigo-500'>
      <div className='container'>
        <div className='md:h-1/2 flex flex-col items-center'>
          <h1 className='text-5xl font-extrabold mb-8'>Christoph Stenglein</h1>
          <h2 className='text-2xl mb-10'>Frontend - Backend - Web</h2>
          <div className='pb-10'>
            <Image
              src='/images/me_small.jpg'
              alt='An Image showing Christoph'
              width={200}
              height={200}
              className='rounded-full'
            />
          </div>
        </div>
        <Intro />
      </div>
    </section>
  );
};

export default Hero;
