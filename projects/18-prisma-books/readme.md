# Ejercicio práctico de diseño de base de datos para un sistema de gestión de una biblioteca:

**Escenario**:
Una biblioteca necesita un sistema para gestionar su colección de libros, así como la información de los socios y el historial de préstamos.

**Requerimientos**:
1. La biblioteca tiene una colección de libros. Cada libro tiene un título, un autor, un número de identificación único (ISBN), y una cantidad disponible.
2. Los socios de la biblioteca pueden registrarse. Para cada socio, se almacena su nombre, dirección, número de teléfono y correo electrónico.
3. Los socios pueden tomar prestados libros de la biblioteca. Cada préstamo está asociado a un socio y un libro, y contiene la fecha de préstamo y la fecha de vencimiento.
4. Se debe realizar un seguimiento de los libros que están actualmente prestados y los que están disponibles en la biblioteca.

**Ejercicio**:
Diseña un modelo ER para este sistema de gestión de bibliotecas. Luego, convierte este modelo ER en un esquema relacional utilizando SQL.

**Modelo ER**:
- Entidades: Libro, Socio, Préstamo
- Atributos:
  - Libro: ISBN (Clave Primaria), Título, Autor, Cantidad Disponible
  - Socio: ID Socio (Clave Primaria), Nombre, Dirección, Teléfono, Correo Electrónico
  - Préstamo: ID Préstamo (Clave Primaria), ID Socio (Clave Foránea), ISBN (Clave Foránea), Fecha Préstamo, Fecha Vencimiento
- Relaciones:
  - Libro y Préstamo: Relación uno a muchos (un libro puede tener muchos préstamos)
  - Socio y Préstamo: Relación uno a muchos (un socio puede realizar muchos préstamos)

**Esquema Relacional (SQL)**:

```sql
CREATE TABLE Libro (
    ISBN VARCHAR(50) PRIMARY KEY,
    Titulo VARCHAR(100),
    Autor VARCHAR(100),
    Cantidad_Disponible INT
);

CREATE TABLE Socio (
    ID_Socio INT PRIMARY KEY,
    Nombre VARCHAR(100),
    Direccion VARCHAR(200),
    Telefono VARCHAR(15),
    Correo_Electronico VARCHAR(100)
);

CREATE TABLE Prestamo (
    ID_Prestamo INT PRIMARY KEY,
    ID_Socio INT,
    ISBN VARCHAR(50),
    Fecha_Prestamo DATE,
    Fecha_Vencimiento DATE,
    FOREIGN KEY (ID_Socio) REFERENCES Socio(ID_Socio),
    FOREIGN KEY (ISBN) REFERENCES Libro(ISBN)
);
```

Este ejercicio te permite practicar el diseño de bases de datos desde el modelado ER hasta la implementación en SQL. Puedes modificar y expandir este ejercicio según tu nivel de habilidad y necesidades de práctica.