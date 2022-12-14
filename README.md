# Proyecto Infraestructura Virtual
Grado Ingeniería Informática - Curso 22-23

María Vallejo Ortega

# Problema a resolver
## Recetario de cocina
El principal problema es la dificultad que tiene una persona a la hora de decidir que cocinar, sobre todo teniendo en cuenta los ingredientes de los que se dispone o la cantidad de tiempo del que se dispone para realizar una receta.

La solución planteada será crear una aplicación que permita al usuario obtener recetas de una base de datos en función a dos objetivos:

* Maximizar el número de ingredientes que el usuario tiene disponibles.
* Minimizar el tiempo que el usuario debe emplear para realizar la receta

La idea es tener la posibilidad de que el usuario elija cúal de los dos es su objetivo principal, y una vez esto, aplicar una heurística en función de las características de cada receta para encontrar una lista de recetas que se adecuen a las necesidades del usuario.
 
Las diferentes recetas podrían obtenerse de alguna base de datos, como puede ser la siguiente que he encontrado investigando por internet (https://zenodo.org/record/3749328#.Yy1hfHZBzHp)

Es una buena idea para aplicación en la nube ya que en esta podemos almacenar todas las recetas y acceder a ellas en cualquier momento sin necesidad de tenerlas en nuestro disco local.

# Documentación

* [Usuarios](./docs/usuarios.md)
* [Milestones](./docs/milestones.md)
* [Historias de Usuario](./docs/historias_usuario.md)

## Automatización
* [Gestor de dependencias](./docs/gestor_dependencias.md)
* [Task Runner](./docs/task_runner.md)

## Tests
* [Test runner](./docs/test_runner.md)
* [Biblioteca de aserciones](./docs/aserciones.md)


# Comprobación de la sintaxis de las entidades
* Comando para la comprobación de la sintaxis de las entidades en node.js
```shell
    npm run check
```
# Testeo de la lógica de negocio
* Comando para testear la lógica de negocio
```shell
    npm mocha
```

# Configuración del repositorio y claves

* [Captura del fichero de configuración del repositorio](./configuracion/configuracion.png)
* [Captura de la configuración de las claves pública y privada](./configuracion/claves.png)

