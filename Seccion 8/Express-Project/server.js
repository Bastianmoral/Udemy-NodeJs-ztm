const express = require('express');

const friendController = require('./controllers/friends.controller');
const messagesController = require('./controllers/messages.controller');


const app = express();

const PORT = 3000;


//EJEMPLO DE MIDDLEWARE DEL CURSO 
app.use((req, res, next) => {
    //aquí se mide la cnatidad de tiempo que lo temó anode procesar este request en particular. 
    //Es por esta razon que los valores con postman son diferentes. 
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

//CONTROLLERS

//Agregar un frend
app.post('/friends', friendController.postFriends);
//Todos los friends
app.get('/friends', friendController.getFriends);
//individual friends
app.get('/friends/:friendId',friendController.getFriend);
app.get('/messages', messagesController.getMessages);
app.post('/messages', messagesController.postMessage);


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
})
