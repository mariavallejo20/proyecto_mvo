class Usuario{
    /**
     * Constructor de la clase Usuario
     * @param {String} nombre
     * @param {String} email
     */

    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email
    }

    /**
     * Método para obtener el nombre del usuario
     * @returns {String}
     */
    getNombre(){
        return this.nombre;
    }

    /**
     * Método para obtener el nombre del usuario
     * @returns {String}
     */
     getEmail(){
        return this.email;
    }
}