import {assert} from 'chai'
import Usuario from '../src/usuario.js'

// Testeamos la clase Usuario
describe ('Clase Usuario', function(){

    // Testea que se haya cargado bien la biblioteca
    describe('Carga de la biblioteca Usuario', function(){

        // Obtenemos un error si no se ha cargado correctamente la biblioteca Usuario
        it('Se ha cargado correctamente', function(){
            assert.ok(Usuario, "Cargado");
        });
    });

    // Testeamos que el nombre del usuario NO sea una cadena vacía
    describe('Nombre usuario', function(){

        // Obtendremos un error si la cadena del nombre NO es superior a 0
        it('El nombre de usuario NO puede ser una cadena vacía', function(){
            //Ajustar
            var nombre = 'Maria Vallejo';
            var email = 'mariavallejo20@correo.ugr.es';
            
            //Actuar
            var nuevo_usuario = new Usuario(nombre, email, null, null);

            //Afirmar
            assert.isAbove(nuevo_usuario.getNombre().length, 0);
            
        });
    });

})