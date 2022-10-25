const express = require('express');

const friendsController = require('../controllers/friends.controller');

const friendsRouter = express.Router();


//CONTROLLERS

friendsRouter.use((req, res, next) =>  {
    console.log('ip adress:', req.ip);
    next();
})
//Agregar un frend
friendsRouter.post('/', friendsController.postFriends);
//Todos los friends
friendsRouter.get('/', friendsController.getFriends);
//individual friends
friendsRouter.get('/:friendId', friendsController.getFriend);


module.exports = friendsRouter;