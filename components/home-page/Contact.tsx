import { FC } from 'react';

const Contact: FC = () => {
  return (
    <section className='bg-indigo-600 py-5'>
      <section className='flex flex-col justify-center mx-5 xl:w-2/3 xl:mx-auto rounded-xl shadow-md bg-white text-black'>
        <h3 className='my-10 text-2xl font-bold text-center'>Contact me</h3>
        <article className='list-none flex flex-col lg:flex-row items-center text-center justify-center pb-10 px-4 gap-3'>
          <a
            className='contact-link'
            href='https://www.linkedin.com/in/christoph-tobias-stenglein-236453113/'
            target='_blank'
            rel='noopener noreferrer'
          >
            LinkedIn
          </a>

          <a className='contact-link' href='https://github.com/cstenglein' target='_blank' rel='noopener noreferrer'>
            GitHub
          </a>
          <a
            className='contact-link'
            href='https://www.xing.com/profile/ChristophTobias_Stenglein/cv'
            target='_blank'
            rel='noopener noreferrer'
          >
            XING
          </a>
          <a className='contact-link' href='https://twitter.com/_cstenglein_' target='_blank' rel='noopener noreferrer'>
            Twitter
          </a>
        </article>
      </section>
    </section>
  );
};

export default Contact;
