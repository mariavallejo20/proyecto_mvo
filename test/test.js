import {assert} from 'chai'
import Usuario from '../src/usuario.js'
import Receta from '../src/receta.js'

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

    // Testeamos la lógica de negocio
    describe('Recetas propuestas', function(){

        // Obtendremos un error si la cadena del email NO es superior a 0
        it('El tiempo de las recetas propuestas debe ser menor o igual que el tiempo disponible del usuario', function(){
            //Ajustar
            var nombre = 'Maria Vallejo';
            var email = 'mariavallejo20@correo.ugr.es';
            var tiempo_disponible = 30;
            
            //Actuar
            // Algunas recetas
            var receta1 = new Receta("Huevo Frito", ['huevo', 'aceite', 'sal'], 10);
            var receta2 = new Receta("Perrito Caliente", ['salchicha', 'pan'], 15);
            var receta3 = new Receta("Patata Asada", ['patata', 'aceite','pimienta'], 45);
            var receta4 = new Receta("Macarrones", ['pasta', 'aceite','agua', 'tomate'], 30);            
            var recetas_total = [receta1, receta2, receta3, receta4];

            // Usuario nuevo
            var nuevo_usuario = new Usuario(nombre, email, tiempo_disponible, []);
            
            // Aplicamos la lógica de negocio y obtenemos las recetas propuestas
            nuevo_usuario.RecomendarRecetasTiempo(recetas_total);
            var nuevo_recetas_propuestas = nuevo_usuario.getRecetasPropuestas();

            //Afirmar

            //Comprobamos el tiempo para todas las recetas
            nuevo_recetas_propuestas.forEach(receta => assert.isAtMost(receta.getTiempo(), nuevo_usuario.getTiempoDisponible()));
            
            //Comprobamos que se recomiendan las 3 recetas esperadas
            assert.equal(nuevo_recetas_propuestas.length, 3, "Se espera recomendar 3 recetas");
        });
    });

})