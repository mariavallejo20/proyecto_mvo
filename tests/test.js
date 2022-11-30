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
        it('El nombre del usuario NO puede ser una cadena vacía', function(){
            //Ajustar
            var nombre = 'Maria Vallejo';
            var email = 'mariavallejo20@correo.ugr.es';
            
            //Actuar
            var nuevo_usuario = new Usuario(nombre, email, null, null);

            //Afirmar
            assert.isAbove(nuevo_usuario.getNombre().length, 0);
            
        });
    });

    // Testeamos que el email del usuario NO sea una cadena vacía
    describe('Email usuario', function(){

        // Obtendremos un error si la cadena del email NO es superior a 0
        it('El email del usuario NO puede ser una cadena vacía', function(){
            //Ajustar
            var nombre = 'Maria Vallejo';
            var email = 'mariavallejo20@correo.ugr.es';
            
            //Actuar
            var nuevo_usuario = new Usuario(nombre, email, null, null);

            //Afirmar
            assert.isAbove(nuevo_usuario.getEmail().length, 0);
            
        });
    });

    // Testeamos que el email del usuario NO sea una cadena vacía
    describe('Tiempo disponible usuario', function(){

        // Obtendremos un error si la cadena del email NO es superior a 0
        it('El tiempo disponible del usuario debe ser mayor que 0', function(){
            //Ajustar
            var nombre = 'Maria Vallejo';
            var email = 'mariavallejo20@correo.ugr.es';
            var tiempo_disponible = 10;
            
            //Actuar
            var nuevo_usuario = new Usuario(nombre, email, tiempo_disponible, null);

            //Afirmar
            assert.isAbove(nuevo_usuario.getTiempoDisponible(), 0);
            
        });
    });

})