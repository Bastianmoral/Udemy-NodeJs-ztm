// Esto es un ejemplo donde se trata de duplicar que es lo que pasa cada vez que se visita
//google.com en nuestro navegador. 

// que pasa si agregamos cambioos y esas cosas por acá 

const { get } = require('https');

get('https://www.google.com', (resp) => { // toma como primer argumetno una string y como segundo argumento un callback. 
    resp.on('data', (chunk) => { // Así se trae de vuelta la data de nuestra respuesta
        console.log(`Data chunk: ${chunk}`) // esto es solo un pedazo de la data
    });
    resp.on('end', () => {
        console.log('No more Data');
    });
}); 