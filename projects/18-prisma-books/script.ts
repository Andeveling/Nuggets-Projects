import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  try {
    // const todosLosLibros = await prisma.libro.findMany()

    const autores = await prisma.autor.findMany({ include: { libros: true } })

    console.log("Autores ", autores)

    console.log("Base de datos abierta")
  } catch (e) {
    console.error(e)
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
