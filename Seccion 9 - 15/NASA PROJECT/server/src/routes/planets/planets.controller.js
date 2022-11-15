const { getAllPlanets }  = require('../../models/planets.model')

function httpGetAllPlanets(req, res) {
    return res.status(200).json(getAllPlanets()); //el status es opcional peor es buena práctica agregarlo, agregar el return nos hace que la función solo se aplique una vez. 

}


module.exports = {
    httpGetAllPlanets,
};