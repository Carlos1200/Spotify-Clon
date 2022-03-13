import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Spotify</title>
        <meta name="description" content="Spotify clon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-screen h-screen grid grid-cols-9">
        <aside className="bg-secondary-black col-span-2"></aside>
        <main className=" bg-primary-black col-span-7"></main>
      </div>
    </div>
  )
}

export default Home
