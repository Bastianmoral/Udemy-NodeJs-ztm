//El index.js nos permite tratar una carpeta como un modulo. 
//Cuando pasas el path de una carpeta para uan fx. Se resuelve que vaya a index.js 

// SE DEBE OCUPAR EL index.js

//ALGUNOS LO ADORAN POR SU CAPACIDAD DE SIMPLIFICAR LOS IMPORTES DE MODULOS COMPLICADOS CON DOCENAS DE ARCHIVOS.
//EN EL 

//  


//const request = require('./request');
//const response = require('./response');

/* module.exports = {
    REQUEST_TIMEOUT: request.REQUEST_TIMEOUT,
    send: request.send,
    read: request.read,
}; */




module.exports = {
    ...require('./request'),
    ...require('./response'),
}
