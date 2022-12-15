import {assert} from 'chai'
import Usuario from '../src/usuario.js'
import Receta from '../src/receta.js'

// Testeamos la clase Usuario
describe ('Clase Usuario', function(){

    // Testeamos la lógica de negocio
    describe('Recetas propuestas', function(){

        
        it('El tiempo de las recetas propuestas debe ser menor o igual que el tiempo disponible del usuario', function(){
            //Ajustar
            let tiempoDisponible = 30;
            
            //Actuar
            // Algunas recetas
            let receta1 = new Receta("Huevo Frito", ["aceite", "huevo", "sal"], 10);
            let receta2 = new Receta("Perrito Caliente", ["salchicha", "pan", "mayosena", "queso"], 15);
            let receta3 = new Receta("Patata Asada", ["patata", "sal", "pimienta"], 45);
            let receta4 = new Receta("Macarrones con tomate", ["agua", "aceite", "sal", "pasta", "pimienta", "tomate"], 30); 
            let receta5 = new Receta("Macarrones con nata", ["agua", "aceite", "sal", "pasta", "pimienta", "nata", "queso"], 30);           
            let recetasTotal = [receta1, receta2, receta3, receta4, receta5];

            // Usuario nuevo
            let nuevoUsuario = new Usuario(null, tiempoDisponible, []);
            
            // Aplicamos la lógica de negocio y obtenemos las recetas propuestas
            nuevoUsuario.recomendarRecetas(recetasTotal, ["sal", "pimienta"], tiempoDisponible);
            let nuevoRecetasPropuestas = nuevoUsuario.getRecetasPropuestas();

            //Afirmar

            //Comprobamos el tiempo para todas las recetas
            nuevoRecetasPropuestas.forEach(receta => assert.isAtMost(receta.getTiempo(), nuevoUsuario.getTiempoDisponible()));
            
            //Comprobamos que se recomiendan las 3 recetas esperadas
            assert.equal(nuevoRecetasPropuestas.length, 3, "Se espera recomendar 3 recetas");
        });
    });

})