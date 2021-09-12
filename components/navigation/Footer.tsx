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
        <Link href='https://nextjs.org'>
          <a className='underline text-blue-200'>Next.js</a>
        </Link>{' '}
        and{' '}
        <Link href='https://tailwindcss.com'>
          <a className='underline text-blue-200'>TailwindCSS</a>
        </Link>
      </article>

      <article className='text-sm text-center'>
        <Link href='/imprint'>
          <a className='underline text-blue-200'>Imprint</a>
        </Link>{' '}
        | Icons by{' '}
        <Link href='https://heroicons.com'>
          <a className='underline text-blue-200'>HeroIcons</a>
        </Link>{' '}
        | Bitcoin Icon by{' '}
        <Link href='https://bitcoinicons.com/'>
          <a className='underline text-blue-200'>Bitcoin Icons</a>
        </Link>
      </article>
    </footer>
  );
};

export default Footer;
