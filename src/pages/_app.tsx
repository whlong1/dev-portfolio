import "@/styles/nav.css"
import "@/styles/about.css"
import "@/styles/footer.css"
import "@/styles/globals.css"
import "@/styles/contact.css"
import "@/styles/project.css"
import "@/styles/animation.css"
import "@/styles/responsive.css"
import Layout from "@/components/Layout"
import type { AppProps } from "next/app"
import { Analytics } from "@vercel/analytics/react"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  )
}

export default App