//Es un object que puede porducri un solo valor en algún momento en el futuro, o también un valor resuelto o una razon que no esté resuleta (rejected).

//Puede tener tres estados. 

//fullfilled
//rejected
//pending

//Antes de las promesas están los callbacks. 

el.addEventListener("click", submitForm);
//Element que agrega un addEventListener. Cuando el usuario hace click tendremos el callback submitForm enviado al callback queue

//OTRO EJEMPLO

movePlayer(100, 'Left', function() {
	movePlayer(400, 'Left', function() {
		movePlayer(100, 'Right', function() {
			movePlayer(100, 'Left', function() {
			});
		});
	});
});


//A esto se le llama pyramid of Doom . Que son un monton de funciones con callbakcs que llaman a otra función con callback generando una pyramide que se vé. 

//Esto con una promesa se vería muy diferente. Algo así.

movePlayer(100, 'Left')
      .then( () => movePlayer(400, 'Left'))
      .then( () => movePlayer(10, 'Right'))
      .then( () => movePlayer(330, 'Left'))

//Un tercer ejemplo sería algo asi 

grabTweets('twitter/nombredeusuario', (error, nombrdeusuarioTweets) => {
	if(error) {
		throw Error;
    }
};

displayTweets(nombrdeusuarioTweets);

//Tenemos una fx grabTweets con un primer parametro que es la url del twitter o el handler de twitter. La fx callback después de haber agarrado los tweets es un error y los mismos tweets y si hay un error mostraremos el error. 
//Pasa lo mismo con lo siguientes grabTweets
 
{/*grabTweets('twitter/elonmusk', (error, elonTweets) => {*/}
	if(error) {
		throw Error;
}
};
displayTweets(elonTweets)

grabTweets('twitter/vitalikbuterin', (error, vitalikTweets) => {
	if(error) {
		throw Error;
}
displayTweets(vitalikTweets)
        }  
    }
};


//Para crear una promesa nueva debiesemos hacer lo siguiente

const Promise = new Promise((resolve, reject) => {
	if(true) {
                resolve('Stuff Worked');
        } else {
 	reject('Error, it broke')
   }
})


// Para quela promesa corra tenemos que hacer lo siguiente

promise.then(result =>  console.log(result));

// lo siguiente seria un ejemplo de encadenar promesas

promise
	.then(result =>  result + '!')
	.then(result2 => {
   console.log(result2)
})



//Que pasa si pasa algo entre el result2 y el console log con un error. 

promise
	.then(result =>  result + '!')
	.then(result2 => {
	   throw Error
   console.log(result2)
})
	.catch( () => console.log('erroooooooor!')) //Esto atrapara todo error que mi promesa tenga


// Que pasaría en el siguiente escenario. 


promise
	.then(result =>  result + '!')
	.then(result2 => result2 + '?')
	.catch(() => console.log('Errrrrroor!')) // como este catch antes del error no aparece en consola. 
	.then(result3 => {
	   throw Error;
	   console.log(result3 + '!');
})

//veamos ver qeu hay una promesa 2 despues de la promesa anterior. 

const promise = new Promise((resolve, reject) => {
	if(true) {
        resolve('Stuff Worked');
            } else {
 	reject('Error, it broke')
   }
})

const promise2 = new Promise((resolve, reject) => {
	setTimeout(resolve, 100, 'Hiiiii') 
})

const promise3 = new Promise((resolve, reject) => {
	setTimeout(resolve, 1000, 'Pookie') 
})

const promise4 = new Promise((resolve, reject) => {
	setTimeout(resolve, 5000, 'is it me you are looking for') 
})

Promise.all([promise, promise2, promise3, promise4])
    .then(values => {
        console.log(values);
    })

//promises espera a que se hagan las cuatro fx y luego muestra el resultado. 


/// UN EJEMPLO NUEVO SERÍA 

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch(() => console.log('error'))


//Como hemos visto las promesas son un poco parecidas a los eventlisteners
//excepto que las promesas solo puden funcionar una vez fallando o corriendo.
//ESTO ES MUY UTIL CUANDO SE TRATA DE LLAMADAS A API QUE NECESITAN SER ASYNCRONAS