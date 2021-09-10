import { FC } from 'react';

export const ContactPage: FC = () => {
  return (
    <main>
      <section className='px-20'>
        <textarea rows={20} cols={72} className='border-2 border-black' />
        <button>Send</button>
      </section>
    </main>
  );
};

export default ContactPage;
