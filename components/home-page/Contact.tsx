import Link from 'next/link';
import { FC } from 'react';

const Contact: FC = () => {
  return (
    <div className='bg-indigo-600'>
      <section className='rounded-xl shadow-md bg-white text-black flex justify-center flex-col mx-5 xl:w-2/3 xl:mx-auto'>
        <h4 className='my-10 text-2xl font-bold text-center'>Contact me</h4>
        <ul className='list-none flex flex-col lg:flex-row items-center text-center justify-center pb-10 gap-3'>
          <li>
            <Link href='https://www.linkedin.com/in/christoph-tobias-stenglein-236453113/'>
              <a className='contact-link' target='_blank' rel='noopener noreferrer'>
                LinkedIn
              </a>
            </Link>
          </li>
          <li>
            <Link href='https://github.com/cstenglein'>
              <a className='contact-link' target='_blank' rel='noopener noreferrer'>
                GitHub
              </a>
            </Link>
          </li>
          <li>
            <Link href='https://www.xing.com/profile/ChristophTobias_Stenglein/cv'>
              <a className='contact-link' target='_blank' rel='noopener noreferrer'>
                XING
              </a>
            </Link>
          </li>
          <li>
            <Link href='https://twitter.com/_cstenglein_'>
              <a className='contact-link' target='_blank' rel='noopener noreferrer'>
                Twitter
              </a>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Contact;
