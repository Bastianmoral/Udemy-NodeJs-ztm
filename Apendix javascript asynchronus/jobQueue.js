// Callback Queue - Task Queue
setTimeout (( ) => {console.log ( '1' ,' is the loneliest number')}, 0)
setTimeout (() => {console.log ( '2' , 'can be as bad as one')}, 10)

// 2 Job Queue or Microtask Queue 
Promise.resolve('hi').then((data) => console.log('2', data ))

//Es similar al task queue pero tiene una mayor prioridad que los anteriores. 
//Esto significa que el event llop va a checkar el trabajo del queue primero y asegurarse que no hay nada pendiente en ese queue
//antes de comenzar a buscar los callbacks queue o los task queue
// lo importante de esto es que tienen mas prioridad que los callbacks queue

// 3                                 
console.log('3', 'is a crowd');


