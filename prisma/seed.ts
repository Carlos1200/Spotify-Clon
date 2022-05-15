import prisma from './index'

async function main() {
  await prisma.gender.create({
    data: {
      name: 'Rock',
    },
  })

  await prisma.gender.create({
    data: {
      name: 'Rap',
    },
  })

  await prisma.gender.create({
    data: {
      name: 'Latino',
    },
  })

  await prisma.gender.create({
    data: {
      name: 'Metal',
    },
  })

  await prisma.gender.create({
    data: {
      name: 'Dubstep',
    },
  })

  await prisma.gender.create({
    data: {
      name: 'Hip hop',
    },
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
