import Image from 'next/image'
import React from 'react'

export const Loading = () => {
  return (
    <div className="w-screen h-screen bg-primary-black">
      <div className="h-full flex justify-center items-center">
        <Image
          className="animate-pulse"
          src="/spotify.svg"
          alt="Spotify logo"
          width={250}
          height={250}
        />
      </div>
    </div>
  )
}
