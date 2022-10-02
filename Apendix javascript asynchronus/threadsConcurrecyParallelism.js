//Lo importante de node.js es que entrega a un lenguaje que es de un solo hilo o de One thread le permite poder hacer en un mismo hilo diferentes hilos que no se sobreponen con el otro y que dejan actuar
//Es por esto mismo la importancia de la asyncronia en Node.js 

//Pero como se puede hacer de que un hilo maestro controle coo otros hilos secuandarios trabajen y no se topen ? 

var worker = new Worker('worker.js')
worker.postMessage('helloooo!!!')


addEventListener('message')




//Concurrency es algo que se puede lograr en JS. 
//Usamos concurrency cuadno trabajamos en js de un solo hilo. Pero por detras usamos
//Node o web browser que permiten hacer cosas en diferentes hilos para poder lograr cosas. Pero solo 
//podemos hacer mientras neustra stack principal esté realizado. De lo contrario no. 


//De lo mismo anterior nace lo que sería el concurrency con paralelismo.
//Esto solo puede ocurrir si se tiene un cpu multi core. 
//Se permite hacer hilos al mismo tiempo de manera paralela. 
//pero esto no se puede de manera natural en JS se tiene qeu usar node para hacer lo mismo. 


/* const {spawn} = required('child_process')

spawn('git', ['stuff']) */