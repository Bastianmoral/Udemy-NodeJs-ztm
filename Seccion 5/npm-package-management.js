//LOS MODULOS CREADOS POR OTROS DESARROLLADORES O COMO SE LES LLAMA TERCEROS O (Third Parties) son útiles
//Node tiene un ecosistema muuuuy grande de librerias o packages. Estos son un montón de código que puede ser rehusado y lo podemos encontrar en npmjs.com


//Como se crea un NPM package ? 

//Antes que todo contestemos una pregunta para no enrredarnos más adelante. 
//Cual es la diferencia entre Module vs Package ? 
// Modulo es un archivo que contiene codigo que puede ser exportado desde ese modulo. 
// Por otro lado, los package o paquete son una especie de colección de modulos, que han sido empaquetados todos juntos ('Packaged together')  

//La gran mayoría de los programas de Nodejs son paquetes/packages y ellos necesitan estár en paquetes con la idea de verdad usar y sacarle provecho a npm. 
//Aunque tu paquete no se publique en nodejs.com pero mientras se tenga el package.json y si la app es manejada por npm. Refiriendose a que se pueden instalar dependencias de la misma y correr scripts 
//Si se cumple todo lo anterior también se pueden tdecir que se tiene un package de npm 



///ARBOL DE DEPENDENCIAS

//Se puede revisar en la carpeta de modulos de node no solo tiene las dependencias de axios. Si no, también las dependencias de las dependencias de axios.
//Estas dependencias crean lo que se llama un arbol de dependencia.
//El paquete que hemos instalado depende de algunso paquetes (Follow-redirects), si el anterior paquete no está axios no corre. 
//Es por lo mismo que aparecen estos grupos de modulos. 


//QUE ES EL package-lock.json? 

//Este archivo hace mas fácil trabajar con un equipo de desarrolladores y nos ayuda a evitar los errores/bugs. 
//Este archivo es automáticamente generado cuando corremos cualquier comando npm que modifique la carpeta node_modules o cuando el archivo “package.json” es modificado. 
//Es una descripción muy específica de lo que podríamos tener en package.json. Por ejemplo, en las dependencias de axios, el paquete que instalamos a modo de demo. En package aparece solo la version, en el package-lock tenemos, la versión, el resolved, que seria la ruta donde se encuentra el package o el lugar exacto de donde viene esta dependencia y el integrity que es para probar si el archivo está o no corrupto. 
//Además muestra todas los detalles de las dependencias que vienen de nuestra dependencia directa. Arbol de dependencias. 
//Un detalle que tiene la parte de versiones en estos archivos .json es que en las verisones se muestran asi “^0.21.1” el ^ significa que no se puede isntalar ninguna versión superior a esta. Existe un caso especial donde si el número de versión es menos que uno. La versión menor será contada como una versión mayor. Esto se debe a que para un paquete pre 1.0
//se va a cambiar bien seguido 

//VULNERABILIDAD Y DEPENDENCIAS. 

//Es común encontrar problemas de seguridad en algunos de los paquetes (packages).
//Cualquier software complicado va a tener problemas sobre su vida en desarrollo. Y como hay tantos paquetes en node que podemos ocupar en npm que es muy probable que como desarrollador llegues a unos de estos problemas mas luego que tarde y es probable que este problema sea un problema de seguridad. 
//Lo importante es tener presente que esto es normal y que puede pasar y la mejor manera de poder lidiar con mantener nuestras aplicaciones seguras es reaccionando rápido y manteniendo actualizado nuestros paquetes. 
//LA seguridad web es como el juego del gato y el raton. Donde hackers están constantemente buscando vulnerabilidades en la seguridad, buscando problemas y explotandolos, contra desarrolladores haciendo lo mejor para parchar esos problemas y hacer que el software sea mas resiliente. Haciendolo seguro contra futuros problemas de seguridad. 

//INSTALANDO NPM TOOLS: nodemon

//nodemon es una herramienta que ayuda a app basadas en node.js automáticamente reestablecer la app cuando cmabios en los archivos sean detectados. 
//Para usar nodemon remplazamos el comando node en nuestros comandos. 
//En el scripts del package se tiene que agregar ‘dev’ :  “nodemon request.js”
//→ npm run dev (Para ejecutar el request.js). Esto haría que el archivo se vaya ejecutando de manera automatica a cualquier cambio una vez guardado. 
//Como nodemon está instalado en la carpeta de node_modules, no puede ejecturase como comando como se hace con $node. Si revisamos las dependencias de los node_modules encontraremos un .bin y acá está el ejecutable de nodemon por lo que si quisieramos arrancar nodemon desde la consola deberiamos de entregar el path de donde se encuentra nodemon “./node_modules/.bin/nodemon request.js”. Peor no es conveniente usar asi las dependencias. 
//Para evitar estos problemas lo mejor es instalar las dependencias de manera global. Asi instalamos el nodemon global “npm install -g nodemon”. De esta manera se instalará en toda nuestra maquina y en la carpeta local de node_modules de nuestro cpu. 

