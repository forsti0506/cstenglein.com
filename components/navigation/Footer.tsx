import Link from 'next/link';
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className='flex flex-col justify-center items-center py-4'>
      <article className='m-5 font-serif text-gray-600'>
        Don{"'"}t find fault, find a remedy; anybody can complain - Henry Ford
      </article>

      <article className='py-1'>
        Made by me (©️ 2021) with Love,{' '}
        <Link href='https://nextjs.org'>
          <a className='underline text-blue-400'>Next.js</a>
        </Link>{' '}
        and{' '}
        <Link href='https://tailwindcss.com'>
          <a className='underline text-blue-400'>TailwindCSS</a>
        </Link>
      </article>

      <article>
        <Link href='/imprint'>
          <a>Imprint | </a>
        </Link>
        Icons by{' '}
        <Link href='https://heroicons.com'>
          <a className='underline text-blue-400'>HeroIcons</a>
        </Link>
      </article>
    </footer>
  );
};

export default Footer;
