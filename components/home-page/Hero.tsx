import { FC } from 'react';
import Image from 'next/image';

const Hero: FC = () => {
  return (
    <section className='pt-20 pb-10 text-center flex justify-center text-white bg-blue-600'>
      <div className='container'>
        <h1 className='text-5xl font-extrabold mb-6'>Christoph Stenglein</h1>
        <h2 className='text-xl mb-6'>Frontend - Backend - Web</h2>
        <div className='flex justify-center mt-6'>
          <Image
            src='/images/me_small.jpg'
            alt='An Image showing Christoph'
            width={200}
            height={200}
            className='rounded-full'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
