const express = require('express');

//Routers
const friendsRouter = require('./Routes/friends.router');
const messagesRouter = require('./Routes/messages.router')

const app = express();

const PORT = 3000;


//EJEMPLO DE MIDDLEWARE DEL CURSO 
app.use((req, res, next) => {
    //aquí se mide la cnatidad de tiempo que lo temó anode procesar este request en particular. 
    //Es por esta razon que los valores con postman son diferentes. 
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use(express.json());


//Routes
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
})
