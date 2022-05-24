import React from 'react'
import Link from 'next/link'

export const TopBar = () => {
  return (
    <div className="py-4">
      <div className="flex justify-center">
        {/* New Album Button */}
        <Link href="/album/newAlbum" passHref>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            New Album
          </button>
        </Link>
      </div>
    </div>
  )
}
