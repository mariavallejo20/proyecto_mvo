const Unidades = require("./enum/unidades")

class Ingrediente{

    /**
     * Clase Ingrediente para identificar el ingrediente y conocer en que unidades se mide.
     */

    /**
     * Constructor de la clase Ingrediente
     * @param {String} nombre // nombre del ingrediente
     * @param {int} id_ingrediente // ID con el que se va a identificar al ingrediente (Resuelve el problema 2)
     * @param {int} tiempo_cocer //Tiempo que se tarda en cocer el ingrediente (Resuelven el problema 1)
     * @param {int} tiempo_frito //Tiempo que se tarda en freir el ingrediente
     * @param {int} tiempo_plancha //Tiempo que se tarda en hacer en la plancha el ingrediente
     */

    constructor(nombre, id_ingrediente, tiempo_cocer, tiempo_frito, tiempo_plancha){
        this.nombre = nombre;
        this.id_ingrediente = id_ingrediente;
        this.tiempo_cocer = tiempo_cocer;
        this.tiempo_frito = tiempo_frito;
        this.tiempo_plancha = tiempo_plancha;
    }

    /**
     * Método para obtener el nombre del ingrediente
     * @returns {String}
     */
     getNombre(){
        return this.nombre;
    }

    /**
     * Método para obtener el id del ingrediente
     * @returns {int}
     */
     getId(){
        return this.id_ingrediente;
    }

    /**
     * Método para obtener el tiempo en el que se tarda en cocer dicho ingrediente
     * @returns {int}
     */
     getTiempoCocer(){
        return this.tiempo_cocer;
    }

    /**
     * Método para obtener el tiempo en el que se tarda en freir dicho ingrediente
     * @returns {int}
     */
     getTiempoFreir(){
        return this.tiempo_frito;
    }

    /**
     * Método para obtener el tiempo en el que se tarda en hacer en la plancha dicho ingrediente
     * @returns {int}
     */
     getTiempoPlancha(){
        return this.tiempo_plancha;
    }
}

