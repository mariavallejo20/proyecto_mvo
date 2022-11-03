# Gestor de dependencias
## Documentación sobre distintos gestores de tareas

La gestión de dependencias es el proceso de automatización de la instalación, actualización, configuración y eliminación de las dependencias necesarias.
Algunos de los gestores que contribuyen en este proceso son:

* **NPM (Node Package Manager)**: Desarrollado en node.js. Node.js se basa en la modularidad, y con ello viene la necesidad de un gestor de paquetes de calidad. Para este propósito, se creó npm. Las dependencias se pueden optimizar y actualizar desde la terminal. Con npm viene la mayor selección de paquetes creados por la comunidad de cualquier ecosistema de programación, lo que hace que la construcción de aplicaciones Node.js sea rápida y fácil. Además, con NPM podemos gestionar tanto dependencias como tareas.
* **Bower**: Se trata de una herramienta Open Source que cumple las principales
funciones de gestión de dependencias. Para poder utilizar Bower necesitamos, por una parte, node.js, y por otra git. Se emplea para frontend, por ello he decidido descartarlo como una de mis opciones.
* **Yarn**: Yarn es un gestor de dependencias que surgió para resolver el problema de dependencias duplicadas de NPM que puede provocar errores “funciona en mi máquina” difíciles de detectar, ya que las dependencias duplicadas podrían ser diferentes de una instalación a otra. Por eso nació Yarn, un sistema que resuelve los problemas relacionados con el control de versiones usando archivos de bloqueo y un algoritmo de instalación determinista y confiable, asegurando la misma estructura de archivos en node_modules en todas las máquinas. Sin embargo, desde la versión 5, npm también incluye el “bloqueo de paquete” que permite la instalación de dependencias deterministas.
* **pnpm**: Se dice que es el reemplazo directo para "NPM" y es especialmente utilizado en aquellas empresas donde existe la necesidad de mantener un gran número de proyectos con las mismas dependencias. Con pnpm, la dependencia se almacenará en un almacén direccionable por contenido, sin necesidad de tener copias de una misma dependencia. Esto ahorra mucho espacio en su disco proporcional a la cantidad de proyectos y dependencias.

## Gestor de dependencias elegido

Una vez me he documentado de los diferentes gestores de dependencias que puedo utilizar para mi proyecto, he decidido quedarme con NPM, ya que creo que es el que está mejor documentado, y aunque nunca he trabajado con él, la mayoría de desarrolladores lo describen como un gestor sencillo y fácil de utilizar. 