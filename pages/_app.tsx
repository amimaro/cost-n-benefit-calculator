import type { AppProps } from 'next/app'
import AppLayout from '../components/layout/AppLayout'
import { AppContext } from '../context/AppContext'
import AppService from '../services/AppService'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContext.Provider value={AppService}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </AppContext.Provider>
  )
}

export default MyApp
