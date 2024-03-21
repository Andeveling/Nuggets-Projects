-- CreateTable
CREATE TABLE "Autor" (
    "id_autor" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Libro" (
    "id_libro" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ISBN" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "cantidad_disponible" INTEGER NOT NULL,
    "autor_id" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_Libro" ("ISBN", "autor", "cantidad_disponible", "id_libro", "titulo") SELECT "ISBN", "autor", "cantidad_disponible", "id_libro", "titulo" FROM "Libro";
DROP TABLE "Libro";
ALTER TABLE "new_Libro" RENAME TO "Libro";
CREATE UNIQUE INDEX "Libro_ISBN_key" ON "Libro"("ISBN");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Autor_nombre_key" ON "Autor"("nombre");
