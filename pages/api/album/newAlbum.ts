import type { NextApiRequest, NextApiResponse } from 'next'
import Joi from 'joi'
import validate from '../../../lib/middlewares/validation'
import prisma from '../../../prisma'
import { getSession } from 'next-auth/react'

const schema = Joi.object().keys({
  name: Joi.string().required(),
  image: Joi.string().required(),
})

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  //Get method
  if (req.method === 'POST') {
    try {
      const session = await getSession({ req })
      if (!session) {
        return res.status(401).json({
          message: 'Unauthorized',
        })
      }
      //find artist
      const artist = await prisma.artist.findFirst({
        where: {
          email: session.user?.email || '',
        },
      })
      if (!artist) {
        return res.status(404).json({
          message: 'Artist not found',
        })
      }
      const album = await prisma.album.create({
        data: {
          ...req.body,
          artistId: artist.id,
        },
      })
      res.status(200).json(album)
    } catch (error) {
      res.status(500).json(error)
    }
  }
}

export default validate({ body: schema }, handler)
