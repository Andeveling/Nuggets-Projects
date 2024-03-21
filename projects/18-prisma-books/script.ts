import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  try {
    // const todosLosLibros = await prisma.libro.findMany()

    const librosOrdenadosAZ = await prisma.libro.findMany({
      orderBy: {
        titulo: "asc",
      },
      include: {
        autor_libro: true,
      },
    })

    console.log("Libros ordenados A-Z ", librosOrdenadosAZ)

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
