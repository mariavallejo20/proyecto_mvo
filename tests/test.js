const assert = require('chai').assert;
const { expect } = require('chai');
const usuario = require('../src/usuario');

// Testeamos la clase Usuario
describe ('Clase Usuario', function(){

    // Testea que se haya cargado bien la biblioteca
    describe('Carga de la biblioteca Usuario', function(){

        // Obtenemos un error si no se ha cargado correctamente la biblioteca Usuario
        it('Se ha cargado correctamente', function(){
            assert.ok(usuario, "Cargado");
        });
    });

})