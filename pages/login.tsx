import { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { signIn } from 'next-auth/react'

const Login: NextPage = () => {
  return (
    <div className="w-screen h-screen bg-primary-black">
      <Head>
        <title>Spotify-Login</title>
      </Head>
      <main className="h-full">
        <div className="flex justify-center items-center pt-16">
          <Image src="/spotify.svg" alt="Spotify logo" width={55} height={55} />
          <h1 className="text-white text-3xl font-bold ml-1">Spotify</h1>
        </div>
        <div>
          <h2 className="text-center mt-2 text-2xl text-white">
            Sign In with Spotify account
          </h2>
          <button
            onClick={() => signIn('spotify')}
            className="flex justify-center items-center bg-primary py-2 px-3 rounded-xl mx-auto mt-5 hover:bg-primary/30"
          >
            <Image
              src="/spotify.svg"
              alt="Spotify logo"
              width={35}
              height={35}
            />
            <p className="text-lg ml-2 text-white font-bold">
              Log In with Spotify
            </p>
          </button>
        </div>
      </main>
    </div>
  )
}

export default Login
