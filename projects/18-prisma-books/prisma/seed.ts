import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

/* 
model Libro {
  id_libro            Int        @id @default(autoincrement())
  ISBN                String     @unique
  titulo              String
  autor               String
  cantidad_disponible Int
  prestamos           Prestamo[]
}

model Socio {
  id_socio  Int        @id @default(autoincrement())
  nombre    String
  direccion String
  telefono  String
  correo    String
  prestamos Prestamo[]
}

model Prestamo {
  id_prestamo       Int      @id @default(autoincrement())
  fecha_prestamo    DateTime
  fecha_vencimiento DateTime
  libro_id          Int
  socio_id          Int?
  libro             Libro    @relation(fields: [libro_id], references: [id_libro])
  Socio             Socio?   @relation(fields: [socio_id], references: [id_socio])
}
*/

async function main() {
  try {
    // Creando libros
    const libro1 = await prisma.libro.create({
      data: {
        ISBN: "978-1982115826",
        titulo: "1984",
        autor: "George Orwell",
        cantidad_disponible: 10,
      },
    })

    const libro2 = await prisma.libro.create({
      data: {
        ISBN: "978-1982115827",
        titulo: "El Hobbit",
        autor: "J.R.R. Tolkien",
        cantidad_disponible: 5,
      },
    })

    const libro3 = await prisma.libro.create({
      data: {
        ISBN: "978-1982115828",
        titulo: "El Quijote",
        autor: "Miguel de Cervantes",
        cantidad_disponible: 15,
      },
    })

    const libro4 = await prisma.libro.create({
      data: {
        ISBN: "978-1400079983",
        titulo: "Rebelión en la granja",
        autor: "George Orwell",
        cantidad_disponible: 8,
      },
    })
    // Creando socios
    const socio1 = await prisma.socio.create({
      data: {
        nombre: "Juan Perez",
        direccion: "Calle 1 # 2-3",
        telefono: "1234567890",
        correo: "vXNnH@example.com",
      },
    })

    const socio2 = await prisma.socio.create({
      data: {
        nombre: "Maria Garcia",
        direccion: "Calle 4 # 5-6",
        telefono: "9876543210",
        correo: "I5LpI@example.com",
      },
    })

    const socio3 = await prisma.socio.create({
      data: {
        nombre: "Pedro Rodriguez",
        direccion: "Calle 7 # 8-9",
        telefono: "4567890123",
        correo: "vXNnH@example.com",
      },
    })

    const socio4 = await prisma.socio.create({
      data: {
        nombre: "Marcela Salazar",
        direccion: "Calle 10 # 11-12",
        telefono: "7890123456",
        correo: "I5LpI@example.com",
      },
    })

    // Creando Prestamos
    const prestamo1 = await prisma.prestamo.create({
      data: {
        fecha_prestamo: "2024-03-20T08:00:00Z",
        fecha_vencimiento: "2024-04-20T08:00:00Z",
        libro_id: 1,
        socio_id: 1,
      },
    })

    const prestamo2 = await prisma.prestamo.create({
      data: {
        fecha_prestamo: "2024-03-20T08:00:00Z",
        fecha_vencimiento: "2024-04-20T08:00:00Z",
        libro_id: 1,
        socio_id: 2,
      },
    })

    console.log("Se ha ejecutado el seed")
  } catch (error) {
    console.log("Error en el seed:", error)
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
  .finally(async () => {
    console.log("Base de datos cerrada")
  })
