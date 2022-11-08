# Gestor de dependencias

## Criterios a seguir para la elección
Para poder elegir un gestor de dependencias que se adecue a las buenas prácticas del lenguaje de programación de mi servicio tendré en cuenta:
1. Estructura del proyecto: Una de las mejores prácticas es la buena estructura, se debe dividir cada proyecto en archivos, carpetas y subcarpeta de forma correcta.
2. Lenguaje en el que esté basado el gestor: La mejor opción será emplear un gestor que esté basado en NodeJS.
3. Para seguir una buena práctica es recomendable utilizar el fichero de dependencias “package.json”.
4. Que se trate de una herramienta fácil de utilizar y aprender, para así minimizar el tiempo de aprendizaje.

## Documentación sobre distintos gestores de dependencias

* **NPM (Node Package Manager)**: 

    - Desarrollado en Node.JS, por tanto, cumple el criterio del lenguage. (2)
    - En Node.JS el código se encuentra estructurado por módulos, que a medida que vamos trabajando iremos necesitando agregar más de estos según sea el caso y es en este punto donde justamente entra NPM, permitiendo agregar dependencias de forma simple, distribuir paquetes y administrar eficazmente los módulos de cualquier proyecto, permitiendo así una buena gestión y organización de las dependencias. Con esto se cumple el criterio 1 sobre la estructura del proyecto.
    - Con npm viene la mayor selección de paquetes creados por la comunidad de cualquier ecosistema de programación, lo que hace que la construcción de aplicaciones Node.js sea rápida y fácil. Cumpliendo así el criterio 4.

    - Una parte importante de esta herramienta es conocer los 2 ficheros principales:

        - Package.json: Este archivo contiene la información de cada paquete incluyendo la descripción del mismo, versión, autor y más importante aún las dependencias. Este archivo es generado automáticamente al iniciar un proyecto con “npm init”.
        - Package-lock.json: es una lista descriptiva y exacta de las versiones instaladas, que se autogenera al instalar las dependencias descritas en el package.json.
    Con esto cumplimos el criterio 3.

Por tanto, podemos apreciar que NPM es una herramienta que cumple ampliamente todos los criterios que he establecido para la elección de un gestor de dependencias, por ello, pasará a ser un posible candidato.

* **Bower**: 
    - Emplea Node.JS y git, cumpliendo el criterio 2 sobre el lenguaje
    - Para realizar el seguimiento de los paquetes emplea un archivo denominado "bower.json". Esto implica que NO se cumple el criterio 3.
    - Además de esto, Boxer es recomendado para gestionar dependencias de front-end.
Debido a esto, he decidido descartar Boxer como una de mis opciones.

* **Yarn**: 
    - Yarn es un gestor de dependencias similar a NPM, cumpliendo por tanto los mismos criterios que este.
    - Yarn surgió para resolver el problema de dependencias duplicadas de NPM que puede provocar errores “funciona en mi máquina” difíciles de detectar, ya que las dependencias duplicadas podrían ser diferentes de una instalación a otra. Sin embargo, desde la versión 5, npm también incluye el “bloqueo de paquete” que permite la instalación de dependencias deterministas, eliminando la ventaja que hasta ese momento tenía NPM sobre Yarn.
    - Al igual que NPM se trata de un gestor muy rápido y fácil de utilizar.

Por tanto, Yarn también es una buena opción en correlación con el lenguaje de mi proyecto, sin embargo, no hay demasiadas diferencias con NPM a partir de su versión 5.

* **pnpm**: 
    - Se dice que es el reemplazo directo para "NPM", por ello, cumple los mismos criterios que esta.
    - Es especialmente utilizado en aquellas empresas donde existe la necesidad de mantener un gran número de proyectos con las mismas dependencias. Es decir, para proyectos de gran escala. 
    - Con pnpm, la dependencia se almacenará en un almacén direccionable por contenido, sin necesidad de tener copias de una misma dependencia. Esto ahorra mucho espacio en su disco proporcional a la cantidad de proyectos y dependencias.
    - Al igual que NPM, pnpm emplea como fichero para el seguimiento de las dependencias "package.json".

Este gestor es fácil de aprender, sin embargo, está menos extendido que los anteriores y su uso es más reducido. Si estuviera tratando un proyecto de mayor envergadura hubiera sido una buena opción, pero teniendo en cuenta mi proyecto he decidido descartarlo.

## Elección

Tras documentarme sobre los diferentes gestores de dependencias y una vez establecidos los criterios que cumplen o no cada uno de ellos, he decidido lo siguiente:
* Tanto Yarn como NPM son buenas opciones y ambas se adecúan a mis criterios de búsqueda, sin embargo, tras la versión 5 de NPM las diferencias entre ambas son muy pequeñas.
* NPM tiene un uso más extendido que Yarn actualmente y la documentación que se puede encontrar sobre este es muy extendida, lo que me puede ayudar considerablemente a la hora de su uso.
* Pnpm y boxer los he descartado en el proceso de documentación, por ello, no las tengo en cuenta ahora como posibles opciones.
* Si el proyecto en el que estuviéramos trabajando fuera a una escala mayor podría cambiar la elección, sin embargo, como el proyecto con el que voy a trabajar no es de gran magnitud, **mi decisión final es utilizar NPM.**