//Es parte de los updates de ES8  y está construido por sobre las promesas. Una Async Fx es un función que retorna una promesa. 
//Pero el beneficio es que nos entrega un código más limpio y más facil de leer. 

//Esto es una promesa. 

movePlayer(100, 'Left')
      .then( () => movePlayer(400, 'Left'))
      .then( () => movePlayer(10, 'Right'))
      .then( () => movePlayer(330, 'Left'))

//Con Async Await se vería así. 

async function playerStart() {
	const firstMove = await movePlayer(100, 'Left'); //pause
	await movePlayer(400, 'Left'); //pause
	await movePlayer(10, 'Right'); //pause
	await movePlayer(330, 'Left'); //pause
}


//con este tipo de funciones declaramos como asyncrona una función. el await le dice a la función “Pausa esta fx hasta que se cumpla”, 
//para luego pasar a la siguiente. Lo interesante es que se le pueden asignar variables a cada asyn haciendo un código mas syncronico. 

//Pero mejor veamos un ejemplo más realista. Como sabemos fetch() es una Fx promesa.

fetch('https://jsonplaceholder.typicode.com/users')
	.then(resp => resp.json())
	.then(console.log)

//con async sería de la siguiente manera

async function fetchUsers() {
	const resp = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await resp.json();
	console.log(data);
}

//Como dice el video es más que todo sugar syntax para mejorar el código y que sea vea de manera syncronica y por lo mismo un 
//código más limpio. 

//Otro ejemplo sería 

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => 
    fetch(url).then(resp => resp.json())
)).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch(() => console.log('error'))

//CON EL ASYNC SERÍA

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

