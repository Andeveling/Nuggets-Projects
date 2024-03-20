-- CreateTable
CREATE TABLE "Libro" (
    "id_libro" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ISBN" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "cantidad_disponible" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Socio" (
    "id_socio" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "correo" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Prestamo" (
    "id_prestamo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fecha_prestamo" DATETIME NOT NULL,
    "fecha_vencimiento" DATETIME NOT NULL,
    "libro_id" INTEGER NOT NULL,
    "socio_id" INTEGER,
    CONSTRAINT "Prestamo_libro_id_fkey" FOREIGN KEY ("libro_id") REFERENCES "Libro" ("id_libro") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Prestamo_socio_id_fkey" FOREIGN KEY ("socio_id") REFERENCES "Socio" ("id_socio") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Libro_ISBN_key" ON "Libro"("ISBN");
