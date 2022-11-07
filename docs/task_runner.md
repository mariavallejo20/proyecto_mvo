# Task runner
## Documentación sobre los distintos task runner

Un task runner o gestor de tareas nos permite automatizar tareas comunes y, a menudo, tediosas. Por ello he realizado un estudio sobre distintos gestores de tareas que se pueden emplear para el proyecto, las posibilidades son las siguientes:

* **Make**: Esta herramienta se utiliza principalmente para compilar y construir programas. Permite que el autor del código fuente establezca los pasos necesarios para construir un proyecto específico, pudiendo generar unos archivos a partir de otros. El uso de make es fácil ya que solo se debe describir una tarea usando comandos shell y make la ejecutará. Además de esto, make puede utilizarse para cualquier lenguaje. Para todo esto make utiliza un fichero denominado “makefile”. 
Considero make como una de mis opciones principales, ya que es con la que estoy más familiarizada debido a su uso anterior.

* **Grunt**: Grunt es un task runner de línea de comandos y se basa en el entorno en tiempo de ejecución Node.js. Al ser un gestor de tareas específico para Javascript nos permite realizar las tareas más comunes en nuestro código Javascript, como pueden ser el control de calidad(JSLint), minimización y concatenación de archivos, también nos puede servir para automatizar el pase de una batería de test antes de realizar estos pasos. Para la gestión de tareas emplea el archivo “gruntfile.js”
Este gestor actualmente es muy utilizado por los desarrolladores, por lo que cuenta con una gran comunidad activa. Por esto, Grunt también la tendré en cuenta como una de mis opciones.

* **Gulp**:  Gulp es otro task runner basado en node.js y muy similar a Grunt, aunque un poco más rápido que este ya que Gulp lleva a cabo los procesos en la memoria principal y escribe en los archivos directamente, lo que le permite tener una mayor velocidad. Para especificación de tareas emplea el archivo “gulpfile.js”. Por otro lado, una de las principales desventajas de este gestor es la seguridad.
Aunque Gulp podría ser una buena opción, el tema de seguridad ha hecho que la descarte como una de mis opciones.

* **Bun**:  Bun es un paquete de JS y CSS, un transpilador de JS, un entorno de tiempo de ejecución de JS, un gestor de tareas y mucho más . Lo que hace que Bun sea tan especial es su increíble rendimiento.
El equipo de Bun aconseja que solo use Bun durante el desarrollo de su aplicación ya que Bun aún no minimiza su código y la eliminación del código muerto no es óptima, parte que es realmente importante en el proceso de producción. Además, Bun todavía se encuentra en una etapa muy temprana de desarrollo.
Por esto, he decidido descartar Bun como una de mis opciones en cuanto al gestor de tareas.


## Criterios a seguir para la elección

Para poder elegir un task runner que se adecue a las buenas prácticas de mi servicio tendré en cuenta:
* Será necesario que permita gestionar tareas en NodeJS, ya que es el que se utilizará.
* Que cuente con una gran comunidad, que nos garantice un mantenimiento continúo.
* Que permita gestionar las tareas fácilmente y de manera organizada, desde un único fichero.
* Deberá tratarse de un gestor fácil de utilizar y aprender, para minimizar el tiempo de aprendizaje antes del desarrollo.

## Elección

Una vez establecidos los criterios para la elección del task runner, **he decidido quedarme con “make”**, debido a lo siguiente:
* Pienso que es una de las herramientas más utilizadas, lo que nos garantiza el gran mantenimiento. 
* Es un gestor con el que estoy familiarizada, lo que minimiza el tiempo de aprendizaje.
* Nos permite gestionar tareas y mucho más en cualquier lenguaje desde comandos en shell, adecuándose perfectamente a mi servicio.
* Cuenta con una gran documentación, que nos ayudará a la hora de la detección de errores o problemas durante el desarrollo.