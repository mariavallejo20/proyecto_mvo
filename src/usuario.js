import Receta from '../src/receta.js'

export default class Usuario{
    /**
     * Esta clase contendrá la información del usuario.
     * Tendremos el tiempo del que dispone.
     * Tendremos la lista de la colección de recetas que se adecuan a sus neceesidades.
     */

    /**
     * Constructor de la clase Usuario
     * @param {String} nombre //nombre del usuario
     * @param {int} tiempo_disponible //tiempo del que dispone el usuario (Resuelve el problema 2)
     * @param {Array} recetas_propuestas //lista de las recetas propuestas al usuario en base al tiempo del que dispone (Resuelve el problema 3)
     */

    constructor(nombre, tiempo_disponible, recetas_propuestas){
        this.nombre = nombre;
        this.tiempo_disponible = tiempo_disponible;
        this.recetas_propuestas = recetas_propuestas;
    }

    /**
     * Método para obtener el nombre del usuario
     * @returns {String}
     */
    getNombre(){
        return this.nombre;
    }

    /**
     * Método para obtener el tiempo disponible en minutos
     * @returns {int}
     */
     getTiempoDisponible(){
        return this.tiempo_disponible;
    }

    /**
     * Método para obtener la lista de recetas propuestas
     * @returns {Array}
     */
     getRecetasPropuestas(){
        return this.recetas_propuestas;
    }

    
    /**
     * Método que comprueba que recetas contienen los ingrediente disponibles del usuario
     * @param {array} recetas 
     * @param {array} disponibles 
     */

    comprobarIngredientes(recetas, disponibles)
    {
        let recetasTotal = recetas
        let recetasADevolver = []
        //Recorro todas las recetas obteniendo sus ingredietes
        recetasTotal.forEach(receta => {
            let ingredientesReceta = receta.getIngredientes()
            let aniadirReceta = false
            // Compruebo si los ingredientes disponibles están contenidos en los ingredientes de la receta
            disponibles.forEach(ingrediente => {
                let encontrado = ingredientesReceta.indexOf(ingrediente)
                // Si encontramos al menos un ingrediente, añadimos esta receta
                if(encontrado != -1)
                    aniadirReceta = true
            });
            // Añadirmos a las recetas que contienen los ingredientes disponibles
            if (aniadirReceta)
                recetasADevolver.push(receta)
        });

        // Devolvermos las recetas, hasta ahora recomendadas en función de los ingredientes
        return recetasADevolver
    }
 
    /** 
      * Método que selecciona aquellas recetas que se adecuan al tiempo del usuario, teniendo en cuenta
      * los ingredientes de los que dispone
      * @param {Array} recetas
      * @param {Array} Ingredientesdisponibles
      * @param {int} tiempoDisponible
      */
    recomendarRecetas(recetas, Ingredientesdisponibles, tiempoDisponible)
    {
        let recetasTotal = recetas
        let recetasConIngredientes = this.comprobarIngredientes(recetasTotal, Ingredientesdisponibles)
        
        //Recorremos las recetas que incluyen al menos un ingrediente disponible por el usuario
        recetasConIngredientes.forEach(receta => {
            //Selecciono aquellas recetas que se adecuan al tiempo del usuario
            if(receta.getTiempo() <= tiempoDisponible)
                this.recetas_propuestas.push(receta)
        });
    }

    
}
