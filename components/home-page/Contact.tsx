import Link from 'next/link';
import { FC } from 'react';

const Contact: FC = () => {
  return (
    <div className='bg-indigo-600'>
      <section className='flex flex-col justify-center mx-5 xl:w-2/3 xl:mx-auto rounded-xl shadow-md bg-white text-black'>
        <h4 className='my-10 text-2xl font-bold text-center'>Contact me</h4>
        <article className='list-none flex flex-col lg:flex-row items-center text-center justify-center pb-10 px-4 gap-3'>
          <Link href='https://www.linkedin.com/in/christoph-tobias-stenglein-236453113/' passHref>
            <button className='contact-link'>
              <a target='_blank' rel='noopener noreferrer'>
                LinkedIn
              </a>
            </button>
          </Link>
          <Link href='https://github.com/cstenglein' passHref>
            <button className='contact-link'>
              <a target='_blank' rel='noopener noreferrer'>
                GitHub
              </a>
            </button>
          </Link>
          <Link href='https://www.xing.com/profile/ChristophTobias_Stenglein/cv' passHref>
            <button className='contact-link'>
              <a target='_blank' rel='noopener noreferrer'>
                XING
              </a>
            </button>
          </Link>
          <Link href='https://twitter.com/_cstenglein_' passHref>
            <button className='contact-link'>
              <a target='_blank' rel='noopener noreferrer'>
                Twitter
              </a>
            </button>
          </Link>
        </article>
      </section>
    </div>
  );
};

export default Contact;
