import NextAuth from 'next-auth'
import SpotifyProvider from 'next-auth/providers/spotify'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '../../../prisma'

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    // OAuth authentication providers...
    SpotifyProvider({
      clientId: process.env.SPOTIFY_ID || '',
      clientSecret: process.env.SPOTIFY_SECRET || '',
    }),
  ],
  callbacks: {
    async redirect({ baseUrl }) {
      return baseUrl
    },
  },
})
