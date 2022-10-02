//Existen tres nuevas operaciones estas son 

//OBJECT SPREAD OPERATOR

const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2,
    bird: 40
}


function objectSpred(p1, p2, p3) {
    console.log(p1);
    console.log(p2);
    console.log(p3);
}
const {tiger, lion, ...rest} = animals;
//se pone rest pero puede ser cualquiera yo ocupe chanchito para probar.

objectSpred(tiger, lion, rest)

//En es6 se podía hace resto mismo con un array la gracia de esta función es que se puede hacer con objetos. 

//finally

//Sirve para correr una Fx sin importar lo que pase al final de una promesa. 
//por ejemplo enviarle un email a un usuario sin importar lo que pase o esperar si su request fracasó o pasó 


const urls2 = [
    'https://swapi.dev/api/people/1',
    'https://swapi.dev/api/people/2',
    'https://swapi.dev/api/people/3',
    'https://swapi.dev/api/people/4'

]

Promise.all(urls2.map(url => {
    return fetch(url).then(people => people.json())
}))
    .then(array => {
        console.log('1', array[0])
        console.log('2', array[1])
        console.log('3', array[2])
        console.log('4', array[3])
    })
    .catch(err => console.log('uuuuuh ERRROOOOOOR!!', err))
    .finally(() => console.log('extra'));


// for await of 

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
	try {
		const [users, posts, albums ] = await Promise.all(urls.map(async function(url) { 
            const response = await fetch(url)
            return response.json();
        }));
   console.log('users', users)
   console.log('post', posts)
   console.log('albums', albums)
   } catch(err) {
	    console.log('error', err)
    }
}

/* const loopThroughUrls = url => {
    for (url of urls) {
        console.log(url)
    }
} */

const getData2 = async function() {
    const arrayOfPromises = urls.map(url => fetch(url));
    //Se crea un array/arrglo de las promesas del fetch de cada una de las peticiones/request.
    for await (let chanchito2 of arrayOfPromises) {
        //acá se hace el for await of donde se crea una var del arreglo de promesas creado anteriormente. 
        const chanchito3 = await chanchito2.json();
        //lie
        console.log(chanchito3)
    }
}

// Nos permite hacer un loop a traves de multiples promesas

//Usar el for of loop nos permite iterar sobre Fx iterables.
//Nos permite iterar sobre el await promises. 
