import Link from 'next/link';
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className='flex flex-col justify-center items-center p-12 bg-indigo-600 text-white'>
      <article className='m-5 text-white'>
        Don{"'"}t find fault, find a remedy; anybody can complain - Henry Ford
      </article>

      <article className='py-1 text-sm'>
        Created by me (©️ 2021) with Love,{' '}
        <Link href='https://nextjs.org'>
          <a className='underline text-gray-500'>Next.js</a>
        </Link>{' '}
        and{' '}
        <Link href='https://tailwindcss.com'>
          <a className='underline text-blue-400'>TailwindCSS</a>
        </Link>
      </article>

      <article className='text-sm'>
        <Link href='/imprint'>
          <a>Imprint | </a>
        </Link>
        Icons by{' '}
        <Link href='https://heroicons.com'>
          <a className='underline text-blue-400'>HeroIcons</a>
        </Link>
        {' '} | Bitcoin Icon by{' '}
        <Link href='https://bitcoinicons.com/'>
          <a className='underline text-blue-400'>Bitcoin Icons</a>
        </Link>
      </article>
    </footer>
  );
};

export default Footer;
