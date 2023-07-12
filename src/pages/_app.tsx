import "@/styles/nav.css"
import "@/styles/footer.css"
import "@/styles/globals.css"
import "@/styles/contact.css"
import "@/styles/project.css"
import "@/styles/animation.css"
import "@/styles/responsive.css"
import Layout from "@/components/Layout"
import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App