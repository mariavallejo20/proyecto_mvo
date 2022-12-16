import Receta from '../src/receta.js'

export default class Usuario{
    /**
     * Esta clase contendrá la información del usuario.
     * Tendremos el tiempo del que dispone.
     * Tendremos la lista de la colección de recetas que se adecuan a sus neceesidades.
     */

    /**
     * Constructor de la clase Usuario
     * @param {int} tiempo_disponible //tiempo del que dispone el usuario (Resuelve el problema 2)
     * @param {Array} recetas_propuestas //lista de las recetas propuestas al usuario en base al tiempo del que dispone (Resuelve el problema 3)
     */

    constructor(tiempo_disponible, recetas_propuestas){
        this.tiempo_disponible = tiempo_disponible;
        this.recetas_propuestas = recetas_propuestas;
    }

    /**
     * Método para obtener el tiempo disponible en minutos
     * @returns {int}
     */
     getTiempoDisponible(){
        return this.tiempo_disponible;
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
            const ingredientesReceta = new Set(receta.getIngredientes())
            let aniadirReceta = false
            // Compruebo si los ingredientes disponibles están contenidos en los ingredientes de la receta
            disponibles.forEach(ingrediente => {
                let encontrado = false
                encontrado = ingredientesReceta.has(ingrediente)
                // Si encontramos al menos un ingrediente, añadimos esta receta
                if(encontrado)
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
        let recetasPropuestas = []
        //Recorremos las recetas que incluyen al menos un ingrediente disponible por el usuario
        recetasConIngredientes.forEach(receta => {
            //Selecciono aquellas recetas que se adecuan al tiempo del usuario
            if(receta.getTiempo() <= tiempoDisponible)
                recetasPropuestas.push(receta)
        });

        return recetasPropuestas
    }

    
}
