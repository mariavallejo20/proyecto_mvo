# Imagen base para el contenedor

## Criterios a seguir para la elección
Para escoger la imagen de docker a usar tendré en cuenta los siguientres criterios
1. Mantenimiento: Debe contar con un buen mantenimiento y soporte con el objetivo de disminuir la deuda técnica en el futuro.
2. Se tendrá en cuenta el peso de la imagen.
3. Se deberá tener en cuenta que se va a utilizar para testear el proyecto, por lo que habrá funcionalidades añadidas que no serán necesarias.

## Observaciones:
Tras echar un vistazo a algunas imágenes en el explorador de [DockerHub](https://hub.docker.com/search?q=) me he dado cuenta, que muchas de ellas incluyen muchas funcionalidades extra que no son para nada necesarias en el objetivo que se desea alcanzar que es testear el proyecto, y algunas que ni si siquiera se para que sirven, como por ejemplo, la imagen de [node](https://github.com/nodejs/docker-node/blob/3b210a6d277538912aa45266ba4bc83d4899c2ca/19/alpine3.16/Dockerfile). Por tanto, he decidido centrarme en mirar las imágenes de algunos sistemas operativos como alpine, ubuntu, etc. y desarrollar mi imagen a partir de estas que incluyen, en algunas ocasiones, lo mínimo.
Esto me permitirá tener una imágen poco pesada.

## Posibles imágenes:

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
    - Su peso es de 184 MB, algo mayor que los anteriores.

## Elección:

Tras documentarme sobre las diferentes imágenes que podría utilizar, y decantarme, como he especificado antes por utilizar la de algún sistema operativo que me elimina cualquier funcionalidad que no necesito, he decidido utilizar la de *Ubuntu*, ya que cuenta con un peso reducido, cumple los criterios y creo que es una imágen que no ha sido utilizada por mis compañeros.



