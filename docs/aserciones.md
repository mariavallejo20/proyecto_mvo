# Biblioteca de aserciones

## Criterios a seguir para la elección
Para poder elegir una librería de aserciones que se adecue a las buenas prácticas del lenguaje tendré en cuenta:
1.	Buenas prácticas:
      - Se debe tener en cuenta los estilos de aserciones que permite la biblioteca.
2.	Mantenimiento de la biblioteca: Se deberá tener en cuenta la comunidad de la que dispone, ya que se busca tener un buen mantenimiento y actualización, disminuyendo la posibilidad de deuda técnica en el futuro.

## Posibles librerías de aserciones:

* **Should.js:**
      - Se trata de una librería de aserciones del tipo BDD, es decir, se caracteriza por tener un estilo verboso, cercano al lenguaje cotidiano.
      - Una de las principales desventajas de esta librería es su mantenimiento, ya que tiene pocas actualizaciones y una comunidad poco activa, como podemos apreciar en su [repositorio de github]( https://github.com/shouldjs/should.js). Siendo su última versión de hace 4 años.
      
* **Expect.js:**
      - Se trata, al igual que shouls.js, de una librería de aserciones del tipo BDD, es decir, se caracteriza por tener un estilo verboso, cercano al lenguaje cotidiano.
      - Cuenta con una comunidad más activa que la biblioteca anterior, como podemos ver en su [repositorio de github](https://github.com/Automattic/expect.js), siendo su última actualización hace pocos días.
     
* **Chai:**
      - Chai es una biblioteca de aserciones que incluye los dos estilos BDD / TDD. Es decir, nos permitirá utilizar el lenguaje expresivo y legible del estilo BDD o la sensación clásica del estilo TDD.
      -  Cuenta con una gran comunidad de desarrolladores, ya que es la más extendida y popular.
      - Cuenta con recientes actualizaciones, buen mantenimiento y una comunidad activa, como podemos apreciar en su [repositorio de github]( https://github.com/chaijs/chai). Siendo su última actualización hace tan solo unos días.

* **Assert:**
      - Assert es una biblioteca de aserciones popular entre los desarrolladores de javasrcript, sin embargo, no cuenta con actualizaciones recientes ni con una comunidad activa como podemos apreciar en su [repositorio de github](https://github.com/browserify/commonjs-assert)
      - Se trata de una librería de aserciones del tipo TDD.

## Elección
Tras documentarme sobre las diferentes bibliotecas de aserciones y una vez establecidos los criterios que cumplen o no cada uno de ellos, **he decidido decantarme por Chai** ya que es la más extendida y mantenida, lo que disminuye la posibilidad de tener deuda técnica en el futuro; y presenta una mayor flexibilidad al permitir utilizar varios estilos de aserciones.