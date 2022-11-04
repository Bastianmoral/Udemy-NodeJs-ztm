const express = require('express');
const path = require('path');

//Routers
const friendsRouter = require('./Routes/friends.router');
const messagesRouter = require('./Routes/messages.router')

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));


const PORT = 3000;


//EJEMPLO DE MIDDLEWARE DEL CURSO 
app.use((req, res, next) => {
    //aquí se mide la cantidad de tiempo que lo temó anode procesar este request en particular. 
    //Es por esta razon que los valores con postman son diferentes. 
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

//Una cosa común que suceda mientras trabajamos con nodejs, es que necesitaresmos servir a información de nuestro servidor a una app web de front end
//En expressjs se usa app.use() para hacer esta interacción. 

app.use('/site', express.static(path.join(__dirname, 'public')));
app.use(express.json());


//Routes

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Montain',
        caption: 'My Friend in Puente Alto also know as High Bridges',
    })
});
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
})
