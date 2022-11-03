const Unidades = require("./enum/unidades")

class Receta{

    /**
     * Clase Receta para especificar la información de cada receta (tiempo de realización, ingredientes, número de pasos...)
     */

    /**
     * Constructor de la clase Receta
     * @param {String} nombre //nombre de la receta
     * @param {Map} ingredientes //map que contiene el ID del ingrediente y su cantidad
     * @param {int} tiempo //tiempo que se emplea en la realización de la receta (en minutos)
     * @param {int} num_pasos //número de pasos necesarios para realizar la receta
     * @param {Array} descripcion //descripción de los pasos para realizar la receta
     */
    constructor(nombre, ingredientes, tiempo, num_pasos, descripcion){
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.tiempo = tiempo;
        this.num_pasos = num_pasos;
        this.descripcion = descripcion;
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
     * @returns {Map}
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

    /**
     * Método para obtener el número de pasos
     * @returns {int}
     */
     getNumPasos(){
        return this.num_pasos;
    }

    /**
     * Método para obtener la descripción de los pasos
     * @returns {Array}
     */
     getDescripcion(){
        return this.descripcion;
    }
}

