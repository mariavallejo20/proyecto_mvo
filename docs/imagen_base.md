# Imagen base para el contenedor

## Criterios a seguir para la elección
Para escoger la imagen de docker a usar tendré en cuenta los siguientres criterios
1. Mantenimiento: Debe contar con un buen mantenimiento y soporte con el objetivo de disminuir la deuda técnica en el futuro.
2. Se tendrá en cuenta el peso de la imagen.
3. Se deberá tener en cuenta que se va a utilizar para testear el proyecto, por lo que habrá funcionalidades añadidas que no serán necesarias.

## Posibles imágenes:

### Docker OS images

* [Ubuntu](https://hub.docker.com/_/ubuntu):
    - La imágenes del sistema operativo Ubuntu cuenta con un buen manteniemiento y soporte.
    - Esta imágen tan solo cuenta con la instalación de este sistema, eliminando cualquier funcionalidad extra innecesaria.
    - El tamaño de esta imagen es de 77.8 MB, un peso bastante reducido, como indicaba antes en las observaciones.

* [Alpine](https://github.com/alpinelinux/docker-alpine/blob/a791ed3b042cb15f4dda594dd2fb088dcb725542/x86_64/Dockerfile):
    - Al ser una imagen oficial verificada cuenta con un gran mantenimiento y soporte, lo que nos permitirá que nuestro proyecto sea estable. Su última actualización fue hace tan solo 1 mes.
    - Únicamente cuenta con la instalación de Alpine, sin añadir funcionales extras innecesarias.
    - La última versión de la imágen de alpine cuenta con un peso de 7.05 MB, bastante pequeña.

* [Fedora](https://github.com/fedora-cloud/docker-brew-fedora/blob/1853328a811b98a580c4d3ca50d10cd788ba9d64/x86_64/Dockerfile):
    - La última versión de fedora incluye, al igual que en las anteriores, su instalación.
    - Cuenta con un buen mantenimiento, siendo su última versión de hace tan solo algunos días.
    - Su peso es de 184 MB, un peso superior a las anteriores, siendo el doble que la de Ubuntu y casi 20 veces mayor que la de Alpine.

### Verified Publisher

* [bitnami/node](https://github.com/bitnami/containers/blob/main/bitnami/node/18/debian-11/Dockerfile)
    - La última versión de esta imagen cuenta con instalaciones/funcionalidades añadidas que no son necesarias, como por ejemplo, python, curl, unzip o wget, además, librerías de las cuáles algunas no sé cúal es su utilidad.
    - Cuenta con un buen mantenimiento, siendo su última actualización hace unas horas y con un repositorio bastante activo.
    - Su peso es de 712.85 MB, casi 4 veces mayor que fedora que es el de mayor tamaño de los anteriores.

* [cimg/node](https://github.com/CircleCI-Public/cimg-node/blob/main/19.3/Dockerfile)
    - La última versión de esta imagen (19.3) cuenta con la instalación de node, pero además nos instala yarm, algo que no es necesario para mi repositorio actualmente.
    - Cuenta con la última actualización hace unos días.
    - Su peso es de 1.29 GB, muy superior al de las anteriores.

### Otras búsquedas

* [phusion/baseimage](https://github.com/phusion/baseimage-docker):
    - Esta imagen cuenta con un buen mantenimiento, con actualizaciones de hace unos meses
    - Tiene un peso de 228 MB, un poco más pesada que fedora que es la más pesada hasta el momento, sin embargo, tampoco cuenta con un peso excesivo.
    - Esta imagen configura ubuntu como un sistema mínimo para usarlo dentro de un contenedor solucionando los problemas que esto puede ocasionar, es decir, baseimage-docker es una imagen especial de Docker sobre Ubuntu que está configurada para su uso correcto dentro de los contenedores de Docker.

Buscando las mejorares imágenes o más usadas para un contenedor node, si queremos una imagen ligera se recomienda:

*[node_bullseye-slim](https://github.com/nodejs/docker-node/blob/28ad5e0e5d0e80df44d897c9057ffd6419a3c7a5/19/bullseye-slim/Dockerfile) 
    - Esta imagen cuenta con un muy buen mantenimiento y seguridad
    - Cuenta con un peso de 247.8 MB, un tamaño superior a la imagen base de docker de phusion.
    - Tiene algunas herramientas innecesarias como por ejemplo Yarm


## Elección:

Tras documentarme sobre las diferentes imágenes que puedo utilizar, he decidido decantarme por utilizar imagen base de phusion sobre Ubuntu a pesar de no ser la menos pesada, ya que es una imagen que nos va a permitir tener un contenedor que contenga un sistema operativo mínimo configurado correctamente. A pesar de no ser la menos pesada, cuenta con un peso reducido.




