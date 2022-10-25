const model = require('../models/friends.models');

function postFriends (req, res) {
    //validación por si está vacío el json
    if (!req.body.name) {
        return res.status(400).json({
            error: 'Missing friend name'
        })
    }
    //función apra agregar un nuevo amigo
    const newFriend = {
        name: req.body.name,
        id: model.length
    };
    //pusheamos el nuevo amigo
    model.push(newFriend);

    //respuesta con el json de nuestro nuevo amigo 
    res.json(newFriend);
}

function getFriends (req, res) {   
    res.json(model);
}


function getFriend (req, res) {
    const friendId = Number(req.params.friendId);
    const friend = model[friendId];
    //con esto evitamos algún bug
    if (friend) {
        res.json(friend);
    } else {
        //puede ser así pero es mejor mandar un json
        //res.sendStatus(404);
        res.status(404).json({
            error: 'Friend does not exist'
        });
    }
}


module.exports = {
    postFriends,
    getFriends,
    getFriend
}