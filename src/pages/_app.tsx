// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next js Boilerplate</title>
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="apple-touch-icon" href="favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Simple project using next js :)" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
