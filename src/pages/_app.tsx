import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import AuthContextProvider from '../../modules/auth_provider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <AuthContextProvider> */}
        <div>
          <Component {...pageProps} />
        </div>
      {/* </AuthContextProvider> */}
    </>
  )
}
