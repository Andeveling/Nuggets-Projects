import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  // Make transactional changes to the database
  await prisma.$transaction(async (tx) => {
    const libros = await tx.libro.findMany()
    let nuevoAutor = null
    for (const libro of libros) {
      const findAutor = await tx.autor.findUnique({
        // Buscamos el autor por su nombre unico
        where: {
          nombre: libro.autor,
        },
      })

      if (!findAutor) {
        // No existe el autor entonces lo creamos
        nuevoAutor = await tx.autor.create({
          data: {
            nombre: libro.autor,
          },
        })
      } else {
        // Si existe el autor lo actualizamos con el nuevo libro
        await tx.autor.update({
          where: {
            id_autor: findAutor.id_autor,
          },
          data: {
            libros: {
              connect: [
                {
                  id_libro: libro.id_libro,
                },
              ],
            },
          },
        })
      }

      // Actualizamos el libro con el autor
      await tx.libro.update({
        where: {
          id_libro: libro.id_libro,
        },
        data: {
          autor_libro: {
            connect: {
              id_autor: nuevoAutor?.id_autor ?? findAutor?.id_autor,
            },
          },
        },
      })
    }
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => await prisma.$disconnect())
