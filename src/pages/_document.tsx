import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Hunter Long - Full-Stack Developer. A showcase of my work and skills." />
        <meta charSet="utf-8" />

        <meta property="og:image" content="/preview.png" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hunter Long - Full-Stack Developer" />
        <meta property="og:description" content="A showcase of my work and skills." />
        <meta property="og:url" content="https://hunterlong.dev/" />

        <link rel="stylesheet" href="https://use.typekit.net/swr6cbv.css"></link>
        <link rel="manifest" href="/manifest.json" />

        <link rel="icon" href="/assets/favicon/favicon.svg" sizes="any" type="image/svg+xml" />
        <link rel="icon" href="/assets/favicon/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document