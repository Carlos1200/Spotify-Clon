// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import prisma from '../../../prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const session = await getSession({ req })
    if (!session) {
      return {
        message: 'Unauthorized',
      }
    }
    await prisma.artist.create({
      data: {
        name: session.user?.name || '',
        email: session.user?.email || '',
      },
    })
    res.status(200).json({
      message: 'Artist created',
    })
  }
}
