import "@/styles/globals.css"
import "@/styles/contact.css"
import "@/styles/responsive.css"
import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App