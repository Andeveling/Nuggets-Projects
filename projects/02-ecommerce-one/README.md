# Ecommerce App

Esta es una aplicación de Ecommerce que muestra una lista de productos obtenidos desde un endpoint API. Permite filtrar los productos por categoría y precio. Utiliza el contexto de React (`useContext`) para evitar pasar props innecesarias.

## Funcionalidades

### Lista de Productos

- Muestra una lista de productos obtenidos desde el endpoint API.
- Cada producto se muestra con su nombre, descripción, categoría, precio y una opción para agregarlo al carrito.
- Permite filtrar los productos por categoría y precio.

### Carrito de Compras

- Permite añadir productos al carrito.
- Permite eliminar productos del carrito.
- Permite modificar la cantidad de productos en el carrito.
- Sincroniza automáticamente los cambios del carrito con la lista de productos.
- Utiliza el almacenamiento local (localStorage) para guardar el carrito y recuperarlo al recargar la página.

## Instalación

1. Clona este repositorio en tu máquina local.
2. Navega hasta el directorio del proyecto.
3. Ejecuta `yarn install` para instalar las dependencias.

## Uso

1. Ejecuta `yarn start` para iniciar la aplicación.
2. Abre tu navegador y visita `http://localhost:3000` para ver la aplicación en funcionamiento.
3. Explora la lista de productos y utiliza los filtros para encontrar los productos deseados.
4. Agrega productos al carrito haciendo clic en la opción correspondiente en cada producto.
5. Ve al carrito para ver los productos agregados, modificar las cantidades o eliminar productos.
6. Los cambios en el carrito se guardarán automáticamente y se sincronizarán con la lista de productos.

## Contribución

Las contribuciones son bienvenidas. Si deseas contribuir a este proyecto, sigue estos pasos:

1. Realiza un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y realiza commits (`git commit -am 'Agrega una nueva característica'`).
4. Envía tus cambios al repositorio remoto (`git push origin feature/nueva-caracteristica`).
5. Abre una solicitud de extracción en GitHub.

## Autor

- [Nombre del autor](https://github.com/nombre-de-usuario): Breve descripción sobre el autor.

## Licencia

Este proyecto está bajo la licencia [Nombre de la licencia](https://url-de-la-licencia).

---

¡Gracias por utilizar nuestra aplicación de Ecommerce! Si tienes alguna pregunta o problema, no dudes en contactarnos. Esperamos que disfrutes de la experiencia de compra.