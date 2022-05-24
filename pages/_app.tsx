import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'react-dropzone-uploader/dist/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
      {/* <Auth {...pageProps} session={session} Component={Component} /> */}
    </SessionProvider>
  )
}

export default MyApp
