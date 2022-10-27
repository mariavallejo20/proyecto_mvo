const Unidades = require("./enum/unidades")

class Ingrediente{

    /**
     * Constructor de la clase Ingrediente
     * @param {String} nombre
     * @param {int} id_ingrediente
     * @param {Unidades} unidades
     */

    constructor(nombre, id_ingrediente, unidades){
        this.nombre = nombre;
        this.id_ingrediente = id_ingrediente;
        this.unidades = unidades;
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
     * Método para obtener las unidades en las que se mide dicho ingrediente
     * @returns {Unidades}
     */
     getUnidades(){
        return this.unidades;
    }
}