import Link from 'next/link';
import { FC } from 'react';
import { useContact } from '../../hooks/useContact';

const Header: FC = () => {
  const { link, clickHandler } = useContact();

  return (
    <header className='fixed top-0 bg-white h-20 px-5 w-full flex items-center justify-between z-10 shadow-md'>
      <Link href='/' passHref>
        <a title='Home' className='header-link'>
          Home
        </a>
      </Link>
      <nav>
        <ul className='flex items-center list-none'>
          <li className='header-link'>
            <a href={link} onClick={clickHandler}>
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
