import Receta from '../src/receta.js'

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
     * @param {Array} recetas
     */
    seleccionarReceta(recetas)
    {
        var mejorTiempo = 500
        var mejorReceta = new Receta()

        // Recorro las recetas cogiendo el tiempo necesario de cada receta
        recetas.forEach(receta => {
            var tiempoReceta = receta.getTiempo()
            
            // Si el tiempo de la mejor receta hasta el momento es mayor que el de la receta actual
            // Me quedo con la receta actual
            if (tiempoReceta <= mejorTiempo)
                mejorTiempo = tiempoReceta
                mejorReceta = receta
        });

        // Devuelvo la receta con el menor tiempo 
        return mejorReceta;

    }
 
    /** 
      * Método que crea las recetas propuestas (ALGORITMO GREEDY)
      * @param {Array} recetas
      */
    recomendarRecetasPorTiempo(recetas)
    {
        var recetasTotal = recetas
        var rep = recetas.length

        // Recorro todas las recetas
        for (var i = 0; i < rep; i++)
        {
            // Selecciono el mejor candidato de conjunto de recetas mediante una función
            var recetaSeleccionada = this.seleccionarReceta(recetasTotal)
            // Eliminamos del conjunto de receta la seleccionada
            //recetasTotal = recetasTotal.filter(receta => receta != recetaSeleccionada)
            var indice = recetasTotal.indexOf(recetaSeleccionada)
            recetasTotal.splice(indice,1)

            // Si es factible, es decir, si se adecua al tiempo disponible del usuario
            // la añadimos al array de soluciones (recetas recomendadas para el usuario)
            if (recetaSeleccionada.getTiempo() <= this.getTiempoDisponible())
                this.recetas_propuestas.push(recetaSeleccionada) 
        }
    }
}
