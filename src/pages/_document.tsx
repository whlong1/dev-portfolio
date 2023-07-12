import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Hunter Long - Full-Stack Developer. A showcase of my work and skills." />
        <link rel="stylesheet" href="https://use.typekit.net/swr6cbv.css"></link>
        <link rel="icon" href="/assets/branding/logo.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document