import type { NextPage } from 'next'
import Head from 'next/head'
import { Layout } from '../components/Layout'
import { TopBar } from '../components/TopBar'
const Home: NextPage = () => {
  return (
    <Layout title="Spotify">
      <Head>
        <meta name="description" content="Spotify clon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
    </Layout>
  )
}

export default Home
