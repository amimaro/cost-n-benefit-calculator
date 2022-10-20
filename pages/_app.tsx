import type { AppProps } from 'next/app'
import Head from 'next/head'
import AppLayout from '../components/layout/AppLayout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Head>
        <title>Cost and benefit calculator</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </AppLayout>
  )
}

export default MyApp
