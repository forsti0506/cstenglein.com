import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
          <link rel='manifest' href='/site.webmanifest' />
          <meta
            name='description'
            content='Christoph Stenglein, Full-Stack Web Developer in Austria. Programming with Javascript, Java, Go, Angular and React'
          />
          <meta
            name='keywords'
            content='Developer, Web Developer, Software Engineer, Java, Go, Angular, React, Javascript, Typescript, Austria Developer, Developer Austria'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
