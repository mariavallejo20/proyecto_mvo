const Unidades = require("./enum/unidades")

class Ingrediente{


    /**
     * Constructor de la clase Ingrediente
     * @param {String} nombre // nombre del ingrediente
     * @param {int} id_ingrediente // ID con el que se va a identificar al ingrediente
     */

    constructor(nombre, id_ingrediente){
        this.nombre = nombre;
        this.id_ingrediente = id_ingrediente;
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
}

