import React from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { Loading } from './Loading'
import { Sidebar } from './Sidebar'

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
  return (
    <div className="w-screen h-screen grid grid-cols-12">
      <aside className="bg-secondary-black col-span-2">
        <Sidebar />
      </aside>
      <main className=" bg-primary-black col-span-10">{children}</main>
    </div>
  )
}
