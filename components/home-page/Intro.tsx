import { FC } from 'react';

const Intro: FC = () => {
  return (
    <section className='flex justify-center px-4 md:h-1/2 items-center xl:w-1/2 mx-auto pb-20'>
      <div className='flex justify-center flex-col px-2 border-2 border-gray-300 pt-12 pb-10 shadow-md rounded-xl'>
        <h2 className='text-3xl font-extrabold pb-5'>
          Hi, I{"'"}m Christoph!{' '}
          <div id='waving' className='inline-block'>
            👋
          </div>
        </h2>
        <article className='text-lg'>
          <div className='pb-0.5'>I am a full-stack web developer passionate about what I do.</div>
          <div>My strength is the front-end, but I also got decent back-end skills.</div>
          <div className='pb-0.5'>
            If you are interested in my open source work, you can find it on my{' '}
            <a
              className='underline text-white'
              href='https://github.com/cstenglein'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github
            </a>{' '}
            page.
          </div>
          <div className='pt-4'>
            Otherwise, scroll down to find out more{' '}
            <div id='down' className='inline-block'>
              👇
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Intro;
