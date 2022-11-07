# Gestor de dependencias
## Documentación sobre distintos gestores de tareas

La gestión de dependencias es el proceso de automatización de la instalación, actualización, configuración y eliminación de las dependencias necesarias.
Algunos de los gestores que contribuyen en este proceso son:

* **NPM (Node Package Manager)**: Desarrollado en Node.JS. En Node.JS el código se encuentra estructurado por módulos, que a medida que vamos trabajando iremos necesitando agregar más de estos según sea el caso y es en este punto donde justamente entra NPM, permitiendo agregar dependencias de forma simple, distribuir paquetes y administrar eficazmente los módulos de cualquier proyecto. Con npm viene la mayor selección de paquetes creados por la comunidad de cualquier ecosistema de programación, lo que hace que la construcción de aplicaciones Node.js sea rápida y fácil. 
Una parte importante de esta herramienta es conocer los 2 ficheros principales:

    - Package.json: Este archivo contiene la información de cada paquete incluyendo la descripción del mismo, versión, autor y más importante aún las dependencias. Este archivo es generado automáticamente al iniciar un proyecto con “npm init”.
    - Package-lock.json: es una lista descriptiva y exacta de las versiones instaladas, que se autogenera al instalar las dependencias descritas en el package.json.
  
Las ventajas principales de NPM es que nos permite una buena gestión y organización de las dependencias, de manera sencilla y fácil de aprender. 
Una vez conocida esta herramienta, como funciona y la gran cantidad de documentación que se puede encontrar sobre ella, la tendré en cuenta como una buena opción de cara a la elección del gestor de dependencias.

* **Bower**: Se trata de una herramienta Open Source que cumple las principales
funciones de gestión de dependencias. Para poder utilizar Bower necesitamos, por una parte, node.js, y por otra git. Se emplea para frontend, por ello he decidido descartarlo como una de mis opciones.

* **Yarn**: Yarn es un gestor de dependencias que surgió para resolver el problema de dependencias duplicadas de NPM que puede provocar errores “funciona en mi máquina” difíciles de detectar, ya que las dependencias duplicadas podrían ser diferentes de una instalación a otra. 
Yarn es un sistema que resuelve los problemas relacionados con el control de versiones usando archivos de bloqueo y un algoritmo de instalación determinista y confiable, asegurando la misma estructura de archivos en node_modules en todas las máquinas. Sin embargo, desde la versión 5, npm también incluye el “bloqueo de paquete” que permite la instalación de dependencias deterministas, eliminando la ventaja que hasta ese momento tenía NPM sobre Yarn. 
Por tanto, Yarn también es una buena opción en correlación con el lenguaje de mi proyecto, sin embargo, no hay demasiadas diferencias con NPM a partir de su versión 5.

* **pnpm**: Se dice que es el reemplazo directo para "NPM" y es especialmente utilizado en aquellas empresas donde existe la necesidad de mantener un gran número de proyectos con las mismas dependencias. Con pnpm, la dependencia se almacenará en un almacén direccionable por contenido, sin necesidad de tener copias de una misma dependencia. Esto ahorra mucho espacio en su disco proporcional a la cantidad de proyectos y dependencias.
Este gestor actualmente es utilizado por una gran comunidad de desarrolladores, por ello, tiene un buen mantenimiento. Sin embargo, la documentación que he podido encontrar sobre este gestor y su uso es menor que en las otras opciones, por ello, he decidido descartarlo como una de mis opciones.

## Criterios a seguir para la elección
Para poder elegir un gestor de dependencias que se adecue a las buenas prácticas del lenguaje de programación de mi servicio tendré en cuenta:
* Estructura del proyecto: Una de las mejores prácticas es la buena estructura, se debe dividir cada proyecto en archivos, carpetas y subcarpeta de forma correcta.
* Lenguaje en el que esté basado el gestor: La mejor opción será emplear un gestor que esté basado en NodeJS.
* Para seguir una buena práctica es recomendable utilizar el fichero de dependencias “package.json”.

## Elección

Tras documentarme sobre los diferentes gestores de dependencias y una vez establecidos los criterios que debo tener en cuenta para la elección, he decidido lo siguiente:
* Tanto Yarn como NPM son buenas opciones y ambas se adecúan a mis criterios de búsqueda, sin embargo, tras la versión 5 de NPM las diferencias entre ambas son muy pequeñas.
* NPM tiene un uso más extendido que Yarn actualmente y la documentación que se puede encontrar sobre este es muy extendida, lo que me puede ayudar considerablemente a la hora de su uso.
* Pnpm y boxer los he descartado en el proceso de documentación, por ello, no las tengo en cuenta ahora como posibles opciones.
* Si el proyecto en el que estuviéramos trabajando fuera a una escala mayor podría cambiar la elección, sin embargo, como el proyecto con el que voy a trabajar no es de gran magnitud, **mi decisión final es utilizar NPM.**