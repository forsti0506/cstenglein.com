import Link from 'next/link';
import { FC } from 'react';

const Contact: FC = () => {
  return (
    <section className='bg-indigo-600 py-10 text-white w-full'>
      <div className='rounded-xl border border-black bg-blue-400 flex justify-center flex-col mx-5 xl:w-2/3 xl:mx-auto'>
        <h4 className='my-10 text-2xl font-bold text-center'>Contact me</h4>
        <ul className='list-none flex flex-col items-center pb-10 gap-5'>
          <li className='contact-link'>
            <Link href='https://www.linkedin.com/in/christoph-tobias-stenglein-236453113/'>
              <a>LinkedIn</a>
            </Link>
          </li>
          <li className='contact-link'>
            <Link href='https://github.com/cstenglein'>
              <a>GitHub</a>
            </Link>
          </li>
          <li className='contact-link'>
            <Link href='https://www.xing.com/profile/ChristophTobias_Stenglein/cv'>
              <a>XING</a>
            </Link>
          </li>
          <li className='contact-link'>
            <Link href='https://twitter.com/_cstenglein_'>
              <a>Twitter</a>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
