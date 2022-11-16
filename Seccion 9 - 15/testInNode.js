/* Para testear en node se usan varias herramientas diferentes. 
1.- Primero esta el TEST RUNNER. El cual encuentra todos los test de tu proyecto, los hace correr y te da los resultados. 
2.- El TEST FIXTURES. Fixture se refiere a como los test están seteados y organizados por modulos y por test individuales. Donde cada
"test fixture" puede correr en su propio ambiente cons sus propios "sets de variables y datos".
3.- En tercer lugar, están las ASSERTIONS (Aserciones), que son funciones que nos permite chekear cosas que esperamos (Que 5+5 sea siempre 10).
4.- Por último está el MOCKING. Para entenderlo, pongamos un ejemplo. Tenemos una base de datos, con cientos de tests que crean, cambian y borran 
datos en la BBDD. En estas situaciones, no queremos  que la data de los test quede almacenada en nuestra BBDD. Para eso "burlamos"(Mock) nuestra BBDD
creando operaciones que no afectarian nuestra data. O tal vez afectaría temporalmente los datos dentro de los test fixtures. 
Burlar la base de datos(Mocking) nos permite remplazar o remover ciertas funcionalidades mientras tratamos nuestros test.


A los comienzos de Nodejs se tenian paquetes para cada tipo de testeo, pero en la actualidad exixte JEST. 

*/