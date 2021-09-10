import Link from 'next/link';
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className='flex flex-col justify-center items-center py-4'>
      <article>Don&apos;t find fault, find a remedy; anybody can complain - Henry Ford</article>

      <article>Made by me (©️ 2021) with Love, Next.js and TailwindCSS</article>

      <article>
        <Link href='/imprint'>
          <a>Imprint | </a>
        </Link>
        Icons by
        <Link href='https://heroicons.com/'>
          <a>HeroIcons</a>
        </Link>
      </article>
    </footer>
  );
};

export default Footer;
