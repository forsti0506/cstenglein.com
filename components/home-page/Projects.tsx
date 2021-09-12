import { FC } from 'react';

const Projects: FC = () => {
  return (
    <section className='bg-indigo-600 py-5 text-white text-center'>
      <h2 className='text-3xl'>Projects</h2>
      <article className='container flex flex-col lg:flex-row justify-center p-4 mx-auto gap-3'>
        <article className='lg:w-1/3 bg-white text-black rounded p-5'>Raspiblitz-web</article>
        <article className='lg:w-1/3 bg-white text-black rounded p-5'>This Website ;)</article>
      </article>
    </section>
  );
};

export default Projects;
