# Task runner

## Criterios a seguir para la elección
Para poder elegir un gestor de tareas que se adecue a las buenas prácticas del lenguaje de programación de mi servicio tendré en cuenta:
1. Buenas prácticas:
    * Debemos tener en cuenta que se aconseja con mayor frecuencia por las desarrolladores.
    * Criterios específicos de mi proyecto:
        * Se trata de un proyecto de pequeño tamaño
        * Se debe tener en cuenta la velocidad del gestor.
        * La capacidad del gestor de realizar tareas de distintos tipos.
3. Actualización del gestor: Se deberá tener en cuenta la comunidad de la que dispone el gestor, ya que se busca tener un buen mantenimiento y actualización. Un buen soporte desembocará en una mayor seguridad, criterio que debemos tener en cuenta ya que es importante.

## Documentación sobre los distintos task runner

* **Make**: 
    - Make cuenta con una gran comunidad de desarrolladores, por ello cuenta con un gran mantenimiento y actualización continua. Esto permite disminuir el riesgo de deuda técnica en un futuro.
    - Es un gestor de tareas que puede utilizarse para cualquier lenguaje usando comandos shell y solo utiliza un fichero denominado "makefile".
    - Puede utilizarse para llevar a cabo gran cantidad de tareas de diferentes tipos.

* **Grunt**: 
    - Grunt utiliza Node.js, por ello, es aconsejado por algunos desarrolladores.
    - Está capacitado para automatizar gran cantidad de tareas, sin embargo, estas son menos que las que puede realizar make.
    -  Grunt normalmente solo manejará una tarea a la vez, lo que disminuye la velocidad. Este aumento del tiempo se ve reflejado, sobre todo, en proyectos de gran tamaño.
    - Es una herramienta que cuenta con una comunidad grande y útil con una amplia gama de complementos para elegir, actualmente hay alrededor de 6000 complementos de Grunt.

* **Gulp**:  
    - Gulp utiliza Node.js, por ello, es aconsejado por algunos desarrolladores.
    - Está capacitado para automatizar gran cantidad de tareas, sin embargo, estas son menos que las que puede realizar make.
    - Gulp puede procesar varias tareas al mismo tiempo, aumentando la velocidad. Esta ventaja se ve reflejada, sobre todo, en proyectos de gran tamaño.
    - Es una herramienta, a pesar de ser la más nueva, que cuenta con una comunidad grande y con una amplia gama de complementos para elegir, actualmente hay alrededor de 2700 complementos de Gulp.
    - El uso de Gulp está menos extendido que el de Grunt o Make.

## Elección

Una vez establecidos los criterios para la elección del task runner, he decidido descartar Gulp ya que es el menos extendido y desactualizado. Por otro lado, he descartado Grunt, ya que aunque su uso es más extendido, es un gestor que depende de otros complementos, lo que nos puede provocar deuda técnica en el futuro. 
Finalmente, **he decidido elegir "Make" como mi gestor de tareas** ya que es un gestor que cuenta con una actualización continua, puede realizar una gran cantidad de tareas diversas y cuenta con una gran comunidad de desarrolladores, documentación y tutoriales.