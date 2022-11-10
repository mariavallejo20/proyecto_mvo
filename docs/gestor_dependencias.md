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

* **NPM (Node Package Manager)**: 
    - Es un gestor aconsejado por una gran comunidad de desarrolladores, ya que viene empaquetado con NodeJS.
    - Cuenta una gran comunidad y con un buen soporte y mantenimiento, con varias actualizaciones al año y siendo la última hace 5 meses.
    - Para la gestión de dependencias utiliza el archivo "package.json".
    - La instalación de paquetes no es demasiado rápida, sin embargo, teniendo en cuenta el tamaño de mi proyecto y la cantidad de dependencias que tendrá, este no será un gran inconveniente.
    - NPM realiza una evaluación de seguridad a partir de la versión 6, lo que ayuda a evitar vulnerabilidades y asegura que ninguna dependencia sea incompatible.
    - NPM habilita espacios de trabajo, lo que le permite administrar dependencias para varios proyectos desde un único repositorio.

* **Bower**: 
    - Para la gestión de dependencias emplea el archivo "boxer.json", lo que no cumple con la práctica extendida por la mayoría de los desarrolladores. Esto puede provocar deuda técnica en un futuro, por lo que lo descartaré como una opción.

* **Yarn**: 
    - Junto con NPM es el gestor de dependencias más utiizado por los desarrolladores de NodeJS. Sin embargo, este no viene instalado con la instalación del lenguaje.
    - Cuenta con un buen soporte y mantenimiento, con varias actualizaciones anuales; la última hace 5 meses.
    - Emplea para la gestión el archivo "package.json" lo que nos permite disminuir la posibilidad de crear deuda técnica en el futuro.
    - Yarn instala las dependencias en paralelo permitiéndote agregar múltiples archivos simultáneamente, lo que aumenta la velocidad de instalación de las dependencias. Sin embargo, teniendo en cuenta el tamaño de nuestro proyecto está no es una ventaja significativa, aunque si habría que tenerlo en cuenta para proyectos mayores.
    - Mientra descarga paquetes, Yarn realiza una verificación de seguridad en segundo plano, aumentando la seguridad.
    - Yarn habilita espacios de trabajo, lo que le permite administrar dependencias para varios proyectos desde un único repositorio.

* **pnpm**: 
    - PNPM es más rápido que los anteriores a la hora de las instalación de dependencias, sobre todo para paquetes de mayor tamaño.
    - En la seguridad NPM es similar a Yarn, ya que también emplea sumas de verificación. Además, pnpm 
    verifica la integridad de su código antes de ejecutarlo.
    - PNPM cuenta con una gran comunidad de desarrolladores y un buen soporte, con actualizaciones frecuentes.
    - Para la gestión de dependencias utiliza el archivo "package.json".

## Elección

Tras documentarme sobre los diferentes gestores de dependencias y una vez establecidos los criterios que cumplen o no cada uno de ellos, he decidido lo siguiente:

NPM, Yarn y PNPM son buenas opciones para usar en mi proyecto.
He decidido descartar NPM ya que aunque presenta una características similares a las demás pero tiene un rendimiento y velocidad de instalación menor a las otras.
Por otro lado, entre PNPM y Yarn, he decidido escoger PNPM, ya que ambas tienes características similares que cumplen los criterios establecidos, buen soporte y documentación, pero PNPM presenta una mayor velicidad de instalación de los paquetes.
