import React from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { Loading } from './Loading'
import { AppProps } from 'next/app'

export default function Auth({ Component, pageProps }: AppProps) {
  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === 'loading') {
    return <Loading />
  }

  if (status === 'unauthenticated') {
    router.replace('/login')
  }

  return <Component {...pageProps} session={session} />
}
