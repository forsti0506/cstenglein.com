import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const Header: FC = () => {
  return (
    <header className='fixed top-0 bg-white h-20 px-5 w-full flex items-center justify-between z-10 shadow-md'>
      <div className='flex container'>
        <Link href='/' passHref>
          <a title='Home'>
            <Image src='/icons/home.svg' alt='An icon showing a house' width={35} height={35} />
          </a>
        </Link>
      </div>
      <nav>
        <ul className='flex items-center list-none'>
          <li className='header-link'>
            <Link href='/contact'>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
