import Image from 'next/image';
import { FC } from 'react';

const Projects: FC = () => {
  return (
    <section className='bg-indigo-600 py-5 text-white text-center'>
      <h2 className='text-3xl my-5'>Projects</h2>
      <article className='container flex flex-col lg:flex-row justify-center p-4 mx-auto gap-3'>
        <article className='lg:w-1/3 bg-white text-black rounded p-5 flex items-center flex-col'>
          <h2 className='py-3 text-lg font-bold'>Raspiblitz-web</h2>
          <div className='py-2'>
            A WebUI for the{' '}
            <a
              className='underline text-indigo-600'
              href='https://github.com/rootzoll/raspiblitz'
              target='_blank'
              rel='noopener noreferrer'
            >
              RaspiBlitz
            </a>{' '}
            project.
          </div>
          <div className='py-2'>Written with React {'&'} TailwindCSS.</div>
          <div className='m-auto my-3 p-3 border border-indigo-600 hover:shadow-lg hover:bg-indigo-600 hover:text-white rounded'>
            <a
              className='flex'
              href='https://github.com/cstenglein/raspiblitz-web'
              target='_blank'
              rel='noopener noreferrer'
            >
              Go to Project&nbsp;
              <Image className='' alt='External Link Icon' src='/icons/link.svg' width={18} height={18} />
            </a>
          </button>
        </article>
        <article className='lg:w-1/3 bg-white text-black rounded p-5 flex justify-center flex-col'>
          <h2 className='py-3 text-lg font-bold'>This Website ;)</h2>
          <div className='py-2'>The website you can see here.</div>
          <div className='py-2'>Written with Next.js {'&'} TailwindCSS</div>
          <div className='mx-auto my-3 p-3 border border-indigo-600 hover:shadow-lg hover:bg-indigo-600 hover:text-white rounded'>
            <a
              className='flex'
              href='https://github.com/cstenglein/cstenglein.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              Go to Project&nbsp;
              <Image className='' alt='External Link Icon' src='/icons/link.svg' width={18} height={18} />
            </a>
          </button>
        </article>
      </article>
    </section>
  );
};

export default Projects;
