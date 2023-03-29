# uiDemoblaze-apiPetstore
Este código es una serie de pruebas automatizadas usando el framework de testing Cypress en la página web "https://www.demoblaze.com/index.html".

Antes de cada prueba, se realiza una visita a la página principal de DemoBlaze.

La primera prueba "Creación de un Usuario" hace clic en el botón de inicio de sesión, ingresa las credenciales de un usuario llamado "admin" y comprueba si el mensaje "Welcome admin" aparece en la página.

La segunda prueba "Logout de un Usuario dado de alta" hace clic en el botón de cierre de sesión, y verifica si el mensaje "Welcome admin" ya no aparece en la página.

La tercera prueba "Agregar laptop al carrito en DemoBlaze" hace clic en la opción "Laptops" en el menú de navegación, selecciona la primera laptop de la lista, agrega la laptop al carrito y verifica si el mensaje "Sony vaio" aparece en la página del carrito. También se toma una captura de pantalla con el nombre "Validación de existencia en carrito".

Para ejecutar estas pruebas, asegúrese de tener Cypress instalado y ejecute el archivo que contiene estas pruebas en su IDE de preferencia.

Este código realiza tres pruebas de API para una tienda de mascotas usando Cypress y JavaScript. Aquí está el Readme que describe lo que hace cada prueba:

Pruebas de API de Pet Store
Este conjunto de pruebas se centra en la API de la tienda de mascotas. Asegúrate de tener una conexión a Internet estable antes de ejecutar estas pruebas.

Prueba 1: agregar una nueva mascota
En esta prueba, se agrega una nueva mascota a la tienda de mascotas usando una solicitud POST. Luego, se comprueba que la respuesta de la API sea correcta y se guarda el ID de la mascota agregada para su uso posterior en otras pruebas.

Prueba 2: obtener la mascota agregada
En esta prueba, se obtiene la mascota que se agregó en la prueba anterior usando una solicitud GET. Luego, se comprueba que la respuesta de la API sea correcta y que la mascota devuelta sea la correcta.

Prueba 3: actualizar la mascota agregada
En esta prueba, se actualiza la mascota que se agregó en la prueba anterior usando una solicitud PUT. Luego, se comprueba que la respuesta de la API sea correcta y que la mascota actualizada sea la correcta.
