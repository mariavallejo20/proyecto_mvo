import {assert} from 'chai'
import Usuario from '../src/usuario.js'
import Receta from '../src/receta.js'

// Testeamos la clase Usuario
describe ('Clase Usuario', function(){

    // Testeamos la lógica de negocio
    describe('Recetas propuestas', function(){

        
        it('El tiempo de las recetas propuestas debe ser menor o igual que el tiempo disponible del usuario', function(){
            //Ajustar
            var nombre = 'Maria Vallejo';
            var tiempo_disponible = 30;
            
            //Actuar
            // Algunas recetas
            var receta1 = new Receta("Huevo Frito", ['huevo', 'aceite', 'sal'], 10);
            var receta2 = new Receta("Perrito Caliente", ['salchicha', 'pan'], 15);
            var receta3 = new Receta("Patata Asada", ['patata', 'aceite','pimienta'], 45);
            var receta4 = new Receta("Macarrones", ['pasta', 'aceite','agua', 'tomate'], 30);            
            var recetas_total = [receta1, receta2, receta3, receta4];

            // Usuario nuevo
            var nuevo_usuario = new Usuario(nombre, tiempo_disponible, []);
            
            // Aplicamos la lógica de negocio y obtenemos las recetas propuestas
            nuevo_usuario.recomendarRecetasPorTiempo(recetas_total);
            var nuevo_recetas_propuestas = nuevo_usuario.getRecetasPropuestas();

            //Afirmar

            //Comprobamos el tiempo para todas las recetas
            nuevo_recetas_propuestas.forEach(receta => assert.isAtMost(receta.getTiempo(), nuevo_usuario.getTiempoDisponible()));
            
            //Comprobamos que se recomiendan las 3 recetas esperadas
            assert.equal(nuevo_recetas_propuestas.length, 3, "Se espera recomendar 3 recetas");
        });
    });

})