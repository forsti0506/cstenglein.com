import Link from 'next/link';
import { FC } from 'react';

const Skills: FC = () => {
  return (
    <section className='bg-white flex flex-col md:flex-row justify-center container text-center mx-auto'>
      <article className='md:w-1/3'>
        <h4 className='skills-title'>Languages</h4>
        <div>
          <Link href='https://stackoverflow.com/a/145179'>HTML</Link>, CSS, JavaScript / TypeScript, Go, Java
        </div>
      </article>
      <article className='md:w-1/3'>
        <h4 className='skills-title'>Frameworks &amp; other Technologies</h4>
        <div>Docker, Angular, React, Node.js, SCSS, TailwindCSS</div>
      </article>
      <article className='md:w-1/3'>
        <h4 className='skills-title'>Things about me</h4>
        <div>Linux User, I host my own email server, Bitcoin Tech, Coffee with French Press, Emoji ❤️</div>
      </article>
    </section>
  );
};

export default Skills;
