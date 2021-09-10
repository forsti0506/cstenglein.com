import Link from 'next/link';
import { FC } from 'react';

const Contact: FC = () => {
  return (
    <section className='bg-blue-600 flex flex-col items-center justify-center py-2'>
      <h4 className='mb-2'>Contact me</h4>
      <ul className='list-none flex items-center'>
        <li className='contact-link'>
          <Link href='https://www.linkedin.com/in/christoph-tobias-stenglein-236453113/'>
            <a>Linkedin</a>
          </Link>
        </li>
        <li className='contact-link'>
          <Link href='https://github.com/cstenglein'>
            <a>Github</a>
          </Link>
        </li>
        <li className='contact-link'>
          <Link href='https://www.xing.com/profile/ChristophTobias_Stenglein/cv'>
            <a>Xing</a>
          </Link>
        </li>
        <li className='contact-link'>
          <Link href='https://twitter.com/_cstenglein_'>
            <a>Twitter</a>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
