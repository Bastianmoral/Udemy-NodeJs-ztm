const { getAllPlanets }  = require('../../models/planets.model');


async function httpGetAllPlanets(req, res) {
    return res.status(200).json(await getAllPlanets()); //el status es opcional pero es buena práctica agregarlo, agregar el return nos hace que la función solo se aplique una vez. 

}


module.exports = {
    httpGetAllPlanets,
};