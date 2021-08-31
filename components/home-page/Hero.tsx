import { FC } from 'react';
import Image from 'next/image';

const Hero: FC = () => {
  return (
    <section className='my-20 text-center bg-white flex justify-center'>
      <div className='container'>
        <h1 className='text-5xl font-extrabold mb-6'>Hi, I&apos;m Christoph</h1>
        <h2 className='text-xl mb-6'>I&apos;m a full-stack web developer</h2>
        <div className='flex justify-center mt-6'>
          <Image
            src='/images/me_small.jpg'
            alt='An Image showing Christoph'
            width={200}
            height={200}
            className='rounded-full my-6'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
