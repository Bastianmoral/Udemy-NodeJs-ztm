const { planets }  = require('../../models/planets.model')

function getAllPlanets(req, res) {
    return res.status(200).json(planets); //el status es opcional peor es buena práctica agregarlo, agregar el return nos hace que la función solo se aplique una vez. 

}


module.exports = {
    getAllPlanets,
};