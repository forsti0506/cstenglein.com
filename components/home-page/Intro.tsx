import { FC } from 'react';
import Link from 'next/link';

const Intro: FC = () => {
  return (
    <section className='flex justify-center text-center bg-blue-600 text-white py-10'>
      <div className='container flex justify-center flex-col'>
        <h2 className='text-3xl mb-9 font-extrabold'>
          Hi, I&apos;m Christoph!{' '}
          <div id='waving' className='inline-block'>
            👋
          </div>
        </h2>
        <article className='text-center'>
          I am a full-stack web developer passionate about what I do. My stength is the front-end, but I also got decent
          back-end skills. If you are interested in my open source work, you can find it on my{' '}
          <Link href='https://github.com/cstenglein'>
            <a>Github</a>
          </Link>{' '}
          page. I am naturally curious and always eager to learn new things.
        </article>
      </div>
    </section>
  );
};

export default Intro;
