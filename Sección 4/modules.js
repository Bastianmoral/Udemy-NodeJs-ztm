//Primero que todo hay que pensar los modulos como una caja. 
//Esta caja contiene código que está dedicado a hacer una cosa muy bien. 
//Por ejemplo para este curso catalogamos nuestro primero modulo como http.js

//Al final todos estos modulos juntos hacen nuestro programa. 
//Eso significa que todos lso modculos se juntar para logar una sola meta. 


//Se podría resumir en porqué usar modulos en tres razónes. 
//1.- Rehusar código existene. Asi evitar rehacer cosas que nos quitarían tiempo. 
//2.- Nos permite organizar nuestro código 
//3.- Exponer solo la funcionalidad que va a ser usada por otros modulos y ocutar detalles que solo importan para ese modulo en específico. 


    //Pensemos que estamos buscando en nuestor modulo http.js. El cual queremos usar para hacer una request al servidor
    //recibir datos de vuelta en respuesta.
    //Hay muchas maneras de hacerlo pero la mejor manera sería ordenar e ir segmentando el código. 
    //Sabemos que existirán si o si una request y una response por lo que creariamos un modulo response y un modulo request para cada una. 
    //Cada uno de ellos se puede auto contener y hacer solo lo relevante para su parte dle proceso. 
    //Como por ejemplo almacenar solo la data que es requerida por la respuesta y respondiendo a eventos que retornarán. 
    //Los detalles de impleemntación de cada modulo se guardan y no son mostrados al otro modulo y solo la informacón que es solicitada. 

    
//Si bien los modulos se pueden importar en la misma funcion con un export.modules.fxname = funcion fxname() {}
//Lo mejor es declarar al final los modulos y hacer al exportación. 

//*****COMMONjs VS ECMAscripts (ES6) module ********/

//Al contrario del CommonJs en ECMa se tiene que poner como extensión .mjs
//A demás que al momento de especificar las rutas relativas estas siempre deben ir con la extensión al contrario de lo que pasa con el commonJs




