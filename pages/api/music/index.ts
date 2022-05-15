import type { NextApiRequest, NextApiResponse } from 'next'
import Joi from 'joi'
import validate from '../../../lib/middlewares/validation'
import prisma from '../../../prisma'

const schema = Joi.object({
  title: Joi.string().required(),
  duration: Joi.number().required(),
  url: Joi.string().required(),
  image: Joi.string().required(),
  genderId: Joi.string().required(),
  explicit: Joi.boolean().required(),
  albumId: Joi.string().required(),
})

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  //Get method
  if (req.method === 'POST') {
    const music = prisma.song.create({
      data: {
        ...req.body,
      },
    })
    res.status(200).json(music)
  }
}

export default validate({ body: schema }, handler)
