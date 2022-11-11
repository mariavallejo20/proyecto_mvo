# Gestor de dependencias

## Criterios a seguir para la elección
Para poder elegir un gestor de dependencias que se adecue a las buenas prácticas del lenguaje de programación de mi servicio tendré en cuenta:
1. Estándares del lenguaje:
    * Fichero "package.json", no ha sido establecido como estándar para NodeJS, sin embargo es la práctica más extendida para la gestión de dependencias.
2. Buenas prácticas:
    * Debemos tener en cuenta que se aconseja con mayor frecuencia por las desarrolladores.
    * Criterios específicos de mi proyecto:
        * Se trata de un proyecto de pequeño tamaño
        * Se debe tener en cuenta la velocidad del gestor.
        * Emplear un único fichero para la gestión de las dependencias, en este caso "package.json", lo que permitirá no aumentar la deuda técnica en el futuro.
        * Se debe tener en cuenta que el gestor emplee un único repositorio para la gestión de dependencias.
3. Actualización del gestor: Se deberá tener en cuenta la comunidad de la que dispone el gestor, ya que se busca tener un buen mantenimiento y actualización. Un buen soporte desembocará en una mayor seguridad, criterio que debemos tener en cuenta ya que es importante.

## Posibles gestores de dependencias

* **npm (Node Package Manager)**: 
    - Es un gestor aconsejado por una gran comunidad de desarrolladores.
    - Cuenta una gran comunidad y con un buen soporte y mantenimiento, con varias actualizaciones al año y siendo la última hace 5 meses.
    - Para la gestión de dependencias utiliza el archivo "package.json".
    - Uno de los principales inconvenientes de npm es la velocidad con la que instala las dependencias.
    - npm realiza una evaluación de seguridad a partir de la versión 6, lo que ayuda a evitar vulnerabilidades y asegura que ninguna dependencia sea incompatible.
    - npm habilita espacios de trabajo, lo que le permite administrar dependencias para varios proyectos desde un único repositorio.

* **Yarn**: 
    - Junto con npm es el gestor de dependencias más utiizado por los desarrolladores de NodeJS.
    - Cuenta con un buen soporte y mantenimiento, con varias actualizaciones anuales; la última hace 5 meses.
    - Emplea para la gestión el archivo "package.json" lo que nos permite disminuir la posibilidad de crear deuda técnica en el futuro.
    - Una de las principales ventajas de Yarn es la velocidad con la que instala las dependencias.
    - Mientra descarga paquetes, Yarn realiza una verificación de seguridad en segundo plano, aumentando la seguridad.
    - Yarn habilita espacios de trabajo, lo que le permite administrar dependencias para varios proyectos desde un único repositorio.

* **pnpm**: 
    - pnpm es más rápido que los anteriores a la hora de las instalación de dependencias, sobre todo para paquetes de mayor tamaño.
    - En la seguridad npm es similar a Yarn, ya que también emplea sumas de verificación. Además, pnpm 
    verifica la integridad de su código antes de ejecutarlo.
    - pnpm cuenta con una gran comunidad de desarrolladores y un buen soporte, con actualizaciones frecuentes.
    - Para la gestión de dependencias utiliza el archivo "package.json".

## Elección

Tras documentarme sobre los diferentes gestores de dependencias y una vez establecidos los criterios que cumplen o no cada uno de ellos, he decidido lo siguiente:

npm, Yarn y pnpm son buenas opciones para usar en mi proyecto.
He decidido descartar npm ya que aunque presenta una características similares a las demás pero tiene un rendimiento y velocidad de instalación menor a las otras.
Por otro lado, entre pnpm y Yarn, he decidido escoger pnpm, ya que ambas tienes características similares que cumplen los criterios establecidos, buen soporte y documentación, pero pnpm presenta una mayor velocidad de instalación de los paquetes.
