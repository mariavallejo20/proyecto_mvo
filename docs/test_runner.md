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
    - Este test runner soporta el formato TAP.    
    - Es un test runner que también está extendido entre los desarrolladores, aunque su comunidad es menor que la de los anteriores.
    - Cuenta con una gran flexibilidad, ya que, al igual que mocha, nos permite elegir la biblioteca de aserciones que queremos utilizar.
    - Tiene un buen mantenimiento, con actualizaciones recientes y una reciente actividad en su [repositorio de github](https://github.com/jasmine/jasmine).

* **Ava:**
    - Ava es un test runner también popular entre los desarrolladores, que cuenta con una amplia comunidad y un buen mantenimiento, como podemos apreciar en su [repositorio de github](https://github.com/avajs/ava).
    - Cuenta con actualizaciones continuas y bastante recientes.
    - Ava es compatible con el formato TAP.
    - Ava no tiene incorporada biblioteca de aserciones, pero te permite utilizar cualquiera.
    
## Elección
Tras documentarme sobre los diferentes posibilidades y una vez establecidos los criterios he podido apreciar que cualquier test runner de los mencionados podría ser una buena opción. Para poder hacer una elección me he ayudado de [npm trends](https://npmtrends.com/ava-vs-jasmine-vs-jest-vs-mocha) donde he comparado los 4 tests runner.
En esta comparación he podido apreciar que Mocha y Jest son los más utilizados, con mayor comunidad y mantenimiento. Sin embargo, las diferencias entre estos dos no son significativas y cualquiera podría ser una buena opción atendiendo a las características y envergadura de mi proyecto, por tanto, **he decidido decantarme por utilizar Mocha**. 