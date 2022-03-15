import React from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { Loading } from './Loading'

interface Props {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  const { status } = useSession()
  const router = useRouter()

  if (status === 'loading') {
    return <Loading />
  }

  if (status === 'unauthenticated') {
    router.replace('/login')
  }
  return <>{children}</>
}
