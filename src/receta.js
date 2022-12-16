export default class Receta{

    /**
     * Clase Receta para especificar la información de cada receta
     */

    /**
     * Constructor de la clase Receta
     * @param {String} nombre //nombre de la receta
     * @param {Array} ingredientes //array con los ingredientes que hay en cada receta
     * @param {int} tiempo //tiempo que se emplea en la realización de la receta (en minutos)
     */
    constructor(nombre, ingredientes, tiempo){
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.tiempo = tiempo;
    }

    /**
     * Método para obtener el nombre de la receta
     * @returns {String}
     */
     getNombre(){
        return this.nombre;
    }

    /**
     * Método para obtener los ingredientes con/sin su cantidad
     * @returns {Array}
     */
     getIngredientes(){
        return this.ingredientes;
    }

    /**
     * Método para obtener el tiempo expresado en minutos
     * @returns {int}
     */
     getTiempo(){
        return this.tiempo;
    }
}

