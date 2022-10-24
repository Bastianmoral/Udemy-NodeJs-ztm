//Sin importar lo que estemos haciendo, node.js es usualmente usado para traer nuestros programas a al web contruyendo los backends para los sitios webs o mobil app
//Las cuales comparten la data de nuestros valores de lo que estemos contruyendo. 

//DNS DOMAIN NAME SYSTEM
//Estos servidores buscan la dirección de internet del servidor a travez de la URL que se les fue dada al escribir en nuestro browser. 
//Como respuesta tenemos una dirección de IP que por lo general es una combinación de cuatro numeros XX.XX.XX.XX
//Con esta IP es la "llave" que nos dejará comunicarnos con el servidor, el cual nos dar+á la data por la cual estamos buscando. 
//El protocolo que generalmente se usa en los servidores web es http/https

//La API nos dice que clase d efunciones el servidor deberia soportar y de como estas funciones debiesen ser usadas 
//HTTP REQUEST METHODS OR GTTPS Verbs
//GET
//POST
//PUT
//DELETE

//Que tipo de mensajes enviamos y recibimos en http. COmo se ve una conversación en http?
//Recordemos que API (Application Programing Interface), es un software intermediario que permite que dos apps se peudan comunciar entre ellas. 
//Por ejemplo un browser o navegador con un servidor web o web server. Por lo general es el navegador haciendo request o requerimientos y el servidor respondiendo a estos. 

//METHOD EJEMPLO 'POST'
//PATH La dirección de nuestra request. También conocido como el resource o recurso con el que accedimos al backend 
//BODY agregando un body a nuestra requestse le puede enviar data a nuestro backend. Generalmente estan en JSON 
//HEADERS propiedades opcionaes que se pueden especificar en una request para enviar metadata adicional a los servidores. Hay un headers qeu siempre va a necesitar estar qeu es el HOST que especifica a que server mi request tiene que ser enviada 


//HTTP RESPONSES.
//Las respuestas del web server se devidiría en tres partes principales. 
//HEADERS. Esto puede ser opcional 


//SAME ORIGIN POLICIY
//que es un origen ? cuando vamos a google maps y tecleamos la url, ingresamos la siguiente url 
//https://wwww.google.com/maps/ El origen es la combinación de tres partes
//La primera es el protocolo (Https://)
//La segunda es el HOST (www.google.com)
//La última sería Port (el cual no se ve al momento de escribir)

//La política de mismo origen es una caracteristica de seguridad del navegador que restringe que es lo que se puede cargar cuadno se esta navegando por páginas de internet 
//La idea es que si estan en google.com y buscas gmail te metasa gmail y no en otro link que no tiene nada que ver.
//Es decir que no peudes traer wikipedia estando en gmail



// CORS
// CORS significa "Cross Origin Resource Sharing", es la forma para "relajar" las restricciones 
// que el same origin policy puso. Por lo que podriamos hacer app que potencialmente spameen diferentes dominion y origines ya que el same origin policiy limita a los navegadores a hablar  
