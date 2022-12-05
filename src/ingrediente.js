class Ingrediente{

    /**
     * Constructor de la clase Ingrediente
     * @param {String} nombre // nombre del ingrediente (Identificará cada ingrediente)
     */

    constructor(nombre){
        this.nombre = nombre;
    }

    /**
     * Método para obtener el nombre del ingrediente
     * @returns {String}
     */
     getNombre(){
        return this.nombre;
    }
}

