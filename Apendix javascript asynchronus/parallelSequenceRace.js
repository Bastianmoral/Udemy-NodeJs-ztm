//Supongamos que tenemos tres promessas que necesitamos manejar. 
//Hay algunas maneras de hacerlo y serían.

//PARALLEL. 
//Seria ejecutar las tres promesas. todas en paralelo al mismo tiempo. 

//SEQUENCE
//Esto seria de manera sequiencial. Es decir, primero corre la primera promesa
//si esta funciona bien, pasamos a la segunda y si esta tambipen corre, pasamos a la tercera
// y asi sucesivamente. 

//RACE
//Aca se quiere llamar a las tres pero la primera que responda es la qeu se tomará en cuenta 
// y se ignorará a l resto. 


const promisify = (item, delay) =>
  new Promise((resolve) =>
    setTimeout(() =>
      resolve(item), delay));

const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);

async function parallel() {
  const promises = [a(), b(), c()]; // Fx promesas 
  const [output1, output2, output3] = await Promise.all(promises);
  return `parallel is done: ${output1} ${output2} ${output3}`
}
// Para poder verla tenemos que hace rlo siguiente 
//parallel().then(console.log)

async function race() {
  const promises = [a(), b(), c()]; // Fx promesas 
  const output1 = await Promise.race(promises);
  return `race is done: ${output1}`;
}

// Para poder verla tenemos que hacer lo siguiente 
//race().then(console.log)

async function sequence() {
  const output1 = await a();
  const output2 = await b();
  const output3 = await c();
  return `sequence is done ${output1} ${output2} ${output3}`
}

//Es bastante útil cuadno tenemos que cumplir cierto orden al momento de enviar las respuestas de las promesas. 
// gracias al await podemos pausar la ejecución de las promesas y podemos ir haceiendo lo de manera sequencial 


// Si se ejecutaran todas al mismo tiempo se devuelve primerop race(), luego parallel() y finalmente sequence(). 



// Para poder verla tenemos que hacer lo siguiente 
//sequence().then(console.log)