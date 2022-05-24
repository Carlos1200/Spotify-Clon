import { useForm } from 'react-hook-form'
import Joi from 'joi'
import React from 'react'
import { joiResolver } from '@hookform/resolvers/joi'
import { Layout } from '../../components/Layout'
import { NextPage } from 'next'
import { DropzoneInput } from '../../components/DropzoneInput'

const schema = Joi.object().keys({
  name: Joi.string().required(),
  image: Joi.string().required(),
})

const NewAlbum: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(schema),
  })
  return (
    <Layout title="New Album">
      <h1 className="text-center text-white text-4xl mt-5 font-serif">
        New Album
      </h1>
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="w-full max-w-lg mx-auto mt-10"
      >
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            {...register('name')}
          />
          {errors.name && (
            <p className="text-red-500 text-xs italic">{errors.name.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="image"
          >
            Image
          </label>
          <DropzoneInput />
          {errors.image && (
            <p className="text-red-500 text-xs italic">
              {errors.image.message}
            </p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            type="submit"
          >
            Create
          </button>
        </div>
      </form>
    </Layout>
  )
}

export default NewAlbum
