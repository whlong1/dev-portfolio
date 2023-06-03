import { Html, Head, Main, NextScript } from 'next/document'
import Layout from '@/components/Layout'

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Hunter Long - Full-Stack Developer. A showcase of my work and skills." />
        <link rel="stylesheet" href="https://use.typekit.net/swr6cbv.css"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Layout>
          <Main />
        </Layout>
        <NextScript />
      </body>
    </Html>
  )
}

export default Document