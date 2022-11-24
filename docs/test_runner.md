# Test runner
## Criterios a seguir para la elección
Para poder elegir un test runner que se adecue a las buenas prácticas del lenguaje tendré en cuenta:
1.  Estándares:
       - Formato TAP (Test Anything Protocol) 
2.	Buenas prácticas:
       - Debemos tener en cuenta que se aconseja con mayor frecuencia por los desarrolladores
       - Debemos tener en cuenta la documentación que encontramos sobre el test runner y la sencillez de la sintaxis.
       - Debemos tener en cuenta si cuenta con su propia librería de aserciones o podemos elegir la que queremos utilizar.
3.	Mantenimiento del test runner: Se deberá tener en cuenta la comunidad de la que dispone el test runner, ya que se busca tener un buen mantenimiento y actualización, disminuyendo la posibilidad de deuda técnica en el futuro.

## Posibles test runner:
* **Mocha:**
    - Este test runner soporta el formato TAP.
    - Mocha cuenta con un gran mantenimiento, actualizaciones frecuentes y un [repositorio de github](https://github.com/mochajs/mocha) bastante activo.
    - Mocha cuenta con una gran comunidad de desarrolladores, ya que es uno de los más extendidos.
    - Mocha cuenta con una gran documentación y una sintaxis sencilla y fácil de aprender, atendiendo a la experiencia de la mayoría de los desarrolladores.
    - Este test runner cuenta con una gran flexibilidad ya que viene sin librería de aserciones, lo que nos permitirá elegir cual queremos utilizar. 

* **Jest:**
    - Este test runner soporta el formato TAP.
    - Este test runner se caracteriza por su simplicidad y sencillez.
    - Se trata de un test runner que cuenta con una gran comunidad de desarrolladores, siendo uno de los más populares.
    - Cuenta con un buen mantenimiento y documentación, atendiendo a la actividad de su [repositorio de github]( https://github.com/facebook/jest).
    - Jest cuenta con su propia biblioteca de aserciones, lo que anula la posibilidad de elegir otro deseado.
    
* **Jasmine:**
    - Jasmine parece no ser compatible aún con el formato TAP, como podemos apreciar [aquí]()
    - Es un test runner que también está extendido entre los desarrolladores, aunque su comunidad es menor que la de los anteriores.
    - Cuenta con una gran flexibilidad, ya que, al igual que mocha, nos permite elegir la biblioteca de aserciones que queremos utilizar.
    - Tiene un buen mantenimiento, con actualizaciones recientes y una reciente actividad en su [repositorio de github](https://github.com/jasmine/jasmine).
    
## Elección
Tras documentarme sobre los diferentes posibilidades y una vez establecidos los criterios que cumplen o no cada uno de ellos, he decidido lo siguiente:
* En primer lugar, descarto Jasmine ya que no es compatible con el formato estándar TAP.
* En segundo lugar, descarto Jest, ya que no me permite elegir una biblioteca de aserciones al contar con la suya propia. Aunque esto podría ser una ventaja a la hora de incluir todo en el test runner, prefiero poder elegir una biblioteca de aserciones.
* Por tanto, **he decidido decantarme por utilizar Mocha**, ya que atendiendo a los criterios cuenta con una mayor popularidad entre los desarrolladores y una mayor flexibilidad. Además de cumplir con el estándar TAP y permitirme elegir una biblioteca de aserciones. 