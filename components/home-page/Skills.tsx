import Image from 'next/image';
import { FC } from 'react';

const Skills: FC = () => {
  return (
    <section className='bg-white flex flex-col lg:flex-row justify-center container mx-auto p-4 gap-3'>
      <article className='skills-box'>
        <h4 className='skills-title'>Languages</h4>
        <div className='p-2 text-blue-600'>
          <Image src='/icons/academic.svg' width={40} height={40} alt='Icon of a academic cap' />
        </div>
        <ul className='inline-block'>
          <li className='py-0.5'>
            <a className='underline text-indigo-700' href='https://stackoverflow.com/a/145179' target='_blank' rel='noopener noreferrer'>
              HTML
            </a>
          </li>
          <li className='py-0.5'>CSS</li>
          <li className='py-0.5'>JavaScript / TypeScript</li>
          <li className='py-0.5'>Java</li>
          <li className='py-0.5'>Go</li>
        </ul>
      </article>
      <article className='skills-box'>
        <h4 className='skills-title'>Frameworks {'&'} other Technologies</h4>
        <div className='p-2'>
          <Image src='/icons/computer.svg' width={40} height={40} alt='Icon of a computer' />
        </div>
        <ul className='inline-block'>
          <li className='py-0.5'>Angular</li>
          <li className='py-0.5'>React</li>
          <li className='py-0.5'>Node.js</li>
          <li className='py-0.5'>Next.js</li>
          <li className='py-0.5'>SCSS / SASS </li>
          <li className='py-0.5'>TailwindCSS </li>
          <li className='py-0.5'>Docker</li>
        </ul>
      </article>
      <article className='skills-box'>
        <h4 className='skills-title'>Things about me</h4>
        <div className='p-2'>
          <Image src='/icons/smiley.svg' width={40} height={40} alt='Icon of a smiley' />
        </div>
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
