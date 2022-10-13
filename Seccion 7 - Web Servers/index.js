const http = require('http')

const PORT = 3000;

const server = http.createServer();

const friends = [
    {
        id: 0, 
        name: 'Nikola Tesla'
    },
    {
        id: 1, 
        name: 'Sir Isaac Newton'
    },
    {
        id: 2, 
        name: 'Albert Einstein'
    },
]

//usando el request, podemos buscar dentor de los headers y en la data que se nos paso desde los clientes 
// el response podemos crear una response al escribir algunos datos y encabezados (headers) para enviar de vuelta al cliente. 
// tal cual como vimos en el projecto de los planetas resp y req son steam
server.on('request', (req, resp) => {
    const items = req.url.split('/');
        if (items[1] === 'friends'){  
            resp.statusCode = 200;
            resp.setHeader('Content-type', 'application/json');
                if (items.length === 3) {
                    const friendIndex = Number(items[2]); // tmabién puede ser

                    resp.end(JSON.stringify(friends[friendIndex]));
                } else {
                    resp.end(JSON.stringify(friends));
                }
        } else if (items[1] === 'messages') {
            resp.setHeader('Content-Type', 'text/html');
            resp.write('<html>');
            resp.write('<body>');
            resp.write('<ul>');
            resp.write('<li>hello Isaac!</li>');
            resp.write('<li>What are your thoughts on astronomy?</li>');
            resp.write('</ul>');
            resp.write('</body>');
            resp.write('</html>');
            resp.end();
        } else {
            resp.statusCode = 404;
            resp.end();

        }
        });



server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
} ); //127.0.0.1 => localhost 