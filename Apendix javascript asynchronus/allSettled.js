const promiseOne = new Promise ((resolve , reject) =>
    setTimeout (resolve, 3000))
const promiseTwo = new Promise ((resolve , reject) =>
    setTimeout (reject, 3000))

//Tenemos dos promes una va a ser resuleta y la otra rechazada.

//Promise.all([promiseOne, promiseTwo]).then( data => console.log(data))
//    .catch(e => console.log('something fail', e));

Promise.allSettled([promiseOne, promiseTwo]).then( data => console.log(data))
    .catch(e => console.log('something fail', e));

//El Promise.allSettled corre todas las promesas sin importar si fueron rechazadas o no. 
//Entonces la promesa solo se devuelve cuando todas las promesas que han sido añadidas están completas. 
