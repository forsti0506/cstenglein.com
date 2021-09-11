import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const Skills: FC = () => {
  return (
    <section className='bg-white flex flex-col md:flex-row justify-center container mx-auto py-4'>
      <article className='skills-box'>
        <h4 className='skills-title'>Languages</h4>
        <ul className='inline-block'>
          <li className='py-0.5'>
            <Link href='https://stackoverflow.com/a/145179' passHref>
              HTML
            </Link>
          </li>
          <li className='py-0.5'>CSS</li>
          <li className='py-0.5'>JavaScript / TypeScript</li>
          <li className='py-0.5'>Go</li>
          <li className='py-0.5'>Java</li>
        </ul>
      </article>
      <article className='skills-box'>
        <h4 className='skills-title'>Frameworks {'&'} other Technologies</h4>
        <ul className='inline-block'>
          <li className='py-0.5'>Angular</li>
          <li className='py-0.5'>React</li>
          <li className='py-0.5'>Node.js</li>
          <li className='py-0.5'>SCSS / SASS </li>
          <li className='py-0.5'>TailwindCSS </li>
          <li className='py-0.5'>Docker</li>
        </ul>
      </article>
      <article className='skills-box'>
        <h4 className='skills-title'>Things about me</h4>
        <ul className='inline-block'>
          <li className='py-0.5'>Linux User 🐧</li>
          <li className='py-0.5'>Managing my hosted Server 👨‍💻</li>
          <li className='py-0.5 flex items-center justify-center'>
            Bitcoin Tech <Image src='/icons/bitcoin.svg' alt='Bitcoin Icon' width={30} height={30} />
          </li>
          <li className='py-0.5'>I make my Coffee ☕ with a French Press</li>
          <li className='py-0.5'>
            Emoji{' '}
            <div id='beat' className='inline-block'>
              ❤️
            </div>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Skills;
