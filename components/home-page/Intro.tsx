import { FC } from 'react';

const Intro: FC = () => {
  return (
    <section className='flex justify-center text-center bg-blue-600 text-white py-10'>
      <div className='container'>
        <h2 className='text-lg'>What I do</h2>
        <article>I do stuff</article>
      </div>
    </section>
  );
};

export default Intro;
