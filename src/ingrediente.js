const Unidades = require("./enum/unidades")

class Ingrediente{

    /**
     * Clase Ingrediente para identificar el ingrediente y conocer en que unidades se mide.
     */

    /**
     * Constructor de la clase Ingrediente
     * @param {String} nombre // nombre del ingrediente
     * @param {int} id_ingrediente // ID con el que se va a identificar al ingrediente
     * @param {Unidades} unidades // Unidades en las que el ingrediente se suele representar
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

