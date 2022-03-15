import type { NextPage } from 'next'
import Head from 'next/head'
import { Layout } from '../components/Layout'
import { useSession } from 'next-auth/react'

const Home: NextPage = () => {
  const { data: session } = useSession()
  console.log(session)

  return (
    <Layout>
      <Head>
        <title>Spotify</title>
        <meta name="description" content="Spotify clon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-screen h-screen grid grid-cols-9">
        <aside className="bg-secondary-black col-span-2"></aside>
        <main className=" bg-primary-black col-span-7"></main>
      </div>
    </Layout>
  )
}

export default Home
