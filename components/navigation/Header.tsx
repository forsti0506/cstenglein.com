import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const Header: FC = () => {
  const linkClasses = 'px-2 text-md lg:text-lg font-bold text-blue-500 hover:text-blue-700';

  return (
    <header className='fixed h-20 px-5 w-full flex items-center justify-between z-10 shadow-md'>
      <div className='flex container'>
        <Link href='/' passHref>
          <a>
            <Image
              src='/images/me_small.jpg'
              alt='An image showing Christoph'
              width={50}
              height={50}
              className='rounded-3xl'
            />
          </a>
        </Link>
      </div>
      <nav>
        <ul className='flex items-center list-none'>
          <li className={linkClasses}>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
          <li className={linkClasses}>
            <Link href='/projects'>
              <a>Projects </a>
            </Link>
          </li>
          <li className={linkClasses}>
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
