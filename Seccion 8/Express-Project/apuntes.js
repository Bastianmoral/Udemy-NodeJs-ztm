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



//RESTful APIs
//Como se decide como nombrar a nuestros endpoints o como descomponer nuestra funcionalidad en pequeñas piezas. 
//Para esto seguiremos REST, que es por lejos el patrón más común y más importante a conocer cuando se contruyen APIs
//Cuando se construye una API siguiente este patrón de diseño se crea una RESTFUL APIs
//REST viene de (RE)presentational (S)tate (T)ransfer (Transferencia representacional del estado), la idea original es que se cree un standar de como hablar con los servidores usando protocolo HTTP. 
//De todas maneras este protocolo se ha cambiado del original, y en estos días una RESTFUL APIs es una guía de buenas practicas que derivan de este concepto REST creado por Roy Fielding.

//La representation y el state ambos se refieren a como el servidor hace que nuestra data esté disponible. 
//Transfer se refiere a como  se envía de vuelta al usuario está info. 
//La idea principal de este patrón es utilizar de manera exahustiva los existentes estandares de la web (HTTP, JSON, URL)
//REST se trata de hacer uso de lo que ya existe en la web de la manera que tenga sentido cuando se contruyan cualquier tipo de app.
//Los http end points con los cuales nos comunicamos, representan collecciones de datos que fue almacenado por el lado del servidor. 

//Para comunicar las acciones que se deben efectuar en la colección de datos. Usamos GET, POST, PUT y DELETE
//Esto solo tiene sentido cuando tenemos una estructura de cliente servidor. Donde el cliente, muestra datos e información al usuario y permite a ellos hacer acciones que son enviadas al servidor, donde lee y hace estas acciones. Actualizando la info o data que almacenamos y enviamos de vuelta al cliente. 

//El cliente y el servidor tienen dos distintivos set de responsabilidades. Los dos se preocupan de diferentes  cosas y se comunican entre ellos para lograr hacer el trabajo. 
//Las request o solicitudes son siempre stateless and catchables. Donde stateless se refiere a que cada solicitud está separada y no conectada a cualquier estado del cliente que no fue incluido en el request. 
// Por lo que nuestros servers no están siguiendo que solicitud el usuario ha hecho hoy o en el pasado.  Solo se guarda la info de nuestra collections. 
//Solo se hara seguimiento de la info o data que podemos ver en nuestras collecionas, pero esto es independiente de lo que se ve del front end o del cliente. 
//Esto significa que el cliente puede abrir un nuevo navegador en una nueva computadora y con la misma exacta solicitud (request), debiese de llegarle la misma info desde el servidor. 
//Lo contrario a stateless sería una API que trae la info de un usuario en una sesion y  que se va moviendo entre el servidor y las solicitudes. 

//Como nuestros estados los podemos seguir, lo que significa que podemos cachear estas solicitudes al guardar los resultados. 


//CREATE READ UPDATE AND DELETE (CRUD)

//CRUD se refiere a las cuatro operaciones básicas que podemos usar para manejar la info. 

//Create (POST)
//Read (GET)
//Update (PUT)
//Delete (DELETE)



