import Head from 'next/head';
import Image from 'next/image';
import { FC, useState } from 'react';
import { useContact } from '../hooks/useContact';

const contactInfo = `
Christoph Stenglein\n
Thalmannsbach 15\n
4771 Sigharting\n
Österreich
`;

export const ImprintPage: FC = () => {
  const { link, clickHandler } = useContact();
  const [showContact, setShowContact] = useState(false);

  const showContactHandler = () => {
    setShowContact((prev) => !prev);
  };

  return (
    <>
      <Head>
        <title>Christoph Stenglein - Imprint</title>
      </Head>
      <main className='flex justify-center items-start pt-20 bg-gradient-to-tr from-indigo-600 to-indigo-400 h-screen'>
        <section className='px-10 py-5 bg-white text-black rounded mt-20'>
          <h4 className='text-xl font-bold my-2 text-indigo-600'>Imprint</h4>
          <button
            className='border border-indigo-600 rounded p-2 my-3 flex justify-around'
            onClick={showContactHandler}
          >
            Toggle Contact Info&nbsp;
            <Image src='/icons/user.svg' alt='User Icon' width={20} height={20} />
          </button>
          <article className='flex flex-col items-center justify-center'>
            {showContact && contactInfo.split('\n').map((line, index) => <p key={index}>{line}</p>)}
          </article>
          <a
            href={link}
            onClick={clickHandler}
            className='border border-indigo-600 rounded p-2 flex my-3 justify-around'
          >
            Send me a mail&nbsp;
            <Image src='/icons/envelope.svg' alt='Envelope Icon' width={20} height={20} />
          </a>{' '}
        </section>
      </main>
    </>
  );
};

export default ImprintPage;
