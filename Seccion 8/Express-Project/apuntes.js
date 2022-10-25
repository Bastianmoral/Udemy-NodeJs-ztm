//Cuando una request entra a nuestra API, el middleware comienza a ser ejecutado
//Por lo que la request entrante choca contra el primer middleware. Que es ve rsi está registrado primero. 
//Este primer Middleware tiene tres parametros
//1.- req o request. Que es lo que está siendo mandado por el usuario o el servidor
//2.- res o response. Que eventualmente mandaremos de vuelta al cliente o servidor. 
//3.- next function la cual controla el flujo del middleware 
//Esto significa que cuadno nuestra función next está siendo ejecutada. El segundo middleware ocmienza a ejecutarse.



//MODEL-VIEW-CONTROLLER 
//MVC
//Cuando ya es momento de comenzar a pensar a como organizar nuestro código para que sea mas manejable, mas facil de entendewr y mucho mas facil de escalar, que es que será facil hacer crecer la app a medida que vayamos escribiendo más código. 
//MVC es la solución para todo lo anterior. Este modelo es un patrón que nos dice como organizar las diferentes piezas de nuestro código basado en lo que hacen.
//Es decir en el MODELO(model), EN LA VISTA(View) Y EN EL CONTROLADOR(Controller), todos estos componentes interactuan con el usuario.
//Las interacciones del usuario se dan generalmente donde el usaurio usa un controlador, por ejemplo, haciendo una request(solicitud), el controlador comprende y procesa la request del usuario y manipula el modelo accorde a lo que el cliente solciitó
//Como por ejemplo, agragando o removiendo data desde las BBDD 
//Luego, cuando el modelo es actualizado por los controladores, la vista reacciona a esos cambios y el usuario ve esos cambios y la información actualizada.

//Controller

//el controlador es el codigo o la función que reacciona a la request entrante. 

//Model

//mientras que el modelo es nuestra data. El modelo tmabién incluye cualquier función que pueda acceder a nuestra BBDD. 
//El modelo contiene las representaciones de como la app express ve la data, que no necesariamente es de la misma manera de como la data es representada en la BBDD.
//Entonces, el modelo puede traducir la data que está almacenada a como la data debe ser utilizada por tu app 

//View

//Por último, la vista es como la data del modelo es presentada de vuelta al usuario. 

//Lo importante a entender del MVC es que este patron de diseño puede ser usado para separar nuestra app en estas tres capas/layers, que interactuan cada una para lograr la accion que el usuario solicita.
//Separar la app en estas capas permite al código ser más facil de leer, actualizar y mejorar. Ya que cada capa es responsable de solo una cosa.
 

//ROUTER
//Cuando estás construyendo apps de express grandes a menudo tomaremos ventajas de este concepto llamado Router. 
//Este se usa para organizar las rutas de nuestra apps en pequeños grupos de rutas.   

// Router es como una mini aplicación. Contiene su propi set de middleware y rutas. Se usa para descomponer nuestra app y hacerla mas modular. 
// Se puede crear un router escribiendo express.Router 
