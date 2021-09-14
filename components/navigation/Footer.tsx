import Link from 'next/link';
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className='flex flex-col justify-center items-center p-6 bg-indigo-600 text-white border-t border-white'>
      <article className='p-6 text-white italic'>
        Don{"'"}t find fault, find a remedy; anybody can complain - Henry Ford
      </article>

      <article className='py-1 text-sm text-center'>
        Created by me (© 2021) with Love,{' '}
        <a className='underline text-blue-200' href='https://nextjs.org' target='_blank' rel='noopener noreferrer'>
          Next.js
        </a>{' '}
        and{' '}
        <a className='underline text-blue-200' href='https://tailwindcss.com' target='_blank' rel='noopener noreferrer'>
          TailwindCSS
        </a>
      </article>

      <article className='text-sm text-center'>
        <Link href='/imprint'>
          <a className='underline text-blue-200'>Imprint</a>
        </Link>{' '}
        | Icons by{' '}
        <a className='underline text-blue-200' href='https://heroicons.com' target='_blank' rel='noopener noreferrer'>
          HeroIcons
        </a>{' '}
        | Bitcoin Icon by{' '}
        <a
          className='underline text-blue-200'
          href='https://bitcoinicons.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Bitcoin Icons
        </a>
      </article>
    </footer>
  );
};

export default Footer;
