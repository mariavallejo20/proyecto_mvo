# Test runner
## Criterios a seguir para la elección
Para poder elegir un test runner que se adecue a las buenas prácticas del lenguaje tendré en cuenta:

1.	Buenas prácticas: Debemos tener en cuenta si cuenta con su propia librería de aserciones o podemos elegir la que queremos utilizar.
2.	Frescura del test runner: Se deberá tener en cuenta la comunidad de la que dispone el test runner, ya que se busca tener un buen mantenimiento y actualización, disminuyendo la posibilidad de deuda técnica en el futuro.

## Posibles test runner:
* **Mocha:**
    - Mocha cuenta con un gran mantenimiento, actualizaciones frecuentes y un [repositorio de github](https://github.com/mochajs/mocha) bastante activo.
    - Este test runner cuenta con una gran flexibilidad ya que viene sin librería de aserciones, lo que nos permitirá elegir cual queremos utilizar. 
    - Como podemos ver también en su alta [puntuación de snyk](https://snyk.io/advisor/npm-package/mocha) cuenta con una buena seguridad, popularidad y mantenimiento.

* **Jest:**
    - Cuenta con un buen mantenimiento y documentación, atendiendo a la actividad de su [repositorio de github]( https://github.com/facebook/jest).
    - Jest cuenta con su propia biblioteca de aserciones, lo que anula la posibilidad de elegir otro deseado.
    - Si investigamos sobre su [puntuación de snyk](https://snyk.io/advisor/npm-package/jest), comprobamos que tiene una puntuación equivalente a Mocha y que cuenta, al igual que esta, con una buena seguridad, comunidad y mantenimiento.
    
* **Jasmine:**
    - Cuenta con una gran flexibilidad, ya que, al igual que mocha, nos permite elegir la biblioteca de aserciones que queremos utilizar.
    - Tiene un buen mantenimiento, con actualizaciones recientes y una reciente actividad en su [repositorio de github](https://github.com/jasmine/jasmine).
    - En su [puntuación de snyk](https://snyk.io/advisor/npm-package/jasmine) vemos que también cuenta con una gran popularidad y mantenimiento. Aunque globalmente, tiene una puntuación algo menor que las anteriores.

* **Ava:**
    - Ava es un test runner que cuenta con una amplia comunidad y un buen mantenimiento, como podemos apreciar en su [repositorio de github](https://github.com/avajs/ava).
    - Cuenta con actualizaciones continuas y bastante recientes como podemos ver en su [puntuación de snyk](https://snyk.io/advisor/npm-package/ava).
    - Ava no tiene incorporada biblioteca de aserciones, pero te permite utilizar cualquiera.
    
## Elección
Tras documentarme sobre los diferentes posibilidades y una vez establecidos los criterios he podido apreciar que cualquier test runner de los mencionados podría ser una buena opción, ya que todos cumplen con las codiciones necesarias para mi proyecto y, por tanto, cualquier opción sería buena. Basandome en lo ya desarrollado en mi proyecto, ya que estoy modificando este fichero después de haber comenzado con los tests, **he decidido continuar con mi elección inicial, es decir, Mocha**