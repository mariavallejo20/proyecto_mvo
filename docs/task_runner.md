# Task runner
## Documentación sobre los distintos task runner

Un task runner o gestor de tareas nos permite automatizar tareas comunes y, a menudo, tediosas. Por ello he realizado un estudio sobre distintos gestores de tareas que se pueden emplear para el proyecto, las posibilidades son las siguientes:

* **Make**: Esta herramienta se utiliza principalmente para compilar y construir programas. Permite que el autor del código fuente establezca los pasos necesarios para construir ese proyecto específico, sin embargo, la utilidad make es lo suficientemente flexible como para que pueda usarse para automatizar casi cualquier tarea que pueda realizar desde la línea de comandos. 
* **Grunt**: Grunt es un task runner de línea de comandos y se basa en el entorno en tiempo de ejecución Node.js. Al ser un gestor de tareas específico para Javascript nos permite realizar las tareas más comunes en nuestro código Javascript, como pueden ser el control de calidad(JSLint), minimización y concatenación de archivos, también nos puede servir para automatizar el pase de una batería de test antes de realizar estos pasos.
* **Gulp**: Gulp es otro task runner basado en node.js y muy similar a Grunt, aunque un poco más rápido que este ya que usa lo streams de node.js.
* **Bun**: Bun es un gestor de tareas en tiempo de ejecución de JavaScript, y fue creado para mejorar el rendimiento de los scripts actuales de JavaScript. Una de las principales ventajas es su velocidad debido a el control de bajo nivel sobre la memoria.
* **NPM**:  Como he mencionado en el issue #19, npm también podría utilizarse como gestor de tareas.

## Task runner elegido

Tras documentarme sobre algunos de los gestores de tareas que puedo utilizar para mi servicio, he decidido quedarme con "Make", ya que es una herramienta que puede cubrir las necesidades de mi proyecto y, además, estoy familiarizada con su uso.