export default class Usuario{
    /**
     * Esta clase contendrá la información del usuario. 
     * Se podrá identificar con el email.
     * Tendremos el tiempo del que dispone.
     * Tendremos la lista de la colección de recetas que se adecuan a sus neceesidades.
     */

    /**
     * Constructor de la clase Usuario
     * @param {String} nombre //nombre del usuario
     * @param {String} email //email a través del cual se identifica al usuario (Resuelve el problema 1)
     * @param {int} tiempo_disponible //tiempo del que dispone el usuario (Resuelve el problema 2)
     * @param {Array} recetas_propuestas //lista de las recetas propuestas al usuario en base al tiempo del que dispone (Resuelve el problema 3)
     */

    constructor(nombre, email, tiempo_disponible, recetas_propuestas){
        this.nombre = nombre;
        this.email = email
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
     * Método para obtener el nombre del usuario
     * @returns {String}
     */
    getEmail(){
        return this.email;
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
     * Método para seleccionar la mejor receta
     * Será mejor aquella receta que tenga menor tiempo
     * @param {Receta} receta 
     */
    SeleccionarReceta(recetas)
    {
        MejorTiempo = 2039410394

        recetas.forEach(receta => {
            tiempoReceta = receta.getTiempo()
            
            if (tiempoReceta < MejorTiempo)
                MejorTiempo = tiempoReceta
        });

        return MejorTiempo;
    }
 
    /** 
      * Método que crea las recetas propuestas
      */
    RecomendarRecetasTiempo(recetas)
    {
        recetasTotal = recetas
        // Recorro todas las recetas
        while (recetasTotal.lenght != 0)
        {
            // Selecciono el mejor candidato de conjunto de recetas mediante una función
            recetaSeleccionada = this.SeleccionarReceta(recetasTotal)
            //Eliminamos del conjunto de receta la seleccionada
            recetasTotal = recetas.filter(receta => receta != recetaSeleccionada)

            // Si es factible, es decir, si se adecua al tiempo disponible del usuario
            // la añadimos al array de soluciones (recetas recomendadas para el usuario)
            if (recetaSeleccionada.getTiempo() <= this.getTiempoDisponible())
                this.recetas_propuestas.push(recetaSeleccionada)
        } 
    }
}
